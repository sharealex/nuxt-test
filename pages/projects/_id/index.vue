<!-- 项目子页 -->
<template>
  <b-container>
    <div v-html="projectPage" />
  </b-container>
</template>

<script>
  const getProjectPage = id => import ('~/markdown/projects/project' + id + '.md')

  export default {
    validate(data) {
      return /^\d+$/.test(data.params.id)
    },
    async asyncData(data) {
      const projectPage = await getProjectPage(data.params.id)
      return {
        projectPage: projectPage
      }
    }
  }
</script>
