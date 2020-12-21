import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Post from './post';

const styles = StyleSheet.create({
    container: {
 
    },
});


const PostList = ({ itemList}) => (
    <View>
        
        <FlatList
                numColumns={1}
                data={itemList}
                renderItem={({ item }) => <Post
                    title={item.title}
                    image={item.image}
                    location={item.location} 
                    description = {item.description}
                    description_long = {item.description_long}
                    reached = {item.reached}
                    goal = {item.goal}
                    
                />}
            />

    </View>
);

export default PostList;