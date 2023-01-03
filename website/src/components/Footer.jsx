import { 
    styled, 
    Typography 
  } from "@mui/material";
  import { 
    Box, 
    Container 
  } from "@mui/system";
  import React from "react";
  
  export default function Footer(){
  
      const [profile, setProfile] = React.useState({});
  
      React.useEffect(() => {
          fetch('http://127.0.0.1:8000/api/profile/')
          .then(response => response.json())
          .then(data => setProfile(data))
      }, []);
  
      function socialHandler(social, isLink){
          if (isLink) {
              if (window.confirm(`Are you sure you want to access ${social}?`)) {
                  window.location.href = profile[0][social];
              }
          } else {
              window.alert(`This is our ${social}. \n` + profile[0][social]);
          }
      }
  
      const [openHours, setOpenHours] = React.useState({});
      React.useEffect(() => {
          fetch('http://127.0.0.1:8000/api/opening-hour/')
          .then(response => response.json())
          .then(data => setOpenHours(data))
      }, []);
      
    const CustomContainer = styled(Container)(({ theme }) => ({
      display: "flex",
      justifyContent: "space-around",
      gap: theme.spacing(5),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        textAlign: "center",
      },
    }));
  
    const IconBox = styled(Box)(({ theme }) => ({
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    }));
  
    const FooterLink = styled("span")(({ theme }) => ({
      fontSize: "16px",
      color: "#FFFFFF",
      fontWeight: "300",
      cursor: "pointer",
      "&:hover": {
        color: "#FAB210",
      },
    }));
  
    return (
      <Box sx={{ py: 10, backgroundColor: "#1A1A1A" }}>
        <CustomContainer>
          <CustomContainer>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  mb: 2,
                }}
              >
                About Us
              </Typography>
  
              <FooterLink onClick={socialHandler.bind(this, 'phone', false)}>Phone</FooterLink>
              <br />
              <FooterLink onClick={socialHandler.bind(this, 'email', false)}>E-Mail</FooterLink>
              <br />
              <FooterLink onClick={socialHandler.bind(this, 'address', false)}>Address</FooterLink>
            </Box>
  
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  mb: 2,
                }}
              >
                Get in touch
              </Typography>
  
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  mb: 2,
                }}
              >
                Discover the timeless charm of {profile[0] && profile[0].name}, <br /> 
                where the traditional cuisine never goes out of style.
              </Typography>
  
              <IconBox>
                <img 
                  src={'https://cdn-icons-png.flaticon.com/512/4494/4494479.png'}
                  height="30px" 
                  alt="Facebook" 
                  style={{ cursor: "pointer" }} 
                  onClick={socialHandler.bind(this, 'facebook', true)}
                />
                <img
                  src={'https://cdn-icons-png.flaticon.com/512/4494/4494489.png'}
                  height="30px" 
  
                  alt="Instagram"
                  style={{ cursor: "pointer" }}
                  onClick={socialHandler.bind(this, 'instagram', true)}
                />
                <img
                  src={'https://cdn-icons-png.flaticon.com/512/4494/4494481.png'}
                  height="30px" 
                  alt="Twitter"
                  style={{ cursor: "pointer" }}
                  onClick={socialHandler.bind(this, 'twitter', true)}
                />
              </IconBox>
            </Box>
  
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  mb: 2,
                }}
              >
                Opening Hours
              </Typography>
              
              
              <FooterLink>
              Monday - Thursday
              <br/>
              {openHours[0] && openHours[0].opening_time.slice(0, 5)} - {openHours[0] && openHours[0].closing_time.slice(0, 5)}
              </FooterLink>
              <br />
              <FooterLink>
              Friday
              <br/>
              {openHours[4] && openHours[4].opening_time.slice(0, 5)} - {openHours[4] && openHours[4].closing_time.slice(0, 5)}
              </FooterLink>
              <br />
              <FooterLink>
              Saturday - Sunday
              <br/>
              {openHours[5] && openHours[5].opening_time.slice(0, 5)} - {openHours[5] && openHours[5].closing_time.slice(0, 5)}
              </FooterLink>
            </Box>
          </CustomContainer>
        </CustomContainer>
      </Box>
    );
  };
  
  