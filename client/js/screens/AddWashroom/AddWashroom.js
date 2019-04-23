import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Image
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Form } from "react-final-form";
import { Button, Header } from "react-native-elements";
import { graphql, compose } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import SwitchSelector from "react-native-switch-selector";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  ADD_REVIEW,
  ADD_WASHROOM,
  ADD_WASHROOM_PHOTO,
  GET_ALL_WASHROOMS
} from "../../config/queries";
import { Item, Input, Label } from "native-base";
import { material } from "react-native-typography";
import { withNavigation } from "react-navigation";
import BackButton from "../../components/BackButton";
const options = [{ label: "Yes", value: true }, { label: "No", value: false }];
const options2 = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5+", value: "5" }
];
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
      photos
    } = this.props;
    // let photoURL = photos ? photos[0].photo_reference : null;
    // let API_KEY = "AIzaSyAr_W5HFV59akkn9SOTu5PJr0SWz_38_NE";
    // let imageURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoURL}&key=${API_KEY}`;
    // console.log(imageURL);

    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <Header
              containerStyle={{
                backgroundColor: "#ff6b6b",
                justifyContent: "space-around"
              }}
              statusBarProps={{ barStyle: "light-content" }}
              leftComponent={<BackButton />}
              rightComponent={() => {
                return (
                  <TouchableOpacity>
                    <Icon
                      style={{ marginRight: 10 }}
                      name={"check"}
                      size={20}
                      color={"white"}
                    />
                  </TouchableOpacity>
                );
              }}
              centerComponent={{
                text: "Add New Washroom",
                style: { color: "#fff", fontSize: 20 }
              }}
            />

            <KeyboardAwareScrollView
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={false}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    height: 175,
                    width: Dimensions.get("window").width
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
                {/* <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri:
                  "https://facebook.github.io/react-native/docs/assets/favicon.png"
              }}
            /> */}

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
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={material.headline}
                        adjustsFontSizeToFit
                      >
                        {name}
                      </Text>
                      <Text style={material.body1}>{vicinity}</Text>

                      <Text style={{ ...material.body1, marginTop: 10 }}>
                        How many stalls are here?
                      </Text>
                      <SwitchSelector
                        height={40}
                        options={options2}
                        fontSize={20}
                        initial={0}
                        textColor={"#ff6b6b"} //'#7a44cf'
                        selectedColor={"white"}
                        buttonColor={"#ff6b6b"}
                        borderColor={"#ff6b6b"}
                        hasPadding
                        onPress={value => this.setState({ nul: value })}
                      />
                      <Text style={{ ...material.body1, marginTop: 10 }}>
                        Are there toilet seat covers?
                      </Text>

                      <SwitchSelector
                        height={40}
                        options={options}
                        initial={1}
                        fontSize={20}
                        textColor={"#ff6b6b"} //'#7a44cf'
                        selectedColor={"white"}
                        buttonColor={"#ff6b6b"}
                        borderColor={"#ff6b6b"}
                        hasPadding
                        onPress={value => this.setState({ hasSeater: value })}
                      />

                      <Item
                        floatingLabel
                        style={{ marginTop: 10, marginBotton: 5 }}
                      >
                        <Label style={material.body1}>
                          Access Instructions
                        </Label>
                        <Input maxLength={50} />
                      </Item>
                      {/* {photos ? (
                      <Thumbnail square source={{ uri: photos.uri }} />
                    ) : (
                      <Text>no photo</Text>
                    )} */}

                      <TouchableOpacity
                        style={{
                          margin: 3,
                          backgroundColor: "#BFD7EA",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 200,
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
                                overallRating: 0,
                                numberOfReviews: 0,
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

                            this.props.navigation.navigate("Review", {
                              data: washroomId.data.createWashroom
                            });
                          } catch (e) {
                            console.log(e);
                          }
                        }}
                      >
                        <Text style={{ ...material.title, color: "white" }}>
                          <Icon name={"check"} size={20} color={"white"} />{" "}
                          Submit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
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
