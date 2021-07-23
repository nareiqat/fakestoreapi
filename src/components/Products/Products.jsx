import React from 'react'

import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './Product/styles'

export default function Products({data, input}) {
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
