import * as conf from '../../config'
import req from '../../Request'


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



