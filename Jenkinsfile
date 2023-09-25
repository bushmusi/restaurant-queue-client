pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'retaurant-queue-client'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'building the image'
                }
            }
        }

        stage('Push Docker Image to Registry') {
            steps {
                script {
                    echo 'pushing image to image registry'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'deploying Docker container in deployment environment'
            }
        }
    }
}
