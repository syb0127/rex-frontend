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

export default class PermissionScreen extends React.Component {
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
        axios.post(`http://127.0.0.1:5000/permission/`, {username: this.state.name, password: this.state.password}, {headers: { 'content-type': 'application/x-www-form-urlencoded' }})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        }

      render() {
      return (
          <View style={styles.container}>
          <ScrollView>
              <Text style={styles.headerstyle}> Will you give Rex the permission to access your location? </Text>

              <TouchableOpacity title="Signup" onPress={this.onSignupPress} style={styles.btn}>
                <Text style={styles.buttontext}> Yes </Text>
                <Text style={styles.buttontext} > No </Text>
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