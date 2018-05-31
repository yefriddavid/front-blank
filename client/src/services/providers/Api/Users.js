//import { Request as req } from 'callcenter2_react_components'
import req from '../../Request'

export function collection() {
  return new Promise((resolve, reject) => {
    req.get('/users', {
        headers: {
          'Accept': 'application/json',
        }
      })
      .then(response => {
        resolve(response)
      })
  })
}
