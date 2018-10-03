import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

import Column from '../Column/index'

export default class ColumnChart extends Component {
  render () {
    const { data, colors, width, height } = this.props
    const barMargin = 2
    const unitGraduation = 10
    const columnWidth = Math.floor((width - (barMargin * 2 * data.length)) / data.length)
    const max = Math.max(...data)

    return (
      <View style={[styles.chart, {width, height}]}>
        {(new Array(unitGraduation)).fill(0).map((el, i) => {
          return <View key={i} style={{
            top: i * (height / unitGraduation),
            left: 0,
            height: 1,
            width,
            position: 'absolute',
            backgroundColor: '#dad9d4'}}>
            <Text style={{
              textAlign: 'right',
              alignSelf: 'flex-start',
              color: '#333',
              right: 28,
              top: -6
            }}>{max - ((max / unitGraduation) * i)}</Text>
          </View>
        })}

        <View style={{
          top: height,
          left: 0,
          zIndex: 25,
          height: 2,
          width,
          position: 'absolute',
          backgroundColor: '#333'}} />

        {data.map((el, i) => {
          return <Column
            key={i}
            onLongPress={this.props.onLongPress.bind(this, i)}
            style={{
              width: columnWidth,
              height: el / max * height,
              marginLeft: barMargin,
              marginRight: barMargin,
              backgroundColor: colors[(i % colors.length)]
            }}
          />
        })}

      </View>
    )
  }
}

ColumnChart.propTypes = {
  data: PropTypes.array,
  colors: PropTypes.array,
  onLongPress: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number
}
