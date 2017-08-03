import Vue from 'vue'
import Carousel from '@/components/carousel'

const newCarousel = () => {
  return new Vue({
    template: `
      <Carousel ref="carousel">
        <h1 slot="0">Slot 0</h1>
        <h1 slot="1">Slot 1</h1>
        <h1 slot="2">Slot 2</h1>
      </Carousel>
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

  it('shows first slide when next is clicked on last slide', () => {
    const vm = newCarousel().$refs.carousel
    expect(vm.$data.activeSlide).to.equal(0)
    vm.showNextSlide()
    expect(vm.$data.activeSlide).to.equal(1)
    vm.showNextSlide()
    expect(vm.$data.activeSlide).to.equal(2)
    vm.showNextSlide()
    expect(vm.$data.activeSlide).to.equal(0)
  })

  it('shows last slide when previous is clicked on first slide', () => {
    const vm = newCarousel().$refs.carousel
    expect(vm.$data.activeSlide).to.equal(0)
    vm.showPreviousSlide()
    expect(vm.$data.activeSlide).to.equal(2)
  })

  it('shows correct slide when specific one is selected', () => {
    const vm = newCarousel().$refs.carousel
    expect(vm.$data.activeSlide).to.equal(0)
    vm.showSpecificSlide(2)
    expect(vm.$data.activeSlide).to.equal(2)
    vm.showSpecificSlide(1)
    expect(vm.$data.activeSlide).to.equal(1)
    vm.showSpecificSlide(2)
    expect(vm.$data.activeSlide).to.equal(2)
  })

  it('changes slides when arrow keys are pressed', () => {
    const vm = newCarousel().$refs.carousel
    expect(vm.$data.activeSlide).to.equal(0)
    vm.handleKeyUpEvents({ keyCode: 39 })
    expect(vm.$data.activeSlide).to.equal(1)
    vm.handleKeyUpEvents({ keyCode: 37 })
    expect(vm.$data.activeSlide).to.equal(0)
  })
})
