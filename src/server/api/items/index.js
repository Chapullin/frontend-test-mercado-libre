const router = require('express').Router();
const services = require('./../../../services');
const authorMiddleware = require('./../../middlewares/authorMiddleware');

const apiCall = (req, res, next) => {
  if (req.query && req.query.q) {
    services.getProductsByQuery(req.query.q).then((result) => {
      res.data = result.data;
      next();
    });
  } else if (req.params && req.params.id) {
    const productPromise = services.getProductById(req.params.id);
    const productDescriptionPromise = services.getProductDescriptionById(req.params.id);

    Promise.all([productPromise, productDescriptionPromise]).then(
      (result) => {
        const categoryId = result[0].data.category_id;
        services.getProductCategoryById(categoryId).then(
          (categories) => {

            res.data = Object.assign(
              {},
              result[0].data,
              result[1].data,
              { categories: categories && categories.data.path_from_root }
            );

            next();
          }
        );
      }
    );
  }
};

const responseMiddleware = (req, res, next) => {
  const mapping = {
    author: res.author,
  };
  if (req.query && req.query.q) {
    mapping.items = res.data.results;
    mapping.categories = {};
  } else if (req.params && req.params.id) {
    const itemCondition = res.data.attributes.find(
      item => item.id === 'ITEM_CONDITION'
    );


    mapping.item = {
      id: res.data.id,
      title: res.data.title,
      price: {
        currency: res.data.currency_id,
        amount: res.data.price.toFixed(0),
        decimals: res.data.price % 1
      },
      picture: res.data.pictures.length && res.data.pictures[0],
      condition: itemCondition,
      free_shipping: res.data.shipping && res.data.shipping.free_shipping,
      sold_quantity: res.data.sold_quantity,
      description: res.data.plain_text,
    };


    mapping.categories = res.data.categories;
  }


  res.json(mapping);
};

// api/items/:id
router.get(
  '/:id?',
  authorMiddleware,
  apiCall,
  responseMiddleware
);


module.exports = router;
