import React from "react";
import { Text, View } from 'react-native'
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from 'react-router-native'

const Main = () => (
        <View style={{ flexGrow: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' exact element={<RepositoryList />}/>
                <Route path='/signin' exact element={<Text>Working on it</Text>} />
            </Routes>
        </View>
    )


export default Main 