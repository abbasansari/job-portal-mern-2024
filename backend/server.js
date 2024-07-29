import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`.bgGreen);
});

// Middleware for handling CORS requests
