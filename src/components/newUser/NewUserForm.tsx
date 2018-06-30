import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';


class NewUserForm extends React.Component {
  public render() {
    return (
      <div className="App">
        <TextField label="Name"> Hello </TextField>
        <Button variant="text" color="primary"onClick={this.newUser}>
          New User
        </Button>
      </div>
    );
  }

  public newUser()
  {
    alert("lol");
  }
}

export default NewUserForm;
