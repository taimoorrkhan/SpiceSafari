import { SafeAreaView, View, Text, Image } from 'react-native'
import React,{useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
export default function WelcomeScreen() {
  const ringOnePadding = useSharedValue(0)
  const ringTwoPadding = useSharedValue(0)
  const navigation = useNavigation()

  useEffect(() => {
    ringOnePadding.value = 0;
    ringTwoPadding.value = 0;
    setTimeout(() => ringOnePadding.value = withSpring(hp(5)), 100)
    setTimeout(() => ringTwoPadding.value = withSpring(hp(6)), 300)

    setTimeout(() => navigation.navigate('HomeScreen'), 1000)
  }, [])
  return (
    <SafeAreaView className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="auto" />
      < Animated.View className="bg-white/20  rounded-full " style={{ padding: ringTwoPadding }} >
        < Animated.View className="bg-white/20 rounded-full " style={{ padding: ringOnePadding }} >
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{ width: hp(20), height: hp(20) }}
          />
        </ Animated.View>
      </ Animated.View>
      {/* 
      title and subtitle
       */}
      <View className="flex items-center space-y-2">
        <Text style={{
          fontSize: hp(7)
        }} className="font-bold text-white -tracking-widest">Foody</Text>
        <Text style={{
          fontSize: hp(2)

        }} className="font-medium text-white tracking-widest ">Food is always Right</Text>
      </View>

    </SafeAreaView>
  )
}

