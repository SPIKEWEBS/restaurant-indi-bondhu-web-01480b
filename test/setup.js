import { config } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'

// Stub router-link and router-view globally so components render without a real router
config.global.stubs = { RouterLink: true, RouterView: true }
