

const base_url = 'http://ec2-18-223-3-103.us-east-2.compute.amazonaws.com:4242/api'

function request_url(url_name) {
  return (
    `${base_url}/${url_name}`
  )
}

function url_config(data) {
  return ({
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export default { request_url, url_config }