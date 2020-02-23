module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/axios-cancel-previous-request/"
      : "/"
};
