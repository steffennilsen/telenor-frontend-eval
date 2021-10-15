<template>
  <v-card flat tile outlined>
    <div class="imgcenter" @click="toProductDetails">
      <v-img :src="product.image" contain height="256" width="256"></v-img>
    </div>
    <v-card-title class="text-overflow" @click="toProductDetails"
      ><a>{{ product.title }}</a></v-card-title
    >
    <v-spacer></v-spacer>
    <v-card-actions>
      <div>{{ product.price }}</div>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" @click="addToCart"><v-icon>add_shopping_cart</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ProductData } from '@/services/productService';
import { cartService } from '@/services/cartService';
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

  addToCart() {
    cartService.addProductToCart([{productId: this.product.id, quantity: 1}]);
  }
}
</script>

<style lang="sass" scoped>
.v-card
    height: 100%

.text-overflow
  height: 96px
  min-height: 96px
  max-height: 96px
  text-overflow: ellipsis
  overflow: hidden

.imgcenter
    text-align: center
    text-align: -webkit-center
    cursor: pointer
</style>
