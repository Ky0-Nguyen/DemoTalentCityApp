
import ServerAPI from 'backend/api'
import { Observable } from 'rxjs'
import { actionsType, statusCode, strMessageTimeout, TIME_OUT, ttError } from 'utils/globalConstants'

export default (action$, store, dependencies) => {
  const fetchClient$ = action$.ofType(actionsType.FETCH_CLIENT).switchMap((action) => {
    console.log('action FETCH_CLIENT: ', action)
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getClient())
        .takeUntil(Observable.timer(TIME_OUT))
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_CLIENT))
        .mergeMap((response) => {
            console.log('response :', JSON.stringify(response))
            if (response &&response.status === statusCode.CODE_200) {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_CLIENT_SUCCESS, payload: { clients: response.data } })
                // Observable.of({ type: actionsType.FETCH_PLACES }) // Call next action if have
                // Observable.return(action.payload.callback())
              )
            } else {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_CLIENT_FAIL })
              )
            }
        })
    )
  })

  return Observable.merge(
    fetchClient$
  )
}
