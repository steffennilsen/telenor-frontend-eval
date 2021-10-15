<template>
  <v-toolbar dark color="blue">
    <v-btn icon @click="goHome">
      <v-icon>home</v-icon>
    </v-btn>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search"
      solo-inverted
      full-width
      :item-text="itemText"
      :item-value="itemValue"
      @change="selectItem"
    ></v-autocomplete>
    <v-btn icon @click="goHome">
      <v-icon>shopping_cart</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { productService, ProductData } from '@/services/productService';
import { ROUTE_NAMES } from '@/router';

@Component
export default class Searchbar extends Vue {
  select: string | null = null;
  loading = false;
  items: ProductData[] = [];
  _search: string | null = null;

  get search() {
    return this._search;
  }

  set search(s: string | null) {
    s && s !== this.select && this.query(s);
  }

  async query(s: string) {
    this.loading = true;
    const products = await productService.getAllProducts();
    const items: Set<ProductData> = new Set();

    // ['title', 'description'].forEach((field) => {
    //   products
    //     .filter((product) =>
    //       product[field].toLowerCase().indexOf(s.toLowerCase())
    //     )
    //     .forEach((product) => items.add(product));
    // });

    products
      .filter((product) => product.title.toLowerCase().indexOf(s.toLowerCase()))
      .forEach((product) => items.add(product));

    products
      .filter((product) =>
        product.description.toLowerCase().indexOf(s.toLowerCase())
      )
      .forEach((product) => items.add(product));

    this.items = Array.from(items);
    this.loading = false;
  }

  itemText(product: ProductData) {
    return product.title;
  }

  itemValue(product: ProductData) {
    return product.id;
  }

  selectItem(id: string) {
    this.$router.push({
      name: ROUTE_NAMES.product,
      params: { id },
    });
  }

  goHome() {
    if (this.$router.currentRoute.name !== ROUTE_NAMES.storefront) {
      this.$router.push({
        name: ROUTE_NAMES.storefront,
      });
    }
  }
}
</script>

<style lang="sass" scoped></style>
