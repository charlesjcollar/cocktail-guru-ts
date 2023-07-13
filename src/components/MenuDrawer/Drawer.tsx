import { Box, Button, List, ListItem } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

export default function MenuDrawer() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button sx={{
          position: "fixed", 
          right: "0", 
          top: "0",
          padding: "1rem",
        }} onClick={() => setOpened(!opened)}><MenuIcon /></Button>
      <Drawer 
        anchor="left"
        open={opened}
        onClose={() => setOpened(false)}
      >
        <Box
          role="presentation"
        >
          <List>
            <ListItem key="Main Page">
              Main Page
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}