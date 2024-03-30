pipeline {
    agent { 
        docker {
            image 'node:20.11.1'
        }
    }
    triggers {
        pollSCM '*/10 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building React frontend"
                sh 'npm -v'
                sh 'node -v'
                sh 'npm install'
                sh 'npm run build'

                echo "Starting RESTful API server"
                sh 'npm run start:server &'
            }
        }
        stage('Test') {
            steps {
                echo "Running Cypress tests"
                sh 'npm run cypress'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying React frontend and RESTful API"
            }
        }
    }
}