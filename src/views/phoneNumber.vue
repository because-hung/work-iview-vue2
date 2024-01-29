<template>
  <div>
    <div style="margin-top: 80px">
      <p>Phone number</p>
        <input
        id="phone"
        v-model="phone"
        placeholder="Input mobile phone number"
        type="tel"
        style="width: 500px;height: 40px"
      />
    </div>
    <div>
      <p>areaCode</p>
        <input
        id="phone"
        v-model="areaCode"
        placeholder="Input mobile phone number"
        type="tel"
        style="width: 500px;height: 40px"
      />
    </div>

    <section id="format-section" v-if="phoneValid" style="margin-top: 120px">
      <h2>Phone number in different formats</h2>
      <div>E164 : {{ formatE164 }}</div>
      <div>INTERNATIONAL : {{ formatInternational }}</div>
      <div>NATIONAL : {{ formatNational }}</div>
      <div>RFC3966 : {{ formatRFC3966 }}</div>
    </section>
    </div>
</template>

<script>
import * as phoneValidator from './valid'

export default {
  data () {
    return {
      phone: '',
      areaCode: '',
      countryISO: 'TW'
    }
  },
  computed: {
    phoneValid: function () {
      if (!this.phone.length) {
        return false
      }
      return phoneValidator.isPhoneNumberValid(this.phone, this.areaCode)
    },

    formatE164: function () {
      return phoneValidator.formatE164(this.phone, this.areaCode)
    },

    formatInternational: function () {
      return phoneValidator.formatInternational(this.phone, this.areaCode)
    },

    formatNational: function () {
      return phoneValidator.formatNational(this.phone, this.areaCode)
    },

    formatRFC3966: function () {
      return phoneValidator.formatRFC3966(this.phone, this.areaCode)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10% auto;
  width: 90%;
  max-width: 500px;
}

#format-section {
  > div {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: cadetblue;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
</style>
