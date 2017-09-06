'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed up!')
  $('#message').text('Successfully Signed Up!')
}

const signUpFailure = function (error) {
  console.log('not working')
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed In!')
  $('#message').text('Successfully Signed In!')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error, Please try again!')
}

const signOutSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Out!')
  $('#message').text('Successfully Signed Out!')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error Signing Out!')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  console.log('Successfully Changed Password!')
  $('#message').text('Successfully Changed Password!')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error, on change password')
}

const newGameSuccess = (data) => {
  store.game = data.game
  console.log(store.game.id)
  console.log(data)
  console.log('new game created')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess
}
