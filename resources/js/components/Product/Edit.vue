<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Product</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="products.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Picture</label>
                                    <input type="text" class="form-control" v-model="products.picture">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"update-product",
    data(){
        return{
            product:{
                name:"",
                picture:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showProduct()
    },
    methods:{
        async showProduct(){
            await this.axios.get('/api/products/'+this.$route.params.id).then(response=>{
                const { name, picture} = response.data
                this.products.name = name
                this.products.picture = picture
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post('/api/products/'+this.$route.params.id, this.product).then(response=>{
                this.$router.push({name:"productList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
