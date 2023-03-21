import api from './api'

export async function getMovie(id) {
  const { data: results } = await api.get('/movie/' + id)

  return results
}

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results
}

export async function getMoviesTop() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')
  return results
}

export async function getSeriesTop() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')
  return results
}

export async function getSeriesPopular() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getPeoplePopular() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  const newResults = results.map((item) => {
    return { ...item, poster_path: item.profile_path }
  })

  return newResults
}

export async function getMovieVideos(id) {
  const {
    data: { results }
  } = await api.get('/movie/' + id + '/videos')

  return results
}

export async function getCredits(id) {
  const {
    data: { cast }
  } = await api.get('/movie/' + id + '/credits')

  return cast
}

export async function getSimilar(id) {
  const {
    data: { results }
  } = await api.get('/movie/' + id + '/similar')

  return results
}
