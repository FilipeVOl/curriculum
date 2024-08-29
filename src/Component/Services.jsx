import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import webLogo from '../assets/weblogo.svg'
import mobileLogo from '../assets/mobilelogo.svg'
import uiLogo from '../assets/uilogo.svg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Services = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));

      const services = [
        { name: 'Web Development', desc: 'Creating client-side websites with responsiveness and effectiveness', image: webLogo },
        { name: 'Mobile Development', desc: 'Creating mobile applications with the latest technologies', image: mobileLogo },
        { name: 'UI/UX Design', desc: 'Creating user-friendly interfaces with the best user experience', image: uiLogo },
      ];

// ------------------------------------------------------------

  return (
    <div id='services' className='bg-purpley'>
        <div className='text-white font-bold flex flex-col gap-16 items-center pt-32 text-center'>
        <h1 className='text-5xl'>Services</h1>
        <h1 className="text-3xl mb-16">You can see some of the services i offer below.</h1>
        </div>

        <Box sx={{ flexGrow: 1, marginX: 4}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div>
            <Item>
            <img src={service.image} alt="logo" className="w-20 h-20 mx-auto" />
            <strong style={{ fontSize: '1.5em' }}>{service.name}</strong> <br/> 
            <span>{service.desc}</span></Item>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>

    </div>
  )
}

export default Services