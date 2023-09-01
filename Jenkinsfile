pipeline {
    agent any
    stages {
        stage('Clone autotests repo') {
            steps {
                git branch: 'main', url: 'https://github.com/VargVeum/jenkins-test.git'
            }
        }
        stage('Print welcome message') {
            steps {
                echo 'Hello!'                
            }
        }
        stage('Install Cypress') {
            steps {
                sh '''cd jenkins-test
                npm install cypress --save-dev'''              
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh '''cd jenkins-test
                npx cypress run --spec 'cypress/e2e/*.cy.js' --reporter mochawesome --headless --browser chrome'''                            
            }
        }
        post {
            always { 
                sh 'npx mochawesome-merge "Cypress/cypress/results/*.json" > Cypress/mochawesome.json' 
                sh 'npx mochawesome-report-generator Cypress/mochawesome.json' 
                publishHTML([allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'mochawesome-report', 
                reportFiles: 'mochawesome.html', 
                reportName: 'HTML Report', 
                reportTitles: ''])                        
        }   
    }
}
}