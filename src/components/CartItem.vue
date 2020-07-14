<template>
  <div class="cartItem">
    <img
      class="cartItem__img"
      :src=" require('../assets/images/' + cart_item_data.image)"
      alt="картинка товара"
    />
    <div class="cartItem__wrapper">
      <p class="cartItem__name">Name: {{ cart_item_data.name }}</p>
      <p class="cartItem__price">Price: {{ cart_item_data.price }} rub</p>
      <p class="cartItem__article">Name: {{ cart_item_data.article }}</p>
    </div>
    <p v-if="!cart_item_data.available">No more this product on market</p>
    <div class="cartItem__quantity" v-else>
      <p>Quantity:</p>
      <span>
        <span>
          <button class="cartItem__btn" @click="addOneCart">+</button>
        </span>
        {{ cart_item_data.quantity }}
        <span>
          <button class="cartItem__btn" @click="deleteOneCart">-</button>
        </span>
      </span>
    </div>
    <button class="cartItem__btn" @click="deleteFromCart">remove</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    deleteOneCart() {
      this.$emit("deleteOneCart");
    },
    addOneCart() {
      this.$emit("addOneCart");
    }
  },
  watch: {},
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  }
};
</script>

<style lang="scss">
.cartItem {
  &__img {
    width: 100px;
  }

  &__btn {
    height: 50px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>