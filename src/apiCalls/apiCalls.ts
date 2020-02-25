import { UserSignupPosting, IOptions } from 'interfaces';

export const postUser = async (options:IOptions) => {
  console.log(options)

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

export const getUser = async () => {
  const userToken = await fetch('')
}