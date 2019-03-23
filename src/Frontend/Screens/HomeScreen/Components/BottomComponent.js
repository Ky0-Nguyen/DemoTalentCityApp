import React from 'react';
import { Text, FlatList,View, StyleSheet, TouchableOpacity } from 'react-native';

import { width } from 'utils/globalStyles'
import ClientCell from './ClientCell'
import Swiper from 'react-native-swiper';


const BottomComponent = ({ data, gotoDetail, onChangeDate,itemSelected,  itemDateSelected }) => (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity 
            disabled={Number(itemDateSelected.id) === 0}
            style={styles.button} 
            onPress={() => {
              const iINdex  =  Number(itemDateSelected.id) - 1
              onChangeDate(iINdex)
            }} > 
            {
              Number(itemDateSelected.id) !== 0 && <Text style={styles.txtButton}>{`<`}</Text>
            }
          </TouchableOpacity>

          <Text style={styles.txtTime}>{`Ngày ${Number(itemDateSelected.id) +1}`}</Text>

          <TouchableOpacity
            disabled={Number(itemDateSelected.id) ===  itemDateSelected.preparation_needed.length - 1}
            onPress={()=>{
              const iINdex  =  Number(itemDateSelected.id || 0) + 1
              onChangeDate(iINdex)
            }} 
            style={[styles.button, { alignItems: 'flex-end' }]}
            >
            {
               Number(itemDateSelected.id) <  itemDateSelected.preparation_needed.length - 1 &&  <Text style={styles.txtButton}>{`>`}</Text>
            }
          </TouchableOpacity>
        </View>
        <View style={styles.containerContent}>
          <FlatList
            data={itemDateSelected.preparation_needed}
            keyExtractor={(_, index) => index.toString()}
            renderItem={(object) => ClientCell({ object, gotoDetail })}
          />
        </View>
    </View>
);

export default BottomComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
  },
  containerHeader: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  button: {
    width: width(25),
  },
  txtTime : {
    fontSize: 17,
    fontWeight: 'bold',
  },
  txtButton: {
    color: 'blue',
    fontSize: 20
  }
})