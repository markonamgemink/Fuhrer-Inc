<template>
  <div class="relative border w-full">
    <img
      src="~/static/images/template-black.png"
      alt=""
      class="border border-blue-500"
    />
    <!-- <client-only>
      <fabric-canvas
        class="mx-auto border-2 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48"
        @selected="onSelect"
      >
        <fabric-image :id="3" :url="image"></fabric-image>
      </fabric-canvas>
    </client-only> -->
    <div id="drawingArea" class="drawing-area">
      <canvas
        id="tshirt-canvas"
        ref="shirtCanvas"
        width="200"
        height="400"
      ></canvas>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric'
const canvas = new fabric.Canvas('tshirt-canvas')
export default {
  props: {
    image: {
      required: false,
      type: String,
      default: null,
    },
  },

  mounted() {
    // const ref = this.$refs.shirtCanvas
    // canvas = new fabric.Canvas(ref, {
    //   width: 200,
    //   height: 400,
    // })
    console.log(canvas)
  },
  methods: {
    onSelect(event) {
      console.log(event)
    },
  },
}
</script>
<style scoped>
.drawing-area {
  position: absolute;
  top: 60px;
  left: 122px;
  z-index: 10;
  width: 200px;
  height: 400px;
}

.canvas-container {
  width: 200px;
  height: 400px;
  position: relative;
  user-select: none;
}

#tshirt-canvas {
  position: absolute;
  width: 200px;
  height: 400px;
  left: 0;
  top: 0;
  user-select: none;
  cursor: default;
  border: 1px black solid;
}
</style>
