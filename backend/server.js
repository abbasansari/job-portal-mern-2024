import app from "./app.js";

app.listen(3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// Middleware for handling CORS requests
