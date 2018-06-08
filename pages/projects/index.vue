<!-- 项目导航页面 -->
<template>
  <b-container>
    <b-card-group columns>
      <div v-for="project in projects">
      <b-card @click="toProject(project.id)" :title="project.title" :img-src="project.img" img-alt="Img" img-top class="project-card">
        <p class="card-text" v-html="project.description"></p>
        <small class="text-muted" v-html="project.createTime"></small>
      </b-card>
    </div>
    </b-card-group>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        projects: [{
          id: 1,
          title: 'Project1',
          description: 'This is my project1',
          img: 'https://picsum.photos/320/180/?image=41',
          createTime: '2018-6-1'
        }, {
          id: 2,
          title: 'Project2',
          description: 'This is my project2',
          img: 'https://picsum.photos/320/180/?image=42',
          createTime: '2018-6-2'
        }, {
          id: 3,
          title: 'Project3',
          description: 'This is my project3',
          img: 'https://picsum.photos/320/180/?image=43',
          createTime: '2018-6-3'
        }, {
          id: 4,
          title: 'Project4',
          description: 'This is my project4',
          img: 'https://picsum.photos/320/180/?image=44',
          createTime: '2018-6-4'
        }, {
          id: 5,
          title: 'Project5',
          description: 'This is my project5',
          img: 'https://picsum.photos/320/180/?image=45',
          createTime: '2018-6-5'
        }]
      }
    },
    methods: {
      toProject(id) {
        this.$router.push('/projects/' + id)
      }
    }
  }

</script>

<style scoped>
  .project-card {
    cursor: pointer;
  }

  .project-card:hover {
    transform: scale(1.01)
  }

</style>
