import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Camera extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container }>
                <RNCamera 
                    style= { styles.preview }
                    type={RNCamera.Constants.Type.back}
                    // aspect={RNCamera.Constants.Aspect.fill}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    captureAudio={false}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                {({ camera, status }) => {
                    if (status !== 'READY')
                        return <View><Text>Loading</Text></View>;
                    return (
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity 
                                onPress={() => this.takePicture(camera).then(
                                    (photo) => {
                                        this.props.nav.navigate("CheckPhoto", {data: photo})
                                    }).catch((error)=>
                                        console.log(error)
                                    )
                                }
                            style={styles.capture}>
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
        const options = { width: 150, orientation: "portrait", quality: 1, base64: true };
        let data = await camera.takePictureAsync(options);
        return data;
    };
}