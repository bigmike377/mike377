import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container, Footer, FooterTab, Button, Text, Form, Item,
    Input, ListItem, Body, CheckBox, Thumbnail
} from 'native-base';


export default class Login extends React.Component {
    static navigationOptions = {
        title: 'MedApp',
    };
    render() {
        return (
            <Container style={style.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 3 }}>

                    <Thumbnail large source={require('../img/Logo.jpg')} />
                </View>
                <View style={{ flex: 7 }}>
                    <Form>
                        <Item>
                            <Input placeholder="admin" />
                        </Item>
                        <Item last>
                            <Input placeholder="*******" />
                        </Item>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Lưu mật khẩu</Text>
                            </Body>
                        </ListItem>
                    </Form>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Button
                            title="Go back"
                            onPress={() => this.props.navigation.navigate('First')}
                            style={{
                                alignItems: 'center', justifyContent: 'center', padding: 30,
                                width: 180, height: 50, borderRadius: 100
                            }}
                        >
                            <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 15 }} >Đăng Nhập</Text>
                        </Button>
                        <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 20, paddingTop: 10 }}
                            onPress={() => this.props.navigation.navigate('ForgotPass')}
                        >
                            Quên mật khẩu?</Text>

                    </View>

                </View>
                <Footer>
                    <FooterTab style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Bạn chưa có tài khoản?</Text>
                        <Text
                            onPress={() => this.props.navigation.navigate('SignIn')}
                            style={{ color: 'red' }}> Đăng ký tại đây.</Text>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}


const style = StyleSheet.create({
    container: {
        color: 'red',
    },
})


