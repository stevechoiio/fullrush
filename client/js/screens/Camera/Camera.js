import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Camera extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <RNCamera 
                    style= { styles.preview }
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                {({ camera, status }) => {
                    if (status !== 'READY')
                        return <View>
                            <Text>Loading</Text>
                        </View>;
                    return (
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.takePicture.bind(camera)} style={styles.capture}>
                                <Text style={{ fontSize: 14 }}> SNAP </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                </RNCamera>
            </View>
        )
    }

    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        // console.log(data.uri);
    };
}