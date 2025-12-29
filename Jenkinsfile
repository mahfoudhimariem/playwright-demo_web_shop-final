pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    tools {
        nodejs 'NodeJS-16' // Assurez-vous d'avoir configuré NodeJS dans Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git branch: 'master', url: 'https://github.com/ziedhannachi/playwright-demo_web_shop.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running E2E tests...'
                bat 'npx cucumber-js --tags "@e2e" --format html:tests/reports/report.html --format json:tests/reports/report.json'
            }
        }

        stage('Publish Reports') {
            steps {
                echo 'Publishing reports...'
                archiveArtifacts artifacts: 'tests/reports/*.html', allowEmptyArchive: true
                publishHTML(target: [
                    reportName: 'Cucumber HTML Report',
                    reportDir: 'tests/reports',
                    reportFiles: 'report.html',
                    keepAll: true
                ])
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

