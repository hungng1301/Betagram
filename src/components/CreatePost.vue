<template>
  <v-dialog max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <Icon icon="jam:plus-rectangle" width="30" height="30" />
      </v-btn>
    </template>
    <v-card height="70vh">
      <v-card-title class="justify-center">Create new post</v-card-title>
      <v-divider />
      <v-card class="create-post" flat>
        <v-img
          class="mx-auto"
          src="@/assets/layout.png"
          height="100px"
          width="100px"
        />
        <!-- <video width="100px" height="100px" controls>
          <source :src="filePreview" type="video/mp4"/>
        </video> -->
        <v-card-text>Drags photo and videos here</v-card-text>

        <input
          ref="fileInput"
          type="file"
          accept="image/*, video/*"
          style="display: none"
          @change="uploadFile"
        />

        <v-btn
          color="#3399ff"
          style="text-transform: none"
          class="white--text"
          @click="$refs.fileInput.click()"
          >Select from computer</v-btn
        >
      </v-card>
      <v-expand-transition>
        <v-card v-show="previewPageShow" height="70vh" class="v-card--reveal">
          <v-row>
            <!-- preview image/video area -->
            <v-col cols="8">
              <v-card flat>
                <v-card-title>
                  <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <Icon icon="ep:back" width="30" />
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>Discard</v-card-title>
                      <v-card-text>Do u want discard this post</v-card-text>
                      <v-card-actions>
                        <v-btn text @click="discard">Yes</v-btn>
                        <v-btn text @click="dialog = false">No</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-card-title class="crop-title">Edit</v-card-title>
                  <v-btn
                    text
                    color="#3399ff"
                    style="text-transform: none"
                    @click="postPageShow = true"
                    >Next</v-btn
                  >
                </v-card-title>
                <v-divider />
                <v-card flat height="89%" class="d-flex align-center">
                  <v-img class="pre-img" :src="filePreview" contain />
                  <div v-if="isImage == false">
                    <video
                      width="100%"
                      height="auto"
                      controls
                      autoplay
                      :src="filePreview"
                    ></video>
                  </div>
                </v-card>
              </v-card>
            </v-col>
            <!-- <v-divider/> -->
            <!-- edit area -->
            <v-col>
              <v-card>
                
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";

@Component({
  components: {
    Icon,
  },
})
export default class CreatePost extends Vue {
  // file = [];
  // selectedFile = null;
  @Ref("fileInput") fileInput: any;
  filePreview = "";
  previewPageShow = false;
  postPageShow = false;
  isImage = false;
  dialog = false;

  uploadFile(e: any) {
    var selectedFile = e.target.files[0];
    var reader = new FileReader();

    if (selectedFile.type.includes("image")) {
      this.isImage = true;
    }
    console.log(this.isImage);
    reader.readAsDataURL(selectedFile);
    reader.onload = (e) => {
      this.filePreview = e.target?.result as string;
      this.previewPageShow = true;
      console.log(this.filePreview);
    };
  }

  discard() {
    this.fileInput.value = null;
    this.previewPageShow = false;
    this.dialog = false;
  }
}
</script>

<style scoped>
.create-post {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: 150px;
  text-align: center;
}
/* 
.pre-image {

} */

.crop-title {
  margin: auto;
  padding: 0;
}

.pre-img {
  display: block;
  max-height: 100%;
  max-width: 100%;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>