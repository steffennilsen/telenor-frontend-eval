<template>
  <div v-if="products">
    <v-container>
      <v-row>
        <searchbar></searchbar>
      </v-row>
      <v-row>
        <v-col cols="2">
          <filter-sidebar
            :categories="this.categories"
            :filters="this.filters"
            @onFilterChange="onFilterChange"
          ></filter-sidebar>
        </v-col>
        <v-col cols="10">
          <product-grid
            :products="this.products"
            :filters="this.filters"
            :categories="this.categories"
          ></product-grid>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import ProductGrid from '@/components/productGrid.vue';
import { productService, ProductData } from '@/services/productService';
import FilterSidebar from '@/components/filterSidebar.vue';
import Searchbar from '@/components/searchbar.vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ components: { ProductGrid, FilterSidebar, Searchbar } })
export default class StorefrontView extends Vue {
  products: ProductData[] | null = null;
  categories: string[] | null = null;
  filters: number[] = [];

  created() {
    productService.getAllProducts().then((products) => {
      this.products = products;
      this.categories = productService.getProductCategories(products);
    });
  }

  onFilterChange(filters: number[]) {
    this.filters = filters.sort();
  }
}
</script>

<style lang="sass" scoped></style>
