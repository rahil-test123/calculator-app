pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build success'
            }
        }

    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}