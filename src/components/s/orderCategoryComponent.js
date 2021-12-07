import React from "react";
import { Grid, Box, Item } from "@mui/material";
import Typography from "@material-ui/core/Typography";


export default function OrderCategoryComponent(props) {
    return <Grid container
        border={1} borderColor="darkgray"
        bgcolor="gray"
        borderRadius="10px"
        margin="10px">
        <Grid item xs={12}>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h2" align="center">
                        {props.number}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                        {props.name}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
}


