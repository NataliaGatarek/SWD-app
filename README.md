# SWD-app
The social networking MERN application to connect owners of the spanish water dog owners. You can register, add your dog/dogs, remove them, view profiles of other dogs, comment on them, remove your comments, mark the dog as a favorite or remove from favorites. On your profile dashbord you can see your information, dogs and favorites. 
<p> MERN: MongoDB, Express, React, Node.js; Context, Cloudinary.
##The app 
<p> 

## How to inatll it
<p> 1. Git clone this repo</p>
<p> 2. There are two folders for server (back-end) and the client (front-end), both needs to be installed using npm install </p>
<p> 3. In the "server" forlder you need to create a .env file for the Mongo DB URI as "MONGO_URI" to test locally. Next, add JWT key as "SECRET_OR_KEY"</p>
<p> 4. Create the user for the "Cloudinary", go to the client folder, find "AddDog.js" and in the const =upload image change the user's cloaudinary data for your own </p>
<p> 5. Prepare netlify and heroku for deployment </p>
<p> 6. Create a .env file locally with the content "REACT_APP_BACKEND_URL=http://localhost:5000/" and a .env.development file with the same variable but enter the heroku url </p>
<p> 7. Ready to deploy! </p>
