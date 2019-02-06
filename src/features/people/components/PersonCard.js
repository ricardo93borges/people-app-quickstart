import React from "react"
import { Text, View } from "react-native"
import styles from "./style"
import PropTypes from "prop-types"

const PersonCard = props => {
    return (
      <View>
          <Text>Name</Text>
          <Text>Age</Text>
      </View>
    )
}

PersonCard.propTypes = {
  person: PropTypes.object
}

export default PersonCard
