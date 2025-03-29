export type apiConfigType = {
  project: {
    environment: string; // Environment for the project;
    port: number; // Port number for the API server;
  };
  protections: {
    cors: {
      origin: string; // Origin for CORS;
    };
    rateLimit: {
      windowMs: number; // Time window for rate limiting (in milliseconds);
      max: number; // Maximum number of requests in the time window;
    };
  };
};
