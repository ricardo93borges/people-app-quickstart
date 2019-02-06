import React, { Component } from "react"
import { connect } from "react-redux"
import { View } from "react-native"
import { PropTypes } from "prop-types"
import axios from "axios"
import config from "../../../config/config"
import { storePeople } from "../actions/index"
import PeopleList from "../components/PeopleList"

class Person extends Component {
  static navigationOptions = {
    title: "People",
    headerLeft: null
  }

  constructor(props) {
    super(props)
    //this.conversation = props.navigation.getParam("conversation", undefined)
  }

  componentDidMount = () => {
    this.props.getMessages(this.conversation.id, this.conversation.type)    
  }

  render() {
    return (
      <View>
        <Text>Pleopi App</Text>
        <PeopleList people={[]} />
      </View>
    )
  }
}

const getPeople = async (dispatch) => {
  dispatch(toggleLoading())
  let url = ''
  return axios
    .get(`${config.API_URL}/${url}`)
    .then(response => {
      dispatch(storePeople(response.data))
    })
    .catch(err => {
      console.log(err.message)
    })
}

const mapStateToProps = state => ({
    people: state.people
})

const mapDispatchToProps = dispatch => ({
    getPeople: () => getPeople(dispatch)  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person)

Person.propTypes = {
  getMessages: PropTypes.func,  
}
