const handleErrors = (error, _request, response, _next) => {
  console.log(error);
  if (error.code) {
    return response.status(error.code).json({ message: error.message });
  }

  return response.status(500).json({ message: error.message });
};

module.exports = { handleErrors };
