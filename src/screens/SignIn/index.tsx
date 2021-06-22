import React from 'react'
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

const { container, textBold, input } = styles;

export function SignIn(){
    return (
        <View style={container}>
            <Text style={textBold}>Hello</Text>
            <TextInput style={input} />
        </View>
    );
}
