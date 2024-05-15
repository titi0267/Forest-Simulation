"use client";

import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '@/utils/axios';
import SendIcon from '@mui/icons-material/Send';
import { Card, CardContent, CardActions, TextField, Typography, Grid, Avatar, Box } from '@mui/material';
import { Button } from "@nextui-org/react";

type DataType = {
  id: number;
  BlockX: number;
  BlockY: number;
  x: number;
  y: number;
  realX: number;
  realY: number;
  TreeNum: number;
  species: string;
  spgroup: string;
  Diameter: number;
  DiameterClass: string;
  Height: number;
  Volume: number;
  status: string;
  PROD: number;
  CutAngle: number;
  DamageSTEM: number;
  DamageCROWN: number;
  GrowthD30: number;
  Volume30: number;
};

const InfoTrees = () => {
  const [treeId, setTreeId] = useState<string | null>(null);
  const [data, setData] = useState<DataType>();

  const getTree = async (treeId: string) => {
    try {
      const response = await axiosInstance.get(`/getTree/${treeId}`);
      if (response.data["success"] === true) {
        const data = response.data.message;
        setData(data);
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const useRefCaller = useRef(true);

  useEffect(() => {
    if (useRefCaller.current) {
      useRefCaller.current = false;
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('id');
      setTreeId(id);
      if (id !== null) {
        getTree(id);
      }
    }
  }, []);

  const getListOfTrees = () => {
    window.location.href = `/trees`;
  }

  if (treeId && data) {
    return (
      <Card sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ mr: 2 }} src="https://via.placeholder.com/150" />
            <Typography variant="h5">Tree Information - {data.TreeNum || 'Unavailable'}</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Species"
                variant="outlined"
                fullWidth
                value={data.species || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Height (m)"
                variant="outlined"
                fullWidth
                value={data.Height ? `${data.Height} m` : ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            {/* Add additional fields as needed */}
          </Grid>
        </CardContent>
        <CardActions>
          <Button color="primary" fullWidth>Update</Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <div className="flex flex-col items-center p-4">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-4 mt-4 text-center">
          404 Page Not Found
        </h3>
        <div className="flex flex-row justify-center w-full items-center mb-4">
          <img src="/images/info1.jpeg" alt="Forest" className="w-1/2 max-w-md mr-2" />
          <div className="w-1/2 ml-2">
            <p className="text-gray-600">
              Go on the List of Trees page to look at a specific tree !
            </p>
            <Button
              className="text-white font-bold py-2 px-4 mt-4"
              type="submit"
              color="success"
              onClick={() => getListOfTrees()}
              endContent={<SendIcon />}
            >
              List of Trees
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default InfoTrees;
