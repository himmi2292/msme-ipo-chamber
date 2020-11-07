import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react'
import Header from './Header';
import MainContent from './MainContent'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justify: "center",
        alignItem: "center",
        padding: theme.spacing(4),
        height: "100vh",
    },
    card: {
        height: 300,
        minWidth: 200,
    },
    items: {
        margin: theme.spacing(4),
    },
    typo:{
        display:"inline-block"
    }

}));

export default () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Header />
            <MainContent />
        </Fragment>
    )
}