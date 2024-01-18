import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../../components/categories';

import axios from 'axios'
import Recipes from '../../components/Recipes'
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Beef')
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, [])
  const handleChangeCategory = category => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }
  const getCategories = async () => {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got categories: ',response.data);
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  }
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      // console.log('got recipes: ',response.data);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  }
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="space-y-6 pt-14"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {/* Avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{ width: hp(5.5), height: hp(5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>
        {/* Greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(3.9) }} className="text-2xl font-bold">Hello, <Text className="text-amber-400">John</Text></Text>
          <View>
            {/* Make your Food magic */}
            <Text style={{ fontSize: hp(3.2) }} className="font-semibold text-neutral-600">Make your own Food magic,</Text>

          </View>
          <Text style={{ fontSize: hp(3.2) }} className="font-semibold text-neutral-600">
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>
        {/* SearchBar */}

        <View className="mx-4 flex-row  items-center bg-black/5 rounded-full  p-[6px]">
          <TextInput
            placeholder="Search for recipes"
            placeholderTextColor={'gray'}
            style={{ fontSize: hp(1.7) }}
            className=" flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <MagnifyingGlassIcon strokeWidth={3} size={hp(2.7)} color="gray" />
        </View>
        {/* categories */}
        <View>
          {categories.length > 0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />}
        </View>

        {/* recipes */}
        <View>

          <Recipes meals={meals} categories={categories} />
        </View>



      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})