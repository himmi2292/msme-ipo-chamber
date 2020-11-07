import React, { useState } from 'react'
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PaymentIcon from '@material-ui/icons/Payment';
import PanToolIcon from '@material-ui/icons/PanTool';
import SignUpDialog from './Dialogs/SignUpDialog';
import PaymentDetailsDialog from './Dialogs/PaymentDetailsDialog'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "50vw",
        height: "100vh",
    },
    gridMainContaner: {
        flexGrow: 1,
        // width: "100vw",
        height: "100vh",
    },

    buttons: {
        margin: theme.spacing(2)
    }
}));

export default () => {
    const classes = useStyles();

    const [openSignUp, setSignUpOpen] = useState(false);


    const handleSignUpClose = () => {
        setSignUpOpen(false);

    }
    const handleSignUpOpen = () => {
        setSignUpOpen(true);

    }

    const [openPaymentDialog, setPaymentDialogOpen] = useState(false);


    const handlePaymentDialogClose = () => {
        setPaymentDialogOpen(false);

    }
    const handlePaymentDialogOpen = () => {
        setPaymentDialogOpen(true);

    }

    return (
        <Paper elevation={2} className={classes.root}>
            <Grid container justify="flex-start" alignItems="center" direction="column" className={classes.gridMainContaner}>
                <Grid item>
                    <img src="/images/HomeBanner.jpg" />
                </Grid>
                <Grid item>
                    <Typography className={classes.buttons} variant="h3" color="primary" size="large">
                        Welcome New User!
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        endIcon={<PanToolIcon />}
                        className={classes.buttons}
                        onClick={handleSignUpOpen}
                    >Click to SignUp</Button>
                     <SignUpDialog handleClose={handleSignUpClose} newDialogState={openSignUp} />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<PaymentIcon />}
                        size="large"
                        className={classes.buttons}
                        onClick={handlePaymentDialogOpen}
                    >Click to Enter Payment Details</Button>
                    <PaymentDetailsDialog handleClose={handlePaymentDialogClose} newDialogState={openPaymentDialog} />
                </Grid>
            </Grid>
           
        </Paper>
    )

}