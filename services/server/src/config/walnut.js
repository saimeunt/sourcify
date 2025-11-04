module.exports = {
  serverUrl:
    process.env.NODE_ENV !== "production"
      ? "http://sourcify.walnut.local"
      : "https://sourcify.walnut.dev",
  corsAllowedOrigins: [
    process.env.NODE_ENV !== "production"
      ? "http://verify.walnut.local"
      : "https://verify.walnut.dev",
  ],
};
