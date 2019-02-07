import React from "react"
import { Text, View } from "react-native"
import styles from "./style"
import PropTypes from "prop-types"

const PersonCard = props => {
    return (
      <View style={styles.card}>
          <Text>{props.person.name}</Text>
          <Text>{props.person.age}</Text>
          <Text>{props.person.birth_at}</Text>
      </View>
    )
}

PersonCard.propTypes = {
  person: PropTypes.object
}

export default PersonCard
