import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'bree-serif':
        require('./BreeSerif-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  onPress = () => {

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.state.fontLoaded ? (
          <Text style={styles.sitetitle}>
            My App
          </Text>
        ) : null}
        </View>

        <ScrollView>
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome to My App! Select an option to continue.</Text>

        </View>

        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor="#999">
            <Text style={styles.buttonText}>Do Something</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor="#999">
              <Text style={styles.buttonText}>Another Fun Feature</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor="#999">
            <Text style={styles.buttonText}>Press Me Too</Text>
          </TouchableHighlight>
        </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    paddingTop: 20,
    alignSelf: 'stretch',
  },
  sitetitle: {
    fontFamily: 'bree-serif',
    color: '#000000',
    textAlign: 'center',
    fontSize: 22
  },
  content: {
    padding: 15,
    backgroundColor: '#f95c13'
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttons: {
    padding: 10,
    marginTop: 5
  },
  button: {
    backgroundColor: '#cccccc',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    overflow: 'hidden'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 18
  }
});
