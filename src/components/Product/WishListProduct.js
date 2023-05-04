import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./WishListProduct.css";
function WishListProduct({ product }) {
  return (
    <div className="product-container">
      <Card sx={{ width: 292,height:500 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={product.productImages[0]}
          title="torque-half-sleeve-t-shirt"
        />
        <span className="remove-product">
          <CancelIcon />
        </span>
        <CardContent>
          <div className="items">
            <span className="brand">{product.brand}</span>
            <span className="sizeclass">{product.productName}</span>
            <span className="sizeclass">{product.price}</span>
          </div>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined">
            <span className="brand">ADD TO BAG</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default WishListProduct;
