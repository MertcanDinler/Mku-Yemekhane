import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import styles from './styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.centerText}>Sunucuyla bağlantı kurulamadı.</Text>
  </View>
);