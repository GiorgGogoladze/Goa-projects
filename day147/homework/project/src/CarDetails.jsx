import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Car Details Page</h2>
      <p>Car ID: {id}</p>
    </div>
  );
};

export default CarDetails;
