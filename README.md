# South African Code Schools

This project is an attempt to detail all of the programs available in South Africa that will help people learn how to code.

## Live Website

The website is running live here: https://southafricacodeschool.firebaseapp.com

The data is stored in this Google Sheets: https://docs.google.com/spreadsheets/d/1Qrgw91Vod2bPmH1OlDMBqGJG2DF5XGZnIGz_Lc_9PvQ/edit#gid=0

All data is pushed from the Google Sheet to a Firebase Realtime Database on every change. The changes are reflected on the website within 1-2 seconds.

## How to run

First pull the repository:

```
git pull https://github.com/ChrisOwen101/SouthAfricanCodeSchools.git
```

Run:

```
npm update && npm start
```

## How to deploy

To build:

```
npm run build
```

To deploy (you'll need the keys for Firebase. Not sure on the best way to manage this yet)

```
firebase deploy
```

## Firebase Credentials

Speak to Chris Owen (@ChrisOwen101) for details
