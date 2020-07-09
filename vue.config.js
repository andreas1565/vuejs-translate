module.exports = {
  outputDir: './dist/' + process.env.VUE_APP_I18N_LOCALE,
  pluginOptions: {
    i18n: {
      locale: 'da',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
