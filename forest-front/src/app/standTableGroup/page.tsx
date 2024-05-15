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
import styles from './styles.module.css';
import { cn } from '@/components/sidebar/cn';

type DataType = {
  id: number;
  SpeciesGroup: string;
  '5-15': string;
  '15-30': string;
  '30-45': string;
  '45-60': string;
  '60+': string;
}

const StandTable = () => {
  const [datas, setData] = useState<DataType[]>([]);
  type Data = (typeof datas)[0];

  const getStandtable = async () => {
    try {
      const response = await axiosInstance.get('/getStandtableGroup/')
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
      getStandtable();
    }
  }, []);

  const headerColumns = [
    { name: "SpeciesGroup", uid: "SpeciesGroup" },
    { name: <><br />5-15<br /><br /><span style={{ marginRight: '20px' }}>Volume</span> | <span style={{marginLeft:'20px'}}>Number</span></>, uid: "5-15" },
    { name: <><br />15-30<br /><br /><span style={{ marginRight: '20px' }}>Volume</span> | <span style={{marginLeft:'20px'}}>Number</span></>, uid: "15-30" },
    { name: <><br />30-45<br /><br /><span style={{ marginRight: '20px' }}>Volume</span> | <span style={{marginLeft:'20px'}}>Number</span></>, uid: "30-45" },
    { name: <><br />45-60<br /><br /><span style={{ marginRight: '20px' }}>Volume</span> | <span style={{marginLeft:'20px'}}>Number</span></>, uid: "45-60" },
    { name: <><br />60+<br /><br /><span style={{ marginRight: '20px' }}>Volume</span> | <span style={{marginLeft:'20px'}}>Number</span></>, uid: "60+" },
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
        const parts = data['15-30'].split(' | ');
        return (
          <>
            <span>{parts[0]}</span>
            <span style={{marginLeft:'20px', marginRight: '20px'}}>|</span>
            <span>{parts[1]}</span>
          </>
        );  
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
