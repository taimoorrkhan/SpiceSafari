import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BellIcon } from 'react-native-heroicons/outline/BellIcon'
export default function HomeScreen() {
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <StatusBar style="dark" />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})