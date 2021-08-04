import React,{useEffect,useState} from 'react'
import { SafeAreaView, Text, View, Button, TextInput } from 'react-native';

export default function List({getItems}){
    const [items,setItems] = useState([])

    useEffect(
        ()=>{
            setItems(getItems(5))
            console.warn('Updating Items')
        },[getItems]
    )
    return items.map(item=><Text key={item}>{item}</Text>)
}
