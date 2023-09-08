# NextJS-Auth-Blog
## Stack : 
1. NextJS
2. Prisma as ORM [Prisma](http://prisma.io) - I love prisma 💜
3. Next-Auth
4. Chakra-UI


# Desc
I made this project as a step to learn to make applications. this project might be simple for some, but quite difficult for a beginner like me.
In this project you can sign in and create or post content. by default the content created is not published. but don't worry, you can publish it and also change the content on the draft page.
Hopefully this project can be my first start as a developer and also inspire you.

# Prerequisites
List any software or tools that need to be installed before setting up your project. Include versions if necessary.

- Node.js (version 18)
- npm (version 8)
- PostgreSQL (version 13 to 15)


# How to Install
1. Clone this project
2. run :
    `cd [projct_dirctory]` 
    `npm install`
3. Setup Prisma :
    `npm install prisma --save-dev`
    `npx prisma init`
4. Inside the .env file, you should see a DATABASE_URL environment variable with a dummy connection string. Replace this connection string with the one for your PostgreSQL instance.
    
    > // .env

    > DATABASE_URL="postgres://[USERNAME]:[YOUT_PASSWORD]@localhost:5432/nexjs-auth-blog"

5. Run migration :
 `npx prisma migrate dev --name "init"`
6. Run :
   `npm run start` or `npm run dev`
8. Done, you can access this app at http://localhost:3000
