<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  data() {
    return {
      expand: true,
      text: "Yes, Ofc.",
      comment: "",
      options: {
        debug: 'info',
        modules: {
          toolbar: ['bold', 'italic', 'underline']
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
      }
    }
  },
  methods: {
    setExpand() {
      this.expand = !this.expand
      if (!this.expand) {
        this.text = "No, Not now."
      } else {
        this.text = "Yes, Ofc."
      }
    }
  },
  components: {
    QuillEditor
  },
  mounted() {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
    };
    new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
}
</script>
<template>
  <div class="container-lg">
    <section class="row " style="height: 320px;">
      <img class="col-4 object-fit-cover h-100" style="height: 100%;"
        src="https://labschool-unj.sch.id/wp-content/uploads/2021/07/smp-labschool-jakarta.jpg" alt="">
      <div class="col-8 d-flex flex-wrap gap-3">
        <img class="col object-fit-cover" height="150" width="260"
          src="https://foto.data.kemdikbud.go.id/getImage/20103223/2.jpg" alt="">
        <img class="col object-fit-cover" height="150" width="260"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSo6VcBc24TIZAAeowYm-WhKMDDfPLdZol4PFXRTV9gNocPzhkY5NrP0AuiQ8_1wYB17E&usqp=CAU"
          alt="">
        <img class="col object-fit-cover" height="150" width="260"
          src="https://gallery.poskota.co.id/2020/11/0f1521fc297a73e30d8d467d9b5f2024-img-20201102-140133.jpg" alt="">
        <img class="col object-fit-cover" height="150" width="260"
          src="https://www.alkausar.sch.id/wp-content/uploads/2018/12/2018.11.30-Studi-Banding-OSIS-3.jpg" alt="">
      </div>
    </section>
    <section class="row mt-4">
      <div class="col-4 my-1 ">

        <div class="w-100 p-3 rounded" style="background-color: #F7F9FA;">
          <h2>SMA Labschool Jakarta</h2>
          <div class="w-100 pt-2">
            <p>Overall score by our user is <b>8.70</b></p>
            <div v-for="a in 5" class="mb-2 d-flex d-flex align-items-end">
              <div class="w-75 mt-1">
                <span class="fw-bold">Facility</span>
                <div class="progress ">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <p class="p-0 m-0 text-end" style="font-size: 18px; width: 90px;">50 / 100</p>
            </div>
          </div>
        </div>
        <div class="w-100 my-5 rounded" id="googleMap" style="width:100%;height:400px;"></div>
      </div>
      <div class="col-8 my-1 px-4">
        <div class="mb-5 d-flex flex-column justify-content-center gap-3">
          <div class="d-flex gap-3">
            <h3>Do you want to rate your school?</h3>
            <div class="form-check form-switch d-flex gap-2">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" v-on:change="setExpand" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked">
                <h6>{{ text }}</h6>
              </label>
            </div>
          </div>
          <form v-if="expand" class="border p-2 rounded" style="background-color: #dee8eb;">
            <div class="d-flex gap-2 my-3" style="height: 30px;">
              <div class="d-flex gap-2">
                <label for="">Rate</label>
                <select name="" id="" style="width:120px">
                  <option value="">⭐️⭐️⭐️⭐️⭐️</option>
                  <option value="">⭐️⭐️⭐️⭐️</option>
                  <option value="">⭐️⭐️⭐️</option>
                  <option value="">⭐️⭐️</option>
                  <option value="">⭐️</option>
                </select>
              </div>
              <div class="d-flex gap-2">
                <label for="">for </label>
                <select name="" id="" style="width:180px">
                  <option value="" class="text-center">select one category</option>
                  <option value="" class="text-center">Facility</option>
                  <option value="" class="text-center">Clubs</option>
                  <option value="" class="text-center">Class</option>
                  <option value="" class="text-center">Canteen</option>
                </select>
              </div>


            </div>
            <div class="mb-2 bg-white">
              <QuillEditor theme="snow" :options="options" v-model:content="comment" contentType="html" />
            </div>
            <div class="d-flex justify-content-end align-items-end">
              <input type="submit" class="btn px-3" value="Submit" style="background-color: #c4d4d6;">
            </div>

          </form>
        </div>

        <div class="rounded pb-2" style="background-color: #F7F9FA;">
          <div class="w-100 p-3 rounded-top d-flex flex-row gap-4" style="background-color: #c4d4d6;">
            <span style="font-size: 18px;"><b>Filter : </b></span>
            <div class="d-flex gap-2" style="height: 30px;">
              <label for="">Category</label>
              <select name="" id="" style="width:120px">
                <option value="" class="text-center">Select One</option>
                <option value="" class="text-center">Facility</option>
                <option value="" class="text-center">Clubs</option>
                <option value="" class="text-center">Class</option>
                <option value="" class="text-center">Canteen</option>
              </select>
            </div>
            <div class="d-flex gap-2" style="height: 30px;">
              <label for="">Rating</label>
              <div class="rating-filter bg-white p-1 rounded">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐️⭐️⭐️⭐️⭐️
                  </label>
                </div>
              </div>
              <div class="rating-filter bg-white p-1 rounded">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐️⭐️⭐️⭐️
                  </label>
                </div>
              </div>
              <div class="rating-filter bg-white p-1 rounded">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐️⭐️⭐️
                  </label>
                </div>
              </div>
              <div class="rating-filter bg-white p-1 rounded">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐️⭐️
                  </label>
                </div>
              </div>
              <div class="rating-filter bg-white p-1 rounded">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐️
                  </label>
                </div>
              </div>

            </div>
          </div>
          <div class="w-100 p-3 h-100 rounded d-flex flex-column gap-4">
            <div class="bg-white border mt-2 p-2 rounded" v-for="k in 8">
              <p class="px-2 text-center mt-1 mr-1 fw-bold rounded" style="width:120px; background-color:#f0f1e8">Facility
                ⭐️5
              </p>
              <p style="text-align: justify;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum blanditiis in quam, alias fuga nam
                veniam molestias laudantium consequatur architecto, molestiae suscipit accusamus? Sunt nisi aut nemo
                similique facere eos. nemo similique facere eos. similique facere eos. nemo similique facere eos.
              </p>
              <p class="text-end">
                {{ new Date() }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.rating-filter:has(input:checked) {
  background-color: #fbfde8 !important;
}
</style>