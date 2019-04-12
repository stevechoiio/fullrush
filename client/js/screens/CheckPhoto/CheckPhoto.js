import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { graphql, compose } from 'react-apollo';
import { UPDATE_WASHROOM_PHOTO } from "../../config/queries";
import styles from "./styles";


export default props => {
        const photo = props.data;
        return(
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <ImageBackground style={{width: photo.width, height: photo.height }} source={{ uri: photo.uri }}>
            <TouchableOpacity
                onPress={ 
                    // async 
                    () => {
                    // let updatedWashroomPhotoUrl = await this.props.updateWashroomPhoto(
                    //     {
                    //         variables: {
                    //             url: photo.uri,
                    //         }
                    //     }
                    // );
                    // this.state.photoUrl = updatedWashroomPhotoUrl.data.updatedWashroomPhoto.url;
                    props.nav.navigate("AddWashroom", {data: photo.uri});
                    // , {data: photo.uri});
                }}
                    style={styles.capture}
                >
                <Text style={{fontSize: 14}}>
                    Use this Picture?
                </Text>
            </TouchableOpacity>
            </ImageBackground>
            </View>
        )

}

// compose(
//     graphql(UPDATE_WASHROOM_PHOTO, {name: "updateWashroomPhoto"})
// )(CheckPhoto);