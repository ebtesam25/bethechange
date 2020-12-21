import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Card from './card';

const styles = StyleSheet.create({
    container: {
 
    },
});

CardList = ({ itemList}) => (
    <View>
        
        <FlatList
                numColumns={2}
                data={itemList}
                renderItem={({ item }) => <Card
                    title={item.title}
                    image={item.image}
                    location = {item.location}
                    description={item.description} 
                    reached = {item.reached}
                    goal = {item.goal}
                    
                />}
            />

    </View>
);

export default CardList;