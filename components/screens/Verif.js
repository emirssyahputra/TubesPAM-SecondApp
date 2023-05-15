import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button,ToastAndroid,TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOURS, Items} from '../database/Database';


const Verif = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const selectedBank = props.route.params?.selectedBank ?? 'Mandiri';
    const [generatedNumber, setGeneratedNumber] = useState('');

  useEffect(() => {
    // Generate 12 digit number
    const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
    setGeneratedNumber(randomNumber.toString());
  }, []);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    };
  
    const handleConfirmButtonPress = () => {
      // Logic to handle confirmation button press
    };
  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialCommunityIcons
          name="chevron-left"
          style={{
            fontSize: 18,
            color: COLOURS.backgroundDark,
            padding: 12,
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Verifikasi Pembayaran</Text>
      <View style={{ width: 60 }}></View>
    </View>
    <Text>Nomor Virtual Account {selectedBank} = {generatedNumber} </Text>
    <View style={styles.imageContainer}>
      
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      <TouchableOpacity onPress={pickImage} style={styles.pickImageContainer}>
        {selectedImage ? (
          <Entypo name="edit" size={24} color={COLOURS.backgroundDark} />
        ) : (
          <MaterialCommunityIcons name="camera-plus" size={24} color={COLOURS.backgroundDark} />
        )}
        <Text>Select an Image</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Confirm"
        disabled={!selectedImage}
        onPress={() => checkOut()}
        style={
          selectedImage
            ? styles.confirmButtonEnabled
            : styles.confirmButtonDisabled
        }
      />
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: COLOURS.white,
  padding: 20,
  },
  header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
  },
  title: {
  fontSize: 20,
  fontWeight: 'bold',
  },
  imageContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  image: {
  width: 200,
  height: 200,
  marginBottom: 10,
  },
  pickImageContainer: {
  backgroundColor: COLOURS.backgroundLight,
  padding: 15,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  },
  buttonContainer: {
  marginTop: 20,
  alignSelf: 'stretch',
  },
  confirmButtonEnabled: {
  backgroundColor: COLOURS.primary,
  padding: 10,
  borderRadius: 5,
  minWidth: 150,
  },
  confirmButtonDisabled: {
  backgroundColor: COLOURS.lightGrey,
  padding: 10,
  borderRadius: 5,
  minWidth: 150,
  },
  });

export default Verif;