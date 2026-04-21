```
url-shortner/
│
├── backend/                          # Express.js Server
│   ├── config/                       # Configuration files
│   │   └── database.js              # MongoDB connection setup
│   │
│   ├── controllers/                  # Business Logic
│   │   └── urlController.js         # URL shortening operations
│   │
│   ├── middleware/                   # Middleware Functions
│   │   └── errorHandler.js          # Error handling middleware
│   │
│   ├── models/                       # Database Schemas
│   │   └── Url.js                   # MongoDB URL schema
│   │
│   ├── routes/                       # API Routes
│   │   └── url.js                   # URL endpoints
│   │
│   ├── utils/                        # Helper Functions
│   │   └── urlUtils.js              # URL validation & ID generation
│   │
│   ├── server.js                     # Server entry point
│   ├── package.json                  # Dependencies
│   └── .env                          # Environment variables
│
├── frontend/                         # React Application
│   ├── src/
│   │   ├── components/              # Reusable UI Components
│   │   │   ├── URLInput.jsx         # Input field & button
│   │   │   ├── ShortURLDisplay.jsx  # Display short URL
│   │   │   └── QRCodeDisplay.jsx    # QR code display
│   │   │
│   │   ├── services/                # API Communication
│   │   │   └── urlService.js        # API calls to backend
│   │   │
│   │   ├── utils/                   # Helper Functions
│   │   │   └── constants.js         # Reusable constants
│   │   │
│   │   ├── App.jsx                  # Main App component
│   │   ├── main.jsx                 # React entry point
│   │   └── index.css                # Global styles
│   │
│   ├── package.json                 # Dependencies
│   ├── vite.config.js              # Vite configuration
│   └── tailwind.config.js           # Tailwind CSS config
│
└── README.md                         # Project documentation
```

## 📂 FOLDER STRUCTURE EXPLANATION

### **BACKEND** 🔧

#### `config/`
- **Purpose**: Store configuration files that initialize external services
- **What goes here**: Database connection, API keys, environment setup
- **Example**: `database.js` - Handles MongoDB connection

#### `controllers/`
- **Purpose**: Contains the business logic for each feature
- **What goes here**: Functions that handle requests and return responses
- **Example**: `urlController.js` - All URL shortening logic

#### `middleware/`
- **Purpose**: Functions that process requests before they reach routes
- **What goes here**: Authentication, validation, error handling
- **Example**: `errorHandler.js` - Catches and formats errors

#### `models/`
- **Purpose**: Database schema definitions (only for MongoDB)
- **What goes here**: How data is structured in the database
- **Example**: `Url.js` - Defines what fields a URL document has

#### `routes/`
- **Purpose**: Define all API endpoints
- **What goes here**: Route definitions that connect to controllers
- **Example**: `url.js` - POST /shorten, GET /:shortId endpoints

#### `utils/`
- **Purpose**: Helper functions used across the application
- **What goes here**: Validation, formatting, generation utilities
- **Example**: `urlUtils.js` - URL validation and ID generation

#### `server.js`
- **Purpose**: Main entry point that starts the server
- **What goes here**: Express app setup, middleware registration, server start
- **Run**: `npm start` or `npm run dev`

---

### **FRONTEND** ⚛️

#### `components/`
- **Purpose**: Reusable UI pieces
- **What goes here**: React components for different parts of the UI
- **Examples**:
  - `URLInput.jsx` - Input field and Shorten button
  - `ShortURLDisplay.jsx` - Shows the shortened URL
  - `QRCodeDisplay.jsx` - Displays QR code and download button

#### `services/`
- **Purpose**: Handle all communication with the backend
- **What goes here**: API calls using axios or fetch
- **Example**: `urlService.js` - Functions like `shortenUrl()`, `getStats()`

#### `utils/`
- **Purpose**: Helper functions for the frontend
- **What goes here**: Constants, validators, formatters
- **Example**: `constants.js` - Colors, messages, timeouts

#### `App.jsx`
- **Purpose**: Main component that brings everything together
- **What goes here**: State management, component coordination
- **Key responsibilities**: URL input, API calls, error handling

#### `main.jsx`
- **Purpose**: Entry point that mounts React to the DOM
- **Run**: `npm run dev` (Vite dev server)

#### `index.css`
- **Purpose**: Global styles for the entire application
- **What goes here**: Base styles, global utilities, Tailwind imports

---

## 🔄 HOW DATA FLOWS

```
USER ENTERS URL
    ↓
[URLInput.jsx] → User types and clicks "Shorten"
    ↓
[App.jsx] → handleShorten() function executes
    ↓
[urlService.js] → shortenUrl() API call to backend
    ↓
[BACKEND] → Routes → Controllers → Models → Database
    ↓
[Database] → Generates short ID, saves URL mapping
    ↓
[BACKEND] → Returns { shortUrl, shortId }
    ↓
[urlService.js] → Returns response to App.jsx
    ↓
[App.jsx] → Updates state with shortUrl and generates QR code
    ↓
[ShortURLDisplay.jsx] → Renders short URL
[QRCodeDisplay.jsx] → Renders QR code
    ↓
USER SEES RESULT ✅
```

---

## 📚 BEGINNER TIPS

### **Understanding Components**
- Components are reusable pieces of UI
- Each component has a specific job
- Props are how components communicate with each other

### **Understanding Services**
- Services handle all API communication
- Never make API calls directly in components
- Services make it easy to change API endpoints later

### **Understanding Controllers**
- Controllers contain the "brain" of your app
- One controller = one feature
- Controllers call models to interact with database

### **Understanding Routes**
- Routes are like "doors" to your application
- Each route connects to a specific controller function
- HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete)

---

## 🚀 QUICK START

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create `.env` files with:
- Backend: `MONGO_URI`, `PORT`, `FRONTEND_URL`, `BASE_URL`
- Frontend: `VITE_BACKEND_URL`
