import React, { Component } from "react";
import { View } from 'react-native'	import { View } from "react-native";
import { getMetricMetaInfo } from '../utils/helpers'	import { getMetricMetaInfo } from "../utils/helpers";


 export default class AddEntry extends Component {	export default class AddEntry extends Component {
  render() {	  render() {
    return (	    return <View>{getMetricMetaInfo("bike").getIcon()}</View>;