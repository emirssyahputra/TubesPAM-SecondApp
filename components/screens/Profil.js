import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOURS} from '../database/Database';
import { auth } from "../../firebase";
import { useNavigation } from '@react-navigation/core';
import foto from '../Logo/tanjirou.png';

export default function Profil() {

  const navigation = useNavigation()
  
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace('Login')
    })
    .catch(error => alert(error.message))
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 10 }}>
        <MaterialCommunityIcons
          name="chevron-left"
          style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Profil</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={{ position: 'absolute', right: 10 }}>
        <MaterialCommunityIcons
          name="cart"
          style={{
            fontSize: 18,
            color: COLOURS.backgroundMedium,
            padding: 12,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
          }}
        />
      </TouchableOpacity>
    </View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={foto}
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
      />
      <Text style={styles.infoText}>Email: {auth.currentUser?.email}</Text>
      <Text style={styles.infoText}>Nomor Telp: 081368620646</Text>
    </View>

    <TouchableOpacity style={styles.logoutButton} onPress= {handleSignOut}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Logout</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
header: {
  backgroundColor: COLOURS.primary,
  height: 50,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
},
infoText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
logoutButton: {
  backgroundColor: '#1A4CFF',
  height: 50,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
},
});
