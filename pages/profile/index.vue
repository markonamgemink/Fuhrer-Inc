<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="flex flex-col space-y-8"
      @submit.prevent="handleSubmit(obSubmit)"
    >
      <h1 class="text-2xl font-bold text-gray-900">Profil Pengguna</h1>
      <div class="grid grid-cols-2 gap-x-8 mx-8">
        <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Nama" class="font-semibold">Nama</label>
            <input
              v-model="form.name"
              name="Nama"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Nama"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Email" class="font-semibold">Email</label>
            <input
              v-model="form.email"
              name="Email"
              type="email"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Email"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Telepon" class="font-semibold">Telepon</label>
            <input
              v-model="form.phone"
              name="Telepon"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Telepon"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div
        class="flex flex-col md:flex-row items-center md:items-end md:space-x-8 mx-8"
      >
        <img
          :src="form.profilePicture"
          alt="Gambar Profil"
          :class="{ 'bg-gray-500': !form.profilePicture }"
          class="inline-block rounded-lg h-64 w-64 object-center object-cover"
        />
        <input
          ref="profile"
          type="file"
          accept="image/*"
          title="Pilih Foto"
          class="hidden"
          @change="onProfilePictureChange"
        />
        <button
          type="button"
          class="btn text-primary border-2 border-primary rounded h-12"
          @click="$refs.profile.click()"
        >
          Pilih Foto
        </button>
      </div>
      <h1 class="text-2xl font-bold text-gray-900">Alamat Pengguna</h1>
      <div class="grid grid-cols-2 gap-x-8 mx-8">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Provinsi" class="font-semibold">Provinsi</label>
            <select
              v-model="form.provinsi"
              name="Provinsi"
              :class="{ 'border-red-500': errors[0] }"
              class="bg-transparent p-1 border-2 border-gray-500 rounded"
              @change="filterCities"
            >
              <option
                v-for="province in provinces"
                :key="province.province_id"
                :value="province.province_id"
              >
                {{ province.province }}
              </option>
            </select>
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Kota" class="font-semibold">Kota</label>
            <select
              v-model="form.kota"
              name="Kota"
              :class="{ 'border-red-500': errors[0] }"
              class="bg-transparent p-1 border-2 border-gray-500 rounded"
            >
              <option
                v-for="city in filteredCities"
                :key="city.city_id"
                :value="city.city_id"
              >
                {{ `${city.type} ${city.city_name}` }}
              </option>
            </select>
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Kecamatan" class="font-semibold">Kecamatan</label>
            <input
              v-model="form.kecamatan"
              name="Kecamatan"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Kecamatan"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Kode Pos" class="font-semibold">Kode Pos</label>
            <input
              v-model="form.kodePos"
              name="Kode Pos"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Kode Pos"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          class="col-span-2"
        >
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Alamat Rumah" class="font-semibold">Alamat Rumah</label>
            <textarea
              v-model="form.address"
              name="Alamat Rumah"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded resize-none h-16"
              placeholder="Alamat Rumah"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <button
        type="submit"
        class="btn text-primary border-2 border-primary rounded h-12 mx-auto"
      >
        Simpan Profil
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      form: {
        name: this.user.name || '',
        email: this.user.email || '',
        phone: '',
        profilePicture: null,
        address: '',
        provinsi: '',
        kota: '',
        kecamatan: '',
        kodePos: '',
      },
      filteredCities: {},
    }
  },
  async fetch() {
    if (this.provinces == null) {
      await this.$store.dispatch('resources/getProvinces')
    }
    if (this.cities == null) {
      await this.$store.dispatch('resources/getCities')
    }
  },
  computed: {
    ...mapGetters({
      provinces: 'resources/getProvinces',
      cities: 'resources/getCities',
    }),
  },
  methods: {
    onProfilePictureChange(event) {
      const file = event.target.files
      if (file && file[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.form.profilePicture = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
    async fetchProvinces() {
      return await this.$axios
        .$get('https://api.rajaongkir.com/starter/province')
        .then((data) => {
          return data.rajaongkir.results
        })
    },
    async fetchCities() {
      return await this.$axios
        .$get('https://api.rajaongkir.com/starter/city')
        .then((data) => {
          return data.rajaongkir.results
        })
    },
    filterCities() {
      this.filteredCities = this.cities.filter((city) => {
        return city.province_id === this.form.provinsi
      })
    },
    onsubmit() {
      console.log('ok')
    },
  },
}
</script>
