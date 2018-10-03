/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';

export default class Column extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    style: PropTypes.object,
    onLongPress: PropTypes.func
  }

  render () {
    const { style } = this.props

    return (
      <TouchableOpacity
        onLongPress={this.props.onLongPress}
        activeOpacity={0.8}
        style={[styles.column, style]}
      >
      </TouchableOpacity>
    )
  }
}