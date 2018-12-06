import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        open: false,
        checkedB: true
    };

    static defaultProps = {
        eventInfo: {}
    }

    activateDialog = (e) => {
        console.log("dialog open", {e});
        console.log(this.refs);
        this.props.openDialog()
    } 

    closeDialog = (e) => {
        console.log('close dialog');
        this.props.closeDialog(this.state);
    }

    toggleCheckbox = val => event => {
        this.setState({ [val]: event.target.checked });
    };

    //   handleClickOpen = () => {
    //     this.setState({ open: true });
    //   };

    //   handleClose = () => {
    //     this.setState({ open: false });
    //   }; 

    render() {
        console.log(this.props);
        let {eventDescription, startTime, endTime}  = "";
        const createView = this.props.type === "create" ? true : false;
        if(this.props.eventInfo.desc) {
            eventDescription = <DialogContentText>{this.props.eventInfo.desc}</DialogContentText> 
        }
        if(this.props.eventInfo.start || this.props.eventInfo.end) {
            startTime = moment(Date.parse(this.props.eventInfo.start)).format("h:mm a");
            endTime = moment(Date.parse(this.props.eventInfo.end)).format("h:mm a");
        }
        if(createView) {
            return (
                <div>
                {this.props.type}
                <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
                    <DialogContent>
                        <form className="form-container">
                            <TextField
                            required
                            id="event-title"
                            label="Event Title"
                            defaultValue="My Event"
                            className="event-title"
                            margin="normal"
                            />
							<FormControlLabel
								control={
									<Checkbox
										checked={this.state.checkedB}
										onChange={this.toggleCheckbox('checkedB')}
										value="checkedB"
										color="primary" />
									}
								label="All-Day Event?"
							/>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={this.closeDialog} color="primary">
                            Edit
                        </Button> */}
                        <Button onClick={this.closeDialog} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
                </div>
            );
        }        
        else {
            return (
                <div>
                    {/*<Button onClick={this.activateDialog}>Open form dialog</Button>*/}
                    <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">{this.props.eventInfo.title}</DialogTitle>
                        <DialogContent>
                            {eventDescription} 
                            <DialogContentText>
                                The event is scheduled from <strong>{startTime}</strong> to <strong>{endTime}</strong>.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeDialog} color="primary">
                                Edit
                            </Button>
                            <Button onClick={this.closeDialog} color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
    }
}
