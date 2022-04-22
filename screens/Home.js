import React from 'react'
import HeaderTabs from '../components/HeaderTab'
import { SafeAreaView, StatusBar,  StyleSheet, View } from 'react-native'
import SearchBar from './../components/SearchBar';
import Categories from './../components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight,
        backgroundColor: "#eee"
    },
    header: {
        backgroundColor: "white", 
        padding: 15
    }
})