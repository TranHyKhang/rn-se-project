import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import DetailRoomScreen from '../screens/DetailRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoryRoomScreen from '../screens/CategoryRoomScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="DetailRoom" component={DetailRoomScreen}/>
            <Stack.Screen name="Category" component={CategoryRoomScreen}/>
        </Stack.Navigator>
    )
}
