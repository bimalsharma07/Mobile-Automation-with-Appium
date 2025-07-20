# Mobile Automation with Appium

This repository demonstrates end-to-end automation of the SwagLabs mobile app (APK) using Appium. It provides a practical example of how to set up, develop, and execute automated functional tests for a real-world Android application. The tests are written in JavaScript and leverage modern automation tools and frameworks for mobile app testing.

![SwagLab APK Recording (1)](https://github.com/user-attachments/assets/cf0b4578-9746-4ba1-960f-122bb2b4602e)


## What This Repo Does

- Automates user flows and features in the SwagLabs APK.
- Uses Appium to interact with Android devices and emulators.
- Implements test scripts in JavaScript for flexibility and maintainability.
- Demonstrates best practices for structuring mobile test automation projects.
- Includes sample test cases, setup instructions, and practical usage examples.
- Integrates with Appium Inspector for interactive UI element inspection and debugging.

## Dependencies

Below are the key dependencies required to work with this project:

### Core Dependencies

- **Appium**: The main automation framework for mobile applications.
- **Appium Inspector**: Desktop app for inspecting mobile elements and debugging Appium tests.
- **Node.js**: JavaScript runtime environment.
- **npm**: Node.js package manager to install project dependencies.
- **JavaScript**: Programming language for writing automation scripts.

### Project-specific Dependencies

- **appium**: Node.js Appium server and client.
- **webdriverio**: For writing and running test scripts.
- **chai**: Assertion library for test validation.
- **mocha**: Test framework for structuring and running tests.
- **@wdio/appium-service**: WebdriverIO service for Appium.
- **@wdio/mocha-framework**: WebdriverIO adapter for Mocha.
- **@wdio/spec-reporter**: For test reporting.

### Device & Platform Requirements

- **Android SDK**: Required for emulators and real device testing.
- **SwagLabs APK**: The application under test (supplied separately).
- **Emulator or Physical Android Device**: For running the tests.

## Installation

1. Install Node.js and npm.
2. Clone this repository.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Download and install Appium Inspector (optional, for UI inspection).
5. Ensure the Android SDK is installed and configured.
6. Place the SwagLabs APK in the specified path or update the config to point to your APK.

## Usage

- Start the Appium server:
  ```bash
  npx appium
  ```
- Run tests:
  ```bash
  npx wdio run wdio.conf.js
  ```
- Inspect elements with Appium Inspector for test development and debugging.
