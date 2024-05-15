"use client";

import axiosInstance from '@/utils/axios';
import { useState, useEffect, useCallback, useRef } from 'react';
import '@/app/globals.css';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ChipProps,
  Chip,
} from "@nextui-org/react";
import styles from './styles.module.css';
import { cn } from '@/components/sidebar/cn';

type DataType = {
  id: number;
  SpeciesGroup: string;
  Volume: number;
  Number: number;
  Production0: number;
  Damage: number;
  Growth30: number;
  Production30: number;
};

const ProdTable = () => {
  const [datas, setData] = useState<DataType[]>([]);
  type Data = (typeof datas)[0];

  const getProdtable = async () => {
    try {
      const response = await axiosInstance.get("/getProdtable/");
      if (response.data["success"] === true) {
        const dataWithIds = response.data.message
          .map((item: any, index: number) => ({ id: index + 1, ...item }));
        setData(dataWithIds);
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const useRefCaller = useRef(true);

  useEffect(() => {
    if (useRefCaller.current) {
      useRefCaller.current = false;
      getProdtable();
    }
  }, []);

  const headerColumns = [
    { name: "SpeciesGroup", uid: "SpeciesGroup", sortable: true },
    { name: <><br></br>Volume<br></br></>, uid: "Volume", sortable: true },
    { name: <><br></br>Number<br></br></>, uid: "Number", sortable: true },
    { name: <><br></br>Production0<br></br></>, uid: "Production0", sortable: true },
    { name: <><br></br>Damage<br></br></>, uid: "Damage", sortable: true },
    { name: <><br></br>Growth30<br></br></>, uid: "Growth30", sortable: true },
    { name: <><br></br>Production30<br></br></>, uid: "Production30", sortable: true },
  ];

  const renderCell = useCallback((data: Data, columnKey: React.Key) => {
    const cellValue = data[columnKey as keyof Data];

    switch (columnKey) {
      case "SpeciesGroup":
        if (data.SpeciesGroup === "Mersawa" || data.SpeciesGroup === "Keruing" || data.SpeciesGroup === "Dip Commercial" || data.SpeciesGroup === "NonDip Commercial") {
          return (
            <Chip className="capitalize" style={{height:"35px"}} color="primary" variant="flat">
                {cellValue}
            </Chip>
          );
        } else {
          return cellValue;
        }
      case "Production0":
        if (data.Production0 === 0) {
          return (
            <Chip className="capitalize" style={{height:"25px"}} color="danger" variant="flat">
                {cellValue}
            </Chip>
          );
        } else {
          return cellValue;
        }
      case "Production30":
        if (data.Production30 === 0) {
          return (
            <Chip className="capitalize" style={{height:"25px"}} color="danger" variant="flat">
                {cellValue}
            </Chip>
          );
        } else {
          return cellValue;
        }
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table className={cn('h-full', styles.test)}
    style={{ height: '100%' }}
    isStriped aria-label="Production Table">
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align="start"
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No data found"} items={datas}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ProdTable;
