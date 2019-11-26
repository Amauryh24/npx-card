#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')


const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// https://dev.to/glaucia86/aprenda-a-desarrollar-una-tarjeta-personal-en-npx-5124
const data = {
  name: chalk.white('Amaury Henrottay /'),
  handle: chalk.cyan('Amauryh24'),
  work: chalk.white('Junior Developer Web'),
  twitter: chalk.cyan('Work in progress'),
  github: chalk.cyan('https://github.com/Amauryh24'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/amauryhenrottay/'),
  medium: chalk.cyan('Work in progress'),
  web: chalk.cyan('https://amauryh24.wordpress.com/'),
  npx: chalk.white('npx amauryh24'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}


const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Télécharger une version pour télécharger un mot-clé
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + mediuming + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))