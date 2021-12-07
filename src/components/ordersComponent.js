import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid, Box, Item } from "@mui/material";
import OrderCategoryComponent from "./s/orderCategoryComponent"

export default function OrdersComponent() {
    const { t } = useTranslation();

    return <Grid container
        spacing={1}
        borderRadius="20px"
        bgcolor="#ffffff"
        margin="auto">
        <Grid item xs={12}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography variant="h5">
                        {t("orders")}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} padding="10px">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} padding="10px">
                    <OrderCategoryComponent name={t("unpaid")} number="12" />
                </Grid>
                <Grid item xs={12} md={4} padding="10px">
                    <OrderCategoryComponent name={t("unsent")} number="3" />
                </Grid>
                <Grid item xs={12} md={4} padding="10px">
                    <OrderCategoryComponent name={t("returns")} number="5" />
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
}
