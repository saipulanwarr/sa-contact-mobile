import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';

const Button = ({onPress, title}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  text: {textAlign: 'center', color: Colors.white, fontSize: 16},
});

export default Button;
