pipeline {
    agent any

    environment {
        IMAGE_NAME = "dhanamjeevi1989/fanta"
        TAG = "latest"
        EC2_IP = "3.86.226.238"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/mokshith-gnaguraju/Fanta.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%TAG% ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    bat """
                    docker logout
                    echo %PASS% | docker login -u %USER% --password-stdin
                    docker push %IMAGE_NAME%:%TAG%
                    """
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    bat """
                    ssh -o StrictHostKeyChecking=no ec2-user@%EC2_IP% ^
                    "docker pull %IMAGE_NAME%:%TAG% && docker stop fanta-container || true && docker rm fanta-container || true && docker run -d -p 80:80 --name fanta-container %IMAGE_NAME%:%TAG%"
                    """
                }
            }
        }
    }
}