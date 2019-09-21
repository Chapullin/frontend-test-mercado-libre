const {
  getProductsByQuery,
  getProductById,
  getProductDescriptionById
} = require('..');

const axios = require("axios").default;


describe("getProductById", () => {
  it("should test result 404", () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    getProductById("").then(result => {
      expect(result.status).toBe(404);
    });
  });

  it("should test result data", () => {
    axios.get = jest
      .fn()
      .mockImplementation(() => ({ data: { id: "MLA45004444" } }));

    getProductById("").then(result => {
      expect(result.data.id).toBe("MLA45004444");
    });
  });
});

describe("getProductsByQuery", () => {
  it("should test result 404", () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    getProductsByQuery("").then(result => {
      expect(result.status).toBe(404);
    });
  });

  it("should test result data", () => {
    axios.get = jest.fn().mockImplementation(() => ({
      items: [{ id: "1" }, { id: "2" }, { id: "3" }]
    }));

    getProductById("").then(result => {
      expect(result.items.length).toBe(3);
    });
  });
});
