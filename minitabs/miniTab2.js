import React from 'react';
import {View} from 'react-native';
import {Fragment} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button,Text,Form, Item,Tabs, TabHeading, Tab,
        Input, Icon,ListItem, List, Right,Left,Title ,Body,CheckBox, Thumbnail, Toast, Badge, Root  } from 'native-base';


export default class Tab2 extends React.Component {
    static navigationOptions={
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
    }
    componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
    }

    render (){
        return (
            <Root>  
                <Container>         
                    <Content>           
                        <List>
                            {this.state.content ? <ListItem avatar>
                                <Left>
                                    <Thumbnail  source={require('../img/Logo.jpg')} /> 
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
                                        <Button  full light
                                        onPress={this.componentHideAndShow}> 
                                            <Text style={{justifyContent: 'center', alignContent:'center', fontSize: 20, color: 'red'}}>Huỷ Đơn</Text> 
                                    </Button> 
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem> :null}
                        </List>
                            
                    </Content>
                    
                    {/* <Footer>
                        <FooterTab>
                            <Button badge vertical 
                                onPress={() => this.props.navigation.navigate('First')}>
                                <Badge><Text>2</Text></Badge>
                                <Icon name="apps" />
                                <Text>Bảng tin</Text>
                            </Button>
                            <Button vertical active>
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
                    </Footer> */}

                </Container>
            </Root>    
            
        );
    }
}



