import Vue from 'vue'
import Carousel from '@/components/carousel'

const newCarousel = () => {
  return new Vue({
    template: `
      <Carousel>
        <h1 slot="0">Slot 0</h1>
        <h1 slot="1">Slot 1</h1>
        <h1 slot="2">Slot 2</h1>
      </Carousel>'
    `,
    components: { Carousel }
  }).$mount()
}

describe('carousel.vue', () => {
  it('contains one slide per slot', () => {
    const vm = newCarousel()
    expect(vm.$el.getElementsByClassName('slide').length).to.equal(3)
  })

  it('contains one navigation picker per slot', () => {
    const vm = newCarousel()
    expect(vm.$el.getElementsByClassName('picker').length).to.equal(3)
  })

  it('contains previous and next navigation links', () => {
    const vm = newCarousel()
    const navLinks = vm.$el.querySelectorAll('#carousel nav a')
    expect(navLinks.length).to.be.at.least(2)
    expect(navLinks[0].title).to.contain('previous')
    expect(navLinks[navLinks.length - 1].title).to.contain('next')
  })
})
