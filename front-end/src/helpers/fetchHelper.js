export default (url, method = 'GET', body = {}) => {
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method, 
    body: body
  }).then(res => {
    return res.json();
  })
}