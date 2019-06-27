import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./Main";
import Web3 from "web3";
import Select from "./Select";



global.web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io/')
);

web3.eth.getBlock('latest').then(console.log)

const AppNavigator = createStackNavigator({
  Main,Select
});

export default createAppContainer(AppNavigator);
