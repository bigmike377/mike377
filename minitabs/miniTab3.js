import React from 'react';
import {
    Container, Content, Text,
    ListItem, List, Right, Body
} from 'native-base';


export default class Tab3 extends React.Component {
    static navigationOptions = {
        title: 'Đơn Hàng',
    };

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem avatar>


                            <Body>
                                <Text> Paracetamol </Text>
                                <Text note>(300) Paracetamol - thuốc có tác dụng hạ sốt và giảm đau.</Text>
                                <Text> Lactulose </Text>
                                <Text note>(450) Lactulose là một loại đường không hấp thụ được sử dụng trong điều trị táo bón và bệnh não gan.</Text>
                                <Text> Amoxicillin </Text>
                                <Text note>(500) Kháng sinh hữu ích trong điều trị một số bệnh nhiễm khuẩn.</Text>
                                <Text> Pymenospain </Text>
                                <Text note>(200) Các tác dụng phụ hiếm gặp như buồn nôn, chóng mặt, đau đầu, trống ngực.</Text>
                                <Text></Text>

                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>

                            </Right>
                        </ListItem>
                    </List>
                </Content>

            </Container>
        );
    }
}



