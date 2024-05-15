"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {Button} from "@nextui-org/react";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Input} from "@nextui-org/react";

const defaultTheme = createTheme();

export default function Volume() {
  const [isVolume, setIsVolume] = React.useState(false);
  const [volume, setVolume] = React.useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const diameter: any = data.get('diameter');
    const height: any = data.get('height');
    if (!diameter || !height) {
      setIsVolume(false);
      toast.warn('Please fill in all fields !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setVolume(3.142 * (diameter / 200) ** 2 * height * 0.50);
      setIsVolume(true);
      toast.success('Calcule has been succeed 🔢 !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section>
      <div>
        <ToastContainer />
      </div>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid container component="main" sx={{ height: '85vh' }}>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} style={{ borderRadius: '10px' }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <ViewInArIcon />
              </Avatar>
              <Typography className='font-bold' component="h1" variant="h5">
                Volume calculation
              </Typography>
              <Box component="form" autoComplete='off' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Input
                  type="number"
                  label="Diameter"
                  placeholder="0"
                  labelPlacement="outside"
                  id="diameter"
                  name="diameter"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">cm</span>
                    </div>
                  }
                />
                <br></br>
                <Input
                  type="number"
                  label="Height"
                  placeholder="0"
                  labelPlacement="outside"
                  id="height"
                  name="height"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">m</span>
                    </div>
                  }
                />
                <br></br>
                <br></br>
                <Button
                  className='font-bold'
                  style={{ color: 'white' }}
                  type="submit"
                  color="success"
                  endContent={<SendIcon />}
                >
                  Calculate
                </Button>
                {isVolume &&
                  <div style={{ marginTop: '40px' }}>
                    <Box sx={{ display: 'block' }}>Volume (m3) = {volume}</Box>
                  </div>
                }
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url("/images/tree.jpeg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            style={{ borderRadius: '10px' }}
          />
        </Grid>
      </ThemeProvider>
    </section>
  );
}