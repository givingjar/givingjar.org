import Vue from 'vue'
import FeatureImageSlide from '@/components/carousel-feature-image-slide'

const newFeatureImageSlide = () => {
  return new Vue({
    ...FeatureImageSlide,
    propsData: {
      imageUrl: 'https://somesite.com/fake.jpg',
      linkUrl: 'https://destination.com/',
      title: 'This is your Slide',
      subtitle: 'It could be better'
    }
  }).$mount()
}

describe('carousel-feature-image-slide.vue', () => {
  it('contains specified image', () => {
    const vm = newFeatureImageSlide()
    expect(vm.$el.querySelector('img').src)
      .to.equal('https://somesite.com/fake.jpg')
  })

  it('contains provided title', () => {
    const vm = newFeatureImageSlide()
    expect(vm.$el.textContent).to.contain('This is your Slide')
  })

  it('contains provided subtitle', () => {
    const vm = newFeatureImageSlide()
    expect(vm.$el.textContent).to.contain('It could be better')
  })
})
