# React + Vite + TailwindCSS + Express Full Stack Template

A modern full-stack application template using React with Vite for lightning-fast development, Tailwind CSS for styling, and Express.js for the backend. This template provides a clean starting point for building full-stack applications with a beautiful dark-themed UI and optimized development experience.

## 🚀 Features

- **Frontend**: React + Vite for lightning-fast development
- **Styling**: Tailwind CSS for utility-first styling
- **Backend**: Express.js REST API
- **Build**: Optimized production builds with Vite
- **API Integration**: Ready-to-use API endpoints

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/kirtick28/Sample-Vite-React-tailwind.git
cd Sample-Vite-React-tailwind
```

2. Set up the backend:

```bash
cd server
npm install
```

3. Create a `.env` file in the server directory:

```bash
PORT=5000
```

4. Set up the frontend:

```bash
cd ../client
npm install
```

## 🚀 Running the Application

1. Start the backend server:

```bash
cd server
node index.js
```

The server will start running on http://localhost:5000

2. In a new terminal, start the frontend development server:

```bash
cd client
npm run dev
```

The frontend will be available at http://localhost:5173

## 📡 API Endpoints

The backend provides the following REST API endpoints:

### Test Endpoint

- **GET** `/api/test`
  - Returns a test message
  - Response: `{ message: "API is working!" }`

### Health Check

- **GET** `/api/health`
  - Returns the health status of the API
  - Response: `{ status: "healthy" }`

### Default Route

- **GET** `/*`
  - Returns a default message for any undefined routes
  - Response: `{ message: "Backend is running!" }`

## 🎨 Frontend Features

- Dark theme UI with gradient backgrounds
- Responsive design
- Loading states and error handling
- Real-time API integration
- Modern button animations and transitions

## 🔧 Development

### Backend Structure

```
server/
├── index.js          # Main server file
├── .env             # Environment variables
└── package.json     # Dependencies
```

### Frontend Structure

```
client/
├── src/
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
└── package.json     # Dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Kirtick M M - Initial work

## 🙏 Acknowledgments

- React.js
- Express.js
- Tailwind CSS
- Vite
