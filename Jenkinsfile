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

        stage('Install Cypress') {
            steps {
                sh "npm install cypress --save-dev" 
                }
            }
        }
    


