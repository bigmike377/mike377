import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Text, View,
    ListItem, Content, List, Tab, Tabs, TabHeading, Thumbnail, Toast, Root, Footer
} from 'native-base';


export default class NoteTab2 extends React.Component {
    static navigationOptions = {
        title: 'Quyền Hạn Riêng Tư',
    };
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    render() {
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 3 }}>

                <Thumbnail large source={require('../img/Logo.jpg')} />
            </View>
        );
    }
}
