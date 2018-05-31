// import * as conf from '../../config'
import { Request as req } from 'callcenter2_react_components'


export function ping () {
  return new Promise((resolve, reject) => {
    req.get('/ping', {
        headers: {
          'Accept': 'application/json',
        }
      })
      .then(response => {
        resolve(true)
      })
  })
}
