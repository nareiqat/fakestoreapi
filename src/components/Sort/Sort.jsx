import React from 'react'
import {Button, Menu, MenuItem} from '@material-ui/core'

export default function Sort() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Sort by
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Hightolow</MenuItem>
                <MenuItem onClick={handleClose}>lowtoHigh</MenuItem>
                
            </Menu>
        </div>
    )
}


