import { IOptions } from 'interfaces';

export const postUser = async (options:IOptions) => {
  try {
    const res = await fetch('https://condensate-backend.herokuapp.com/users', options)
    if (!res.ok) {
      throw Error('Failure to post new user')
    }
    return await res.json()

  } catch(error) {
    throw Error(error)
  }
}

export const getUser = async (options:IOptions) => {
  try {
    const res = await fetch('https://condensate-backend.herokuapp.com/login', options)
    if (res.status !== 303) {
      throw Error('Failure to get user')
    }
    return await res.json()

  } catch(error) {
    throw Error(error)
  }
}

export const getSetUp = async () => {

}

export const getDashboard = async () => {

}

export const postBrainstorm = async (options:IOptions) => {
  try {
    const res = await fetch('https://condensate-backend.herokuapp.com/ideas', options)
    if (!res.ok) {
      throw Error('Failure to post brainstorm')
    }
    return await res.json()

  } catch(error) {
    throw Error(error)
  }
}