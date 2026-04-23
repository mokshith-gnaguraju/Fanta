pipeline {
    agent any

    environment {
        IMAGE_NAME = "dhanamjeevi1989/fanta"
        TAG = "latest"
        EC2_IP = "54.80.216.154"
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
                    docker login -u %USER% -p %PASS%
                    docker push %IMAGE_NAME%:%TAG%
                    """
                }
            }
        }

        stage('Deploy to EC2') {
    steps {
        withCredentials([sshUserPrivateKey(
            credentialsId: 'ec2-key',
            keyFileVariable: 'KEY_FILE',
            usernameVariable: 'USER'
        )]) {
            bat """
            icacls "%KEY_FILE%" /inheritance:r
            icacls "%KEY_FILE%" /grant:r "SYSTEM:R"
            icacls "%KEY_FILE%" /grant:r "Administrators:R"
            icacls "%KEY_FILE%" ...

            ssh -vvv -i "%KEY_FILE%" -o StrictHostKeyChecking=no %USER%@54.80.216.154 "docker ps"
            """
        }
    }
}

}
}
