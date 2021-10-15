<template>
  <v-card flat tile outlined>
    <div class="imgcenter" @click="toProductDetails">
      <v-img :src="product.image" contain height="256" width="256"></v-img>
    </div>
    <v-card-title @click="toProductDetails"><a>{{ product.title }}</a></v-card-title>
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

  toProductDetails() {
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

.imgcenter
    text-align: center
    text-align: -webkit-center
    cursor: pointer
</style>
