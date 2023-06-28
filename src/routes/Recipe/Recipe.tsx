import React from "react";
import { useLoaderData } from 'react-router-dom';

export default function Recipe() {
  const recipeId = useLoaderData();
  return (
    <>{recipeId}</>
  )
};