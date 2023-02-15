import React from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (<View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Geting Weather...</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 90,
        backgroundColor: "#BDDACC",
    },
    text: {
        color: "#2A2539",
        fontSize: 30
    }
})