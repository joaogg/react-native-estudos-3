import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Header, Icon, Card, ListItem, Button } from 'react-native-elements';
import axios from 'axios'

const URL = 'https://www.meucblol.com/api/equipes/'

export default class pegadinha extends Component {
    constructor() {
        super();
        this.state = { listaItens: [] }

        this.refresh = this.refresh.bind(this);
    }

    refresh(Nome = '') {
        const search = Nome ? `&Nome__regex=/${Nome}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log('Erro ao recuperar os dados'); });
    }

    componentDidMount() {
        this.refresh()
    }

    //Detail Screen to show from any Open detail button
    render() {
        var c = 1;
        return (
            <ScrollView>
                <View style={styles.container}>

                </View>


                <Card title="#CBLOL 2019">
                    {
                        this.state.listaItens.map(function (item) {
                            return (
                                item.Equipes.map(function (q) {
                                    return (
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ width: 20, height: 50, marginTop: 8 }} >{c++}º</Text>
                                            <Image
                                                style={{ width: 45, height: 45, marginRight: 10 }}
                                                source={{ uri: 'https://www.meucblol.com/imagens/times/' + q.Equipe + '.png' }}
                                            />
                                            <Text style={{ width: 180, height: 50, marginTop: 8 }} >{q.Equipe}</Text>
                                            <Text style={{ width: 50, height: 50, marginTop: 8 }} >{q.Vitoria} - {q.Derrota}</Text>
                                        </View>

                                    );
                                })
                            );
                        })
                    }

                </Card>

                <Text>{"\n\n"}</Text>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
});