# 🐳 Docker Deployment Guide - Hijaukan Negeri

## 📋 Prerequisites

- Docker & Docker Compose installed
- MongoDB Atlas account (recommended) or local MongoDB
- Environment variables configured

## 🚀 Quick Start

### 1. Clone & Setup Environment

```bash
# Clone repository
git clone <repository-url>
cd hijaukan-negeri-app

# Copy environment file
cp .env.docker .env.local
```

### 2. Configure Environment Variables

Edit `.env.local` with your MongoDB credentials:

```env
# Use MongoDB Atlas (Recommended)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hijaukan_negeri?retryWrites=true&w=majority

# Or use local MongoDB container
# MONGODB_URI=mongodb://admin:password@mongodb:27017/hijaukan_negeri?authSource=admin

NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

### 3. Build & Run with Docker Compose

```bash
# Build and start all services
docker-compose up --build -d

# Check logs
docker-compose logs -f hijaukan-negeri-app

# Stop services
docker-compose down
```

## 🔧 Manual Docker Build

```bash
# Build Docker image
docker build -t hijaukan-negeri-app .

# Run container
docker run -p 3000:3000 \
  -e MONGODB_URI="your-mongodb-uri" \
  -e NEXTAUTH_SECRET="your-secret" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  hijaukan-negeri-app
```

## 📁 Project Structure

```
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Services orchestration
├── .dockerignore           # Files to exclude from build
├── .env.docker             # Environment template
└── next.config.ts          # Next.js standalone build config
```

## 🌐 Access Application

- **Application**: http://localhost:3000
- **MongoDB** (if using local): mongodb://localhost:27017

## 🛠️ Development vs Production

### Development Mode
```bash
# Use MongoDB Atlas for shared database
MONGODB_URI=mongodb+srv://...

# Start with hot reload
npm run dev
```

### Production Mode
```bash
# Build and run with Docker
docker-compose up --build -d
```

## 📊 Health Check

```bash
# Check container status
docker-compose ps

# View application logs
docker-compose logs hijaukan-negeri-app

# Test database connection
curl http://localhost:3000/api/posts
```

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Use strong secrets for production
- Configure MongoDB Atlas IP whitelist
- Use HTTPS in production

## 🚨 Troubleshooting

### Build Issues
```bash
# Clean build
docker-compose down
docker system prune -a
docker-compose up --build
```

### Database Connection Issues
```bash
# Check MongoDB connection
docker-compose exec hijaukan-negeri-app node test-db-connection.js
```

### Port Conflicts
```bash
# Change port in docker-compose.yml
ports:
  - "3001:3000"  # Use port 3001 instead
```

## 📋 Next Steps

1. ✅ Application containerized successfully
2. ✅ Database integration working
3. ✅ Production build optimized
4. 🔄 Ready for deployment to cloud platforms
5. 🔄 Can add CI/CD pipeline
6. 🔄 Can implement monitoring & logging
