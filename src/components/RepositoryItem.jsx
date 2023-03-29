import React from "react";
import { View, StyleSheet } from 'react-native'
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStats"


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})

const RepositoryItem = (props) => (
    <View key={props.id} style={ styles.container }>
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>
)
export default RepositoryItem