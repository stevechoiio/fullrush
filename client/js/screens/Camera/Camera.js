import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import styles from "./styles";

export default class Camera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snapped: false,
            photo: {}
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <RNCamera 
                    style= { styles.preview }
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    captureAudio={false}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                {({ camera, status }) => {
                    if (status !== 'READY')
                        return <View><Text>Loading</Text></View>;
                    if (!this.state.snapped) {
                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity 
                                    onPress={() => this.takePicture(camera).then(
                                        (photo) => {
                                            this.setState({ photo: photo })
                                            this.setState({ snapped: true })
                                        }).catch((error)=>
                                            console.log(error)
                                        )
                                    }
                                    style={styles.capture}>
                                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                                </TouchableOpacity>
                            </View>
                        ); 
                    } else if(this.state.snapped) {
                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <ImageBackground style={{height: this.state.photo.height, width: this.state.photo.width}} 
                                source={{ uri: this.state.photo.uri }}>
                                    <TouchableOpacity style={{
                                        flex: 0,
                                        backgroundColor: '#fff',
                                        borderRadius: 5,
                                        padding: 15,
                                        paddingHorizontal: 20,
                                        alignSelf: 'center',
                                        margin: 5,
                                    }}
                                    onPress={() => {
                                        this.setState({ snapped: false });
                                    }}
                                    >
                                        <Text style={{ fontSize: 14 }}> Back </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style= {{
                                        flex: 0,
                                        backgroundColor: '#fff',
                                        borderRadius: 5,
                                        padding: 15,
                                        paddingHorizontal: 20,
                                        alignSelf: 'center',
                                        margin: 2,
                                    }}
                                    onPress={() => {
                                        this.props.nav.navigate("AddWashroom", 
                                            {photo: this.state.photo}
                                        )
                                    }}
                                    >
                                <Text style={{ fontSize: 14 }}> Use </Text>
                            </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        )
                    }}}
                </RNCamera>
            </View>
        )
    }

    takePicture = async function(camera) {
        const options = { width: 480, orientation: "portrait", quality: 1, base64: true, fixOrientation: true, forceUpOrientation: true };
        let data = await camera.takePictureAsync(options);
        return data;
    };
}