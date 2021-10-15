<template>
  <v-toolbar dark color="blue">
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
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { productService, ProductData } from '@/services/productService';

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
}
</script>

<style lang="sass" scoped></style>
