import React, { Component } from 'react';
import {FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Item, Input, Tabs, Tab} from 'native-base';
import FlatListData from '../Data/FlatListData';

class FlatListItem extends Component {
    render() {
      const {flatListNameDrug, flatListUsesDrug, flatListQuantityDrug ,styleContent} = styles;
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
                        <View style={{flex :8}}>
                        <Body>
                            <Text style={flatListNameDrug}> {this.props.item.name} </Text>
                            <Text style={flatListUsesDrug}>
                                {this.props.item.medicineDescription}
                            </Text>
                        </Body>
                        </View>
                        <View>
                        <Right>
                            <Thumbnail  source={require('../img/test.png')}/>      
                            <Button transparent onPress={() => { alert(' Lượng thuốc trong kho còn nhiều ');}}>
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

export default class Storage extends Component {
    static navigationOptions={
        title: 'Thông Tin Kho Hàng',
    };
  render() {
    return (
      
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                
                <Container>
                
                    <View style={{flex: 9, marginTop: 5}}>
                        <FlatList
                            data={FlatListData}
                            renderItem={({item, index}) => {
                            return (
                                <FlatListItem item={item} index={index}></FlatListItem>
                            
                            );
                            }}>
                        </FlatList>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Button light
                            style={{ alignItems: 'center', justifyContent: 'center', padding: 30, 
                            width:180 , height:50, borderRadius: 100 }}
                            onPress={() => this.props.navigation.navigate('TwoTwo')}
                        >
                             <Icon name="cart" />
                            <Text style={{justifyContent: 'center', alignContent:'center', fontSize: 15, color:'blue'}}>Nhập Hàng</Text>
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
    flatListQuantityDrug:{
        color: 'blue',
        padding: 10,
        fontSize: 12,
    },
    styleContent: {
        flex: 1,
        flexDirection: 'column',
    },
  });
  