import { createAppContainer, createStackNavigator } from "react-navigation"
import People from "../../features/people/containers/People"
import AddPeople from "../../features/people/containers/AddPeople"
//import Person from "../../features/people/containers/Person"

const AppStackNavigator = createStackNavigator(
  {
    People: {
      screen: People,
      navigationOptions: {
        header: null
      }
    },
    AddPeople: {
      screen: AddPeople,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "People",
    headerMode: "float"
  }
)
const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer
