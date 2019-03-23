
import BaseView from 'frontend/Containers/BaseView'
import React from 'react'
import { FlatList, View, Platform } from 'react-native'
import { icBar } from 'utils/globalIcons'
import styles from './styles'
import PropTypes from 'prop-types'

import TopComponent from './Components/TopComponent'
import BottomComponent from './Components/BottomComponent'


export const HomeView = ({ navigation, onSelecrItem ,itemSelected,itemDateSelected, data,clientState, gotoDetail }) => {
  return (
    <BaseView
      isHeader={false}
      title='HomeScreen'
      rightAction={() => navigation.toggleDrawer()}
      rightIcon={icBar}
    >

      <View style={styles.body}>
        <TopComponent 
          data={data}
          itemSelected={itemSelected}
          onSelecrItem={onSelecrItem}
          />
        <BottomComponent 
          data={data} 
          gotoDetail={gotoDetail}
          itemSelected={itemSelected}
          itemDateSelected={itemDateSelected}
          />
      </View>
    </BaseView>
  )
}

HomeView.defaultProps = {
  navigation: {},
  gotoDetail: (clients) => {},
  clientState: {}
}

HomeView.propTypes = {
  navigation: PropTypes.object,
  gotoDetail: PropTypes.func,
  clientState: PropTypes.object
}
