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

const Register = ({navigation}) => {
    const [email,Setemail] = useState();
    const [password,Setpassword] = useState();

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate('Login')
          }
        })
    
        return unsubscribe
      }, [])
    
      const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            auth
            .signOut()
            navigation.navigate('Login')
            Alert.alert('Registrasi Sukses', 'Silahkan Login');
          })
          .catch(error => Alert.alert("Gagal Registrasi", "Akun Sudah Ada/Tidak Valid"))
      };
    

    return(
        <View style= {styles.container}>
            <Text style={styles.logo}>Second Gadget</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                placeholder="Email.."
                placeholderTextColor="#003f5c"
                onChangeText={(text)=>{
                    Setemail(text);
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
                    Setpassword(text);
                }}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
            onPress={handleSignUp}>
            <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
           <Text style={styles.link}>Sudah punya akun? Login</Text>
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
export default Register;