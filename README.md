# Random Movie Selector

A Javascript program written to grab a list of movies from MongoDB and randomly select one. The console will then ask the user if they want to mark the movie as watched, and update the document accordingly. Written in the spirit of Halloween to solve my issue of finding a horror movie to watch.

# Prerequisites

A Mongo database is needed to run this script. While this is far more complicated than it needs to be, the Mongo connection is here to show the basics of working with Mongoose models and Mongo connections within Node.js.

# Usage

To get started, rename the config.example.json file to config.json, and be sure to put your mongo connection uri in the file. Additionally, the movies.example.json file can be used to load initial data into MongoDB. The "watched" property is optional - as the Mongoose model will default to false if it is not provided. Once these two files are filled out, the following command can be run to load the data into Mongo:

```bash
node initialize
```

To run the actual random movie selector run

```bash
node app
```
