import { useContext, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
    const [globalState, dispatch] = useContext(Context);
    
    const makeLoginRequest = (username, password) => {
        axios.post(`http://127.0.0.1:5000/login/`, {username: username, password: password}, {headers: { 'content-type': 'application/x-www-form-urlencoded' }})
          .then(res => {
            dispatch({type: 'LOGIN', session_token: res.data.session_token})
          })
          .catch(err => {
            dispatch({type: 'SET_ERROR', error: err.data.error})
          });
    }

    const makeSignUpRequest = (username, password, email) => {
        axios.post(`http://127.0.0.1:5000/signup/`, {username: username, password: password, email: email}, {headers: { 'content-type': 'application/x-www-form-urlencoded' }})
          .then(res => {
            dispatch({type: 'SIGNUP', message: res.data.message})
          })
          .catch(err => {
            dispatch({type: 'SET_ERROR', error: err.data.error})
          });
    }

    const getRecommendation = () => {
        axios.get(`http://127.0.0.1:5000/recommendation/`, {headers: {session_token: globalState.session_token}})
          .then(res => {
            this.setState({...this.state, recommendations: res.data})
          })
          .catch(err => {
            dispatch({type: 'SET_ERROR', error: err.data.error})
          });
    }

    return (
        <View style={styles.container}>
          <ScrollView>
              <Text style={styles.headerstyle}>Signup</Text>

              <TextInput style={styles.bodytext}
                  value={this.state.name}
                  onChangeText={(text) => { this.setState({...this.state, username: text}) }}
                  placeholder="Username"
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

             <TextInput style={styles.bodytext}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({...this.state, email: text}) }}
                  placeholder="Email"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor={Colors.grey }
              />

              <TouchableOpacity title="Login" onPress={() => this.makeLoginRequest(this.state.username, this.state.password)} style={styles.btn}>
                <Text style={styles.buttontext}> LOGIN </Text>
              </TouchableOpacity>

              <TouchableOpacity title="Signup" onPress={() => this.makeSignUpRequest(this.state.username, this.state.password, this.state.email)} style={styles.btn}>
                <Text style={styles.buttontext}> SIGNUP </Text>
              </TouchableOpacity>

              <TouchableOpacity title="GetRecommendation" onPress={this.getRecommendation} style={styles.btn}>
                <Text style={styles.buttontext}> Get Recommendation </Text>
              </TouchableOpacity>

              <TouchableOpacity title="Back to Login" onPress={this.onBackToLoginPress} style={styles.nofillbutton}>
                  <Text style={styles.nofillbuttontext}> Back to Login </Text>
                  <Text style={styles.nofillbuttontext}> Testing line </Text>
              </TouchableOpacity>
              </ScrollView>
          </View>
    );
};

export default MainPage;
