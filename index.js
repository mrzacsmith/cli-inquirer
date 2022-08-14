import inquirer from 'inquirer'

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      default: 'My Project',
    },
  ])
  .then((answers) => {
    console.info('Your name is ', JSON.stringify(answers))
  })
