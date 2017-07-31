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
  it('contains image with specified source', () => {
    const vm = newFeatureImageSlide()

    expect(vm.$el.querySelector('img').src)
      .to.equal('https://somesite.com/fake.jpg')
  })
})
