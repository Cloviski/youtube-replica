pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }
    triggers {
        pollSCM '*/10 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building React frontend"
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