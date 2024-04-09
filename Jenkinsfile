pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building React frontend"
                sh '''
                    docker info
                    docker -v
                    docker compose version
                    curl --version
                '''
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