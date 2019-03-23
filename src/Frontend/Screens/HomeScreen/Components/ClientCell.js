
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import {width}  from 'utils/globalStyles'
import { convertTimestampToYearDateTime } from 'utils/globalFunctions'

const ClientCell = ({ object, gotoDetail }) => {
  const client = object.item
  return (
    <TouchableOpacity
      onPress={() => gotoDetail(client)}
      style={styles.cell}>
      <Text style={styles.txtTitle}>{convertTimestampToYearDateTime(client.start_time)}</Text>
      <Text style={styles.txtDescription}>{client.description} <Text style={styles.txtMore}>...More</Text></Text>
    </TouchableOpacity>
  )
}
export default ClientCell

ClientCell.defaultProps = {
  object: {},
  gotoDetail: (client) => {}
}

ClientCell.propTypes = {
  object: PropTypes.object,
  gotoDetail: PropTypes.func
}

const styles  = StyleSheet.create({
  cell: {
    paddingLeft: 10,
    width: width(100),
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    borderBottomColor: 'gray',
  },
  txtTitle: {
    fontSize: 17, 
    color : '#111',
    fontWeight: 'bold',
  },
  txtMore: {
    color: 'blue'
  }
})
