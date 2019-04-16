import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import styles from "./styles";
import MapView, { Marker } from "react-native-maps";
import { Form } from "react-final-form";
import { Button, Header } from "react-native-elements";
import { graphql, compose } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  ADD_REVIEW,
  ADD_WASHROOM,
  ADD_WASHROOM_PHOTO,
  GET_ALL_WASHROOMS
} from "../../config/queries";
import { Thumbnail, Item, Input, Label } from "native-base";
import Spinner from "react-native-number-spinner";
import { material } from "react-native-typography";
import { withNavigation } from "react-navigation";
import BackButton from "../../components/BackButton";

class AddWashroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      login: true,
      starCount: 3,
      language: null,
      num: null,
      hasSeater: false,
      locationName: null,
      userId: null,
      photo: null
    };
  }
  componentDidMount = async () => {
    this.setState({ num: 3 });

    AsyncStorage.getItem("id").then(userId => {
      this.setState({ userId });
    });
  };
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    let {
      add_washroom,
      add_review,
      add_washroom_photo,
      name,
      vicinity,
      location,
      id,
      photo
    } = this.props;
    {
      console.log(this.props);
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Header
            containerStyle={{
              backgroundColor: "#ff6b6b",
              justifyContent: "space-around"
            }}
            statusBarProps={{ barStyle: "light-content" }}
            leftComponent={<BackButton />}
            centerComponent={{
              text: "Add New Washroom",
              style: { color: "#fff", fontSize: 20 }
            }}
          />
          <View
            style={{
              height: 175,
              width: Dimensions.get("window").width,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <MapView
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
              initialRegion={{
                latitude: this.props.location.lat,
                longitude: this.props.location.lng,
                latitudeDelta: 0.0005,
                longitudeDelta: 0.0005
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.props.location.lat,
                  longitude: this.props.location.lng
                }}
              />
            </MapView>
          </View>

          <View
            style={{
              alignItems: "center"
            }}
          >
            <Form
              onSubmit={() => {}}
              validate={() => {}}
              render={({
                handleSubmit,
                pristine,
                invalid,
                hasSubmitErrors,
                submitError,
                form
              }) => (
                <View
                  style={{
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "space-evenly"
                  }}
                >
                  <Text style={material.headline}>{name}</Text>
                  <Text style={material.body1}>{vicinity}</Text>

                  <Text style={material.body1}>
                    How many stalls were there?
                  </Text>
                  <Spinner
                    max={10}
                    min={0}
                    color="#f60"
                    value={this.state.num}
                    numColor="black"
                    onNumChange={num => {
                      this.setState({ num });
                    }}
                  />
                  <Text style={material.body1}>were there toilet seaters?</Text>
                  {this.state.hasSeater ? (
                    <View>
                      <Button
                        title="👍"
                        onPress={() => {
                          this.setState({ hasSeater: true });
                        }}
                      />
                      <Button
                        title="👎"
                        type="clear"
                        onPress={() => {
                          this.setState({ hasSeater: false });
                        }}
                      />
                    </View>
                  ) : (
                    <View>
                      <Button
                        title="👍"
                        type="clear"
                        onPress={() => {
                          this.setState({ hasSeater: true });
                        }}
                      />
                      <Button
                        title="👎"
                        onPress={() => {
                          this.setState({ hasSeater: false });
                        }}
                      />
                    </View>
                  )}
                  <Item floatingLabel>
                    <Label style={material.body1}>Access Instructions?</Label>
                    <Input maxLength={50} />
                  </Item>
                  {photo ? (
                    <Thumbnail square source={{ uri: photo.uri }} />
                  ) : (
                    <Text>no photo</Text>
                  )}
                  <TouchableOpacity
                    style={{
                      margin: 3,
                      backgroundColor: "#BFD7EA",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: 40,
                      borderRadius: 13
                    }}
                    onPress={() => {
                      this.props.nav.navigate("Camera");
                    }}
                  >
                    <Text style={{ ...material.title, color: "white" }}>
                      <Icon name={"camera"} size={20} color={"white"} />
                      Take a photo!
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      margin: 3,
                      backgroundColor: "#BFD7EA",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: 40,
                      borderRadius: 13
                    }}
                    onPress={async () => {
                      try {
                        // let washroomPhoto = await add_washroom_photo({
                        //   variables: {
                        //     url: photo ? photo.uri : null,
                        //     name: "Sample Image",
                        //     contentType: "image/png"
                        //   }
                        // });
                        //{washroomPhoto 	? console.log(washroomPhoto.data.createFile.washroom.id) : console.log("Photo is empty")}
                        // console.log("tEST MARK");
                        // console.log(typeof washroomPhoto.data.createFile.id);

                        let washroomId = await add_washroom({
                          variables: {
                            placeId: id,
                            name,
                            address: vicinity,
                            stall: this.state.num,
                            overallRating: 5,
                            numberOfReviews: 1,
                            toiletSeater: this.state.hasSeater,
                            // listOfPhotosId: washroomPhoto.data.createFile.id,
                            lat: location.lat,
                            long: location.lng
                          },
                          refetchQueries: [
                            {
                              query: GET_ALL_WASHROOMS
                            }
                          ]
                        });
                        console.log(washroomId);

                        this.props.navigation.navigate("Review", {
                          data: washroomId.data.createWashroom
                        });
                      } catch (e) {
                        // console.log(e);
                        // let reviewID = await add_review({
                        //   variables: {
                        //     userId: this.state.userId,
                        //     placeId: id,
                        //     rating: this.state.starCount
                        //   }
                        // });
                        this.props.navigation.navigate("Review");
                      }
                    }}
                  >
                    <Text style={{ ...material.title, color: "white" }}>
                      <Icon name={"check"} size={20} color={"white"} /> Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(
  compose(
    graphql(ADD_WASHROOM, { name: "add_washroom" }),
    graphql(ADD_REVIEW, { name: "add_review" }),
    graphql(ADD_WASHROOM_PHOTO, { name: "add_washroom_photo" })
  )(AddWashroom)
);
