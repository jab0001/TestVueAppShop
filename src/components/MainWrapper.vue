<template>
  <div class="mainWrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "MainWrapper",
  props: {},
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
};
</script>

<style>
.mainWrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>