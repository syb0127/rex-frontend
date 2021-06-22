import * as React from 'react';
import { Component} from "react";
//react-native-community/async-storage
import { StyleSheet, View, Text, TextInput, Button, Alert, Dimensions, TouchableOpacity, AsyncStorage, ScrollView} from 'react-native';
//import * as firebase from 'firebase';
import Colors from './Colors';
//import firestore from 'firebase';
//import storage from 'firebase';
import axios from 'axios';

/*const api = axios.create({
  baseURL: 'http://localhost:5000/'
})*/

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        /*api.get('/').then(res => {
          console.log(res.data)
        })*/
        this.state = {
            name: "",
            password: "",
            uuid: '',
        };
      }

      onSignupPress = event => {
        event.preventDefault();
        axios.post(`http://127.0.0.1:5000/login/`, {username: this.state.name, password: this.state.password}, {headers: { 'content-type': 'application/x-www-form-urlencoded' }})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        }

      render() {
      return (
          <View style={styles.container}>
          <ScrollView>

              <Text style={styles.headerstyle}>Signup</Text>

              <TextInput style={styles.bodytext}
                  value={this.state.name}
                  onChangeText={(text) => { this.setState({...this.state, name: text}) }}
                  placeholder="Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor={Colors.grey }
              />

              <View style={{paddingTop:10}} />

              <TextInput style={styles.bodytext}
                  value={this.state.password}
                  onChangeText={(text) => { this.setState({...this.state, password: text}) }}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor={Colors.grey }
              />


              <TouchableOpacity title="Signup" onPress={this.onSignupPress} style={styles.btn}>
                <Text style={styles.buttontext}> SIGNUP </Text>
              </TouchableOpacity>


              <TouchableOpacity title="Back to Login" onPress={this.onBackToLoginPress} style={styles.nofillbutton}>
                  <Text style={styles.nofillbuttontext}> Back to Login </Text>
                  <Text style={styles.nofillbuttontext}> Testing line </Text>
              </TouchableOpacity>
              </ScrollView>

          </View>
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  headstyle:{

  },
  bodytext:{

  },
  btn:{

  },
  buttontext:{

  },
  nofillbutton:{

  },
  nofillbuttontext:{

  }
});

/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading, Notifications } from 'expo';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import * as Amplitude from 'expo-analytics-amplitude';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-community/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})*/
