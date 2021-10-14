<template>
    <v-container>
        {{ this.products.length }}
        <v-row
            v-for="row in Math.ceil(this.products.length / this.COLS_PER_ROW)"
            :key="row"
        >
            <v-col v-for="product in productCol(row)" :key="product.id">
                <template v-if="product">
                    <div>
                        {{ product.title }}
                    </div>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { ProductData } from '@/services/productService';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Product from './product.vue';

@Component({ components: { Product } })
export default class ProductGrid extends Vue {
    @Prop()
    products!: ProductData[];

    COLS_PER_ROW = 6; // static atm

    /**
     * @param row Vue seems to start for index on 1, be aware
     */
    productCol(row: number): ProductData[] {
        const list: ProductData[] = [];
        const base = (row - 1) * this.COLS_PER_ROW;
        for (let i = 0; i < this.COLS_PER_ROW; i++) {
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
