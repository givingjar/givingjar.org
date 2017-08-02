module.exports = {
  'phone size shows small nav with dropdown menu': browser => {
    browser
      .phoneSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#site-nav', 5000)
      .assert.visible('a.brand')
      .assert.visible('button.menu-toggle')
      .assert.hidden('div.menu-links')
      .assert.visible('div.logo')
      .assert.cssProperty('div.logo img', 'height', '50px')
      .assert.cssProperty('div.logo img', 'width', '50px')
      .click('button.menu-toggle')
      .waitForElementVisible('div.menu-links', 1000)
      .click('button.menu-toggle')
      .waitForElementNotVisible('div.menu-links', 1000)
      .end()
  },

  'tablet size shows medium nav with dropdown menu': browser => {
    browser
      .tabletSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#site-nav', 5000)
      .assert.visible('a.brand')
      .assert.visible('button.menu-toggle')
      .assert.hidden('div.menu-links')
      .assert.visible('div.logo')
      .assert.cssProperty('div.logo img', 'height', '92px')
      .assert.cssProperty('div.logo img', 'width', '92px')
      .click('button.menu-toggle')
      .waitForElementVisible('div.menu-links', 1000)
      .click('button.menu-toggle')
      .waitForElementNotVisible('div.menu-links', 1000)
      .end()
  },

  'desktop size shows full nav with list of links': browser => {
    browser
      .desktopSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#site-nav', 5000)
      .assert.visible('a.brand')
      .assert.hidden('button.menu-toggle')
      .assert.visible('div.menu-links')
      .assert.cssProperty('div.menu-links ul', 'display', 'inline-block')
      .assert.visible('div.logo')
      .assert.cssProperty('div.logo img', 'height', '92px')
      .assert.cssProperty('div.logo img', 'width', '92px')
      .end()
  },

  'menu disappears and nav shrinks when scrolling': browser => {
    browser
      .tabletSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#site-nav', 5000)
      .assert.visible('div.logo')
      .assert.cssProperty('nav', 'padding-bottom', '25px')
      .click('button.menu-toggle')
      .waitForElementVisible('div.menu-links', 1000)
      .scrollTo(0, 100)
      .waitForElementNotVisible('div.menu-links', 1000)
      .assert.elementNotPresent('div.logo img')
      .assert.cssProperty('nav', 'padding-bottom', '5px')
      .end()
  }
}
