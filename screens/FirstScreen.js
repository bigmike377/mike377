import React from 'react';
import {View, Image} from 'react-native';
import {Fragment} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button,Text,Form, Item, DeckSwiper, Card, CardItem,
        Input, Icon,ListItem, List, Right,Left,Title ,Body,CheckBox, Thumbnail, Toast, Spinner, Badge   } from 'native-base';
        // khai báo các thẻ ảnh
        const cards = [
            {
              text: 'GEN LAB',
              name: '3000 like',
              image: require('../img/test.png'),
            },

            {
                text: 'IP AGRI LAB',
                name: '2434 like',
                image: require('../img/Logo.jpg'),
            },
              
            {
                text: 'REACT LAB',
                name: '2003 like',
                image: require('../img/test2.png'),
            },
          ];

export default class FirstScreen extends React.Component {
    static navigationOptions={
        title: 'Nhà Cung Cấp Nổi Bật',
    };
   
    render (){
        return (
            <Container>
        
                {/*         
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button>
                    <Text>Search</Text>
                    </Button>
                </Header> */}
                <View>
                    <DeckSwiper                                   //cấu hình các thẻ trong khung 
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards} 
                        renderEmpty={() =>
                        <View style={{ alignSelf: "center" }}>
                            <Text>Over</Text>
                        </View>
                        }
                        renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={item.image}  />
                                    <Body>
                                    <Text>{item.text}</Text>
                                    <Text note >MedApp.io</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={{ height: 300, flex: 1 }} source={item.image} />
                            </CardItem>
                            <CardItem>
                                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                        }
                        />
                        
                </View>
                <Content></Content>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between',padding:40}}>
                        <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                            <Icon name="arrow-back" />
                            <Text>PREV</Text>
                        </Button> 
                        <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                            <Text>NEXT</Text>
                            <Icon name="arrow-forward" />
                        </Button>
                </View>
               

                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="apps" />
                            <Text>Bảng tin</Text>
                        </Button>
                        <Button vertical 
                            onPress={() => this.props.navigation.navigate('OneOne')}>
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



