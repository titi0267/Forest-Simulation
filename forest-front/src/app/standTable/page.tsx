"use client";

import axiosInstance from '@/utils/axios';
import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { isReadable } from 'stream';

type DataType = {
    GroupName: string,
    Diameter: number,
    Volume: number,
    Num: number,
}

interface Stable {
    groupName: string;
    volume: number[];
    num: number[];
}

const StandTable = () => {
    const [stable, setStable] = useState<Stable[]>([
        { groupName: 'Mersawa', volume: [], num: [] },
        { groupName: 'Keruing', volume: [], num: [] },
        { groupName: 'Dip Commercial', volume: [], num: [] },
        { groupName: 'Dip NonCommercial', volume: [], num: [] },
        { groupName: 'NonDip Commercial', volume: [], num: [] },
        { groupName: 'NonDip NonCommercial', volume: [], num: [] },
        { groupName: 'Others', volume: [], num: [] },
    ]);

    useEffect(() => {
        const getStandtable = async () => {
            try {
                const response = await axiosInstance.get('/getStandtable/');
                setStable(prevStable => {
                    const updatedStable = [...prevStable];
                    response.data.message.forEach((item: DataType) => {
                        const index = updatedStable.findIndex(group => group.groupName === item.GroupName);
                        if (index !== -1) {
                            if (updatedStable[index].volume.length !== 5) {
                                updatedStable[index].volume.push(item.Volume);
                            }
                            if (updatedStable[index].num.length !== 5) {
                                updatedStable[index].num.push(item.Num);
                            }
                        }
                    });
                    return updatedStable;
                });
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
        getStandtable();
    }, []);

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Species Group" rowSpan={3} />
            </Row>
            <Row>
                <Column header="5-15" colSpan={2} />
                <Column header="15-30" colSpan={2} />
                <Column header="30-45" colSpan={2} />
                <Column header="45-60" colSpan={2} />
                <Column header="60+" colSpan={2} />
            </Row>
            <Row>
                <Column header="Volume" />
                <Column header="Num" />
                <Column header="Volume" />
                <Column header="Num" />
                <Column header="Volume" />
                <Column header="Num" />
                <Column header="Volume" />
                <Column header="Num" />
                <Column header="Volume" />
                <Column header="Num" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="" colSpan={3} />
            </Row>
        </ColumnGroup>
    );

    const volume1 = (rowData: Stable) => {
        return `${rowData.volume[0]}`;
    }
    const num1 = (rowData: Stable) => {
        return `${rowData.num[0]}`;
    }
    const volume2 = (rowData: Stable) => {
        return `${rowData.volume[1]}`;
    }
    const num2 = (rowData: Stable) => {
        return `${rowData.num[1]}`;
    }
    const volume3 = (rowData: Stable) => {
        return `${rowData.volume[2]}`;
    }
    const num3 = (rowData: Stable) => {
        return `${rowData.num[2]}`;
    }
    const volume4 = (rowData: Stable) => {
        return `${rowData.volume[3]}`;
    }
    const num4 = (rowData: Stable) => {
        return `${rowData.num[3]}`;
    }
    const volume5 = (rowData: Stable) => {
        return `${rowData.volume[4]}`;
    }
    const num5 = (rowData: Stable) => {
        return `${rowData.num[4]}`;
    }

    return (
        <div className="card">
            <DataTable
                value={stable}
                showGridlines
                dragSelection
                stripedRows
                headerColumnGroup={headerGroup}
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="groupName" />
                <Column header="Volume" body={volume1}></Column>
                <Column header="Num" body={num1}></Column>
                <Column header="Volume" body={volume2}></Column>
                <Column header="Num" body={num2}></Column>
                <Column header="Volume" body={volume3}></Column>
                <Column header="Num" body={num3}></Column>
                <Column header="Volume" body={volume4}></Column>
                <Column header="Num" body={num4}></Column>
                <Column header="Volume" body={volume5}></Column>
                <Column header="Num" body={num5}></Column>
            </DataTable>
        </div>
    );
};


export default StandTable;
