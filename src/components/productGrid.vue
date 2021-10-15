<template>
  <div>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex v-for="product in this.products" :key="product.id" xs4>
          <template
            v-if="filters.length === 0 || filters.includes(categories.indexOf(product.category))"
          >
            <product-grid-item :product="product"></product-grid-item>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { ProductData } from '@/services/productService';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductGridItem from './productGridItem.vue';

@Component({ components: { ProductGridItem } })
export default class ProductGrid extends Vue {
  @Prop({ required: true })
  products!: ProductData[];

  @Prop({ required: true, default: [] })
  filters!: number[];

  /** unhappy with this for the moment, but time constraints */
  @Prop({ required: true, default: () => [] })
  categories!: string[];
}
</script>

<style></style>
<style lang="sass" scoped></style>
