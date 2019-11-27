/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { Fragment } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button, Text, Form, Item,
    Input, Icon, ListItem, List, Right, Left, Title, Body, CheckBox, Thumbnail, Toast, Badge, Segment
} from 'native-base';


export default class TabTwo extends React.Component {
    static navigationOptions = {
        title: 'Nhà Cung Cấp',
    };

    render() {
        return (
            <Container>
                <Content>
                    {/* <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Tên nhà cung cấp" />
                        <Icon name="cart" onPress={() => this.props.navigation.navigate('Market')} />
                    </Item> */}
                    <List>
                        <ListItem avatar onPress={() => this.props.navigation.navigate('NCC1')}>
                            <Left>
                                <Thumbnail source={require('../img/Logo.jpg')} />
                            </Left>
                            <Body>
                                <Text>IP AGRI LAB</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar onPress={() => this.props.navigation.navigate('NCC2')}>
                            <Left>
                                <Thumbnail source={require('../img/test.png')} />
                            </Left>
                            <Body>
                                <Text>GEN LAB</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>16:20 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar onPress={() => this.props.navigation.navigate('NCC3')}>
                            <Left>
                                <Thumbnail source={require('../img/test2.png')} />
                            </Left>
                            <Body>
                                <Text>REACT LAB</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button badge vertical
                            onPress={() => this.props.navigation.navigate('First')}>
                            <Badge><Text>3</Text></Badge>
                            <Icon name="apps" />
                            <Text>Bảng tin</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('OneOne')}>
                            <Icon name="paper" />
                            <Text>Đơn</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>NCC</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Three')}>
                            <Icon name="person" />
                            <Text>Tài khoản</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>

        );
    }
}



