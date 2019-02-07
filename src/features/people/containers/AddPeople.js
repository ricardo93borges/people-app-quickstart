import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"
import { PropTypes } from "prop-types"
import axios from "axios"
import config from "../../../config/config"
import styles from "../styles/style"
import { storePerson } from "../actions/index"
import AddPersonForm from "../components/AddPersonForm"
import NavigationService from "../../../services/Navigation"

class AddPeople extends Component {
  static navigationOptions = {
    title: "People",
    headerLeft: null
  }

  constructor(props) {
    super(props)
    this.myParam = props.navigation.getParam("myParam", undefined)
    console.log(this.myParam)

    this.state = {
      showLoading: false
    }
  }

  addPerson = async (name, age, birth_at) => {
    this.setState({showLoading:true})
    await this.props.addPerson(name, age, birth_at)
    this.setState({showLoading:false}, () => {
      NavigationService.navigate("People")
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ADD PERSON</Text>
        <View style={styles.content}>
          <AddPersonForm 
            handleAddPerson={this.addPerson}
            showLoading={this.state.showLoading} />
        </View>
      </View>
    )
  }
}

const addPerson = async (dispatch, name, age, birth_at) => {
  return axios
    .post(`${config.API_URL}/people`, {name, age, birth_at})
    .then(response => {
      dispatch(storePerson(response.data))
    })
    .catch(err => {
      console.log(err.message)
    })
}

const mapStateToProps = state => ({
  people: state.people
})

const mapDispatchToProps = dispatch => ({
  addPerson: (name, age, birth_at) => addPerson(dispatch, name, age, birth_at)  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPeople)

AddPeople.propTypes = {
  getMessages: PropTypes.func,  
}
