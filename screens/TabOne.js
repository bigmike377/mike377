import React from 'react';
import { View } from 'react-native';
import { Fragment } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button, Text, Form, Item, Tabs, TabHeading, Tab,
    Input, Icon, ListItem, List, Right, Left, Title, Body, CheckBox, Thumbnail, Toast, Badge
} from 'native-base';

import Tab1 from '../minitabs/miniTab1';
import Tab2 from '../minitabs/miniTab2';
import Tab3 from '../minitabs/miniTab3';

export default class TabOne extends React.Component {
    static navigationOptions = {
        title: 'Đơn Hàng',
    };

    render() {
        return (
            <Container>

                <Content>
                    <Tabs>
                        <Tab heading="Đơn Hàng">
                            <Tab1 />
                        </Tab>
                        <Tab heading="Đơn Chờ">
                            <Tab2 />
                        </Tab>
                        <Tab heading="Hoàn Thành">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button badge vertical
                            onPress={() => this.props.navigation.navigate('First')}>
                            <Badge><Text>3</Text></Badge>
                            <Icon name="apps" />
                            <Text>Bảng tin</Text>
                        </Button>
                        <Button vertical active>
                            <Icon name="paper" />
                            <Text>Đơn</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('TwoTwo')}>
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



