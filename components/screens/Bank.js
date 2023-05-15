import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import BcaLogo from '../Logo/bca.png';
import BniLogo from '../Logo/bni.png';
import BriLogo from '../Logo/bri.png';
import MandiriLogo from '../Logo/mandiri.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOURS} from '../database/Database';

const Bank = (props) => {
  const [selectedBank, setSelectedBank] = useState('Mandiri');

  const handleBank = (bank) => {
    setSelectedBank(bank);
    props.navigation.navigate('MyCart', { selectedBank: bank });
  }
  const renderBankLogo = (bank) => {
    switch (bank) {
      case 'BCA':
        return <Image style={styles.bankLogo} source={BcaLogo} />;
      case 'BNI':
        return <Image style={styles.bankLogo} source={BniLogo} />;
      case 'BRI':
        return <Image style={styles.bankLogo} source={BriLogo} />;
      case 'Mandiri':
        return <Image style={styles.bankLogo} source={MandiriLogo} />;
      default:
        return null;
    }
}
  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: 10 }}>
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
      <Text style={styles.title}>Metode Pembayaran</Text>
    </View>
    <View style={styles.bankContainer}>
      <View style={styles.bankOption}>
        <TouchableOpacity style={styles.bankButton} onPress={() => handleBank('BCA')}>
          {renderBankLogo('BCA')}
          <Text style={styles.bankText}>BCA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bankOption}>
        <TouchableOpacity style={styles.bankButton} onPress={() => handleBank('BNI')}>
          {renderBankLogo('BNI')}
          <Text style={styles.bankText}>BNI</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bankOption}>
        <TouchableOpacity style={styles.bankButton} onPress={() => handleBank('BRI')}>
          {renderBankLogo('BRI')}
          <Text style={styles.bankText}>BRI</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bankOption}>
        <TouchableOpacity style={styles.bankButton} onPress={() => handleBank('Mandiri')}>
          {renderBankLogo('Mandiri')}
          <Text style={styles.bankText}>Mandiri</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
titleContainer: {
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 10,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
},
bankContainer: {
  alignItems: 'center',
  marginTop: 20,
},
bankOption: {
  marginBottom: 20,
},
bankButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  borderWidth: 1,
  borderRadius: 10,
  borderColor: '#ccc',
},
bankLogo: {
  width: 50,
  height: 50,
  marginRight: 10,
},
bankText: {
  fontSize: 18,
},
});

export default Bank;