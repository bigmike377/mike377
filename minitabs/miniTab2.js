import React from 'react';
import { View, Modal } from 'react-native';
import {
    Container, Content, Button, Text,
    ListItem, List, Right, Left, Body, Thumbnail, Root
} from 'native-base';


export default class Tab2 extends React.Component {
    static navigationOptions = {
        title: 'Đơn Hàng',
    };


    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
        this.state = {
            content: true,
            modalVisible: false
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
                        <View>
                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onShow={this.componentHideAndShow}>
                                <View style={{ justifyContent: 'center', paddingTop: 300, paddingLeft: 40 }}>
                                    <Text style={{ fontSize: 20 }}> Bạn có muốn huỷ đơn hàng không? </Text>
                                    <Text></Text>
                                    <View style={{ paddingLeft: 65 }}>
                                        <Button full light
                                            style={{
                                                justifyContent: 'center', alignItems: 'center', padding: 30,
                                                width: 180, height: 50, borderRadius: 100,
                                            }}
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}>
                                            <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 20, color: 'red' }}> OK </Text>
                                        </Button>
                                        <Button
                                            style={{
                                                justifyContent: 'center', alignItems: 'center', padding: 30,
                                                width: 180, height: 50, borderRadius: 100
                                            }}
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}>
                                            <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 20 }}>Cancel</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={{ flex: 1 }}>
                            <List>
                                {this.state.content ? <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../img/Logo.jpg')} />
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
                                        {/* <Button full light
                                            onPress={this.componentHideAndShow}>
                                            <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 20, color: 'red' }}>Huỷ Đơn</Text>
                                        </Button> */}

                                        <Button full light
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 20, color: 'red' }}>Huỷ Đơn</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem> : null}
                            </List>
                        </View>
                    </Content>

                </Container>

            </Root>


        );
    }
}



