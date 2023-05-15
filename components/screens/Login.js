import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from 'react-native';
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogIn = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged In with:', user.email);
    })
    .catch(error => Alert.alert("Gagal Login", "Email/Password Salah"))
  }
    return(
        <View style= {styles.container}>
            <Text style={styles.logo}>Second Gadget</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                placeholder="Email.."
                placeholderTextColor="#003f5c"
                onChangeText={(text)=>{
                    setEmail(text);
                }}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password.."
                placeholderTextColor="#003f5c"
                onChangeText={(text) => {
                    setPassword(text);
                }}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
            onPress={handleLogIn}>
            <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
           <Text style={styles.link}>Belum punya akun? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      
      /* Style untuk elemen Text */
      logo:{
        fontWeight: 'bold',
        fontSize: 50 ,
        color: '#1A4CFF',
        marginBottom: 40,
      },
      
      /* Style untuk elemen View */
      inputView :{
        width: '80%',
        backgroundColor: '#CECECE',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
      },
      
      /* Style untuk elemen TextInput */
      inputText: {
        height: 50,
        color: 'black',
      },
      
      /* Style untuk elemen TouchableOpacity */
      loginBtn: {
        width: '80%',
        backgroundColor: '#1A4CFF',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      
      /* Style untuk elemen Text */
      loginText:{
        color: 'white',
      },
      link: {
        fontSize: 18,
        color: '#1A4CFF',
        textDecorationLine: 'underline',
      },
      
    });
    export default Login;