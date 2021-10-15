<template>
  <v-card flat tile outlined @click="onClick">
    <div class="imgcenter">
      <v-img
        :src="product.image"
        contain
        height="256"
        width="256"
      ></v-img>
    </div>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-spacer></v-spacer>
      <div>{{ product.price }}</div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ProductData } from '@/services/productService';
import { ROUTE_NAMES } from '@/router/index';

@Component
export default class ProductGridItem extends Vue {
  @Prop({ required: true })
  product!: ProductData;

  onClick() {
    this.$router.push({
      name: ROUTE_NAMES.product,
      params: { id: `${this.product.id}` },
    });
  }
}
</script>

<style lang="sass" scoped>
.v-card
    height: 100%
    cursor: pointer

.imgcenter
    text-align: center
    text-align: -webkit-center
</style>
