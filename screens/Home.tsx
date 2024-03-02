import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
 
export const Home = () => {
    return (
        <SafeAreaView className="flex flex-1 items-center justify-center bg-secondary">
           <View >
                <Text className='text-xl font-bold'>Home page</Text>
           </View>
        </SafeAreaView>
    )
} 