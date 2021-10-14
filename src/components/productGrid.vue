<template>
    <v-container>
        <v-row
            v-for="row in Math.ceil(this.products.length / this.cols)"
            :key="row" :cols="cols" no-gutters
        >
            <template v-if="row">
                <v-col v-for="product in productCol(row)" :key="product.id">
                    <template v-if="product">
                        <product-grid-item :product="product"></product-grid-item>
                    </template>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { ProductData } from '@/services/productService';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductGridItem from './productGridItem.vue';

@Component({ components: { ProductGridItem } })
export default class ProductGrid extends Vue {
    @Prop({required: true})
    products!: ProductData[];

    cols = 4; // static atm
    colWidth = 2; // static atm

    /**
     * @param row Vue seems to start for index on 1, be aware
     */
    productCol(row: number): ProductData[] {
        const list: ProductData[] = [];
        const base = (row - 1) * this.cols;
        for (let i = 0; i < this.cols; i++) {
            const product = this.products[base + i];
            if (product) {
                list.push(this.products[base + i]);
            }
        }
        return list;
    }
}
</script>

<style></style>
<style lang="sass" scoped></style>
