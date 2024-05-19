import React from 'react';
import {Text, StyleSheet, Image, View, Pressable} from 'react-native';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

const ItemList = ({item, onLongPress}) => {
  return (
    <Pressable onLongPress={onLongPress}>
      <Link style={styles.item} href={{pathname: '/edit', params: item}}>
        <View style={styles.content}>
          <Image source={{ uri: item.photo }} style={styles.image} />
          <View style={styles.contentText}>
            <Text style={styles.name} numberOfLines={1}>
              {item.firstName} {item.lastName}
            </Text>
            <Text style={styles.age} numberOfLines={1}>
              {item.age}
            </Text>
          </View>
        </View>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 0.5,
  },
  content: {flexDirection: 'row'},
  name: {color: Colors.black, fontSize: 16, marginBottom: 8},
  age: {color: Colors.gray},
  image: {width: 40, height: 40, borderRadius: 5},
  contentText: {flex: 1, marginLeft: 10},
});

export default ItemList;
