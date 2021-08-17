// React Native Show Message for empty FlatList
// https://aboutreact.com/react-native-show-message-for-empty-flatlist/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';

const App = () => {
    const [dataSource, setDataSource] = useState([]);

    const EmptyListMessage = ({ item }) => {
        return (
            // Flat List Item
            <Text
                style={styles.emptyListStyle}
                onPress={() => getItem(item)}>
                No Data Found
            </Text>
        );
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={dataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                //Message to show for the Empty list
                ListEmptyComponent={EmptyListMessage}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default App;
