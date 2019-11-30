import React from 'react';
import {
    Container, Content,  Tabs, Tab,} from 'native-base';

import Tab1 from '../minitabs/miniTab1';
import Tab2 from '../minitabs/miniTab2';
import Tab3 from '../minitabs/miniTab3';
import FooterApp from '../components/FooterApp';


export default class TabOne extends React.Component {
    static navigationOptions = {
        title: 'Đơn Hàng',
    };

    render() {
        return (
            <Container>

                <Content>
                    <Tabs>
                        <Tab heading="Đơn Hàng">
                            <Tab1 />
                        </Tab>
                        <Tab heading="Đơn Chờ">
                            <Tab2 />
                        </Tab>
                        <Tab heading="Hoàn Thành">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Content>

            <FooterApp navigation ={this.props.navigation} />
            </Container>
        );
    }
}



