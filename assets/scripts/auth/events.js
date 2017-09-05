'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const gameOver = false

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log('yesyes')
  event.preventDefault()
  console.log(this)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onNewGame = function () {
// event.preventDefault()
// console.log('hellllo')
// const data = {}
// api.newGame(data)
// .then(ui.newGameSuccess)
// .catch(ui.newGameFailure)
// $('#game-text').text('New game!')
// turnCount = 0
// Create an array to represent the game-board
// $('.game-cell').each(function () {
// $(this).text('')
// })
// }

$('#button game-new').on('click', function (event) {
  event.preventDefault()
})

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
