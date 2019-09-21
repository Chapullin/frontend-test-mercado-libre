const axios = require('axios').default;

const getProductsByQuery = async (q) => {
  try {
    return await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&&limit=4`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProductById = async (id) => {
  try {
    return await axios.get(`https://api.mercadolibre.com/items/${id}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProductDescriptionById = async id => {
  try {
    return await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProductCategoryById = async (id) =>
{
  try {
    return await axios.get(`https://api.mercadolibre.com/categories/${id}`);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getProductsByQuery,
  getProductById,
  getProductDescriptionById,
  getProductCategoryById,
};
