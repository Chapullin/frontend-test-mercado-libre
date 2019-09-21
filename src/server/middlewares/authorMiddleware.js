const authorMiddleware = (req, res, next) => {
  res.author = {
    name: 'Cristian',
    lastname: 'Molinero'
  };
  next();
};

module.exports = authorMiddleware;
