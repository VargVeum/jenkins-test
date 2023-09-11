pipeline {
    agent any
    stages {        
        stage('Clone autotests repo') {
            steps {
                git branch: 'main', url: 'https://github.com/VargVeum/jenkins-test.git'
            }
        }
        stage('Install required Cypress plugin') {
            steps {
                sh ''' 
                npm i --save-dev cypress-mochawesome-reporter
                '''                
            }
        }
        stage('Install Cypress') {
            steps {
                sh '''
                npm install cypress --save-dev'''              
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh '''
                npx cypress run --spec 'cypress/e2e/*.cy.js' --headless --browser chrome     
                '''
            }
        }
        stage('Run Cypress HTML report') {
            steps {
                publishHTML([allowMissing: true, 
                alwaysLinkToLastBuild: true, 
                keepAll: false, 
                reportDir: 'mochawesome-report', 
                reportFiles: 'mochawesome.html', 
                reportName: 'HTML Report', 
                reportTitles: ''
                ])   
            }
        } 
    }
}