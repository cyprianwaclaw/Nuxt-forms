<template>
<div>
    <div class="mt-36 columns-2">
       <div>
        <h2 class="hero-title poppins mt-5">Nuxt3 <span style="color: #E8E8E8">and</span> Vee validate</h2>
        <p class="mt-4 mb-9 font-size1">
            Example input and forms created <br />use Vee Validate and Nuxt3<br /> framework.
        </p>
       <a href="https://vee-validate.logaretm.com/v4/"><button class="button-primary">
        Get started <Icon name="cil:arrow-right" size="23" color="$white" class="ml-2"/>
        </button></a>
        </div>
        <div>
            <img src="../assets/images/hero-image.png" class=" image-hero float-right flex -mt-12"/>
        </div>  
    </div>
    <HomepageTabs />
    <getstarted />
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.hero-title{
    font-weight: 600;
    font-size: 45px;
    line-height: 48px;
    color: #03BA68;
}

.image-hero{
    width: 400px;
    height: 400px;
}

</style>