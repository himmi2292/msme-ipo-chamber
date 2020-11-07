import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default (props)=>{
    const open = props.newDialogState;
    const handleSubmit = () =>{

    }
    return (
        <Dialog open={open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Please enter your Membership Payment Details</DialogTitle>
            <DialogContent>

                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Id"
                    type="email"
                    fullWidth
                    helperText="Enter your registered Email Id"
                />
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="amount"
                    label="Amount"
                    type="text"
                    fullWidth
                   
                />
                 <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="bankName"
                    label="Bank Name"
                    type="text"
                    fullWidth
                   
                />
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="transactionId"
                    label="Transaction Id"
                    type="text"
                    fullWidth
                   
                />
                {/*Date selector*/}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                   Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}