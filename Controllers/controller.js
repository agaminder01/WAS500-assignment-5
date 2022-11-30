const model = require("../Models/model")

exports.getAllBooks = (req, res, next) => {
  model.find({}, (error, books) => {
    if (error) next(error);
    req.data = books;
    next();
  });
};

exports.Book1 = (req, res, next) => {
    model.find({id: "book1"}, (error, books) => {
      if (error) next(error);
      req.data = books;
      next();
    });
};
exports.Book2 = (req, res, next) => {
    model.find({id: "book2"}, (error, books) => {
      if (error) next(error);
      req.data = books;
      next();
    });
};
exports.Book3 = (req, res, next) => {
    model.find({id: "book3"}, (error, books) => {
      if (error) next(error);
      req.data = books;
      next();
    });
};