# Guida per Contribuire

Grazie per l'interesse nel contribuire a questo progetto! 🎉

## Come Contribuire

### 1. Fork del Repository

Fai un fork del repository sul tuo account GitHub.

### 2. Clona il Repository

```bash
git clone https://github.com/tuo-username/style-dictionary-workshop.git
cd style-dictionary-workshop
```

### 3. Installa le Dipendenze

```bash
npm install
```

### 4. Crea un Branch

```bash
git checkout -b feature/nome-tua-feature
```

### 5. Fai le Tue Modifiche

- Aggiungi nuovi tokens in `tokens/`
- Modifica la configurazione in `config.js`
- Aggiorna la documentazione se necessario

### 6. Testa le Modifiche

```bash
npm run build
```

Verifica che i file generati in `build/` siano corretti.

### 7. Commit e Push

```bash
git add .
git commit -m "feat: descrizione della tua modifica"
git push origin feature/nome-tua-feature
```

### 8. Apri una Pull Request

Vai su GitHub e apri una Pull Request dal tuo branch verso il branch `main` del repository originale.

## Convenzioni di Codice

- Usa 2 spazi per l'indentazione
- Mantieni i file JSON ben formattati
- Aggiungi commenti quando utile
- Segui la struttura esistente dei tokens

## Suggerimenti per i Tokens

### Nomenclatura

- Usa nomi descrittivi: `color-brand-primary` invece di `blue`
- Organizza in categorie logiche
- Usa la notazione kebab-case per i nomi

### Organizzazione

- Separa tokens base da tokens semantici
- Usa riferimenti `{categoria.nome}` per evitare duplicazione
- Aggiungi il campo `type` per ogni token

### Documentazione

- Aggiungi commenti nei JSON dove necessario
- Aggiorna il README se aggiungi nuove categorie
- Includi esempi d'uso

## Tipi di Contribuzioni Benvenute

- ✨ Nuovi tokens (colori, tipografia, spacing, ecc.)
- 🔧 Miglioramenti alla configurazione
- 📝 Miglioramenti alla documentazione
- 🐛 Correzione di bug
- 🎓 Nuovi esercizi per il workshop
- 🌍 Traduzioni

## Domande?

Apri una Issue su GitHub se hai domande o suggerimenti!

---

Grazie per il tuo contributo! 💚

