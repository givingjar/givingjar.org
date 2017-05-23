import Vue from 'vue'
import SiteNav from '@/components/site-nav'
import newComponent from '../../helpers/new-component'

const MockConstructor = Vue.extend(SiteNav)

const mockSiteNav = pageYOffset => {
  return new MockConstructor({
    methods: {
      verticalOffset () {
        return pageYOffset
      }
    }
  })
}

const newSiteNav = () => {
  return newComponent(SiteNav)
}

describe('site-nav.vue', () => {
  it('shows logo when scrolling near top and menu is not shown', () => {
    const vm = newSiteNav()
    expect(typeof vm.resetShowLogo).to.equal('function')
    expect(typeof vm.verticalOffset).to.equal('function')

    const simulateResetShowLogo = (showMenu, pageYOffset, expectedResult) => {
      const mockvm = mockSiteNav(pageYOffset)
      mockvm.showLogo = !expectedResult
      mockvm.showMenu = showMenu
      mockvm.resetShowLogo()
      expect(mockvm.showLogo).to.equal(
        expectedResult,
        `showLogo should be ${expectedResult} when showMenu is ${showMenu} ` +
        `and verticalOffset is ${pageYOffset}`
      )
    }

    simulateResetShowLogo(false, 20, true)
    simulateResetShowLogo(false, 70, false)
    simulateResetShowLogo(true, 20, false)
    simulateResetShowLogo(true, 70, false)
  })

  it('toggles menu and logo when menu button is clicked', () => {
    expect(typeof newSiteNav().toggleMenu).to.equal('function')

    const simulateToggleMenu = expectedResult => {
      const mockvm = mockSiteNav(0)
      mockvm.showLogo = expectedResult
      mockvm.showMenu = !expectedResult
      mockvm.toggleMenu()
      expect(mockvm.showMenu).to.equal(
        expectedResult,
        `showMenu state should change when menu button is clicked`
      )
      expect(mockvm.showLogo).to.equal(
        !expectedResult,
        `showLogo state should change when menu button is clicked ` +
        `and scrolled to the top of the page`
      )
    }

    simulateToggleMenu(false)
    simulateToggleMenu(true)
  })

  it('scrolling past 50px shrinks and resets navigation', () => {
    expect(typeof newSiteNav().onWindowScroll).to.equal('function')

    const mockvm = mockSiteNav(51)
    mockvm.shrinkNav = false
    mockvm.showLogo = true
    mockvm.showMenu = true
    mockvm.onWindowScroll()
    expect(mockvm.shrinkNav).to.be.true
    expect(mockvm.showLogo).to.be.false
    expect(mockvm.showMenu).to.be.false
  })

  it('scrolling to page top expands and resets navigation', () => {
    expect(typeof newSiteNav().onWindowScroll).to.equal('function')

    const mockvm = mockSiteNav(0)
    mockvm.shrinkNav = true
    mockvm.showLogo = false
    mockvm.showMenu = false
    mockvm.onWindowScroll()
    expect(mockvm.shrinkNav).to.be.false
    expect(mockvm.showLogo).to.be.true
    expect(mockvm.showMenu).to.be.false
  })

  it('initial scroll position is 0', () => {
    const vm = newSiteNav()
    expect(typeof vm.verticalOffset).to.equal('function')
    expect(vm.verticalOffset()).to.equal(0)
  })
})
