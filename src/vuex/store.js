import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_PRODUCTS_TO_CART: (state, cart) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function(item) {
          if (item.article === cart.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(cart);
        }
      } else {
        state.cart.push(cart);
      }
    },
    DELETE_CART(state, index) {
      state.cart.splice(index, 1);
    },
    REMOVE_ONE_CART(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        state.cart.splice(index, 1);
      }
    },
    ADD_ONE_CART(state, index) {
      state.cart[index].quantity++;
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return Axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_TO_CART({ commit }, product) {
      commit("SET_PRODUCTS_TO_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("DELETE_CART", index);
    },
    DELETE_ONE_CART({ commit }, index) {
      commit("REMOVE_ONE_CART", index);
    },
    INCREASE_ONE_CART({ commit }, index) {
      commit("ADD_ONE_CART", index);
    },
  },
});

export default store;
