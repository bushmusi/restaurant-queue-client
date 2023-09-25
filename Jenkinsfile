pipeline {
    agent any

    environment {
        // Define any environment variables needed for the build and deployment
        DOCKER_IMAGE_NAME = 'retaurant-queue-client' // Change this to your image name
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in your project
                    docker.build("${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image to Registry') {
            steps {
                script {
                    // Push the Docker image to a Docker registry (e.g., Docker Hub)
                    docker.withRegistry('https://registry.example.com', 'registry-credentials') {
                        docker.image("${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the Docker image to your server or orchestration platform (e.g., Kubernetes)
                sh "docker run -d -p 8080:80 ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
            }
        }
    }
}
