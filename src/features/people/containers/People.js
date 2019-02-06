import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"
import { PropTypes } from "prop-types"
import axios from "axios"
import config from "../../../config/config"
import { storePeople } from "../actions/index"
import styles from "../styles/style"
import PeopleList from "../components/PeopleList"

class People extends Component {
  static navigationOptions = {
    title: "People",
    headerLeft: null
  }

  constructor(props) {
    super(props)
    //this.people = props.navigation.getParam("conversation", undefined)
  }

  componentDidMount = () => {
    this.props.getPeople()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pleopi App</Text>
        <PeopleList people={this.props.people} />
      </View>
    )
  }
}

const getPeople = async (dispatch) => {
  return axios
    .get(`${config.API_URL}/people`)
    .then(response => {
      dispatch(storePeople(response.data))
    })
    .catch(err => {
      console.log(err.message)
    })
}

const mapStateToProps = state => ({
    people: state.people.people
})

const mapDispatchToProps = dispatch => ({
    getPeople: () => getPeople(dispatch)  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People)

People.propTypes = {
  getMessages: PropTypes.func,  
}
