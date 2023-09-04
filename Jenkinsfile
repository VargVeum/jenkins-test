pipeline {
    agent {
        docker {
            image 'cypress/included:13.0.0'
            args '-v .:/e2e -w /e2e'
        }
    }
    stages {
        stage('build') {
        steps {
            // there a few default environment variables on Jenkins
            // on local Jenkins machine (assuming port 8080) see
            // http://localhost:8080/pipeline-syntax/globals#env
            echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
            sh 'npm run cy:verify'
        }
    }
        // stage('Clone autotests repo') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/VargVeum/jenkins-test.git'
        //     }
        // }
        // stage('Print welcome message') {
        //     steps {
        //         echo 'Hello!'                
        //     }
        // }
        // stage('Install Cypress') {
        //     steps {
        //         sh '''
        //         npm install cypress --save-dev'''              
        //     }
        // }
        // stage('Run Cypress tests') {
        //     steps {
        //         sh '''
        //         npx cypress run --spec 'cypress/e2e/*.cy.js' --reporter mochawesome --headless --browser chrome'''                            
        //     }
        // }
    //     post {
    //         always { 
    //             sh 'npx mochawesome-merge "Cypress/cypress/results/*.json" > Cypress/mochawesome.json' 
    //             sh 'npx mochawesome-report-generator Cypress/mochawesome.json' 
    //             publishHTML([allowMissing: false, 
    //             alwaysLinkToLastBuild: false, 
    //             keepAll: false, 
    //             reportDir: 'mochawesome-report', 
    //             reportFiles: 'mochawesome.html', 
    //             reportName: 'HTML Report', 
    //             reportTitles: ''])                        
    //     }   
    // }
}
}