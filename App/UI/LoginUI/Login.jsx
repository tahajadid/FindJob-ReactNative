import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Image source={require('../../../assets/icon.png')} 
              style={styles.loginImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:230,
    height:450
  }
})