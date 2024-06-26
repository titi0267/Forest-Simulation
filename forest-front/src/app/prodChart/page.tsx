"use client";

import axiosInstance from '@/utils/axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

type DataType = {
  id: number;
  SpeciesGroup: string;
  '45': number;
  '50': number;
  '55': number;
  '60': number;
  '65': number;
}

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const chartSetting = {
  yAxis: [
    {
      label: 'diameter (dbh)'
    }
  ],
  height: 400,
};

const options0: ChartOptions<'bar'> = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      display: true,
      align: 'end',
      anchor: 'end',
      formatter: (value) => value,
      color: 'black',
      font: {
        weight: 'bold',
      },
    },
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Production at Year 0 and Year 30 based on diameter',
    },
  },
};

const options30: ChartOptions<'bar'> = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      display: true,
      align: 'end',
      anchor: 'end',
      formatter: (value) => value,
      color: 'black',
      font: {
        weight: 'bold',
      },
    },
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Production at Year 30 based on species and diameter',
    },
  },
};

const colors = [
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)'
];

const borderColors = [
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)'
];

const ProdChart = () => {
  const [treeData, setTreeData] = useState<ChartData<'bar'>>({
    labels: ['45', '50', '55', '60', '65'],
    datasets: [],
  });

  const getProdChart = async () => {
    try {
      const response = await axiosInstance.get(`/getProdChart/`);
      if (response.data["success"] === true) {
        console.log(response.data.prod);
        const prodData = response.data.prod;

        const labels = Object.keys(prodData).map(diameter => diameter);
        const production0Data = labels.map(diameter => prodData[diameter].Production0);
        const production30Data = labels.map(diameter => prodData[diameter].Production30);

        const treeDatasets = [
          {
            label: 'Production 0',
            data: production30Data,
            backgroundColor: colors[0],
            borderColor: borderColors[0],
            borderWidth: 1,
          },
          {
            label: 'Production 30',
            data: production0Data,
            backgroundColor: colors[1],
            borderColor: borderColors[1],
            borderWidth: 1,
          },
        ];

        setTreeData(prevData => ({
          labels,
          datasets: treeDatasets,
        }));
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      getProdChart();
    }
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
          </Typography>
          <Bar data={treeData} options={options0} />
        </CardContent>
      </Card>
    </div>
  );

};

export default ProdChart;
