<h1 align="center">
  <br>
  <img src="WizelineLogo.png" width="500">
  <br>
Mobile Testing Challenge
  <br>
</h1>

<h4 align="center">This Framework was developed to showcase Mobile testing with WebdriverIO.</h4>

<p align="center">
  <a href="#sparkles-key-features">Key Features</a> •
  <a href="#package-packages">Packages</a> •
  <a href="#blue_book-setup">Setup</a> •
  <a href="#books-custom-execution">Custom Execution</a> •
  <a href="#rocket-releases">Releases</a> •
</p>

## ✨ Key Features

- **Android Framework** - Mobile living within the same project.

## 📦 Packages

- **allure-commandline**
- **appium**
- **appium-doctor**
- **dotenv**
- **ESLint**
- **mocha**
- **wdio-video-report**
- **webdriver**
- **webdriverio**

# ⚙️ Setup

To clone and run this application, you'll need the following:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/)
- [Android Studio](https://developer.android.com/studio)
- [Java Development Kit](https://www.oracle.com/java/technologies/downloads/)

```zsh
# Clone this repository
git clone https://github.com/wizelinerMiguelMora/WebdriverIO.git

# Install all the Packages, Dev Dependencies and Dependencies needed
npm install
```

## 📱 Set Environment Variables

Assuming the user has already installed NodeJs, Android Studio and the JDK, setup the local envoronment by configure some Environment Variables.

1. Open the terminal.
2. Copy the following command in the terminal.
```zsh
nano ~/.zshrc # This will be open the place to paste the Env. Variables
```
3. Add the following lines
```zsh
export JAVA_HOME=$(/usr/libexec/java_home)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```
This will include the Android Env Variables and JAVA_HOME.

4. To save this modified bash-profile file you just have to press `CONTROL + O` to save the file using nano editor and then press `ENTER` to confirm name and then press `CONTROL + X` to exit out of this nano file editor.

5. Open the [Android Studio](https://developer.android.com/studio)

6. Click on "More Actions"

7. A dropdown should be displayed > Click on "SDK MAnager"

8. Go to "SDK Platforms" tab in the top

9. Select Android 12.0 (S) checkbox

10. Click "Apply" and "Close"

11. Wait until dowload SDK is done

12. Go to the project and paste the `APK file` in the main root of the project (WebdriverIO Folder)

13. Normally the ".env" file SHOULD NOT be included in the repository since has sensible data that could includes security data but in this case is also integrated in the project and the information should just be manage in the local env.

Once the file is generated and all the infomration is provded by other users, reiew the following steps:

1. Plug either a physical devices in or start the emulatror(s) into the local machine. NOTE: To <a href="#Run-Test-in-Paralell">Run Test in Paralell</a> you should start multiple devices at the same time.
2. Enable the Developer mode in the mobile device. For more infomration visit: [Developer More](https://developer.android.com/studio/debug/dev-options).
3. Once the device is ready, go to Developer options and turn on the `USB debugging` option.
4. Open the command line and write the following:
```zsh
adb devices
```
5. Copy the serial number of the device ans supply thaty code in the `UDID1` argument of the `env` file. In case of the emulator the name does not change `emulator-5554`

# 🧪 ✨✅ Run Suite

In order to run the whole suite, execute the following commands

#### Terminal

To check whether all requirements needed are installed to run the framework
```zsh
appium-doctor --android
```
Once `appium-doctor` was executed, and everything is ok, the framework is ready to run.

#### Terminal

```JavaScript
// To run the Demo App celaning all the report data that were generated in the previos execution in folders (_results_ & allure-report)
npm run clean_demoApp
```

```JavaScript
// To run the demoApp without cleaning the report data it allows to run a TC identified as Failed and is already fixed and do not alter the results of the other TC's
npm run demoApp
```


## 🛃 🧪 ✨✅ Run Custom Execution

### ▶️ 🧪 Run specific Test file

1. Select the configuration file where should be modify (wdio.config.js)
2. In the spec location should be somethiing like:
```javascript
specs: [
         './test/*.test.js'
    ],
```

It means that wdio will run all the files that will find inside the folder test with the sufix ".test.js"
In order to just execute 1 specific script, sustitute the `'./test/*.test.js'` with the desired test script name

### ▶️ 🧪 Run specific Test Cases

1. Execute the steps of <a href="#Run-specific-Test-file">Run specific Test file</a> 
2. In the Test file select the desired TC to run. Example
Original TC:
```JavaScript
    it('TCXX Example TC', async () => {
        'Something to validate here'
    })
```
3. Change to
```JavaScript
    it.only('TCXX Example TC', async () => {
        'Something to validate here'
    })
```

The function ".only" allows to just execute the Test Case in the whole test script

## 🛃 🧪 ✨📱📱 Run Test in Paralell

The framework is prepared to run testing in paralell, it means that is able to run in multiple devices in the same execution.
To activate this mode, follow the next stpes:

1. Initilize 2 different emulators through Android Studio
2. Go to `wdio.conf.js` file
3. Scroll down to capabilities
4. Uncomment the second capabilities (Line 71 to 83)
5. Run the following command to ensure the Emulators code
```zsh
adb devices
```
6. Verify that the names match with the `UDID1` & `UDID2` in the `.env` file 
7. Run the suire explained in <a href="Run-Suite">Run Suite</a> section

## 📈 🧪 Allure Report Layer

Allure is a Report layer integrated to the framework and has several functionalities such as display the report once the execution is done, also when Test Cases fail, it records a video with the flow where  the Test Cases failed itself and will attach as report data in the `index.html` file locates in the `allure-report` folder. That is one of the reasons that the executon takes a little more time that expected.

# ⚠️ Common issues

<details>
<summary>I'm having problems to recognize env Variables</summary>
<p>

In this case, the user should restart the terminal since probably is executing by some instance

</p>
</details>

<details>
<summary>I'm having problems with an specific library</summary>
<p>

In this case try to install that library by:

```zsh
# On shared folder
$ npm install <library-name> 
```

This will reinstall again the lib if there was something missed to install.

</p>
</details>
