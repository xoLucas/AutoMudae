# AutoMudae

AutoMudae is a simple JavaScript script made to run on Discord Web and interact with Mudae claim elements.

## How to Use

1. Open Discord Web in your browser.
2. Open the Developer Tools by pressing `F12` or `Ctrl + Shift + I`.
3. Go to the **Console** tab.
4. Paste the script into the console.
5. Press `Enter`.

If the script starts successfully, you should see a confirmation message in the console.

## Choosing Characters

To choose which characters the script should look for, edit the `CARTAS_ALVO` list inside the code:

```js
const CARTAS_ALVO = [
  "Zero Two",
  "Hatsune Miku",
  "Rem"
];
