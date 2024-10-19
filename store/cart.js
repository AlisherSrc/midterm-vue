export const useCartStore = defineStore("cartStore", () => {
    const cartItems = ref([]);

    function addItem(item){
        cartItems.value = [...cartItems.value,item];
    }

    function deleteItem(id){
        const newCartItems = cartItems.value.filter((item) => {
            return item.id !== id;
        });

        cartItems.value = newCartItems;
    }

    function setCartItems(value){
        cartItems.value = value;
    }

    return {cartItems, addItem, deleteItem, setCartItems};
})