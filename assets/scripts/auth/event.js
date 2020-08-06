'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Auth Events
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Screen Toggling
const onNewPassword = function (event) {
  event.preventDefault()
  $('#changePassword').show()
}

const onSiteContent = function (event) {
  $('#authenticatedMain').hide()
  $('#authenticatedSite').show()
}

const onUserPage = function (event) {
  event.preventDefault()
  $('#authenticatedMain').hide()
  $('#authenticatedEntry').hide()
  $('#authenticatedSite').hide()
  $('#authenticatedUser').show()
}

const onMainPage = function (event) {
  event.preventDefault()
  $('#authenticatedUser').hide()
  $('#authenticatedEntry').hide()
  $('#authenticatedSite').hide()
  $('#authenticatedMain').show()
}

const onNewEntry = function (event) {
  event.preventDefault()
  $('#authenticatedMain').hide()
  $('#authenticatedUser').hide()
  $('#authenticatedEntry').show()
}

const onUpdateEntry = function (event) {
  event.preventDefault()
  $('#authenticatedMain').hide()
  $('#authenticatedUser').hide()
  $('#authenticatedEntry').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onUserPage,
  onNewEntry,
  onNewPassword,
  onUpdateEntry,
  onMainPage,
  onSiteContent
}
