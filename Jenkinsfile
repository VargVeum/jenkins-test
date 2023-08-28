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
                cd jenkins-test && sh "npm install cypress --save-dev"                 
            }
        }
        stage('Run Cypress tests') {
            steps {
                cd jenkins-test && sh "npx cypress run --spec 'cypress/e2e/*.cy.js' --reporter mochawesome --headless --browser chrome"                 
            }
        }
        // post {
        //     always {
        //     script {
        //         publishHTML (target : [allowMissing: false,
        //         alwaysLinkToLastBuild: true,
        //         keepAll: true,
        //         reportDir: 'mochawesome-report',
        //         reportFiles: 'mochawesome.html',
        //         reportName: 'My Reports',
        //         reportTitles: 'The Report'])
        //     }
        // }   
    // }
}
}