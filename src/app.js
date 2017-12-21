import React,{Component} from 'react';
import firebase from 'firebase';
import {Text,View} from 'react-native';
import {Header,Button,CardSection,Spinner  } from './components/common';
import LoginForm from './components/LoginForm';

class App  extends Component{

  state={loggedIn: null};

  componentWillMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyAT_QCQVNH4DvfC_MBG_9xeb6xjEuHZdlA",
        authDomain: "auth-41626.firebaseapp.com",
        databaseURL: "https://auth-41626.firebaseio.com",
        projectId: "auth-41626",
        storageBucket: "auth-41626.appspot.com",
        messagingSenderId: "312255751944"
      });

      firebase.auth().onAuthStateChanged((user)=>{

        if(user){
          this.setState({loggedIn:true});
        }
        else{
          this.setState({loggedIn:false});
        }
      });

  }

  onLogout(){
    firebase.auth().signOut().then(function() {
      this.setState({loggedIn:false});
    }).catch(function(error) {
    });
  }

  renderContent(){
    switch(this.state.loggedIn){

      case true:
        return (
          <CardSection>
            <Button style={{height:50}} onPress={this.onLogout.bind(this)}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection style={{flex:1, alignItems:'center'}}>
            <Spinner style={{flex:1}} size="large"/>
          </CardSection>
        );

    }

    if(this.state.loggedIn){

    }


  }

  render (){
  return (
      <View >
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }


}



export default App;
