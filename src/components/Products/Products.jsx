import React from 'react'

import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './Product/styles';

//Products component returns mapped over products

export default function Products({data, input, category, value, sortValue}) {
    const classes = useStyles();
 

    return (
        <div  className={classes.content}>
        
            <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>
                    {data
                    //sort function, sorts price by hightolow and lowtohigh
                    
                    .sort((a,b) => {
                        if(sortValue === 'hightolow' && a.price > b.price){
                            return -1
                        }else if(sortValue==='lowtohigh' && b.price > a.price){
                            return -1
                        }else if(sortValue === ''){
                            return 0
                        }
                    })
                    //this filter function, allows user to search for a specific product by comparing the input and the titles
                    .filter((product) => {
                        if(input === null || input === ""){
                            return product
                        } else if(product.title.toLowerCase().includes(input.toLowerCase())){
                            return product
                        }
                    //this filter function below checks the category, if its an empty string returns all products otherwise returns products by there category
                    }).filter((product) => {
                        if(category === ""){
                            return product
                        }else if(product.category === category){
                            
                            return product
                        }
                    //this filter function below checks the price range on the slider, and returns all products in that range
                    //value[0] represents the minimum wile value[1] represents the maximum
                    }).filter((product) => {
                        if(product.price >= value[0] && product.price <= value[1]){
                            return product
                        }else{
                            console.log("no products in the following range")
                        }
                    })
                    .map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))}
                    
                </Grid>
                
            
        </div>

        
                
            
    )
}
