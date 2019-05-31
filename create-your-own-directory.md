# Creating your own school directory

Want to setup your own local directory. We'd love to help you do it. Contact George Ziady (george@ codeschooldirectory.co.za) for help walking through the below steps.

## Technologies used
- *Google Sheets*: Contains both the data source, as well as the task management.
- *Github*: Source code for the project.
- *Firebase*: Hosts the app, receives data from Google Sheets.
- *Travis CI*: To automatically deploy to Firebase when any commits are merged to master.
- *React*: Front end JS library to divide and render the interface as a set of re-usable components.
- *Material UI*: Based on Google's Material design, gives clean, modern look that works responsively.
- *MUI-Datatables*: Tables component that provides filtering/sorting/search features out of the box.

## Steps required
At a high level, the following steps are needed:

1. Copy Schools Google Sheet.
2. Replace data with information collected for your directory.
3. Create Firebase account.
4. Connect Google Sheet to Firebase.
5. Register a domain, link to Firebase (optional).
6. Fork this Github repo, link to Firebase.
7. Add firebase keys to .env file.
8. Setup analytics, add to .env file.
9. Update design/logo for site.
10. Add/remove columns in code and spreadsheet.
10. Setup form for programs to update their own data (optional).
