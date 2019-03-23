import moment from 'moment'
/**
* NAME: convertTimestampToDateTime
* PARAMS: timestamp
* Convert from timeStamp to MM/DD h:mma
*/
export const convertTimestampToYearDateTime = (strTimestamp) => {
  let strTime = moment(strTimestamp * 1000).format('MM/DD/YYYY HH:mm')
  return strTime
}