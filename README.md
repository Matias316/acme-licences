# acme-licences
Acme bros pictures music licenses is a tool to track the songs licenses in movies

This application requires Node.js installed:

https://nodejs.org/en/

# Pre-requisites - Configuration
Clone the project: git clone git@github.com:Matias316/acme-licences.git

Download dependencies: npm install

Set the path where the sqlite Db file will be created in the configuration file config\db.config.js

Set the server http port in config\environment.js (currently port 3000 is used)

Start the server: npm start

# Usage

Currently the front-end is not working but the API rest can be tested with Postman or curl requests:

// Creations

1) Create Movies:

POST http://localhost:3000/api/movies

Example - In body set following parameters

title = 'Rocky'
genre = 'Action'

Movie created with id = 1


2) Create songs:

POST http://localhost:3000/api/songs

Example - In body set following parameters

title = 'Song2'
duration = 100
owner = 'Blur'

Song created with id = 1


3) Create track events statuses

POST http://localhost:3000/api/trackEventStatuses

Example1 - In body set following parameters

type = 'INIT'

Track event status created with id = 1


Example2 - In body set following parameters

type = 'ACCEPTED'

Track event status created with id = 2


4) Create tracks for Movie - Song 

POST http://localhost:3000/api/tracks

Example - In body set following parameters

songStartTime = '00:00'
songEndTime = '00:10'
songId = 1
movieId = 1

Track created with id = 1


5) Create track events for Track

POST http://localhost:3000/api/trackEvents

Example - In body set following parameters

description = 'Initial negotiations started 13/03/2020'
trackId = 1
statusId = 1

Track event created with id = 1

POST http://localhost:3000/api/trackEvents

Example - In body set following parameters

description = 'Owner accepted the conditions 18/03/2020'
trackId = 1
statusId = 2

Track event created with id = 2


// Queries

1) Get all tracks from a song

GET     http://localhost:3000/api/tracks?songId=1


1) Get all tracks events from a track

GET     http://localhost:3000/api/trackEvents?trackId=1 

