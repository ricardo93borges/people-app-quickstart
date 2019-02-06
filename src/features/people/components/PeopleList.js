import React, { Component } from "react"
import { FlatList, View } from "react-native"
import PropTypes from "prop-types"
import styles from "./style"
import PersonCard from "../components/PersonCard"

export default class PeopleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  _keyExtractor = item => `key${item.id}`

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.props.people}
          renderItem={({ item }) => <PersonCard person={item} />}
          refreshing={this.state.refreshing}
          ref={scrollview => (this.scrollview = scrollview)}
        />
      </View>
    )
  }
}

PeopleList.propTypes = {
  people: PropTypes.array,
  
}
