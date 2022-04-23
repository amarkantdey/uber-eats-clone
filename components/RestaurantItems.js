import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Punjab Grill",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/04/96/fa/ae/punjab-grill.jpg",
        categories: ["Indian","Chinese"],
        price: "$50",
        reviews: 400,
        rating: 4.1

    },
    {
        name: "Barbequeue Nation",
        image_url: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
        categories: ["Indian","Chinese","Arabic"],
        price: "$100",
        reviews: 2400,
        rating: 4.5

    },
    {
        name: "Madhuram",
        image_url: "https://content3.jdmagicbox.com/comp/mumbai/68/022pgl02068/catalogue/image-restaurant-and-bar-goregaon-west-mumbai-home-delivery-restaurants-41foj.jpg",
        categories: ["Vegetarian"],
        price: "$20",
        reviews: 230,
        rating: 4.8

    },
]

export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30}}>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white'}}>
                <RestaurantImage image={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
            ))}
            
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{
                uri: props.image
            }} 
            style={{ width: "100%", height: 250 }} 
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='#ffffff' />
        </TouchableOpacity>
    </>
    
)

const RestaurantInfo = (props) => (
    <View style={{ flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray'}}>30-45 min</Text>
        </View>      
        <View style={{ backgroundColor: '#eee', borderRadius:15, height: 30, width: 30, alignItems:'center', justifyContent: 'center'}}>
            <Text>{props.rating}</Text>
        </View>  
    </View>
    
)
