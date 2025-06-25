const config = {
  development: "http://localhost:8080", // For local development
  production: "/api"                    // For Kubernetes with Nginx proxy
};

// Detect if running locally (on localhost), otherwise use production
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// Set the base URL globally
window.apiBaseURL = isLocal ? config.development : config.production;

