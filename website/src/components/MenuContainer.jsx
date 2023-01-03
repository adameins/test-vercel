import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MenuCard from './MenuCard';

import CustomButton from './CustomButton';

export default function MenuContainer() {
    const [menus, setMenu] = React.useState ([])
    const [activeButton, setActiveButton] = React.useState("all")

    const handleClick = (button) => {
      setActiveButton(button)
    }

    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/menus/')
        .then(response => response.json())
        .then(data => setMenu(data))
    }, [])  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} paddingY={3}>
        <Grid item md={2} xs={6} sm={6}>
          <CustomButton isactive={activeButton === "all"} onClick={() => handleClick("all")}>All</CustomButton>
        </Grid>
        <Grid item md={2} xs={6} sm={6}>
          <CustomButton isactive={activeButton === "pembuka"} onClick={() => handleClick("pembuka")}>Pembuka</CustomButton>
        </Grid>
        <Grid item md={2} xs={6} sm={6}>
          <CustomButton isactive={activeButton === "utama"} onClick={() => handleClick("utama")}>Utama</CustomButton>
        </Grid>
        <Grid item md={2} xs={6} sm={6}>
          <CustomButton isactive={activeButton === "penutup"} onClick={() => handleClick("penutup")}>Penutup</CustomButton>
        </Grid>
      </Grid>
      <Grid container spacing={2} paddingY={3} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {menus.map((menu) => (
            <Grid item xs={9} sm={6} md={4} lg={3}>
                <MenuCard {...menu}/>
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}