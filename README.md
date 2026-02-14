1. Download the Project.
   -> Download the ZIP file. Extract it using Extract All. Open the extracted folder.

2. Install Required Software in your system.
   -> Node.js
   -> MongoDB
   Note : Configure Environment Variables.
    -> Add both Node.js and MongoDB installation paths to your system Path variables.

3. Verify Installation. (Type below commands in Command Prompt)
   node -v       [ If it shows a version number → Node.js is installed correctly. ]
   mongosh       [ If you see: Current Mongosh Log ID, Connecting to:, Using MongoDB:, Using Mongosh:, Then MongoDB is running correctly. ] Type : exit in Command Prompt or Terminal..

4. Open the Project in VS code editor.
   Example path:   "PS C:\your-file-path\wallet-app-main\wallet-app-main"
   
5. Initialize Node Project.
   Inside the project folder, run: npm init -y

6. Install Required Dependencies.
    Run the following commands one by one:
        run: npm install express
        run: npm install mongoose
        run: npm install cors
        run: npm install dotenv
        run: npm install --save-dev nodemon

7. Update package.json
    Add the following inside the "scripts" section:
        "scripts": {
        "dev": "nodemon src/server.js"
        }

8. Run the Application.
    Start the server using: 
      npm run dev

If everything is configured correctly, the server will start successfully.


9. API Testing Using server.rest
   This project includes a server.rest file for testing API endpoints directly inside VS Code using the REST Client extension.

   REST Client :
    It allows you to:
      Send HTTP requests
      Test APIs without Postman
      View responses inside VS Code
  
   How to Use server.rest
    Install REST Client Extension In VS Code:
       Go to Extensions, Search: REST Client, Install it.
   
   Open server.rest file.

   Click “Send Request”
      Above each request, click: Send Request
      VS Code will:
        Send the request to your running server.
        Show response in a new tab.

   NOTE : Make sure the server is running...

   Why server.rest is Useful
      No need for Postman.
      Quick API debugging.
      Easy to maintain API examples.
      Helpful for reviewers/testing team.