"use client";

import axiosInstance from '@/utils/axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ChipProps,
  Chip,
} from "@nextui-org/react";
import styles from '../styles.module.css';
import { cn } from '@/components/sidebar/cn';
import { useParams } from 'next/navigation';

type DataType = {
  id: number;
  SpeciesGroup: string;
  '5-15': number;
  '15-30': number;
  '30-45': number;
  '45-60': number;
  '60+': number;
}

const StandTable = () => {
  const [datas, setData] = useState<DataType[]>([]);
  type Data = (typeof datas)[0];
  const params = useParams();

  const getStandtable = async (table: string | string[]) => {
    try {
      const response = await axiosInstance.get(`/getStandTable/${table}`);
      if (response.data["success"] === true) {
        const dataWithIds = response.data.message
          .map((item: any, index: number) => ({ id: index + 1, ...item }));
        setData(dataWithIds);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      getStandtable(params.slug);
    }
  }, [params]);

  const headerColumns = [
    { name: "SpeciesGroup", uid: "SpeciesGroup" },
    { name: "5-15", uid: "5-15" },
    { name: "15-30", uid: "15-30" },
    { name: "30-45", uid: "30-45" },
    { name: "45-60", uid: "45-60" },
    { name: "60+", uid: "60+" },
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
      default:
        if (cellValue === 0) {
          return (
            <Chip className="capitalize" style={{height:"25px"}} color="danger" variant="flat">
                {cellValue}
            </Chip>
          );
        } else {
          return ['Volume', 'Damage', 'Growth30'].includes(params.slug as string)
          ? (Math.round((cellValue as number) * 100) / 100) : cellValue;
        }
    }
  }, []);

  return (
    <Table className={cn('h-full', styles.test)}
    style={{ height: '100%' }}
      isStriped aria-label="Production Table">
      <TableHeader columns={headerColumns} className='h-full'>
        {(column) => (
          <TableColumn
            key={column.uid}
            align="start"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody className='h-full w-full' emptyContent={"No data found"} items={datas}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell >{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default StandTable;
