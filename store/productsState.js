export const productsState = defineStore("productsStore", () => {
    const activeCategory = ref("phone");
    const activeProduct = ref({});

    function setCategory(value){
        activeCategory.value = value;
    }

    function setProduct(value){
        activeProduct.value = value;
    }

    return {activeCategory, setCategory, activeProduct, setProduct};
});
