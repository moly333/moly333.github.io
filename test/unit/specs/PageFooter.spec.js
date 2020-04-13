import Vue from 'vue'
import router from '@/router'
import PageFooter from '@/components/PageFooter'

describe('PageFooter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PageFooter)
    const vm = new Constructor({ router }).$mount()
    expect(vm.$el.querySelector('#linkToHome').textContent)
      .toEqual('BackToHome')
  })
})
