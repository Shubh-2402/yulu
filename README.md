## Demo Video
https://drive.google.com/file/d/1KLcgROoJZfqjtHUzXHva2Pwict0Z6w6F/view?usp=sharing

## Salient Features
   1. JWT based authentication
   2. Role based access control (RBAC) on api routes
   3. Sequelize ORM used for quering MySQL database
   4. Input validation on client side
   5. React Context API - To manage user authentication and authorization on client side.
   6. Bootstrap - UI Components

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Cal.com.

- Node.js (Version: >=18.x)
- MySQL
- npm

## Development

### Setup

1. Clone the GitHub repository.
   ```sh
   git clone https://github.com/Shubh-2402/yulu.git
   ```
   
2. Go to the project folder yulu-backend and install packages with npm

   ```sh
   npm install
   ```

3. Set up your `.env` file as shown in the image below
   
    ![Screenshot from 2024-03-02 13-31-50](https://github.com/Shubh-2402/yulu/assets/56020434/118e8986-43d5-48a9-aef3-af09a44929b9)

4. Open config.json file under config folder and set the password of mysql root user in the development object as show in the image
   
    ![Screenshot from 2024-03-02 13-36-12](https://github.com/Shubh-2402/yulu/assets/56020434/0bf1048a-be62-4988-bb01-92da0648eb87)

6. Run the backend server in the development mode
   
    ```sh
   npm run dev
   ```
    server should be up and running on localhost:3000
    
7. Go to the project folder yulu-frontend and install packages with npm

   ```sh
   npm install
   ```
   
8. Set up your `.env` file as shown in the image below
    
      ![Screenshot from 2024-03-02 13-42-40](https://github.com/Shubh-2402/yulu/assets/56020434/d669af18-d53d-48f7-90ba-982831dd3285)
    

9. Run the client application

    ```sh
   npm start
   ```

    client should be up and running on localhost:3001




