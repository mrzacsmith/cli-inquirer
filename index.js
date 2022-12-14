import inquirer from 'inquirer'

inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'pizzaFav',
      message: 'Is pizza your favorite food?',
    },
  ])
  .then((answers) => {
    if (!answers.pizzaFav) {
      inquirer.prompt({
        type: 'input',
        name: 'why',
        message: 'Oh! What could be more delicious than pizza?',
      })
    }
  })

// prompt with when
// inquirer
//   .prompt([
//     {
//       type: 'confirm',
//       name: 'pizzaFav',
//       message: 'Is pizza your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'why',
//       message: 'Oh! What could be more delicious than pizza?',
//       when: (answers) => answers.pizzaFav === false,
//     },
//   ])
//   .then((answers) => {
//     console.info('Your answer are :', JSON.stringify(answers))
//   })

// prompt with password

// const requireLetterAndNumber = (value) => {
//   if (/\w/.test(value) && /\d/.test(value)) {
//     return true
//   }
//   return 'password needs to have at least one letter and one number'
// }

// inquirer
//   .prompt([
//     {
//       type: 'password',
//       name: 'enter a masked password',
//       name2: 'enter a masked password to confirm',
//       validate: requireLetterAndNumber,
//     },
//   ])
//   .then((answers) => console.info(`your answers are${JSON.stringify(answers)}`))

// prompt with editor
// inquirer
//   .prompt([
//     {
//       type: 'editor',
//       name: 'support',
//       message: 'What is your support?',
//       waitUserInput: true,
//     },
//   ])
//   .then((answers) => console.info(`your answers are${JSON.stringify(answers)}`))

// prompt for confirm
// inquirer
//   .prompt([
//     {
//       type: 'confirm',
//       name: 'confirmation',
//       message: 'do you wanted to confirm',
//       default: false,
//     },
//   ])
//   .then((answers) => console.info(`your answers: ${JSON.stringify(answers)}`))

// prompt with expanded options
// inquirer
//   .prompt([
//     {
//       type: 'checkbox',
//       name: 'contactSupport',
//       message: 'What is your contact support?',
//       default: 'by chat',
//       choices: [
//         {
//           name: 'by email',
//         },
//         {
//           name: 'by phone',
//           checked: false,
//         },
//         {
//           name: 'by agent',
//           checked: true,
//         },
//         {
//           name: 'have super call you',
//         },
//       ],
//     },
//   ])
//   .then((answers) => console.info(`your answers: ${JSON.stringify(answers)}`))

// prompt with expanded options
// inquirer
//   .prompt([
//     {
//       type: 'expand',
//       name: 'contactSupport',
//       message: 'What is your contact support?',
//       default: 'by chat',
//       choices: [
//         {
//           key: 'e',
//           name: 'by email',
//           value: 'email',
//         },
//         {
//           key: 'p',
//           name: 'by phone',
//           value: 'phone',
//         },
//         {
//           key: 'a',
//           name: 'by agent',
//           value: 'agent',
//         },
//       ],
//     },
//   ])
//   .then((answers) => console.info(`your answers: ${JSON.stringify(answers)}`))

//prompt using rawlist
// inquirer
//   .prompt([
//     {
//       type: 'rawlist',
//       name: 'contactSupport',
//       message: 'What is your contact support?',
//       default: 'by chat',
//       choices: ['by email', 'by phone', 'have our agents call you'],
//     },
//   ])
//   .then((answers) => console.info(`your answers: ${JSON.stringify(answers)}`))

// prompt using list
// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'contactSupport',
//       message: 'Which contact would you like to support?',
//       choices: [
//         'by email',
//         'by phone',
//         {
//           name: 'by fax',
//           disabled: 'not supported',
//         },
//         new inquirer.Separator(),
//         'have our agent contact you',
//       ],
//     },
//   ])
//   .then((answers) =>
//     console.info(`your answers are ${JSON.stringify(answers)}`)
//   )

// simple prompt
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of your project?',
//       default: 'My Project',
//     },
//   ])
//   .then((answers) => {
//     console.info('Your name is ', JSON.stringify(answers))
//   })
