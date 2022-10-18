<template>
<div class="background1 w-7/12">
    <pre><code class="">
<slot />
</code></pre>
 </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$blue-back: #114250;
.background1{
   background-color: $blue-back;
}

.title{
    font-size: 24px;
    margin-bottom: 18px;
    font-weight: 500;
}
</style>