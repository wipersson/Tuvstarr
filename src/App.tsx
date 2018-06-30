import Button from '@material-ui/core/Button';
import * as React from 'react';
import './App.css';
import IAppState from './AppState'
import NewUserForm from './components/newUser/NewUserForm'


class App extends React.Component<{},IAppState> {
  constructor(){
    super({});

    this.newUser = this.newUser.bind(this);
    this.newUserDone = this.newUserDone.bind(this);

    this.state = {
      newUser:false
    }
  }
  public render() {
    if(this.state.newUser){
      return(
        <div className="App">
          <NewUserForm parentUpdate={this.newUserDone}/>
        </div>
    );
    }else{
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
          
        </div>
      );
    }

  }

  public newUser()
  {
    this.setState({newUser:true});
  }
  public newUserDone()
  {
    this.setState({newUser:false});
  }
}

export default App;
