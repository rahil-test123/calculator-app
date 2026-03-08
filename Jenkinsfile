pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Install') {
            steps {
                dir('C:/Users/hp/calculator-app') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('C:/Users/hp/calculator-app') {
                    bat 'npm test'
                }
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