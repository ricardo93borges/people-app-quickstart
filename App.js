import React from 'react';
import { initStore } from "./redux/store"
import { Provider } from "react-redux"
import NavigationService from "./src/services/Navigation"
import AppContainer from "./src/components/menu/menu"

const store = initStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider>
    );
  }
}
