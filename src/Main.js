import React from "react";
import {Text, View, AsyncStorage, SafeAreaView} from "react-native";
import TextAdd from "./TextAdd";
import ColorButton from "./ColorButton";

import Crypto from './Crypto';
import {privateToPublic} from 'ethereumjs-util';


export default class Main extends React.Component {

  static navigationOptions = {
    title: 'Main'
  };

  state = {
    username: 'Colin',
    password: '123',
  }

  _handlePress = async () => {

    const {username, password} = this.state;
    if (username === '' || password === '') {
      return
    }
    const account = await global.web3.eth.accounts.create();

    console.log('account.privateKey', account.privateKey)


    const privateKey = new Buffer(account.privateKey.substring(2), 'hex');
    console.log('privateKey', privateKey)
    const publicKey = privateToPublic(privateKey);
    console.log('publicKey', publicKey.toString())

    const keystore = account.encrypt(password);
    const data = {
      username: username,
      password: password,
      privateKey: Crypto.encrypt(password, account.privateKey),
      address: account.address,
      keystore: keystore,
      publicKey: publicKey,
    };
    console.log('setItem data', data)
    await AsyncStorage.setItem(username, JSON.stringify(data));
  }

  _next = () => {
    this.props.navigation.navigate('Select')
  }

  render () {

    return (
      <SafeAreaView style={{flex: 1, alignItems: "center",}}>
        <TextAdd
          title={'username'} placeholder={'please tap in username'}
          onChangeText={(text) => {
            this.setState({username: text});
          }}
        />
        <TextAdd
          title={'password'} placeholder={'please tap in password'}
          onChangeText={(text) => {
            this.setState({password: text});
          }}
        />

        <ColorButton
          text={' Create Account '}
          onPress={() => this._handlePress()}/>

        <ColorButton
          text={' NextPage '}
          onPress={() => this._next()}/>
      </SafeAreaView>
    );
  }
}
