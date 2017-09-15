'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('new game!')
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('Get total games')
  api.totalGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// const onNewGame = function () {
// event.preventDefault()
// console.log('hellllo')
// const data = {}
// api.newGame(data)
// .then(ui.newGameSuccess)
// .catch(ui.newGameFailure)
// $('#game-text').text('New game!')
// $('.game-cell').each(function () {
// $(this).text('')
// })
// }

// $('#button game-new').on('click', function (event) {
// event.preventDefault()
// })

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('click', onNewGame)
  $('#get-games').on('click', onGetGames)
  $('#button game-new').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
