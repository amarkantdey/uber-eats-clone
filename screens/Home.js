import React, {useEffect} from 'react'
import HeaderTabs from '../components/HeaderTab'
import { SafeAreaView, ScrollView, StatusBar,  StyleSheet, View } from 'react-native'
import SearchBar from './../components/SearchBar';
import Categories from './../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';

const RAPID_API_KEY = "c7a4bc055dmshd96588c9958f966p1ebb37jsn392bf5e967bf"

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants)

  const getRestaurantsFromRapid = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "en_US");
    encodedParams.append("limit", "5");
    encodedParams.append("location_id", "297704");
    encodedParams.append("currency", "USD");

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
        'X-RapidAPI-Key': 'c7a4bc055dmshd96588c9958f966p1ebb37jsn392bf5e967bf'
      },
      body: encodedParams
    };

    fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
      .then(response => response.json())
      .then(response => {
        let a = response?.results?.data.map((data) => {
          return {
            name: data.name,
            image_url: data.photo?.images?.original?.url,
            categories: data.category?.name,
            price: data.price,
            reviews: data.num_reviews,
            rating: data.rating
          }
        })

        console.log('data',a)
        setRestaurantData(a)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getRestaurantsFromRapid();
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
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