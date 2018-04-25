import React from 'react';
import { View } from 'react-native';
import StatusBarComponent from './src/components/status_bar'; // always present
import SignInOptions from './src/components/sign_in_options';
import Pantry from './src/components/pantry';
import SignInForm from './src/components/sign_in';
import CreateAccount from './src/components/create_account';
import firebase from 'react-native-firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {


    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return (
        <View>
          <StatusBarComponent />
          <SignInOptions /> // needs to swap places with SignInOptions for production
        </View>
      );
    }
    return (
      <View>
        <StatusBarComponent/>
        <CreateAccount />
      </View>
    );
  }
}

const styles = {
  statusBar: {
    barStyle: "light-content"
  },

};

export default App;
