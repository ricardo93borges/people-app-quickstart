import React from 'react';
import { StyleSheet } from 'react-native';
import { initStore } from "./redux/store"
import { Provider } from "react-redux"
import NavigationService from "./src/services/Navigation"
import AppStackNavigator from "./src/components/menu/menu"

const store = initStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
