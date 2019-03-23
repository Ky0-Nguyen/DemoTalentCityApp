
import { StyleSheet,Platform } from 'react-native'
import { width } from 'utils/globalStyles'

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS ==='ios' ? 20 :0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default styles
