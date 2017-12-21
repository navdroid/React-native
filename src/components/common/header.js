import React from 'react';
import {Text,View} from 'react-native';

//Component
const Header = (props) =>{

  const{textStyle,viewStyle} = styles;

  return (
    <View style={viewStyle} >
      <Text style={textStyle}> {props.headerText}</Text>
    </View>
  );
};

//styles
const styles ={
textStyle: {
  fontSize: 20
},
viewStyle:{
  backgroundColor:'#F8F8F8',
  justifyContent:'center',
  alignItems:'center',
  height: 60,
  shadowColor: '#000000',
  shadowOffset: { width: 0,height: 20 } ,
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative'
}

};

//Export
export { Header };
