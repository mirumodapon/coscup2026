import type { Component } from 'vue'

const pages = Object.entries<{ default: Component }>(import.meta.glob('@/pages/**/*.vue', { eager: true }))
  .map(([_path, component]) => {
    const path = _path
      .replace(/^\/src\/pages\//, '')
      .replace(/\.vue$/, '')
      .split('/')
      .map((segment) => segment === 'index' ? '' : segment)
      .join('/')

    return {
      path: `/${path}`,
      component: component.default,
    }
  })

export const routes = [
  {
    path: '/',
    children: pages,
  },
]
