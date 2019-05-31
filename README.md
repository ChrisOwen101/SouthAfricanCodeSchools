# South African Code Schools

This project lists known programs available in South Africa that teach coding. Our goal is to help aspiring students match with available and relevant courses.

This is a [Codebridge](https://codebridge.org.za/) community website. All organisation is conducted on the [ZATech](https://zatech.github.io/) slack workspace on the channel [#codeschooldirectory](https://zatech.slack.com/messages/CGT76NYK1/), where all are welcome.

## Live Website

The website is running live here: https://codeschooldirectory.co.za

The data is stored in this Google Sheets: https://docs.google.com/spreadsheets/d/1Qrgw91Vod2bPmH1OlDMBqGJG2DF5XGZnIGz_Lc_9PvQ/edit#gid=0

All data is pushed from the Google Sheet to a Firebase Realtime Database on every change. The changes are reflected on the website within 1-2 seconds.

Interested in starting your own directory? [Read more here](create-your-own-directory.md).

## How to run

1. Clone the repository:
```
git clone https://github.com/ChrisOwen101/SouthAfricanCodeSchools.git
```
2. Change into the cloned folder
```
cd SouthAfricanCodeSchools
```
3. Download all the project dependencies (will take a while):
```
npm update
```
4. Run the app:
```
npm start
```
The site should automatically open in your browser at: https://localhost:3000

## Deploying to live site

### Automatic
[Travis CI](https://travis-ci.org/) is setup to automatically deploy on every commit or merge to Master. All warnings are treated as errors so the build will fail if you do not resolve all warnings before pushing.

### Manual

To build:

```
npm run build
```
```
firebase deploy
```
### Environment Variables
There are three environment files included:
1. `.env` :  This is the one used when you build and run your app locally.
2. `.env.local` :  A reference copy of the .env file, indicating preferred local variables.
3. `.env.production` : If you are authorised to and are going to be deploying a production, this contains a few extra values you should include.

Notes:
- Changes to an .env file will need an app restart to take effect.
- You can use: `git update-index --skip-worktree .env` to ignore changes to your local env file.
- We use these files only for publicly shareable keys and variables, don't put sensitive data here.