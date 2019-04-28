# South African Code Schools

This project lists known programs available in South Africa that teach coding.

This is a [Codebridge](https://codebridge.org.za/) community website. All organisation is conducted on the [ZATech](https://zatech.github.io/) slack workspace on the channel [#codeschooldirectory](https://zatech.slack.com/messages/CGT76NYK1/). Join and say hi!

## Live Website

The website is running live here: https://codeschooldirectory.co.za

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

[Travis CI](https://travis-ci.org/) is setup to automatically deploy on every commit or merge to Master. All warnings are treated as errors so the build will fail if you do not resolve all warnings before pushing.

## How to deploy locally

To build:

```
npm run build
```

To deploy (you'll need the keys for Firebase. Not sure on the best way to manage this yet)

```
firebase deploy
```
### Environment Variables
There are three environment files included:
1: .env
  This is the one used when you build and run your app locally.
2: .env.local
  A reference copy of the .env file, indicating preferred local variables.
3: .env.production
  If you are authorised to and are going to be deploying a production, this contains a few extra values you should include.

Notes:
- Changes to an .env file will need an app restart to take effect.
- You can use: `git update-index --skip-worktree .env` to ignore changes to your local env file.
- These files are only for publicly shareable keys and variables, don't put sensitive data here.