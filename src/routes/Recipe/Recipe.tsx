import React from "react";
import { useLoaderData } from 'react-router-dom';
import Drawer from "../../components/MenuDrawer/Drawer";
import { Card, List, ListItem, Typography } from "@mui/material";

export default function Recipe() {
  const recipeId = useLoaderData() as string;
  return (
    <>
      <Drawer />
      <Typography variant="h1">
        Classic Margarita
      </Typography>
      <Typography variant="body1">
        The classic IBA official margarita.
      </Typography>
      <Card variant="outlined">
        <Typography variant="subtitle1">Ingredients</Typography>
        <List>
          <ListItem>50 ml tequilla 100% agave</ListItem>
          <ListItem>20 ml triple sec</ListItem>
          <ListItem>15 ml lime juice freshly squeezed</ListItem>
        </List>
      </Card>
      {recipeId}
    </>
  )
};