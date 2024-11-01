QA Automation Test Project
This project demonstrates automated testing using WebdriverIO with Cucumber framework for web application testing.
🛠️ Technologies Used

WebdriverIO: v8
Cucumber Framework
JavaScript
Allure Report
Page Object Model pattern

📋 Prerequisites

Node.js (Download from nodejs.org)
Git
Visual Studio Code or any preferred IDE
Chrome Browser
Windows/Mac/Linux OS

🚀 Getting Started
Project Setup

Clone the repository:

bashCopygit clone <repository-url>
cd qa-automation-test

Install dependencies:

bashCopynpm install
📁 Project Structure
Copyqa-automation-test/
├── features/
│   ├── *.feature                 # Cucumber feature files
│   ├── step-definitions/
│   │   └── steps.js             # Step definitions
│   └── pageobjects/
│       └── *.page.js            # Page objects
├── test/
├── node_modules/
├── .gitignore
├── package.json
├── wdio.conf.js
└── README.md
🔍 Test Scenarios

Product Search

Search functionality verification
Results validation
Search suggestions


Shopping Cart

Add to cart functionality
Cart updates verification
Product quantity modification



🏃‍♂️ Running Tests
Run all tests:
bashCopynpm test
Run specific feature:
bashCopynpx wdio wdio.conf.js --spec ./features/yourfeature.feature
📊 Test Reports

Allure Reports are generated after test execution
Spec reporter provides console output during test execution

To open Allure report:
bashCopynpx allure open
🔧 Configuration
Main configuration file: wdio.conf.js
Key configurations:

Browser settings
Test timeouts
Reporter settings
Base URL
Test retries

🤝 Contributing

Fork the repository
Create your feature branch
bashCopygit checkout -b feature/AmazingFeature

Commit your changes
bashCopygit commit -m 'Add some AmazingFeature'

Push to the branch
bashCopygit push origin feature/AmazingFeature

Open a Pull Request

📝 Notes

Tests are executed in Chrome browser by default
Page Object Model is used for better maintainability
Cucumber features are written in Gherkin syntax
Allure reports provide detailed test execution results

🚨 Troubleshooting
Common issues and solutions:

Test execution fails

Ensure Chrome browser is installed
Check if WebDriver is up to date
Verify all dependencies are installed


Report generation fails

Ensure Allure is installed correctly
Check for sufficient disk space
Verify permissions in the report directory
