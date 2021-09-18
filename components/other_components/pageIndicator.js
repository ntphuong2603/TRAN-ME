import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function PaginationIndicator (props) {

    const renderItem = (index, selected) => {
        const style = [styles.base]
        if (selected) style.push(styles.selected)
        return (
            <View key={index} style={style}/>
        )
    }

    const renderIndicators = () => {
        const length = props.length
        const current = props.current
        const indicators = []
        for (let i = 0; i < length; i++){
            indicators.push(renderItem(i, i === current))
        }
        return indicators
    }

    return(
        <View style={styles.container}>
            {renderIndicators()}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'    
  },
  base: {
    width: 8,
    height: 8,
    borderRadius: 5,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginHorizontal: 5,
    backgroundColor: '#D9D9D9'
  },
  selected: {
    width: 30,
    height: 8,
    borderRadius: 6,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor: '#244495'
  }
})