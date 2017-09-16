'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

let player1 = true

$(() => {
  setAPIOrigin(location, config)

  const checkWinner = function () {
    if (
      ($('#0').text() === $('#1').text() && $('#1').text() === $('#2').text() && $('#0').text() !== '') ||
      ($('#3').text() === $('#4').text() && $('#4').text() === $('#5').text() && $('#3').text() !== '') ||
      ($('#6').text() === $('#7').text() && $('#7').text() === $('#8').text() && $('#6').text() !== '') ||
      ($('#0').text() === $('#3').text() && $('#3').text() === $('#6').text() && $('#0').text() !== '') ||
      ($('#1').text() === $('#4').text() && $('#4').text() === $('#7').text() && $('#1').text() !== '') ||
      ($('#2').text() === $('#5').text() && $('#5').text() === $('#8').text() && $('#2').text() !== '') ||
      ($('#0').text() === $('#4').text() && $('#4').text() === $('#8').text() && $('#0').text() !== '') ||
      ($('#2').text() === $('#4').text() && $('#4').text() === $('#6').text() && $('#2').text() !== '')
    ) {
      $('h2').html('Winner!')
      $('.boxed').text('Click Start New Game to play again!')

      return true
    } else if (
      $('#0').text() !== '' &&
      $('#1').text() !== '' &&
      $('#2').text() !== '' &&
      $('#3').text() !== '' &&
      $('#4').text() !== '' &&
      $('#5').text() !== '' &&
      $('#6').text() !== '' &&
      $('#7').text() !== '' &&
      $('#8').text() !== ''
    ) {
      $('h2').html('Tie!')
      $('.boxed').text('Click Start New Game to play again!')

      return false
    }
  }

  $('#0').on('click', function () {
    $('#0').text()
    if ($('#0').text() === 'X' || $('#0').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#0').text('X')
    } else {
      $('#0').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#1').on('click', function () {
    $('#1').text()
    if ($('#1').text() === 'X' || $('#1').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#1').text('X')
    } else {
      $('#1').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#2').on('click', function () {
    $('#2').text()
    if ($('#2').text() === 'X' || $('#2').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#2').text('X')
    } else {
      $('#2').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#3').on('click', function () {
    $('#3').text()
    if ($('#3').text() === 'X' || $('#3').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#3').text('X')
    } else {
      $('#3').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#4').on('click', function () {
    $('#4').text()
    if ($('#4').text() === 'X' || $('#4').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#4').text('X')
    } else {
      $('#4').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#5').on('click', function () {
    $('#5').text()
    if ($('#5').text() === 'X' || $('#5').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#5').text('X')
    } else {
      $('#5').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#6').on('click', function () {
    $('#6').text()
    if ($('#6').text() === 'X' || $('#6').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#6').text('X')
    } else {
      $('#6').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#7').on('click', function () {
    $('#7').text()
    if ($('#7').text() === 'X' || $('#7').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#7').text('X')
    } else {
      $('#7').text('O')
    }
    player1 = !player1
    checkWinner()
  })

  $('#8').on('click', function () {
    $('#8').text()
    if ($('#8').text() === 'X' || $('#8').text() === 'O') {
      return false
    }
    if (checkWinner()) {
      return false
    }
    if (player1 === true) {
      $('#8').text('X')
    } else {
      $('#8').text('O')
    }
    player1 = !player1
    checkWinner()
  })
})

// $('.box').on()
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundle
// require('./example')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
})
