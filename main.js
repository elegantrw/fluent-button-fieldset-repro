import { Button, ButtonDefinition } from '@fluentui/web-components/button/index.js';
import { setTheme } from '@fluentui/web-components/theme/index.js';
import { webLightTheme } from '@fluentui/tokens';

setTheme(webLightTheme);
await Button.define(ButtonDefinition);

const group = document.querySelector('#group');
const disable = document.querySelector('#disable');
const enable = document.querySelector('#enable');
const message = document.querySelector('#message');

// Change only the fieldset. Never set disabled on either button.
disable.addEventListener('click', () => {
  group.disabled = true;
});
enable.addEventListener('click', () => {
  group.disabled = false;
});

document.querySelector('#fluent').addEventListener('click', () => {
  message.textContent = 'Fluent button clicked.';
});
document.querySelector('#native').addEventListener('click', () => {
  message.textContent = 'Native button clicked.';
});

disable.disabled = false;
enable.disabled = false;
