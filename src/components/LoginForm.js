import React,{Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import { Button,Card,CardSection,Input,Spinner } from './common';


class LoginForm  extends Component{

  state= {email: '', password: '',error:'', loading: false};


  onButtonPress(){

    this.setState({ error: '', loading:true});


    const {email,password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailed.bind(this));
  });
}

onLoginFailed(){
  this.setState({ error: 'Authentication Failed.',loading:false});
}

onLoginSuccess(){
  this.setState({
    email:'',
    password:'',
    loading: false,
    error:''
  });
}

renderButton(){
  if(this.state.loading){

    return <Spinner size="small"/>;
  }

    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );

}

  render (){
  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="user@gmail.com"
          onChangeText={email => this.setState({ email}) }
          value={this.state.email}
          />
      </CardSection>
      <CardSection>
        <Input
          label="Password"
          placeholder="password"

          isPassword={true}
          onChangeText={password => this.setState({ password }) }
            value={this.state.password}
          />
      </CardSection>

      <Text style={styles.errorStyle}>
        {this.state.error}
      </Text>
      <CardSection>
        {this.renderButton()}
      </CardSection>

    </Card>
    );
  }

}

const styles={

  errorStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
