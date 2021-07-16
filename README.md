# SWD-app
The social networking MERN application created to connect owners of the spanish water dogs. You can register, add or delete your dog/dogs, view profiles of other dogs, leave a comments remove your comments, mark the dog as a favorite or remove from favorites. On your profile dashbord you can see your information, dogs and favorites. 
<p> MERN: MongoDB, Express, React, Node.js; Context, Cloudinary.</p>
  
<p> Views: Home; All dogs; Dog's Detail with possibility to mark as favorite/unfavorite and possibility to leave a comment (or deleting the comment).
<p></p>
<img src="https://res.cloudinary.com/dtcs8hj99/image/upload/v1626185040/mobileapp_opesig.png"/>
<p></p>
<p>Views: Profile with the information about the user; On the dashboard you can see dogs marked as favorite and doggs added by the user (with information how many people marked the dog as favorite). You can add or remove the dog. 
<p></p>
<img src="https://res.cloudinary.com/dtcs8hj99/image/upload/v1626185049/mobileapp2_zqnrpj.png"/>

## How to install the app
<p> 1. Git clone this repo</p>
<p> 2. There are two folders for server (back-end) and the client (front-end), both needs to be installed using npm install </p>
<p> 3. In the "server" forlder you need to create a .env file for the Mongo DB URI as "MONGO_URI" to test locally. Next, add JWT key as "SECRET_OR_KEY"</p>
<p> 4. Create the user for the "Cloudinary", go to the client folder, find "AddDog.js" and in the const =upload image change the user's cloaudinary data for your own </p>
<p> 5. Prepare netlify and heroku for deployment </p>
<p> 6. Create a .env file locally with the content "REACT_APP_BACKEND_URL=http://localhost:5000/" and a .env.development file with the same variable but enter the heroku url </p>
<p> 7. Ready to deploy! </p>
