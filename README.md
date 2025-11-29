# wedding-service-website

A modern online wedding invitation website with RSVP system, photo gallery, and wedding details

## Tech Stack

- **Frontend**: Next.js 14
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/FfnnHRPoygOhto1mMckkHd/Wedding-Service-Website--Community-?node-id=1-1389&t=sqxqeENx42iYCZay-1))

## Project Structure

```
wedding-service-website/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- RSVP system
- Photo gallery
- Wedding details
- Admin dashboard
- User authentication
- Email notifications

## API Endpoints

- `GET /api/wedding` - Retrieve wedding details.
- `POST /api/rsvp` - Create a new RSVP.
- `GET /api/photos` - Retrieve wedding photos.
- `POST /api/photos` - Upload a new wedding photo.
- `GET /api/admin/wedding` - Retrieve wedding events for admin.
- `POST /api/admin/wedding` - Create a new wedding event for admin.

## License

MIT
