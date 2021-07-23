import React from 'react'

import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './Product/styles'

export default function Products({minP, maxP ,data, input, category, value}) {
    const classes = useStyles();
 

    return (
        <div className={classes.content}>
        
            <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>
                    {data
                    .filter((product) => {
                        if(input === null || input === ""){
                            return product
                        } else if(product.title.toLowerCase().includes(input.toLowerCase())){
                            return product
                        }
                    
                    }).filter((product) => {
                        if(product.category === category){
                            return product
                        }else {
                            return product
                        }
                    }).filter((product) => {
                        if(product.price >= minP && product.price <= maxP){
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
