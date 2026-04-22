pipeline {
    agent any

    environment {
        IMAGE_NAME = "dhanamjeevi1989/fanta"
        TAG = "latest"
        EC2_IP = "3.86.226.238"
        SSH_CREDENTIALS = "ec2-ssh-key"
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
                    docker login -u %USER% -p "%PASS%"
                    docker push %IMAGE_NAME%:%TAG%
                    """
                }
            }
        }
stage('Deploy to EC2') {
    steps {
        bat """
        ssh -i C:\\jenkins\\Parle.pem -o StrictHostKeyChecking=no ec2-user@%EC2_IP% ^
        "docker pull %IMAGE_NAME%:%TAG% && ^
        docker stop fanta-container 2>nul && ^
        docker rm fanta-container 2>nul && ^
        docker run -d -p 80:80 --name fanta-container %IMAGE_NAME%:%TAG%"
        """
    }
}

    }
}