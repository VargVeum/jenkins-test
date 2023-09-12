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
                NO_COLOR=1 npx cypress run --spec 'cypress/e2e/*.cy.js' --headless --browser chrome   
                '''
            }
        }
    }
    post {
    always {
      script {
        publishHTML (target : [allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'mochawesome-report', 
            reportFiles: 'index.html', 
            reportName: 'Mochawesome Report', 
            reportTitles: 'QA report'
          ])
        }
      }   
    }
}