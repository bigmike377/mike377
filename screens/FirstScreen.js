import React from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text, DeckSwiper, Icon } from 'native-base';

import CardNews from '../components/CardNews';
import getCardNews from '../apis/getCardNews';
import FooterApp from '../components/FooterApp';


export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'Nhà Cung Cấp Nổi Bật',
    };

    state = { cards: getCardNews() }

    componentDidMount() {
        //const cards = await getCardNews();
        //this.setState({cards: getCardNews()})
    }
    constructor(props) {
		super(props);
	}

    render() {
        //alert(this.state.cards.length);
        const { cards } = this.state;

        //let newcards = [];
        //if(cards.length) newcards = [...cards];
        

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
                        renderItem={item => { return <CardNews item={item} /> }}
                    />

                </View>
                <Content></Content>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 40 }}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>PREV</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>NEXT</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>

                <FooterApp navigation={this.props.navigation} />



            </Container>
        );
    }
}



