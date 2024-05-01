Basic Web Application with CI/CD Pipeline 

This repository contains a basic Node.js web application with a CI/CD pipeline set up using GitHub Actions. 

Getting Started 

Prerequisites: 

Node.js (version 16 or later) installed on your system. 

A GitHub account. 

A free Heroku account. 

Running the Application Locally: 

Clone the repository: 

Bash 

git clone https://github.com/<your-username>/<your-repo-name>.git 
 

Replace <your-username> and <your-repo-name> with your actual values. 

Navigate to the project directory: 

Bash 

cd <your-repo-name> 
 

Install dependencies: 

Bash 

npm install 
 

Start the application: 

Bash 

node app.js 
 

Access the application in your web browser at http://localhost:3000. 

CI/CD Pipeline Setup 

Create a GitHub repository for your project if you haven't already. 

Push your local code to the main branch of your repository: 

Bash 

git push -u origin main 
 

Create a Heroku app: 

Go to https://dashboard.heroku.com/new. 

Create a new app and choose a free plan. 

Get your Heroku API key: 

Go to your Heroku app's settings. 

Under "Reveal API key," copy the API key. 

Add the Heroku API key as a secret in your GitHub repository settings: 

Go to your GitHub repository. 

Click on "Settings" -> "Secrets" -> "New secret." 

Name the secret HEROKU_API_KEY and paste your Heroku API key in the value field. 

Pipeline Explanation: 

The GitHub Actions workflow file (ci.yml) defines the CI/CD pipeline: 

It triggers on every push to the main branch. 

It uses the ubuntu-latest runner. 

It checks out the code from the repository. 

It sets up Node.js version 16. 

It installs dependencies using npm install. 

It runs the tests using npm test. 

If the tests pass, it deploys the application to your Heroku app using the akhilbharadwaj/heroku-deploy action. 

Additional Notes: 

This is a basic example. You can customize the pipeline further based on your needs. 

For more information on GitHub Actions, refer to the official documentation: https://docs.github.com/actions 

For more information on Heroku deployment with GitHub Actions, refer to the action repository: [invalid URL removed] 

By following these steps, you should have a basic web application running locally and automatically deployed to Heroku upon each push to the main branch. 
