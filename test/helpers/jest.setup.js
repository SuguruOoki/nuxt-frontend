/* eslint-disable dot-notation */
import VueTestUtils from '@vue/test-utils'

VueTestUtils.config.stubs['nuxt-link'] = '<a><slot /></a>'
VueTestUtils.config.stubs['client-only'] = '<span><slot /></span>'
