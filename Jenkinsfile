pipeline {
    agent any
    tools { 
        nodejs '20.11.1'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building React frontend"
                sh 'npm -v'
            }
        }
        stage('Test') {
            steps {
                echo "Running Cypress tests"
                sh 'npx cypress run --browser chrome --spec cypress/e2e/*.ts'
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