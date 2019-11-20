import React, { Component } from 'react';
import { FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Item, Input, Tabs, Tab } from 'native-base';
import FlatListData from '../Data/FlatListData';

class FlatListItem extends Component {
    render() {
        const { flatListNameDrug, flatListUsesDrug, flatListQuantityDrug, styleContent } = styles;
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
                            <View style={{ flex: 2 }}>
                                <Left>
                                    <Item>
                                        <TextInput placeholder="0"
                                            style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20 }}
                                            value={this.props.item.sl}
                                            onChangeText={(value) => {
                                                this.props.changeHandler(this.props.index, Number(value))
                                                //this.props.item.quantity = Number(value)
                                                //alert(value);
                                            }} />
                                    </Item>

                                </Left>
                            </View>
                            <View style={{ flex: 8 }}>
                                <Body>
                                    <Text style={flatListNameDrug}> {this.props.item.name} </Text>
                                    <Text style={flatListUsesDrug}>
                                        {this.props.item.medicineDescription}
                                    </Text>
                                </Body>
                            </View>
                            <View>
                                <Right>
                                    <Thumbnail source={require('../img/test.png')} />
                                    <Button transparent onPress={() => { alert(' Lượng thuốc trong kho còn nhiều '); }}>
                                        <Text style={flatListQuantityDrug}> {this.props.item.quantity} </Text>
                                    </Button>
                                </Right>
                            </View>
                        </ListItem>
                    </View>

                </TouchableOpacity>

            </View>

        );
    }
}

export default class Market extends Component {
    static navigationOptions = {
        title: 'Thông Tin Đơn Hàng',
    };

    state = { dataList: FlatListData }

    changeHandler(idx, value) {
        data = this.state.dataList.slice(0);
        data[idx].sl = value;

        this.setState({ dataList: data })
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <Container>
                        <Content>
                            <Tabs>
                                <Tab disabled heading="So Luong">

                                </Tab>
                                <Tab disabled heading="Ten Thuoc">

                                </Tab>
                                <Tab disabled heading="Trong Kho">

                                </Tab>
                            </Tabs>
                        </Content>
                        <View style={{ flex: 9, marginTop: 5 }}>
                            <FlatList
                                data={this.state.dataList}
                                renderItem={({ item, index }) => {
                                    return (
                                        <FlatListItem item={item} index={index}
                                            changeHandler={this.changeHandler.bind(this)}
                                        ></FlatListItem>
                                    );
                                }}>
                            </FlatList>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Button light
                                style={{
                                    alignItems: 'center', justifyContent: 'center', padding: 30,
                                    width: 180, height: 50, borderRadius: 100
                                }}
                                onPress={

                                    () => {
                                        dataToDisplay = this.state.dataList.filter((v) => { return v.sl }).slice(0);

                                        //alert(this.state.dataList.filter((v)=>{return v.sl}).length)
                                        this.props.navigation.navigate('Confirm', { data: dataToDisplay })
                                    }
                                }
                            >
                                <Icon name="cart" />
                                <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 15, color: 'blue' }}>Nhập Hàng</Text>
                            </Button>
                        </View>
                    </Container>
                </View>
            </SafeAreaView>


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







// import React from 'react';
// import {View, Image, StyleSheet,ImageBackground} from 'react-native';
// import {Fragment} from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button,Text,Form, Item, Picker, 
//     Input, Icon,ListItem, List, Right,Left,Title ,Body,CheckBox,Thumbnail, Root ,Toast } from 'native-base';


// export default class Market extends React.Component {
//     static navigationOptions={
//         title: 'Thông Tin Đơn Hàng',
//     };
//     constructor(props) {
//         super(props);
//         this.state = {
//           selected: "key1"
//         };
//       }
//     onValueChange(value: string) {
//     this.setState({
//         selected: value
//     });
//     }  
//     onChanged(text){
//         let newText = '';
//         let numbers = '0123456789';

//         for (var i=0; i < text.length; i++) {
//             if(numbers.indexOf(text[i]) > -1 ) {
//                 newText = newText + text[i];
//             }
//             else {
//                 // trả về thông báo
//                 alert("Vui lòng nhập đúng định dạng");
//             }
//         }
//         this.setState({ myNumber: newText });
//     }
//     render (){
//         var {navigate} = this.props.navigation;
//         return (
//             <Root>
//                 <Container style={style.container}>
//                     <View style={{alignItems: 'center', justifyContent: 'center', flex: 2 }}>   

//                         {/* <Thumbnail large source={require('../Image/Logo.jpg')}  /> */}
//                     </View>  
//                     <View style={{flex: 8}}> 
//                         <Form>
//                             <Item>
//                                 <Input placeholder="Tên người mua" />
//                             </Item>
//                             <Item>
//                                 <Input placeholder="Số điện thoại" 
//                                     keyboardType='numeric'
//                                     onChangeText={(text)=> this.onChanged(text)}
//                                     value={this.state.myNumber}
//                                     maxLength={10}
//                                 />
//                             </Item> 
//                             <Item last>
//                                 <Input placeholder="Email" />
//                             </Item>
//                             <Item>
//                                 <Input placeholder=" Nhập số lượng và chọn loại thuốc " 
//                                     keyboardType='numeric'
//                                     onChangeText={(text)=> this.onChanged(text)}
//                                     value={this.state.myNumber}
//                                     maxLength={10} 
//                                 />
//                             </Item> 
//                             <Picker
//                                 mode="dropdown"
//                                 iosHeader="Chọn Thuốc"
//                                 iosIcon={<Icon name="arrow-down" />}
//                                 style={{ width: undefined }}
//                                 selectedValue={this.state.selected}
//                                 onValueChange={this.onValueChange.bind(this)}
//                                 >
//                             <Picker.Item label="  - Lactulose -" value="key0" />
//                             <Picker.Item label="  - Amoxicillin -" value="key1" />
//                             <Picker.Item label="  - Pymenospain -" value="key2" />
//                             <Picker.Item label="  - Paracetamol -" value="key3" />
//                             <Picker.Item label="  - Canabis -" value="key4" />
//                             </Picker>
//                             <ListItem>
//                                 <CheckBox/>
//                                 <Body>
//                                     <Text>Xác nhận đặt hàng</Text>
//                                 </Body>
//                             </ListItem>
//                         </Form>



//                         <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//                             <Button 
//                                 title="Go back"
//                                 onPress={() =>
//                                     Toast.show({
//                                         text: "Lỗi đặt hàng, vui lòng nhập lại.",
//                                         position: "top",
//                                         buttonTextStyle: { color: "#008000" },
//                                         buttonStyle: { backgroundColor: "#5cb85c" }
//                                     })} 
//                                 style={{ alignItems: 'center', justifyContent: 'center', padding: 30, 
//                                 width:180 , height:50, borderRadius: 100 }}
//                             >
//                                 <Text style={{justifyContent: 'center', alignContent:'center', fontSize: 15}} >Đặt Hàng</Text>
//                             </Button>

//                         </View> 

//                     </View>

//                 </Container>
//             </Root>

//         )
//     }
// }


// const style = StyleSheet.create({
//     container: {
//         color: 'red',
//     },
// })


