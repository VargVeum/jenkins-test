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
        stage('Install requirements') { 	
           steps { 
               sh """ 

               apt-get -y update && 

               apt-get install -y python3 make gcc g++ curl postgresql-contrib libnotify-dev xauth xvfb 

               apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 

               apt-get install -y wget 

               wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 

               apt-get install -y ./google-chrome-stable_current_amd64.deb 

               """ 
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