import { 
    Box, 
    styled, 
    Typography 
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import HeroButton from "./HeroButton";


export default function Hero(){
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#1A1A1A",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const [profile, setProfile] = React.useState({})

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/api/profile/')
    .then(response => response.json())
    .then(data => setProfile(data))
  }, [])

  const scrollTo = (id) => {
    const menuElement = document.getElementById(id);
    window.scrollTo({
      top: menuElement.offsetTop - 75,
      left: 0,
      behavior: 'smooth'
    });
  };


  return (
    <Box sx={{ backgroundColor: "#FAB210", minHeight: "85vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#FFFFFF",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Good Place. Good Food.
            </Typography>
            <Title variant="h1">
              {profile[0] && profile[0].name}
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#FFFFFF", my: 4 }}
            >
              {profile[0] && profile[0].about_us}
            </Typography>
            <div onClick={() => scrollTo('faq')}>
            <HeroButton
              backgroundColor="#1A1A1A"
              color="#FFFFFF"
              buttonText="More About Us"
              heroBtn={true}
            />
            </div>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src='../images/hero.jpg'
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

