//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
//import all the basic component we have used
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Card, ListItem, Button, Input } from 'react-native-elements';
import axios from 'axios'



export default class DetailsScreen extends React.Component {

  constructor() {
    super();
    this.state = { listaItens: [] }

    this.refresh = this.refresh.bind(this);
  }

  refresh(Nome = '') {
    const search = Nome ? `&Nome__regex=/${Nome}/` : ''
    axios.get(`${this.props.navigation.state.params.otherParam}?sort=-createdAt${search}`)
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  componentDidMount() {
    this.refresh()
  }

  //Detail Screen to show from any Open detail button
  render() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    const otherParam = this.props.navigation.getParam('otherParam', 'some default value');

    return (
      <ScrollView>

        <Card title="#Produto">
          {
            this.state.listaItens.map(function (item) {
              return (
                item.Equipes.map(function (q) {
                  return (
                    <View>
                      <Text>{"\n"}Loja:</Text>
                      <Input placeholder={q.loja} />
                      <Text>{"\n"}Produto:</Text>
                      <Input placeholder={q.produto} />
                      <Text>{"\n"}Valor:</Text>
                      <Input placeholder={q.valor} />
                    </View>

                  );
                })
              );
            })
          }

<Text>{"\n\n"}</Text>


          <Button
            title="Continuar"
          />
        </Card>


      </ScrollView>

    );
  }
} 