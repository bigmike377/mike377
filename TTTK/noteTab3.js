import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Text, View,
    ListItem, Content, List, Tab, Tabs, TabHeading, Thumbnail, Toast, Root, Footer
} from 'native-base';
import { TextInput } from 'react-native';



export default class NoteTab3 extends React.Component {
    static navigationOptions = {
        title: 'Thông Tin Hợp Pháp',
    };
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container>
                    {/* <View style={{ alignItems: 'center', justifyContent: 'center', flex: 4 }}>
                        <Thumbnail large source={require('../img/Logo.jpg')} />
                    </View> */}
                    <View style={{ flex: 6 }}>
                        <List>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={require('../img/avatar.png')} />
                                </Left>
                                <Body>
                                    <Text>Nhà Thuốc An Khánh</Text>
                                    <Text note numberOfLines={4}>Its time to build a difference . .</Text>
                                    <Text note
                                        onChangeText={text => onChange({ text })}>
                                        Today is a new day</Text>
                                    <TextInput placeholder="Nguyen Van Luong"></TextInput>
                                    <TextInput placeholder="+84096111234"></TextInput>
                                    <TextInput placeholder="Ha Noi, Viet Nam"></TextInput>
                                </Body>

                            </ListItem>
                        </List>
                    </View>
                </Container>
            </View>

        );
    }
}
