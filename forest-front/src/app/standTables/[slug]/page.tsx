"use client";

import axiosInstance from '@/utils/axios';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  DropdownTrigger,
  Dropdown,
  Button,
  DropdownItem,
  DropdownMenu,
  Selection,
} from "@nextui-org/react";
import styles from '../styles.module.css';
import { cn } from '@/components/sidebar/cn';
import { useParams } from 'next/navigation';
import { ChevronDownIcon } from '@/app/trees/ChevronDownIcon';
import { Toast } from 'primereact/toast';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

type DataType = {
  id: number;
  SpeciesGroup: string;
  '5-15': number;
  '15-30': number;
  '30-45': number;
  '45-60': number;
  '60+': number;
  Total?: number;
}

const StandTable = () => {
  const [datas, setData] = useState<DataType[]>([]);
  const [columnTotals, setColumnTotals] = useState<{ [key: string]: number }>({});
  const params = useParams();

  const getStandtable = async (table: string | string[]) => {
    try {
      const response = await axiosInstance.get(`/getStandTable/${table}`);
      if (response.data["success"] === true) {
        console.log(response.data.message);
        const dataWithIds = response.data.message.map((item: any, index: number) => {
          const rowTotal = item['5-15'] + item['15-30'] + item['30-45'] + item['45-60'] + item['60+'];
          return { id: index + 1, Total: rowTotal, ...item };
        });

        // Calculate totals
        const totals = dataWithIds.reduce((acc: any, item: any) => {
          acc['5-15'] = (acc['5-15'] || 0) + item['5-15'];
          acc['15-30'] = (acc['15-30'] || 0) + item['15-30'];
          acc['30-45'] = (acc['30-45'] || 0) + item['30-45'];
          acc['45-60'] = (acc['45-60'] || 0) + item['45-60'];
          acc['60+'] = (acc['60+'] || 0) + item['60+'];
          acc['Total'] = (acc['Total'] || 0) + item.Total;
          return acc;
        }, {});

        // Add total row to data
        const totalRow: DataType = {
          id: dataWithIds.length + 1,
          SpeciesGroup: "Total",
          '5-15': totals['5-15'],
          '15-30': totals['15-30'],
          '30-45': totals['30-45'],
          '45-60': totals['45-60'],
          '60+': totals['60+'],
          Total: totals['Total'],
        };

        setData([...dataWithIds, totalRow]);
        setColumnTotals(totals);
      }
    } catch (error) {
      console.error('Error:', error);
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
    { name: "Total", uid: "Total" },
  ];

  const renderCell = useCallback((data: DataType, columnKey: React.Key) => {
    const cellValue = data[columnKey as keyof DataType];

    switch (columnKey) {
      case "SpeciesGroup":
        if (["Mersawa", "Keruing", "Dip Commercial", "NonDip Commercial"].includes(data.SpeciesGroup)) {
          return (
            <Chip className="capitalize" style={{ height: "25px" }} color="primary" variant="flat">
              {cellValue}
            </Chip>
          );
        } else if (data.SpeciesGroup === "Total") {
          return (
            <Chip className="capitalize" style={{ height: "25px" }} color="success" variant="flat">
              {cellValue}
            </Chip>
          );
        } else {
          return cellValue;
        }
      default:
        if (cellValue === 0) {
          return (
            <Chip className="capitalize" style={{ height: "25px" }} color="danger" variant="flat">
              {cellValue}
            </Chip>
          );
        } else {
          return (['Volume', 'Damage', 'Growth30'].includes(params.slug as string)
            ? ((Math.round((cellValue as number) * 100) / 100) / 100)
            : ((cellValue as number) / 100)).toFixed(0);
        }
    }
  }, [params]);

  const deleteSelectedKeys = (_selectedKeys: Selection) => {
    console.log(_selectedKeys);
  };

  const [selectedDiameter, setSelectedDiameter] = useState<Selection>(new Set(['Diameter']));

  const selectedDiameterValue = useMemo(
    () => Array.from(selectedDiameter).join(', ').replaceAll('_', ' '),
    [selectedDiameter]
  );

  const toast = useRef<Toast>(null);
  const handleSelectionChange = async (keys: Selection) => {
    try {
      const diameterKey = Array.from(keys)[0];
      const response = await axiosInstance.post(`/updateDiameter/${diameterKey}`);
      if (response.data['success'] === true) {
        toast.current?.show({
          severity: 'success',
          summary: 'Success',
          detail: `${response.data.message}`,
          life: 3000,
        });
        setTimeout(() => {
          setSelectedDiameter(keys);
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error('Error updating database:', error);
    }
  };

  const topContent = useMemo(() => {
    return (
      <div style={{height: 'auto'}} className="flex flex-col gap-4 h-auto">
        <div className="flex justify-between gap-3 items-end">
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  {selectedDiameterValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Diameter Choose"
                selectionMode="single"
                selectedKeys={selectedDiameter}
                onSelectionChange={handleSelectionChange}>
                <DropdownItem key="45">45</DropdownItem>
                <DropdownItem key="50">50</DropdownItem>
                <DropdownItem key="55">55</DropdownItem>
                <DropdownItem key="60">60</DropdownItem>
                <DropdownItem key="65">65</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }, [
    selectedDiameter,
    selectedDiameterValue,
    setSelectedDiameter,
  ]);

  return (
    <>
      <Toast ref={toast}/>
      <Table
        topContent={topContent}
        className={cn('h-full', styles.test)}
        style={{ height: '100%' }} isStriped aria-label="Production Table">
        <TableHeader columns={headerColumns} className='h-full'>
          {(column) => (
            <TableColumn key={column.uid} align="start">
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody className='h-full w-full' emptyContent={"No data found"}>
          {datas.map((item) => (
            <TableRow key={item.id}>
              {headerColumns.map((column) => (
                <TableCell key={column.uid}>{renderCell(item, column.uid)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default StandTable;
