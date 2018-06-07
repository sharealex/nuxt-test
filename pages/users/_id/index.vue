<template>
    <h1>这个页面是：{{$route.params.id}}</h1>
</template>

<script>
    export default{
        validate(data){
            // console.log(data)
            // return data.params.id == 1
            return /^\d+$/.test(data.params.id)
        }
    }
</script>