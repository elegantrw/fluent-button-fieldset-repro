# Fluent button fieldset bug

A standalone HTML/JavaScript reproduction using Fluent Web Components **3.1.3** and FAST Element
**3.1.0**. Vite serves the page. No Angular or fluent-angular dependencies.

## Run

From this directory, using Node `^22.22.3` or `^24.15.0`:

```bash
npm ci
npm start
```

Open http://127.0.0.1:5173/.

## Reproduce

1. Click both buttons. The message confirms each click.
2. Click **Disable fieldset**, then **Enable fieldset**.
3. Try both buttons again.

Expected: both buttons work again.

Actual: the native button works, but the Fluent button stays disabled. Reload to start again.

The action handlers only set `fieldset.disabled`. Fluent's `formDisabledCallback` copies the
inherited state onto its own `disabled` attribute, which remains after the fieldset is enabled.

Copy this directory to share it independently. `npm run build` builds the reproduction.
