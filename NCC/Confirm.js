import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import {
    Container, List, ListItem, Thumbnail, Text,
    Left, Body, Right, Button, Icon, Item, Footer
} from 'native-base';

class FlatListItem extends Component {
    render() {
        const { flatListNameDrug, styleContent } = styles;
        const { item } = this.props;

        return (
            <View
                style={{
                    flex: 1,
                    borderRadius: 15,
                    elevation: 2,
                    margin: 5,
                    // flexDirection: 'column',
                    backgroundColor: '#fff',
                }}>
                {/* content */}

                <TouchableOpacity>
                    <View style={styleContent}>
                        <ListItem >
                            <View style={{ flex: 8 }}>
                                <Body>
                                    <Text style={flatListNameDrug}> {this.props.item.name} </Text>
                                </Body>
                            </View>
                            <View>
                                <Right>
                                    <Item>
                                        <TextInput
                                            style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20 }}
                                            value={item.sl.toString()}
                                            onChangeText={(value) => {
                                                this.props.changeHandler(this.props.index, Number(value))
                                            }}
                                        />
                                    </Item>
                                </Right>
                            </View>
                        </ListItem>
                    </View>

                </TouchableOpacity>

            </View>

        );
    }
}

export default class Confirm extends Component {
    static navigationOptions = {
        title: 'Xác Nhận Đơn Hàng',
    };

    //state = {dataList: FlatListData}

    constructor(props) {
        super(props);

        const { navigation } = this.props;

        this.state = { dataList: navigation.getParam('data') }
    }

    changeHandler(idx, value) {
        data = this.state.dataList.slice(0);
        data[idx].sl = value;

        this.setState({ dataList: data })
    }

    render() {
        //alert(this.state.dataList[0].sl);

        return (

            <Container>
                <View style={{ flex: 5, marginTop: 5 }}>
                    <FlatList
                        data={this.state.dataList}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index}
                                    changeHandler={this.changeHandler.bind(this)}
                                ></FlatListItem>
                            );
                        }}
                    >
                    </FlatList>

                </View>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={() => this.props.navigation.navigate('Market')}>
                        <Text>Continue</Text>
                    </Button>
                </Left>
                <View style={{ flex: 4 }}>
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
                            <Right style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Button transparent onPress={() => this.props.navigation.navigate('NoteTab3')}>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </View>
                <Footer>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
                        <Button light
                            style={{
                                alignItems: 'center', justifyContent: 'center', padding: 30,
                                width: 180, height: 50, borderRadius: 100
                            }}
                            onPress={() => { alert(' Đặt hàng thành công!!! '); }}



                        >
                            <Icon name="cart" />
                            <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 15, color: 'blue' }}>Xác Nhận</Text>
                        </Button>
                    </View>
                </Footer>

            </Container>


        );
    }
}
const styles = StyleSheet.create({
    flatListNameDrug: {
        color: 'black',
        padding: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatListUsesDrug: {
        color: '#616161',
        padding: 10,
        fontSize: 12,
    },
    flatListQuantityDrug: {
        color: 'blue',
        padding: 10,
        fontSize: 12,
    },
    styleContent: {
        flex: 1,
        flexDirection: 'column',



    },
});







