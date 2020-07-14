<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog__link-to-cart">Cart : {{ CART.length }}</div>
    </router-link>
    <h1 class="catalog__title">Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="sendToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: {
    CatalogItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "GET_TO_CART"]),
    sendToCart(data) {
      this.GET_TO_CART(data);
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        console.log("all data Upload");
      }
    });
  }
};
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>