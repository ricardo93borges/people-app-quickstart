import { createStackNavigator } from "react-navigation"
import People from "../../features/people/containers/People"
import AddPeople from "../../features/people/containers/AddPeople"
import Person from "../../features/people/containers/Person"

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
    },
    Person: {
      screen: Person,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "Home",
    headerMode: "float"
  }
)

export default AppStackNavigator
