import React, { Component } from "react"
import { SafeAreaView } from "react-navigation"
import { ScrollView, Text, View, Image, TouchableHighlight } from "react-native"
import styles from "./style"
import NavigationService from "../../services/Navigation"
import { Feather } from "@expo/vector-icons"
import { PropTypes } from "prop-types"

export default class SideMenu extends Component {
  logout = async () => {
    NavigationService.navigate("Logout")
  }

  isCurrentRoute = routeKey => {
    let currentRoute = this.props.navigation.state.routes[this.props.navigation.state.index]
    return currentRoute.key == routeKey
  }

  getLabelStyle = routeKey => {
    if (this.isCurrentRoute(routeKey)) {
      return [styles.label, styles.labelActive]
    }
    return [styles.label, styles.labelInactive]
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <TouchableHighlight
            onPress={() => NavigationService.navigate("Forum")}
            underlayColor="#FAFAFA"
          >
            <View style={styles.item}>
              <Image style={styles.icon} source={require("../../assets/icons/forum.png")} />
              <Text style={this.getLabelStyle("Forum")}>Fórum</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => NavigationService.navigate("AddQuestion")}
            underlayColor="#FAFAFA"
          >
            <View style={[styles.item /* , styles.subitem */]}>
              <Feather style={styles.icon} name="plus" size={24} color="#273a8c" />
              <Text style={this.getLabelStyle("AddQuestion")}>Criar tópico</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => NavigationService.navigate("ConversationNavigation")}
            underlayColor="#FAFAFA"
          >
            <View style={styles.item}>
              <Feather
                name="message-circle"
                size={22}
                color="#273a8c"
                style={[styles.icon, styles.logoutIcon]}
              />
              <Text style={styles.label}>Chat</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.logout()} underlayColor="#FAFAFA">
            <View style={styles.item}>
              <Image
                style={[styles.icon, styles.logoutIcon]}
                source={require("../../assets/icons/logout.png")}
              />
              <Text style={styles.label}>Sair</Text>
            </View>
          </TouchableHighlight>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
}
