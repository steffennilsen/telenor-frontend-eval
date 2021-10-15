<template>
  <v-container>
    <v-row><searchbar></searchbar></v-row>
    <v-row v-if="this.product">
      <v-card flat tile outlined>
        <div class="imgcenter">
          <v-img :src="product.image" contain height="256" width="256"></v-img>
        </div>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-text>{{ product.description }}</v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div>{{ product.price }}</div>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { productService, ProductData } from '@/services/productService';
import Searchbar from '@/components/searchbar.vue';

@Component({components: {Searchbar}})
export default class ProductView extends Vue {
  id = this.$route.params.id;
  product: ProductData | null = null;

  created() {
    productService.getProduct(this.id).then((product) => {
      this.product = product;
    });
  }
}
</script>

<style lang="sass" scoped>
.imgcenter
    text-align: center
    text-align: -webkit-center
</style>
