# Style Dictionary Workshop

Repository di esempio per workshop sui design tokens con Style Dictionary. Questo progetto mostra come convertire design tokens da Figma in variabili CSS, SCSS e JavaScript utilizzando Style Dictionary.

## 📦 Cos'è Style Dictionary?

[Style Dictionary](https://amzn.github.io/style-dictionary/) è uno strumento open-source di Amazon che permette di definire design tokens una sola volta e trasformarli in formati diversi per ogni piattaforma (web, iOS, Android, ecc.).

## 🚀 Quick Start

### Installazione

```bash
npm install
```

### Build dei tokens

```bash
npm run build
```

Questo comando genererà i file di output nella cartella `build/`:
- `build/css/variables.css` - Variabili CSS custom properties
- `build/scss/_variables.scss` - Variabili SCSS
- `build/scss/_map.scss` - Map SCSS per accesso dinamico
- `build/js/tokens.js` - Modulo JavaScript
- `build/js/tokens.json` - File JSON flat

### Watch mode

Per rigenerare automaticamente i tokens quando modifichi i file sorgente:

```bash
npm run watch
```

## 📁 Struttura del Progetto

```
style-dictionary-workshop/
├── tokens/              # File JSON dei design tokens
│   ├── colors.json      # Colori (base, brand, semantic)
│   ├── typography.json  # Font family, size, weight, etc.
│   ├── spacing.json     # Spacing e sizing
│   └── effects.json     # Shadow, radius, borders, opacity
├── build/               # Output generati (gitignored)
├── config.js            # Configurazione Style Dictionary
├── build.js             # Script di build personalizzato
└── package.json
```

## 🎨 Design Tokens

### Colori

I colori sono organizzati in livelli:

1. **Base colors** - Palette di colori primitivi (gray, blue, red, green)
2. **Brand colors** - Colori del brand (primary, secondary, accent)
3. **Semantic colors** - Colori semantici (success, warning, error, info)
4. **Text colors** - Colori per il testo
5. **Background colors** - Colori per gli sfondi
6. **Border colors** - Colori per i bordi

### Tipografia

- **Font families** - Sans, serif, mono
- **Font sizes** - Da xs (12px) a 6xl (60px)
- **Font weights** - Da light (300) a extrabold (800)
- **Line heights** - tight, normal, relaxed, loose
- **Letter spacing** - tight, normal, wide, wider

### Spacing e Sizing

- **Spacing** - Scale da 0 a 32 (da 0px a 128px)
- **Size** - Larghezze predefinite da xs a 6xl

### Effetti

- **Shadows** - Da sm a 2xl + inner
- **Border radius** - Da none a full (cerchio)
- **Border width** - 0, 1, 2, 4, 8px
- **Opacity** - Da 0 a 100 in step di 10

## 🔗 Riferimenti tra Tokens

Style Dictionary supporta i riferimenti tra tokens usando la sintassi `{categoria.nome.token}`:

```json
{
  "color": {
    "brand": {
      "primary": { 
        "value": "{color.base.blue.600}",
        "type": "color" 
      }
    }
  }
}
```

Questo permette di mantenere una single source of truth e aggiornare facilmente i valori.

## 🛠️ Configurazione

La configurazione in `config.js` definisce:

1. **Source** - Dove trovare i file JSON dei tokens
2. **Platforms** - Come trasformare i tokens per ogni piattaforma
3. **Transform groups** - Trasformazioni da applicare (es. px → rem)
4. **Formats** - Formato di output (CSS variables, SCSS variables, ecc.)

### Esempio di output CSS

```css
:root {
  --color-brand-primary: #2563eb;
  --font-size-base: 1rem;
  --spacing-4: 1rem;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

### Esempio di output SCSS

```scss
$color-brand-primary: #2563eb;
$font-size-base: 1rem;
$spacing-4: 1rem;
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
```

## 📝 Come Usare i Tokens

### In CSS

```css
.button {
  background-color: var(--color-brand-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-base);
}
```

### In SCSS

```scss
.button {
  background-color: $color-brand-primary;
  padding: $spacing-4;
  border-radius: $radius-md;
  box-shadow: $shadow-base;
}
```

### In JavaScript

```javascript
import tokens from './build/js/tokens.js';

const button = document.createElement('button');
button.style.backgroundColor = tokens.colorBrandPrimary;
button.style.padding = tokens.spacing4;
```

## 🎓 Esercizi per il Workshop

### Esercizio 1: Aggiungere nuovi colori
Aggiungi una palette di colori "purple" in `tokens/colors.json` e usala per creare un nuovo colore brand.

### Esercizio 2: Creare un nuovo file di tokens
Crea un file `tokens/buttons.json` che definisce tokens compositi per i pulsanti (combinando colori, spacing, radius).

### Esercizio 3: Personalizzare l'output
Modifica `config.js` per generare anche variabili CSS per dark mode.

### Esercizio 4: Aggiungere trasformazioni custom
Aggiungi una trasformazione personalizzata che converte i colori in formato RGB per l'uso con rgba().

## 📚 Risorse Utili

- [Documentazione ufficiale Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Figma Tokens Plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens)
- [Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Design Tokens Format Module](https://tr.designtokens.org/format/)

## 🤝 Contribuire

Questo è un progetto didattico. Sentiti libero di fare fork, sperimentare e condividere i tuoi miglioramenti!

## 📄 Licenza

MIT License - vedi il file [LICENSE](LICENSE) per i dettagli.

## 👨‍💻 Autore

Workshop su Design Tokens con Style Dictionary

---

**Happy tokenizing! 🎨✨**

