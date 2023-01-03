import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ButtonBase
} from "@mui/material";

const MenuTenan = (props) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="white" d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
      </g>
    </svg>
  );

const pages = ["Home", "Menu", "FAQ", "ContactUs"];
const id = ["home", "menu", "faq", "contact"];

export default function CustomDrawer(){
  const [openDrawer, setOpenDrawer] = useState(false);

  const scrollTo = (id) => {
    const menuElement = document.getElementById(id);
    window.scrollTo({
      top: menuElement.offsetTop - 75,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "70%", background: "#1A1A1A" },
          }}
        variant="temporary"
        transitionDuration={600}
      >
        <List>
          
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(!openDrawer)}>
              <ListItemIcon>
                <ButtonBase>
                <ListItemText style={{color: "#FDA021"}} onClick={()=>{scrollTo(id[index])}} >{page}</ListItemText>
                </ButtonBase>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="menu"
      >
        <MenuTenan />
      </IconButton>
    </React.Fragment>
  );
};