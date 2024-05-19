import { View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';

const HeaderRight = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
        <AntDesign name='search1' size={20} color={Colors.black} style={{ marginRight: 10 }} />
        <MaterialCommunityIcons name='dots-vertical' size={20} color={Colors.black} style={{ marginRight: 20 }} />
    </View>
  )
}

export default HeaderRight