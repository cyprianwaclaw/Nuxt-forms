<template>
<div class=" mx-auto" data-scroll-section>
    <div class="columns-2 w-full mx-auto hidden md:block pt-3 pb-3 border-b-2 line">
        <div class="ml-24">
            <h1 class="title poppins">Nuxt3 Forms</h1>
        </div>
        <div class="columns-4 flex gap-12 justify-end w-full pr-24 pt-2.5">
            <h2 class="menutext poppins">Login input</h2>
            <h2 class="menutext poppins">Register input</h2>
            <h2 class="menutext poppins">New Product input</h2>
            <NuxtLink to="https://vee-validate.logaretm.com/v4/"><Icon name="akar-icons:github-fill" size="24" class="mt-0.5 icon"/></NuxtLink>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.menutext{
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #E8E8E8;}
.title{
    font-weight: 500;
    font-size: 23px;
    line-height: 48px;
    color: #E8E8E8;
}
 .icon{
    color: #7E7E7E;
 }
 .icon:hover{
    color: #E8E8E8;
    animation-duration: 100;
    cursor: pointer;
 }
</style>