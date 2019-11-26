import * as React from 'react';
import { Button, View, Text, ImageBackground, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './screens/FirstScreen';
import Login from './screens/Login';
import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabThree';
import SignIn from './screens/SignIn';
import ForgotPass from './screens/ForgotPassword';
import NCC1 from './NCC/Ncc1';
import NCC2 from './NCC/Ncc2';
import NCC3 from './NCC/Ncc3';
import Tab3 from './minitabs/miniTab3';
import Tab2 from './minitabs/miniTab2';
import NoteTab1 from './TTTK/noteTab1';
import NoteTab2 from './TTTK/noteTab2';
import NoteTab3 from './TTTK/noteTab3';
import NoteTab4 from './TTTK/noteTab4';
import Storage from './TTTK/storageHouse';
import Market from './NCC/Market';
import Confirm from './NCC/Confirm';


class HomeScreen extends React.Component {
  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('Details')
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Chào mừng bạn đến với MedApp!</Text>

        {/* <Button
          title="Tiếp Tục"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}

      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: Login,
  SignIn: SignIn,
  ForgotPass: ForgotPass,
  First: FirstScreen,
  OneOne: TabOne,
  TwoTwo: TabTwo,
  Three: TabThree,
  NCC1: NCC1,
  NCC2: NCC2,
  NCC3: NCC3,
  Tab3: Tab3,
  Tab2: Tab2,
  NoteTab1: NoteTab1,
  NoteTab2: NoteTab2,
  NoteTab3: NoteTab3,
  NoteTab4: NoteTab4,
  Storage: Storage,
  Market: Market,
  Confirm: Confirm,
});

export default createAppContainer(RootStack);
