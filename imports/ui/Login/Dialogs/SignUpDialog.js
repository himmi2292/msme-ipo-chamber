import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export default (props) => {
    const open = props.newDialogState;
const [firstname,setFirstname] = useState('');
const [lastName,setLastname] = useState('');
const [mobileNumber,setMobileNumber] = useState('');
const [emailId,setEmailId] = useState('');
const [companyName,setCompanyNane] = useState('');
const [cin,setCin] = useState('');

    const handleSubmit = () => {
       
    }

    const sendOTP = () => {

    }
    return (
        <Dialog open={open} /*onClose={props.handleClose}*/ aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Please enter your details for SignUp</DialogTitle>
            <DialogContent>

                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={firstname || ''}
                    onChange={ (e) => setFirstname(e.target.value) 
                    }
                    fullWidth
                // helperText="First Name"
                />
                <TextField
                    required
                    
                    margin="dense"
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={lastName || ''}
                    onChange={ (e) => setLastname(e.target.value) 
                    }
                    fullWidth
                // helperText="Last Name"
                />
                <TextField
                    required
                    
                    margin="dense"
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Mobile Number"
                    type="text"
                    value={mobileNumber || ''}
                    onChange={ (e) => setMobileNumber(e.target.value) 
                    }
                    fullWidth
                    helperText="10 digit number"
                />
                <TextField
                    required
                    
                    margin="dense"
                    id="emailId"
                    name="emailId"
                    label="Email Id"
                    type="email"
                    value={emailId || ''}
                    onChange={ (e) => setEmailId(e.target.value) 
                    }
                    fullWidth
                // helperText="Enter your Email Id"
                />

                <TextField
                    required
                    
                    margin="dense"
                    id="companyName"
                    name="companyName"
                    label="Company Name"
                    type="text"
                    value={companyName || ''}
                    onChange={ (e) => setCompanyNane(e.target.value) 
                    }
                    fullWidth
                // helperText="Enter your Compant Name"
                />
                <TextField
                    required
                    margin="dense"
                    id="cin"
                    name="cin"
                    label="CIN"
                    type="text"
                    value={cin || ''}
                    onChange={ (e) => setCin(e.target.value) 
                    }
                    fullWidth
                    helperText="Enter your Company's CIN"
                />
                <TextField
                    required
                    
                    margin="dense"
                    id="otp"
                    label="OTP"
                    type="text"
                    fullWidth
                    disabled
                    color="secondary"
                    helperText="OTP sent to your provided Email Id"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={sendOTP} color="primary">
                    Send OTP
                </Button>
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