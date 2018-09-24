//import axios from 'axios'
import Request from './Request'
import * as apiServices from './Api'


export const fetchInteract = (interactId) => {
  return Request.get(`/interactions/${interactId}`,
    {
      method:"GET",
      headers: {
        //'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  ).then(function (response){
    if(response.data.default_form_data === null)
      response.data.default_form_data = {}

    return response.data;
  });
};


export const fetchForm = (formId) => {
  //return axios.get("http://104.236.144.125:81/api" + `/form/${formId}`,
  return Request.get(`/forms/${formId}`,
    {
      method:"GET",
      headers: {
        'Accept': 'application/json'
      },
    }
  ).then(function (response){
    return response.data;
  });
};

export const fetchInteracts = (userId) => {

  /*return fetch("http://10.10.0.60:81/api/users", {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNhMWJiZjI4M2JmYzFlYmUwOTM4NGQ5ZjhhOWQ2NWNiMWYzOWVkNWIyYWQ4MDhiZmE4NzIwNWIwZjNmZDMyNzU2MjRlYzAwOGQ1ZjY1YTFkIn0.eyJhdWQiOiIzIiwianRpIjoiY2ExYmJmMjgzYmZjMWViZTA5Mzg0ZDlmOGE5ZDY1Y2IxZjM5ZWQ1YjJhZDgwOGJmYTg3MjA1YjBmM2ZkMzI3NTYyNGVjMDA4ZDVmNjVhMWQiLCJpYXQiOjE1MTA2MDYwNDIsIm5iZiI6MTUxMDYwNjA0MiwiZXhwIjoxNTQyMTQyMDQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.a2UntaOs0QGDUmWAxrZMCMOCigJTXCRO6uhtNLTzZ5M3ZU3re1p4sgXCxQ6VIVrLo-cXk_VB_5pPFhLHq6vgsUdqNkSthcxs6PtcISfwPfv9Eq4rozuP3RiKZxUrCEg84E7CtzzR2pMVGLTYadWM_5WwdKxZG-7SEDujrLnW0z-kiYO3BPv0fUtRJe1oHv5cPQB8MQZivt7PdCrZbH_-RxqpoMslVkohNLgBootEqa8uM1tlukRfiNn9sG7KAC7uKyuyhwRCKR79z9P60KVHnKKKz8fWn8M3DDJcQPlU9pvqKX5bO2jpD65x_AFX3hx0CgcH1wRf_YTG09ha1GjslTSRQgauneEI81Bg-IJEqtrrC2KoOchcEM51HMSavDd0jHLvRPkNLa1Z97pUuQY0ZyOW8w0Pmw3JhekU7cS_xSiDBT1aXQWlPBfPiW1qSBS2cMBMUwnBkzTba5H2cOSPr2R45GOQ7j_VNiaN27gFfBdfOkWTB3DxhXFRQ4OMi7n7IgAdocJhn0RE-3pkToQjTNofXjcMrsL8r0UsDUx3iyvB6PU_wZKQUApMKRkPDt_jFXnKzw63AULkzbh4Y7Cs-5PdfGGXv0zMk-6-EjiWR6cftunwBaaaZA0Te8jnwkJ7JiHkF-4-2s7jtFjF7LyQaDARmfmTJ2iUfeTTFijbGWQ' //,
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
  });*/

  return Request.get(`/users/${userId}/interactions`,
  //return axios.get(API_ENDPOINT + `/agents/25/interactions`,
    {
      method:"GET",
      headers: {
        //'Authorization': 'Bearer ' + apiServices.getAccessToken() //sessionStorage.getItem("access_token")
        'Authorization': 'Bearer ' sessionStorage.getItem("access_token")
        //'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  ).then(function (response) {
    return response.data;
    return [
          {id:1, isActive: true,phoneNumber:"+57 034 2221294",receiverFullName:"Jessica Daniela Rios Mora",origin:"xxxxx-xxx", type: "a"},
          {id:2, phoneNumber:"+57 034 2221294",receiverFullName:"Jessica Daniela Rios Mora",origin:"xxxxx-xxx", type: "b"},
          {id:3, isActive: false,phoneNumber:"+57 034 2221294",receiverFullName:"Carmen mora",origin:"xxxxx-xxx", type: "c"}
        ];


    return response.json().then(function (json) {
      return json.photos.photo.map(
        //({farm, server, id, secret}) => `https://farm.staticflickr.com/${server}/${id}_${secret}.jpg`
        ({farm, server, id, secret}) => `https://farm.staticflickr.com/`
      );
    })
  })
};
export const fetchInteracta = (interactId) => {
  return fetch(`/interacts/${interactId}`,
    {
      method: "GET",
      headers: {
        //'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  ).then(function (response) {
    return response;
    /*return response.json().then(function (json) {
      return json.photos.photo.map(
        //({farm, server, id, secret}) => `https://farm.staticflickr.com/${server}/${id}_${secret}.jpg`
        ({farm, server, id, secret}) => `https://farm.staticflickr.com/`
      );
    })*/
  })
};



