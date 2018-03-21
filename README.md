# Usage
```javascript
import React from 'react'
import { ColumnChart} from 'react-native-svg-charts'

class ColumnChartExample extends React.PureComponent {

  render () {
    const data = [308, 1300, 230, 50, 1750, 500, 1200, 350, 0 ,0]

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
          width={250}
        />
      </View>
    )
  }
}
```