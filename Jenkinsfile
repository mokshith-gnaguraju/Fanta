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

       stage('Push to DockerHub') {
    steps {
        script {
            withCredentials([usernamePassword(
                credentialsId: 'docker-creds',
               usernameVariable: 'dhanamjeevi1989USER',
                passwordVariable: 'Mokshith@21'
            )]) {
                sh "echo $PASS | docker login -u $USER --password-stdin"
                sh "docker push dhanamjeevi1989/fanta:latest"
            }
        }
    }
}
        stage('Deploy to AWS EC2') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                    bat """
                    ssh -o StrictHostKeyChecking=no ubuntu@%EC2_IP% "
                    
                    docker stop myapp || true
                    docker rm myapp || true
                    
                    docker pull %IMAGE_NAME%:%TAG%
                    
                    docker run -d -p 80:8080 --name myapp %IMAGE_NAME%:%TAG%
                    "
                    """
                }
            }
        }
    }
}
