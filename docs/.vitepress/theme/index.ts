import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h('div', { class: 'top-banner' }, [
        h('span', '🎉 '),
        h('strong', 'Version 1.1.0 is out!'),
        h('span', ' Now with 100% Tenrai API coverage, built-in caching, and auto rate-limit retries. '),
        h('a', { href: '/changelog' }, 'Read Changelog')
      ])
    });
  }
};
