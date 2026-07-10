import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () =>
        h('div', { class: 'top-banner' }, [
          h('span', '🎉 '),
          h('strong', 'Version 1.1.1 is out!'),
          h(
            'span',
            ' News endpoints are available through tenrai.js! ',
          ),
          h('a', { href: '/changelog' }, 'Read Changelog'),
        ]),
    });
  },
};
