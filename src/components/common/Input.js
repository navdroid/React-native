import React from 'react';
import {TextInput,Text,View} from 'react-native';

const Input =({label,value,placeholder,onChangeText,isPassword}) =>{
  const{inputstyle,lableStyle,containerStyle} = styles;
  return(
    <View style={containerStyle}>
        <Text style={lableStyle}>{label}</Text>
        <TextInput
          autoCorrect={false}
          style={inputstyle}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          onChangeText={onChangeText}
          value={value}

        />
    </View>
  )


}

const styles={
  inputstyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 50,
    flex: 3
  },
  lableStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1

  },
  containerStyle: {


    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };
