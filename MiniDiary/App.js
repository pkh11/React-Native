import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DiaryList from './pages/DiaryList';
import DiaryView from './pages/DiaryView';
import DiaryForm from './pages/DiaryForm';


DiaryList.navigationOptions = {
  headerShown: false,
}
DiaryView.navigationOptions = {
  headerShown: false,
}
DiaryForm.navigationOptions = {
  headerShown: false,
}

const Navigator = createStackNavigator({
  DiaryList,
  DiaryView,
  DiaryForm,
});

const AppContainer = createAppContainer( Navigator );

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      
        <AppContainer>

        </AppContainer>

    );
  }
}