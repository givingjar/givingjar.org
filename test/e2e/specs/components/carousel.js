module.exports = {
  'only one slide and the navigation are visible': browser => {
    browser
      .desktopSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#carousel', 5000)
      .assert.visible('#slide-0')
      .assert.hidden('#slide-1')
      .assert.visible('#show-previous-slide')
      .assert.visible('#show-slide-0')
      .assert.visible('#show-slide-1')
      .assert.visible('#show-next-slide')
      .end()
  },

  'slides advance automatically': browser => {
    browser
      .desktopSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#carousel', 5000)
      .assert.visible('#slide-0')
      .assert.hidden('#slide-1')
      .waitForElementVisible('#slide-1', 10000)
      .pause(2000)
      .assert.hidden('#slide-0')
      .end()
  },

  'specific slides can be selected': browser => {
    browser
      .desktopSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#carousel', 5000)
      .assert.visible('#slide-0')
      .assert.hidden('#slide-1')
      .click('#show-slide-1')
      .waitForElementVisible('#slide-1', 1000)
      .pause(2000)
      .assert.hidden('#slide-0')
      .end()
  },

  'slides change when next/previous are clicked': browser => {
    browser
      .desktopSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#carousel', 5000)
      .assert.visible('#slide-0')
      .assert.hidden('#slide-1')
      .click('#show-next-slide')
      .waitForElementVisible('#slide-1', 1000)
      .pause(2000)
      .assert.hidden('#slide-0')
      .click('#show-previous-slide')
      .waitForElementVisible('#slide-0', 1000)
      .pause(2000)
      .assert.hidden('#slide-1')
      .end()
  },

  'slides change when left/right keys are pressed': browser => {
    browser
      .desktopSize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#carousel', 5000)
      .assert.visible('#slide-0')
      .assert.hidden('#slide-1')
      .keys(browser.Keys.RIGHT_ARROW)
      .waitForElementVisible('#slide-1', 1000)
      .pause(2000)
      .assert.hidden('#slide-0')
      .keys(browser.Keys.LEFT_ARROW)
      .waitForElementVisible('#slide-0', 1000)
      .pause(2000)
      .assert.hidden('#slide-1')
      .end()
  }
}
