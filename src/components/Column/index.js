import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Column extends Component {
  render () {
    const { style } = this.props

    return (
      <TouchableOpacity
        onLongPress={this.props.onLongPress}
        activeOpacity={0.8}
        style={[styles.column, style]}
      />
    )
  }
}

Column.propTypes = {
  style: PropTypes.object,
  onLongPress: PropTypes.func
}
