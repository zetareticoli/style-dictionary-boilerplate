# Istruzioni per Pubblicare su GitHub

Segui questi passaggi per pubblicare questo repository su GitHub.

## 1. Crea un Nuovo Repository su GitHub

1. Vai su [GitHub](https://github.com)
2. Clicca su "New repository" (o vai su https://github.com/new)
3. Inserisci il nome: `style-dictionary-workshop`
4. Aggiungi una descrizione: "Repository di test per workshop su Style Dictionary e design tokens"
5. Scegli se rendere il repository pubblico o privato
6. **NON** selezionare "Initialize this repository with a README" (ne abbiamo già uno)
7. Clicca su "Create repository"

## 2. Collega il Repository Locale a GitHub

Dopo aver creato il repository su GitHub, esegui questi comandi nel terminale:

```bash
# Aggiungi il remote (sostituisci TUO-USERNAME con il tuo username GitHub)
git remote add origin https://github.com/TUO-USERNAME/style-dictionary-workshop.git

# Verifica che il remote sia stato aggiunto correttamente
git remote -v

# Push del codice su GitHub
git push -u origin main
```

## 3. (Opzionale) Configura GitHub Pages

Se vuoi pubblicare la demo HTML su GitHub Pages:

1. Vai nelle impostazioni del repository su GitHub
2. Seleziona "Pages" nel menu laterale
3. In "Source" seleziona "Deploy from a branch"
4. Seleziona il branch "main" e la cartella "/docs" (o root)
5. Clicca su "Save"

Nota: potrebbe essere necessario spostare i file in `examples/` in una cartella `docs/` o configurare GitHub Actions per il build.

## 4. (Opzionale) Aggiungi Badge al README

Puoi aggiungere questi badge al tuo README.md:

```markdown
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/style-dictionary.svg)](https://badge.fury.io/js/style-dictionary)
```

## 5. (Opzionale) Configura Dependabot

GitHub può automaticamente controllare le dipendenze obsolete:

1. Crea il file `.github/dependabot.yml` (già presente in questo repo)
2. GitHub inizierà automaticamente a creare PR per aggiornamenti di sicurezza

## 6. Clona il Repository

Gli utenti del workshop possono ora clonare il repository:

```bash
git clone https://github.com/TUO-USERNAME/style-dictionary-workshop.git
cd style-dictionary-workshop
npm install
npm run build
```

## Comandi Git Utili

```bash
# Vedere lo stato dei file
git status

# Aggiungere modifiche
git add .

# Creare un commit
git commit -m "Descrizione delle modifiche"

# Push delle modifiche
git push

# Vedere l'history dei commit
git log --oneline

# Creare un nuovo branch
git checkout -b nome-branch

# Cambiare branch
git checkout main
```

## Troubleshooting

### Errore: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/TUO-USERNAME/style-dictionary-workshop.git
```

### Errore di autenticazione

Se GitHub richiede l'autenticazione:
- Usa un Personal Access Token invece della password
- Oppure configura SSH keys

### Il push viene rifiutato

```bash
# Se qualcun altro ha pushato modifiche
git pull --rebase origin main
git push
```

---

Per ulteriori informazioni sulla pubblicazione su GitHub, consulta:
https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

