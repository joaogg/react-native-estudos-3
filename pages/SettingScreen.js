import React, { Component } from 'react';
import { Button, Platform, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Text, View, ScrollView } from 'react-native';
import { Header, Icon, Card, Image, ListItem } from 'react-native-elements';

const URL = 'https://www.meucblol.com/api/login/'

export default class SettingsScreen extends Component {

  constructor() {
    super();
    this.state = { email: '', loading: false, disabled: false }
    this.state = { listUser: [] }

  }

  saveData = () => {
    this.setState({ loading: true, disabled: true }, () => {
      fetch('https://www.meucblol.com/api/login/',
        {
          method: 'POST',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              email: this.state.email,
            })

        }).then((response) => response.json()).then((responseJson) => {

          alert(responseJson);

          this.setState({ listUser: responseJson });
          this.setState({ loading: false, disabled: false });
        }).catch((error) => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });
    });
  }


  render() {
    return (
      <ScrollView>

        <Card>
          <TextInput underlineColorAndroid="transparent" placeholder="Digite seu E-mail" onChangeText={(text) => this.setState({ email: text })} />

          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            onPress={this.saveData}
            title='Login' />


          {
            (this.state.loading)
              ?
              (<ActivityIndicator size="large" />)
              :
              null
          }


          {
            this.state.listUser.map(function (item) {
              return (
                <ListItem
                  roundAvatar
                  title={item.meutime}
                  subtitle={item.email}
                />
              );
            })
          }

        </Card>

        <Text>{"\n\n"}</Text>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      paddingHorizontal: 25,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    textInput:
    {
      height: 40,
      borderWidth: 1,
      borderColor: 'grey',
      marginVertical: 5,
      alignSelf: 'stretch',
      padding: 8,
      fontSize: 16
    },

    Btn:
    {
      backgroundColor: 'rgba(0,0,0,0.6)',
      alignSelf: 'stretch',
      padding: 10,
      marginTop: 10,
      marginBottom: 25
    },

    btnText:
    {
      textAlign: 'center',
      color: 'white',
      fontSize: 16
    }
  });