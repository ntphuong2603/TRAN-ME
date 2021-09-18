import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WalkthroughList from '../../screens/walkthroughs/walkthoughList';
import { DIMENSION } from '../../utils/constant';
import HOC_Background from '../other_components/hoc_bg';

const width = DIMENSION.width

export default function WalkthroughComp ({index}) {

    let flatListRef = null


    useEffect(()=>{
      flatListRef.scrollToOffset({animated: true, offset: index * width})
    },[index])

    const items = WalkthroughList()

    return (
      <HOC_Background>
        <FlatList
          ref={ref=>flatListRef=ref}
          horizontal={true}
          style={styles.list}
          data={items}
          keyExtractor={item=>items.indexOf(item)}
          renderItem={({item})=>(
              <View style={[styles.item, {width}]}>
                  {item}
              </View>
          )}
          scrollEnabled={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </HOC_Background>
    )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    flex: 1,
  }
});