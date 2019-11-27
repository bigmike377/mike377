import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Text,
    ListItem, Content, List, Tab, Tabs, TabHeading, Thumbnail, Toast, Root, Footer
} from 'native-base';


export default class TabThree extends React.Component {
    static navigationOptions = {
        title: 'Thông Tin Tài Khoản',
    };
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }

    render() {
        return (
            <Root>
                <Container>
                    {/* <Header >
                        <Thumbnail small source={require('../Image/Logo.jpg')} />  
                    </Header> */}
                    <Content >
                        <Content>
                            <ListItem onPress={() => this.props.navigation.navigate('Tab3')}>
                                <Left>
                                    <Icon name='refresh' />
                                    <Text>  Lịch sử đơn hàng</Text>
                                </Left>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.navigate('Storage')}>
                                <Left>
                                    <Icon name='keypad' />
                                    <Text>  Thông tin kho hàng</Text>
                                </Left>
                            </ListItem>
                        </Content>
                        <Content style={{ flex: 1 }}>
                            <List>
                                <ListItem onPress={() => this.props.navigation.navigate('NoteTab1')}>
                                    <Left>
                                        <Icon name='bookmarks' />
                                        <Text>  Chính sách chung</Text>
                                    </Left>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate('NoteTab2')}>
                                    <Left>
                                        <Icon name='pie' />
                                        <Text>  Quyền hạn riêng tư</Text>
                                    </Left>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate('NoteTab3')}>
                                    <Left>
                                        <Icon name='star' />
                                        <Text>  Thông tin hợp pháp</Text>
                                    </Left>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate('NoteTab4')}>
                                    <Left>
                                        <Icon name='chatboxes' />
                                        <Text>  Thông tin hỗ trợ</Text>
                                    </Left>
                                </ListItem>

                            </List>
                        </Content>
                    </Content>

                    <Footer>
                        <Button
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={{
                                alignItems: 'center', justifyContent: 'center', padding: 30,
                                width: 180, height: 50, borderRadius: 100
                            }}
                        >
                            <Text >Đăng Xuất</Text>
                        </Button>
                    </Footer>

                </Container>
            </Root>
        );
    }
}
