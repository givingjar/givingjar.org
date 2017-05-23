import SiteFooter from '@/components/site-footer'
import newComponent from '../../helpers/new-component'

describe('site-footer.vue', () => {
  it('shows current year in copyright', () => {
    const vm = newComponent(SiteFooter)
    expect(typeof vm.currentYear).to.equal('number')

    const currentYear = new Date().getFullYear()
    expect(vm.$el.textContent).to.contain(currentYear)
  })
})
