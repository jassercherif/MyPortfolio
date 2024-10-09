pipeline {

    agent any

    stages {   

        stage('Install') {
            steps {
                nodejs('NODE'){
                    echo 'Building the application'
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }
        
    }

}
