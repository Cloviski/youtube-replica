pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building React frontend"
                sh 'docker -v'
                sh 'docker compose up'
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

/*
pipeline {
    agent { 
        node {
            label 'docker-agent'
        }
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
*/