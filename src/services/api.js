import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '2a51b144b0d9fcbeadf79af09bd3e1f2',
    language: 'pt-BR'
  }
})

export default api
