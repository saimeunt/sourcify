module.exports = {
  corsAllowedOrigins: [
    process.env.NODE_ENV !== "production"
      ? "http://verify.walnut.local"
      : "https://verify.walnut.dev",
  ],
};
