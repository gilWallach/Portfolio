<script>
import projectDetails from "../homepage/projects/project-details.vue"
export default {
  name: 'elementPlus-dialog',
  props: [],
  computed: {
    currProject() {
      return this.$store.getters.currProject
    },
    dialogVisible() {
      return !!this.currProject
    },
  },
  methods: {
    handleClose(done) {
      this.$store.commit({ type: 'setCurrProject', currProject: false })
    },
  },
  components: {
    projectDetails,
  }
}
</script>

<template>
  <!-- <el-dialog v-model="dialogVisible" :title="currProject.name" width="500" :before-close="handleClose"> -->
  <el-dialog v-model="dialogVisible" width="500" :before-close="handleClose">
    <projectDetails :currProject="currProject"></projectDetails>
  </el-dialog>
</template>