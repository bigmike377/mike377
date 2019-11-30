import React from 'react';
import { View, Text } from 'react-native';
import {
    Container, Content, Button,
    Icon, ListItem, List, Right, Left, Body, Thumbnail, Toast, Root
} from 'native-base';



export default class Tab1 extends React.Component {
    static navigationOptions = {
        title: 'Đơn Hàng',
    };
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
        this.state = {
            content: true
        };
        this.state = {
            show: true
        };

    }
    componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
    }


    render() {
        return (
            <Root>
                <Container>
                    <Content>
                        <List>
                            <View>
                                {this.state.content ? <ListItem avatar>
                                    <View >
                                        <Left style={{ flex: 2 }}>
                                            <Thumbnail source={require('../img/Logo.jpg')} />
                                        </Left>
                                    </View>
                                    <View style={{ flex: 8 }} >
                                        <Body>
                                            <Text> - Paracetamol - </Text>
                                            <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                            <Text> - Lactulose - </Text>
                                            <Text note>(450) Lactulose là một loại đường không hấp thụ được sử dụng trong điều trị táo bón và bệnh não gan.</Text>
                                            <Text> - Amoxicillin - </Text>
                                            <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                            <Text> - Pymenospain - </Text>
                                            <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>
                                            <Text></Text>

                                            <Text></Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                                                <Icon name="ios-checkmark-circle-outline" onPress={this.componentHideAndShow} />
                                                <Icon name="ios-chatbubbles" onPress={() =>
                                                    Toast.show({
                                                        text: "Xin vui lòng liên kiết tài khoản.",
                                                        position: "top",
                                                        buttonTextStyle: { color: "#008000" },
                                                        buttonStyle: { backgroundColor: "#5cb85c" }
                                                    })} />
                                                <Icon name="ios-close-circle-outline" onPress={this.componentHideAndShow} />
                                            </View>
                                        </Body>
                                    </View>
                                    <View>
                                        <Right style={{ flex: 2 }}>
                                            <Text note>3:43 pm</Text>
                                            <Button transparent onPress={() => { alert(' Lượng thuốc trong kho vẫn đủ '); }}>
                                                <Icon name='bulb' />
                                            </Button>
                                        </Right>
                                    </View>

                                </ListItem> : null}

                            </View>
                            <View>
                                {this.state.show ? <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../img/test.png')} />
                                    </Left>
                                    <Body>
                                        <Text> - Cannabis - </Text>
                                        <Text note>(1200) Làm tăng hoạt động của hệ thống thần kinh trung ương và cơ thể.</Text>
                                        <Text> - Paracetamol - </Text>
                                        <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                        <Text> - Amoxicillin - </Text>
                                        <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                        <Text> - Pymenospain - </Text>
                                        <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>
                                        <Text></Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                                            <Icon name="ios-checkmark-circle-outline" onPress={this.componentHideAndShow} />
                                            <Icon name="ios-chatbubbles" />
                                            <Icon name="ios-close-circle-outline" onPress={this.componentHideAndShow} />
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text note>4:20 pm</Text>
                                        <Button transparent onPress={() => { alert(' Lượng thuốc trong kho vẫn đủ '); }}>
                                            <Icon name='bulb' />
                                        </Button>
                                    </Right>
                                </ListItem> : null}
                            </View>
                            <View>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../img/test2.png')} />
                                    </Left>
                                    <Body>
                                        <Text> - Paracetamol - </Text>
                                        <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                        <Text> - Lactulose - </Text>
                                        <Text note>(450) Lactulose là một loại đường không hấp thụ được sử dụng trong điều trị táo bón và bệnh não gan.</Text>
                                        <Text> - Amoxicillin - </Text>
                                        <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                        <Text> - Pymenospain - </Text>
                                        <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>

                                        <Text></Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                                            <Icon name="ios-checkmark-circle-outline"
                                                onPress={() =>
                                                    Toast.show({
                                                        text: "Lỗi! Đơn hàng chưa được nhận.",
                                                        position: "top",
                                                        buttonTextStyle: { color: "#008000" },
                                                        buttonStyle: { backgroundColor: "#5cb85c" }
                                                    })}
                                            />
                                            <Icon name="ios-chatbubbles" />
                                            <Icon name="ios-close-circle-outline" onPress={this.componentHideAndShow} />
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                        <Button transparent onPress={() => { alert(' Lượng thuốc trong kho không đủ '); }}>
                                            <Icon name='bulb' style={{ color: 'red' }} />
                                        </Button>
                                    </Right>

                                </ListItem>
                            </View>

                        </List>
                    </Content>
                </Container>
            </Root>
        );
    }
}



