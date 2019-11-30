import React from 'react';
import {Image} from 'react-native';
import { Text, Card, CardItem, Icon, Left ,Body, Thumbnail } from 'native-base';


function CardNews(props){
    const { item } = props;

    return (
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
    )
}

export default CardNews;
