pipeline {
    agent any
    stages {
        stage('Clone autotests repo') {
            steps {
                git branch: 'main', url: 'https://github.com/VargVeum/jenkins-test.git'
            }
        }
        stage('Log welcome message') {
            steps {
                echo "Hello!"
                }
            }
        }
        // stage('Install Cypress') {
        //     steps {
        //         dir('jenkins-test') {
        //             sh """ 
        //             npm install cypress --save-dev
        //             """
        //         }
        //     }
        // }
        // stage('Run Cypress tests') {
        //     steps {
        //         sh """ 
        //         npx cypress run --spec 'cypress/e2e/*.cy.js' --reporter mochawesome --headless --browser chrome
        //         """
        //     }
        // }
    // }
}