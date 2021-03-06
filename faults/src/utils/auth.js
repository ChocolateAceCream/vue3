import Cookies from 'js-cookie'

const TokenKey = '_np_designer_user_token'

export function hasToken() {
  return !!Cookies.get(TokenKey)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
