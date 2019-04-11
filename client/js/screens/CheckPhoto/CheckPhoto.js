import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

export default props => {
    
    let photo = props.data;

    return(
        <View>
            <Image style={{width: photo.width, height: photo.height }} source={{ uri: photo.uri }}></Image>
            <Button ></Button>
        </View>
    ) 
}
