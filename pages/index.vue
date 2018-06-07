<template>
  <b-container fluid>
    <b-row>
      <b-col lg="1" class="d-none d-lg-block">
      </b-col>

      <b-col lg="1" class="d-none d-lg-block" order="3">
      </b-col>

      <b-col cols="12" lg="10">
        <b-row>
          <b-carousel id="carousel1" controls indicators :interval="3000">
            <div v-for="carouselImg in carouselImgs">
              <a :href="carouselImg.href">
                <b-carousel-slide :img-src="carouselImg.img">
                </b-carousel-slide>
              </a>
            </div>
          </b-carousel>
        </b-row>
        <br>
        <b-row>
          <b-card-group columns>
            <b-card title="Card title that wraps to a new line" img-src="https://placekitten.com/g/400/450" img-fluid img-alt="image"
              img-top>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
              </p>
            </b-card>
            <b-card header="Quote">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </b-card>
            <b-card title="Title" img-src="https://placekitten.com/500/350" img-fluid img-alt="image" img-top>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <small class="text-muted">Last updated 3 mins ago</small>
            </b-card>
            <b-card bg-variant="primary" text-variant="white">
              <blockquote class="card-blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <footer>
                  <small>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </b-card>
            <b-card title="Title">
              <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </b-card>
            <b-card img-src="https://picsum.photos/400/400/?image=41" img-fluid img-alt="image" overlay>
            </b-card>
            <b-card img-src="https://picsum.photos/400/200/?image=41" img-fluid img-alt="image" img-top>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content
                than the first.
              </p>
              <div slot="footer">
                <small class="text-muted">Footer Text</small>
              </div>
            </b-card>
          </b-card-group>
        </b-row>
      </b-col>
    </b-row>


    <div
    class="container bd-content"
    v-html="readme"/>
  </b-container>
</template>

<script>
  import readme from '~/markdown/test.md'

  export default {
    data() {
      return {
        carouselImgs: [{
            img: 'https://i1.mifile.cn/a4/xmad_15281008215995_KnVtJ.jpg',
            href: '/'
          },
          {
            img: 'https://i1.mifile.cn/a4/xmad_15278464643865_eZcPA.jpg',
            href: '/'
          },
          {
            img: 'https://i1.mifile.cn/a4/xmad_15281649613254_UaRVe.jpg',
            href: '/'
          },
          {
            img: 'https://i1.mifile.cn/a4/xmad_15281903421079_gNHme.jpg',
            href: '/'
          },
          {
            img: 'https://i1.mifile.cn/a4/xmad_15281885324833_SWkdz.jpg',
            href: '/'
          },
          {
            img: 'https://i1.mifile.cn/a4/xmad_1528186416133_oSsIT.jpg',
            href: '/'
          }
        ]
      }
    },
    computed: {
      readme() {
        return readme
      }
    },
    layout: 'users'
  }

</script>
