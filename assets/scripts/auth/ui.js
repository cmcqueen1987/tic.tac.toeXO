'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed up!')
  $('#message').text('Successfully Signed Up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  console.log('not working')
  console.error(error)
  $('#message').text('Error on Sign-Up, Please Try Again')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successfully Signed In!')
  $('#sign-in').trigger('reset')

  $('.gameboard').removeClass('hidden')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on Sign-In, Please Try Again')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Out!')
  $('#message').text('Successfully Signed Out!')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error Signing Out')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  console.log('Successfully Changed Password!')
  $('#message').text('Successfully Changed Password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on Change Password, Please Try Again')
  $('#change-password').trigger('reset')
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('New Game Started!')
}

const newGameFailure = function () {
  $('#message').text('Error on creating a game')
}

const getGameSuccess = function (data) {
  $('#totalGames').text(data)
}

const getGameFailure = function (response) {
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
  newGameSuccess,
  newGameFailure,
  getGameSuccess,
  getGameFailure
}
