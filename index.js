import inquirer from 'inquirer'

inquirer
  .prompt([
    {
      type: 'list',
      name: 'contactSupport',
      message: 'Which contact would you like to support?',
      choices: [
        'by email',
        'by phone',
        {
          name: 'by fax',
          disabled: 'not supported',
        },
        new inquirer.Separator(),
        'have our agent contact you',
      ],
    },
  ])
  .then((answers) =>
    console.info(`your answers are ${JSON.stringify(answers)}`)
  )

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
