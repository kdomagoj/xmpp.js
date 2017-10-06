'use strict'

try {
  const p = require('react-native').Platform
  global.Buffer = require('buffer').Buffer
  global.process = require('process')
} catch (e) {}

const Client = require('./lib/Client')
const {xml, jid} = require('@xmpp/client-core')

module.exports.Client = Client
module.exports.xml = xml
module.exports.jid = jid
