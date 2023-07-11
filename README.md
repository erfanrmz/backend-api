# Express Node.js API with MongoDB

This repository contains a sample Express Node.js API with MongoDB integration, along with a Docker Compose file to facilitate easy local deployment using Docker and Node.js.

## Prerequisites

Before running the application, ensure that you have the following dependencies installed on your system:

- Node.js (v14 or higher)
- Docker
- Docker Compose

## Getting Started

To get started with this API locally, follow the steps below:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/erfanrmz/backend-api.git
   ```
2. Navigate to the project's root directory:
   ```shell
   cd backend-api-master
   ```
3. Start the application using Docker Compose:
   ```shell
   docker-compose up
   ```
This command will build the Docker images and start the containers for the API and MongoDB.

4.Once the containers are up and running, you can access the API at http://localhost:5000.

## Usage

The API supports the following endpoints:

- `POST /create-partner`: creating a partner and save it in database
- `GET /load-partner:id`: Retrieves a partner by its ID.
- `@route GET /search-partner:long&lat`: searching a point and find nearest partner with lang and lat in query

You can use tools like [Postman](https://www.postman.com) or [curl](https://curl.se) to interact with the API.

## Automation test
1. first install mocha with npm
   ```shell
   npm install -g mocha
   ```
2.install all dependecies 
   ```shell
   npm install
   ```
3. run ATDD.js with mocha
   ```shell
   mocha ATDD.js
   ```
4. if running scripts is disable on your system open a powershell and set Execution Policy to RemoteSigned
   ```shell
   Set-ExecutionPolicy RemoteSigned
   ```


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to this repository.

## License

This project is licensed under the [MIT License](LICENSE).




