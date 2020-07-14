<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog'}">
      <div class="catalog__link-to-cart">Back to catalog</div>
    </router-link>
    <p v-if="!cart_data.length">No products in cart</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @deleteOneCart="deleteOneCart(index)"
      @addOneCart="addOneCart(index)"
    />
    <div class="cart__total">
      <p>Total</p>
      <p>{{ cartTotalCost }} rub</p>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import { mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      if (this.cart_data.length) {
        let result = [];
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
          return 0;
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "DELETE_ONE_CART","INCREASE_ONE_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    deleteOneCart(index) {
      this.DELETE_ONE_CART(index);
    },
    addOneCart(index) {
        this.INCREASE_ONE_CART(index);
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style>
</style>