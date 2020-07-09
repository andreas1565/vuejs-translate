<template>
  <div>
    <p>{{ $t('header') }}</p>
    <p v-if="locale == 'en'">vue js is cool</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloI18n",
  computed: {
    ...mapState({
      locale: state => state.locale
    })
  },
  i18n: {
    messages: {
      da: {
        header: "hej"
      },
      en: {
        header: "hello"
      }
    }
  }
};
</script>


