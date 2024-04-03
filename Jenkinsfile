pipeline {
    agent { 
        node {
            label 'docker-agent'
        }
    }
    triggers {
        pollSCM '*/10 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building React frontend"
                sh 'docker -v'
            }
        }
        stage('Test') {
            steps {
                echo "Running Cypress tests"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying React frontend and RESTful API"
            }
        }
    }
}