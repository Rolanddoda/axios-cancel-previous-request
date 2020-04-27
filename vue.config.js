module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/axios-cancel-previous-request/"
      : "/",
  devServer: {
    clientLogLevel: "warn",
    overlay: false
  }
};
