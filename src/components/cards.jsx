import React from "react";
import Card from "./card";
import { products } from "../util/products/productsList";
import { cardStyle } from "../styles/cards";

const Cards = () => {
  return (
    <>
      <div className="container" style={cardStyle.container}>
        {products.map((product) => {
          const { id, product_name, seller_name, description, phone, img } =
            product;
          return (
            <Card
              key={id}
              image={img}
              name={product_name}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
