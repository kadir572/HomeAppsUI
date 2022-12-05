import axios from 'axios'

export default axios.create({
  baseURL: 'https://home-apps-api.herokuapp.com/expense',
})
