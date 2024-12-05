<template>
  <About @childMsg="captureMsg"/>
</template>

<script>
import About from '@/components/About.vue';

export default {
  components: {
    About
  },

  methods: {
    captureMsg(val) {
      this.msg = val;
      console.log(val);
    }
  },
};
</script>
