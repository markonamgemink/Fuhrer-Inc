<template>
  <div
    class="container mx-auto py-16 flex flex-col md:flex-row min-h-screen h-full"
  >
    <div class="w-2/3 flex flex-col space-y-4">
      <h3 class="font-semibold text-xl text-gray-900">BAJU</h3>
      <div class="flex space-x-4 items-center">
        <p class="text-gray-900 font-semibold">Pilih Warna</p>

        <v-swatches
          v-model="shirt.color"
          show-fallback
          fallback-input-type="color"
        >
        </v-swatches>
      </div>
      <h3 class="font-semibold text-xl text-gray-900">GAMBAR</h3>
      <div class="flex items-center space-x-8">
        <button
          class="btn bg-primary rounded-md text-white"
          @click="$refs.inputImage.click()"
        >
          Upload Gambar
        </button>
        <input
          class="cursor-pointer absolute hidden"
          ref="inputImage"
          type="file"
          @click="$refs.inputImage.value = null"
          @change="onInputImage"
        />
      </div>
      <h3 class="font-semibold text-xl text-gray-900">TEKS</h3>
      <div class="flex space-x-4 w-full">
        <input
          class="p-2 bg-gray-300 rounded-md focus:outline-none"
          v-model="shirt.text"
          placeholder="Tambahkan Teks"
          type="text"
        />
        <button class="btn bg-primary rounded-md text-white" @click="addText">
          Tambah Teks
        </button>
      </div>
      <div class="flex space-x-4">
        <v-swatches
          v-model="text.color"
          show-fallback
          fallback-input-type="color"
        >
        </v-swatches>
        <button
          class="font-bold"
          :class="{ 'text-primary border-primary': text.isBold }"
          @click="toggleBold"
        >
          B
        </button>
        <button
          class="italic"
          :class="{ 'text-primary border-primary': text.isItalic }"
          @click="toggleItalic"
        >
          I
        </button>
        <button
          class="underline"
          :class="{ 'text-primary border-primary': text.isUnderline }"
          @click="toggleUnderline"
        >
          U
        </button>
        <select
          class="rounded-md p-2"
          v-model="text.fontFamily"
          name="Font Family"
          @change="toggleFontFamily"
        >
          <option
            v-for="(font, index) in fontFamilies"
            :key="index"
            :value="font"
          >
            {{ font }}
          </option>
        </select>
      </div>
      <div>
        <button
          v-show="activeObject != null"
          class="btn bg-red-500 rounded-md text-white"
          @click="deleteElement"
        >
          HAPUS
        </button>
      </div>
      <div>
        <button class="btn bg-primary rounded-md text-white">SIMPAN</button>
        <button
          class="btn bg-green-500 rounded-md text-white"
          @click="downloadDesign"
        >
          DOWNLOAD
        </button>
      </div>
    </div>
    <div class="flex w-full justify-center bg-white">
      <div ref="shirtResult" class="relative w-full">
        <img
          src="~/static/images/template-black.png"
          class="mx-auto"
          :style="{ backgroundColor: shirt.color }"
        />
        <div
          id="drawingArea"
          class="border-2 border-transparent border-dashed hover:border-gray-700 transition-colors duration-200 absolute top-16 left-1/2 transform -translate-x-1/2"
        >
          <canvas
            id="tshirt-canvas"
            ref="shirtCanvas"
            width="220"
            height="440"
            class="absolute"
          ></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric'
import domtoimage from 'dom-to-image'
fabric.Object.prototype.set({
  borderColor: '#F08619',
  cornerColor: '#F08619',
})
let canvas = new fabric.Canvas('tshirt-canvas')
let activeObject = null
export default {
  ssr: false,
  data() {
    return {
      activeObject: null,
      shirt: {
        color: '#CCCCCC',
        text: null,
        image: null,
      },
      text: {
        color: '#000000',
        fontFamily: 'Arial',
        isBold: false,
        isItalic: false,
        isUnderline: false,
      },
      fontFamilies: [
        'Arial',
        'Courier',
        'Georgia',
        'Helvetica',
        'Lucida Console',
        'Monospace',
        'Times',
        'Times New Roman',
        'Serif',
        'Sans-serif',
        'Verdana',
      ],
    }
  },
  computed: {
    textColor() {
      return this.text.color
    },
  },
  watch: {
    textColor(newVal, oldVal) {
      if (activeObject !== null) {
        activeObject.set('fill', this.textColor)
        canvas.renderAll()
      }
    },
  },
  mounted() {
    const ref = this.$refs.shirtCanvas
    canvas = new fabric.Canvas(ref, {
      width: 220,
      height: 440,
    })
    canvas.on('selection:created', () => {
      activeObject = canvas.getActiveObject()
      this.getObjectValue()
    })
    canvas.on('selection:updated', () => {
      activeObject = canvas.getActiveObject()
      this.getObjectValue()
    })
  },

  methods: {
    getObjectValue() {
      this.text.fontFamily = activeObject.fontFamily
      if (activeObject.fontWeight === 'bold') {
        this.text.isBold = true
      } else {
        this.text.isBold = false
      }
      if (activeObject.fontStyle === 'italic') {
        this.text.isItalic = true
      } else {
        this.text.isItalic = false
      }
      if (activeObject.underline === true) {
        this.text.isUnderline = true
      } else {
        this.text.isUnderline = false
      }
    },
    onInputImage(event) {
      const file = event.target.files
      if (file && file[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const image = new Image()
          image.src = e.target.result
          image.onload = () => {
            const fabricImage = new fabric.Image(image)
            fabricImage.scaleToHeight(200)
            fabricImage.scaleToWidth(200)
            canvas.centerObject(fabricImage)
            canvas.add(fabricImage)
            canvas.renderAll()
          }
        }
        reader.readAsDataURL(file[0])
      }
    },
    addText() {
      if (this.shirt.text != null) {
        const text = new fabric.Text(this.shirt.text)
        canvas.centerObject(text)
        canvas.add(text)
        this.shirt.text = null
      }
    },
    toggleFontFamily() {
      if (activeObject !== null) {
        activeObject.fontFamily = this.text.fontFamily
        canvas.requestRenderAll()
      }
    },
    toggleBold() {
      if (activeObject !== null) {
        if (activeObject.fontWeight === 'normal') {
          activeObject.fontWeight = 'bold'
          this.text.isBold = true
        } else {
          activeObject.fontWeight = 'normal'
          this.text.isBold = false
        }
        canvas.renderAll()
      }
    },
    toggleItalic() {
      if (activeObject !== null) {
        if (activeObject.fontStyle === 'normal') {
          activeObject.fontStyle = 'italic'
          this.text.isItalic = true
        } else {
          activeObject.fontStyle = 'normal'
          this.text.isItalic = false
        }
        canvas.renderAll()
      }
    },
    toggleUnderline() {
      if (activeObject !== null) {
        activeObject.underline = !activeObject.underline
        this.text.isUnderline = !activeObject.underline
        activeObject.set({ dirty: true })
        canvas.renderAll()
      }
    },
    deleteElement() {
      if (activeObject !== null) {
        canvas.remove(activeObject)
      }
    },
    downloadDesign() {
      canvas.discardActiveObject().renderAll()
      const element = this.$refs.shirtResult
      domtoimage.toJpeg(element, { quality: 0.95 }).then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'shirtDesign.jpeg'
        link.href = dataUrl
        link.click()
      })
    },
  },
}
</script>
<style scoped>
.vue-swatches__fallback__input {
  width: 100%;
  padding-top: 0 !important;
}
</style>
