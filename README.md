# Simple Microfrontend application in Ionic Framework

This application uses Module-Federation to share modules betwene multiple applications.

To run the application:

1. Clone the repository

2. Install ionic-cli
```bash
npm i @ionic/cli
```

2. Install required dependencies

3. Run host app 
```bash
cd host-app
ionic serve --port=4200
```

4. Run remote app
```bash
cd remote-app
ionic serve --port=4201
```

The host by default looks at port 4201 for the remoteEntry file. To change this modify the manifest file in host app.