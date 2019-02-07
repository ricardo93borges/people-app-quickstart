import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text, Button } from "react-native"
import { PropTypes } from "prop-types"
import axios from "axios"
import config from "../../../config/config"
import { storePeople } from "../actions/index"
import styles from "../styles/style"
import PeopleList from "../components/PeopleList"
import NavigationService from "../../../services/Navigation"

class People extends Component {
    static navigationOptions = {
        title: "People",
        headerLeft: null
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.props.getPeople()
    }

    redirect = () => {
        NavigationService.navigate("AddPeople", {myParam:'my param from People component'})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>PLEOPI APP</Text>
                <View style={styles.content}>
                    <Button
                        onPress={() => this.redirect()}
                        title="Add Person"
                        color="#841584"
                    />
                    <PeopleList people={this.props.people} getPeople={this.props.getPeople} />
                </View>
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