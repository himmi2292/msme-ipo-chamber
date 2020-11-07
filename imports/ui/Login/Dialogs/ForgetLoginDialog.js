import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default (props) => {
    const open = props.newDialogState;
    const handleSendPassword = () =>{

    }
    return (
        <Dialog open={open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">We will send you a new password</DialogTitle>
            <DialogContent>

                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Email Id"
                    type="email"
                    fullWidth
                    helperText="Enter your registered Email Id"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSendPassword} color="primary">
                    Send Password
                </Button>
            </DialogActions>
        </Dialog>
    )
}