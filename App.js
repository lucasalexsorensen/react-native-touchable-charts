import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { ColumnChart } from './src'

export default class App extends React.Component {
  render() {
    const { width } = Dimensions.get('window')
    const data = [308, 1300, 230, 50, 1500, 500, 1200, 350, 0 ,0]
    const colors = ['#46b3f7', '#3386b9']

    return (
      <View style={styles.container}>
        <ColumnChart
          data={data}
          colors={colors}
          onLongPress={i => {
            const d = new Date()
            d.setDate(d.getDate() + i + 1)
            alert(d.toDateString())
          }}
          height={250}
          width={width * 0.85}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
