import { IOptions } from 'interfaces';

export const postUser = async (options:IOptions) => {
  const res = await fetch('https://condensate-backend.herokuapp.com/users', options)
  if (!res.ok) {
    throw Error('Failure to post new user')
  }
  return await res.json()
}

export const getUser = async (options:IOptions) => {
  const res = await fetch('https://condensate-backend.herokuapp.com/login', options)
  if (res.status !== 303) {
    throw Error('Failure to get user')
  }

  return await res.json()
}

export const getSetUp = async (options:IOptions) => {
  const res = await fetch('https://condensate-backend.herokuapp.com/game_setup', options)
  if (res.status !== 200) {
    throw Error('Failure to get game setup: words and examples')
  }
  return await res.json()
}

export const getDashboard = async (options:IOptions) => {
  const res = await fetch('https://condensate-backend.herokuapp.com/dashboard', options)
  if (!res.ok) {
    throw Error('Failure to get all brainstorms, actions, and categories')
  }
  return await res.json()
}

export const postBrainstorm = async (options:IOptions) => {
  const res = await fetch('https://condensate-backend.herokuapp.com/ideas', options)
  console.log(res)
  console.log(res.body)
  if (!res.ok) {
    throw Error('Failure to post brainstorm')
  }
  return await res.json()
}
