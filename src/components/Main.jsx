import React from "react";
import { Text, View } from 'react-native'
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch } from 'react-router-native'

const Main = () => {
    return (
        <View style={{ flexGrow: 1}}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin' exact>
                    <Text>Working on it</Text>
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main 