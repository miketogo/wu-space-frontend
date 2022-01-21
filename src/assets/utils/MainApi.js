
class MainApi {
  constructor({ baseUrl }) {
    this._BASE_URL = baseUrl
  }

  getTimeTable() {
    return fetch(`${this._BASE_URL}/yaclients/time-table`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(this._checkResponse)
  };


  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    else {
      var statusCode = res.status
      return res.json().then((res) => {
        return Promise.reject({
          statusCode: statusCode,
          message: res.message
        })
      })
    }
    ;
  }

}

const mainApi = new MainApi({
  baseUrl: 'http://wu-space.ru/api'
  // baseUrl: 'http://localhost:3003'
});
export default mainApi
