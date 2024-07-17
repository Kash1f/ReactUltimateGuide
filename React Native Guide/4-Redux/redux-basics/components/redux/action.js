import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ADD_TO_CART} from './constants'

function addToCart(item){
  return {
    type:ADD_TO_CART
  }
}