import React from "react";
import { Image, View, StyleSheet } from 'react-native'
import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
    
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 4,
        marginVertical: 4,
        overflow: "hidden"
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
    
})

const RepositoryItemHeader = (props) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10}}>
                <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
            </View>
            <View style={{ flex: 1 }}>
                <StyledText fontWeight='bold'>{props.fullName}</StyledText>
                <StyledText color='secondary'>{props.description}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryItemHeader;