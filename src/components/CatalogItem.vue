<template>
  <div class="catalogItem">
    <img
      class="catalogItem__img"
      :src=" require('../assets/images/' + product_data.image)"
      alt="картинка товара"
    />
    <p class="catalogItem__name">Name: {{ product_data.name }}</p>
    <p class="catalogItem__price">Price: {{ product_data.price }} rub</p>
    <button class="catalogItem__button" 
        @click="addToCart">
            Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  components: {},
  props: {
    product_data: {
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
      addToCart() {
          this.$emit('addToCart', this.product_data)
      }
  },
  watch: {},
  mounted() {
  }
};
</script>

<style lang="scss">
.catalogItem {
  &__img {
    width: 100px;
  }
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>