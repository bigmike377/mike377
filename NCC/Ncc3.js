/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Container, Content, Button, Text,
    Icon, ListItem, List, Right, Left, Body, Thumbnail,
} from 'native-base';


export default class NCC3 extends React.Component {
    static navigationOptions = {
        title: 'React Lab',
    };
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0"
        };
    }
    render() {
        return (
            <Container>
                {/* <Segment>
                    <Button first active>
                        <Text>Nhãn Hàng</Text>
                    </Button>
                    <Button last
                        onPress={() => this.props.navigation.goBack()}>
                        <Text>Nhà Cung Cấp</Text>
                    </Button>
                </Segment> */}
                <View style={{ flex: 9 }}>
                    <Content>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require('../img/test2.png')} />
                                </Left>
                                <Body>
                                    <Content>
                                        <Text>Danh Sách Sản Phẩm</Text>
                                        <Text note></Text>
                                        <Text note>REACT LAB</Text>
                                        <Text note></Text>
                                    </Content>
                                    <Content>
                                        <Text> - Cannabis - </Text>
                                        <Text note>(1200) Làm tăng hoạt động của hệ thống thần kinh trung ương và cơ thể.</Text>
                                        <Text> - Paracetamol - </Text>
                                        <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                        <Text> - Amoxicillin - </Text>
                                        <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                        <Text> - Pymenospain - </Text>
                                        <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>
                                        <Text> - Cannabis - </Text>
                                        <Text note>(1200) Làm tăng hoạt động của hệ thống thần kinh trung ương và cơ thể.</Text>
                                        <Text> - Paracetamol - </Text>
                                        <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                        <Text> - Amoxicillin - </Text>
                                        <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                        <Text> - Pymenospain - </Text>
                                        <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>
                                        <Text> - Paracetamol - </Text>
                                        <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                        <Text> - Lactulose - </Text>
                                        <Text note>(450) Lactulose là một loại đường không hấp thụ được sử dụng trong điều trị táo bón và bệnh não gan.</Text>
                                        <Text> - Amoxicillin - </Text>
                                        <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                        <Text> - Pymenospain - </Text>
                                        <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>
                                        <Text></Text>
                                    </Content>
                                </Body>

                            </ListItem>

                        </List>

                    </Content>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Button light
                        style={{
                            alignItems: 'center', justifyContent: 'center', padding: 30,
                            width: 180, height: 50, borderRadius: 100
                        }}
                        onPress={() => this.props.navigation.navigate('Market')}
                    >
                        <Icon name="cart" />
                        <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 15, color: 'blue' }}>Mua Hàng</Text>
                    </Button>
                </View>
                {/* <Button badge vertical
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
                        </Button> */}


            </Container>
        );
    }
}



