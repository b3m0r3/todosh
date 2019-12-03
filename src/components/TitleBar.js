import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'

const TitleBar = () => {
    return(
        <div id="bar">
            <AppBar  position='static'>
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        Simple react TODO app with @material-ui
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TitleBar