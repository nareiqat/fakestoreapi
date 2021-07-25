import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './styles';
import SimpleModal from "./SimpleModal";

function Product({ product }) {

  const classes = useStyles();

  // const handleAddToCart = () => onAddToCart(product.id, 1);
  function truncate(string,limit){
    return string.length > limit ? `${string.substr(0,limit)}...` : string;
}

  return (
    <Card data-testid ="product-1" className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {truncate(product.title, 30)}
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
        
        {/* <SimpleModal product={product} /> */}
       
      </CardContent>
      <CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <SimpleModal data-testid ="desc-btn" product={product} />
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
      </CardContent>
      
    </Card>
  );
}

export default Product;
