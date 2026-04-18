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

        stages {

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
                    docker push dhanamjeevi1989/fanta:latest
                    """
                }
            }
        }

    }
    }