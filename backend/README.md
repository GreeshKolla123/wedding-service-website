# Wedding Website

This is a modern online wedding invitation website with RSVP system, photo gallery, and wedding details.

## Setup

1. Install dependencies: `npm install`
2. Start the server: `npm start`

## API Endpoints

### Wedding

* `GET /wedding`: Retrieve wedding details
* `POST /wedding`: Create a new wedding event

### RSVP

* `GET /rsvp`: Retrieve RSVPs
* `POST /rsvp`: Create a new RSVP

### Photo

* `GET /photo`: Retrieve wedding photos
* `POST /photo`: Upload a new wedding photo

### User

* `GET /user`: Retrieve users
* `POST /user/register`: Register a new user
* `POST /user/login`: Login a user

### Admin

* `GET /admin/wedding`: Retrieve wedding events for admin
* `POST /admin/wedding`: Create a new wedding event for admin