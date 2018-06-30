import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import * as React from 'react';
import INewUserFormProps from './INewUserFormProps'
import INewUserFormState from './INewUserFormState'
import './NewUserForm.css';


class NewUserForm extends React.Component<INewUserFormProps, INewUserFormState> {
  constructor(props: INewUserFormProps){
    super(props);
    
    this.lastNameChange = this.lastNameChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state={
      firstName:"",
      lastName:""
    }
  }
  public render() {

    return (
      <div className="root">
          <Typography variant="title" color="inherit">
            Add a new user
          </Typography>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <TextField label="First name" onChange={this.firstNameChange}/>
          </Grid>
          <Grid item={true} xs={12}>
            <TextField label="Last name" onChange={this.lastNameChange}/>
          </Grid>
          <Grid item={true} xs={12}>
            <Button variant="text" color="primary"  onClick={this.newUser}>
              New User
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

  public newUser()
  {
    alert("First name: " + this.state.firstName +" Last name: "+ this.state.lastName);
    this.props.parentUpdate();
  }
  public lastNameChange(event:any)
  {
    this.setState({lastName:event.target.value});
  }
  public firstNameChange(event:any)
  {
    console.log(event.target.value);
    this.setState({firstName:event.target.value});
  }
}

export default NewUserForm;
