import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

import Swiper from 'react-native-swiper';

import { width, height } from 'utils/globalStyles';

const TopComponent = ({ data, itemSelected, onSelecrItem }) => (
    <View style={styles.container}>
         <Swiper style={styles.wrapper} height={height(40)}
          onMomentumScrollEnd={(e, state, context) => {
            onSelecrItem(state.index) 
            console.log('index:', state.index, e, context)
          }}
          dot={<View style={{
            width: 5, 
            height: 5, 
            marginTop: 0, 
            marginLeft: 3, 
            marginRight: 3, 
            borderRadius: 4, 
            marginBottom: 3,
            backgroundColor: 'rgba(0,0,0,.2)', 
            }} 
            />
          }

          activeDot={<View style={{
            width: 8, 
            height: 8, 
            marginTop: 3, 
            marginLeft: 3, 
            marginRight: 3, 
            borderRadius: 4, 
            marginBottom: 3,
            backgroundColor: '#000', 
          }} />}
          paginationStyle={{
            left: null, right: 10
          }} 
          loop
          showsButtons
          >
          {
            data.map(item => (
              <View style={styles.slide} title={<Text style={{ marginTop: -160, color: '#fff' }} numberOfLines={1}>{item.title}</Text>}>
                <Image resizeMode='stretch' style={styles.image} source={{  uri: item.cover_photo }} />
              </View>
            ))
          }
        </Swiper>
        <View style={styles.containerDes}>
          <Text style={styles.txtDes}>{itemSelected && itemSelected.topDescription}</Text>
        </View>
    </View>
);

export default TopComponent;


const styles = StyleSheet.create({
  container: {
    height: height(50),
    width: width(100),
  },
  containerDes: {
    width: width(100),
    height: height(10), 
    backgroundColor: '#fff',
    justifyContent: 'center', 
  },
  wrapper: {
    backgroundColor: 'red'
  },
  txtDes: {
    color: '#111',
    fontSize: 13,
    left: 10
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: width(100),
    flex:1,
  }
})