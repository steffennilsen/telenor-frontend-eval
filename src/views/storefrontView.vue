<template>
    <div v-if="products">
        <filter-sidebar :categories="this.categories"></filter-sidebar>
        <product-grid :products="this.products"></product-grid>
    </div>
</template>

<script lang="ts">
import ProductGrid from '@/components/productGrid.vue';
import { productService, ProductData } from '@/services/productService';
import FilterSidebar from '@/components/filterSidebar.vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ components: { ProductGrid, FilterSidebar } })
export default class StorefrontView extends Vue {
    products: ProductData[] | null = null;
    categories: string[] | null = null;

    created() {
        productService.getAllProducts().then((products) => {
            console.log(products);
            this.products = products;
            this.categories = productService.getProductCategories(products);
        });
    }
}
</script>

<style lang="sass" scoped></style>
