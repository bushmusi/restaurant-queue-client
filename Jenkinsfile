pipeline {
    agent {
        kubernetes {
            label 'jenkins-worker-default'
        }
    }

    stages {
        stage('Stage 1 - Echo Message 1') {
            steps {
                echo 'This is the first test message.'
            }
        }

        stage('Stage 2 - Echo Message 2') {
            steps {
                echo 'This is the second test message.'
            }
        }

        stage('Stage 3 - Echo Message 3') {
            steps {
                echo 'This is the third test message.'
            }
        }
    }
}
