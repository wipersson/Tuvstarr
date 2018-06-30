import Button from '@material-ui/core/Button';
import * as React from 'react';
import './App.css';
import NewUserForm from './components/newUser/NewUserForm'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button variant="text" color="primary">
          Dart
        </Button>
        <Button variant="text" color="primary">
          Pool
        </Button>
        <Button variant="text" color="primary"onClick={this.newUser}>
          New User
        </Button>
        <NewUserForm/>
      </div>
    );
  }

  public newUser()
  {
    alert("lol");
  }
}

export default App;
