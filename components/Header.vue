<template>
  <b-navbar toggleable="sm" type="dark" variant="primary" class="navbar-expand-lg" sticky>
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <!-- 名称 -->
      <b-navbar-brand to="/" exact><h3>付刚</h3></b-navbar-brand>

      <!-- 左侧菜单 -->
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-for="leftMenu in leftMenus">
          <b-nav-item :to="leftMenu.href">{{leftMenu.text}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- 右侧菜单 -->
      <b-navbar-nav v-for="rightMenu in rightMenus">
        <b-nav-item :href="rightMenu.href" :title="rightMenu.text" target="_blank" right>
          <img :src="rightMenu.img" class="rightImg">
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
  export default {
    data() {
      return {
        leftMenus: [{
          text: '博客',
          href: '/blog'
        }, {
          text: '笔记',
          href: '/note'
        }, {
          text: '随感',
          href: '/essay'
        }, {
          text: '照片',
          href: '/photo'
        }, {
          text: '关于',
          href: '/about'
        }],
        rightMenus: [{
          text: 'Github',
          img: './img/github.png',
          href: 'https://github.com/sharealex'
        }, {
          text: '博客园',
          img: './img/cnblogs.png',
          href: 'http://www.cnblogs.com/sharealex'
        }, {
          text: '新浪微博',
          img: './img/weibo.png',
          href: 'https://weibo.com/fugang521'
        }, {
          text: 'QQ空间',
          img: './img/qqzone.png',
          href: 'https://user.qzone.qq.com/931571141'
        }, {
          text: '网易邮箱',
          img: './img/wangyi.png',
          href: 'mailto:sharealex@163.com'
        }],
      }
    }
  }

</script>

<style scoped>
  .navbar-nav-svg {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: text-top;
  }

  .rightImg {
    width: 20px;
    height: 20px;
  }

</style>
