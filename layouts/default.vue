<template>
<div>
    <div class="main" data-scroll-container>
        <Nav />
        <div class="max-w-screen-xl mx-auto" data-scroll-section>
        <slot />
        </div>
    </div>
 </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import LocomotiveScroll from 'locomotive-scroll';
provide('scroll', scroll);

onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
});
</script>

<style scoped>


</style>