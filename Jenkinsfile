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
                sh 'docker compose up -d'
                sh 'docker compose ps'
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}