import React, { Component } from "react"
import { View, Text, TextInput, Button, KeyboardAvoidingView, ActivityIndicator } from "react-native"
import PropTypes from "prop-types"
import styles from "./style"

export default class AddPersonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'Z maguinho',
      age:'1',
      birth_at:'2019-02-05'
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} enabled behavior="padding">
        <View style={styles.inputWrapper}>
          <Text>Nome</Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            returnKeyLabel="Next"
            returnKeyType="next"
            blurOnSubmit={true}
            onChangeText={ name => this.setState({name})}
            onSubmitEditing={() => {
              this.ageInput.focus()
            }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Idade</Text>
          <TextInput
            style={styles.input}
            value={this.state.age}
            returnKeyLabel="Next"
            returnKeyType="next"
            blurOnSubmit={true}
            onChangeText={ age => this.setState({age})}
            ref={input => (this.ageInput = input)}
            onSubmitEditing={() => {
              this.birthAtInput.focus()
            }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            value={this.state.birth_at}
            returnKeyLabel="Next"
            returnKeyType="next"
            blurOnSubmit={true}
            onChangeText={ birth_at => this.setState({birth_at})}
            ref={input => (this.birthAtInput = input)}
          />
        </View>
        <View style={styles.inputWrapper}>
          { this.props.showLoading ? 
            <ActivityIndicator size="small" color="#00ff00" /> :            
            <Button
              onPress={() => this.props.handleAddPerson(this.state.name, this.state.age, this.state.birth_at)}
              title="Submit"
              color="#841584"
            />
          }
        </View>
      </KeyboardAvoidingView>
    )
  }
}

AddPersonForm.propTypes = {
  handleAddPerson: PropTypes.func,
  showLoading: PropTypes.bool
}
