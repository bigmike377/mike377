import React from 'react';
import { Text, Icon, Button, Footer, FooterTab } from 'native-base';

export default class FooterApp extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Footer>
                <FooterTab>
                    <Button vertical
                        onPress={() => navigate('First')}>
                        <Icon name="apps" />
                        <Text>Bảng tin</Text>
                    </Button>
                    <Button vertical
                        onPress={() => navigate('OneOne')}>
                        <Icon name="paper" />
                        <Text>Đơn</Text>
                    </Button>
                    <Button vertical
                        onPress={() => navigate('TwoTwo')}>
                        <Icon active name="navigate" />
                        <Text>NCC</Text>
                    </Button>
                    <Button vertical
                        onPress={() => navigate('Three')}>
                        <Icon name="person" />
                        <Text>Tài khoản</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}