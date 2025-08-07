# Git Guide para Monorepo (backend + frontend)

Este guia descreve o fluxo de trabalho Git para um monorepo que contém dois diretórios:

- `backend/`: Strapi (API)
- `soph-moraes/`: Next.js (frontend)

Usaremos duas branches principais:

- **`dev`**: ambiente de desenvolvimento (testes, integração contínua, staging)
- **`master`**: ambiente de produção (apenas código revisado e aprovado)

---

## 1. Estrutura de Pastas

```
/
├── backend/        # Strapi API
└── soph-moraes/    # Next.js frontend
```

## 2. Branches Principais

- **`dev`**: recebe todo o trabalho em progresso (features, correções de bugs).
- **`master`**: recebe apenas código estabilizado, pronto para produção.

## 3. Criando e Configurando as Branches

1. **Partindo de `master`**:

   ```bash
   git checkout master
   ```

2. **Crie a branch `dev`** (se ainda não existir):

   ```bash
   git checkout -b dev
   git push -u origin dev
   ```

3. **Defina políticas de proteção** (no GitHub/GitLab):

   - Proteja `master` contra **force-push**.
   - Exija **Pull Requests** com pelo menos uma revisão antes do merge.

## 4. Fluxo de Desenvolvimento

1. **Criar branch de feature** a partir de `dev`:

   ```bash
   git checkout dev
   git pull
   git checkout -b feature/nome-da-feature
   ```

2. **Desenvolver** na branch de feature, commitando mensagens claras:

   ```bash
   git add .
   git commit -m "feat: adiciona endpoint de autenticação no Strapi"
   ```

3. **Push & PR para `dev`**:

   ```bash
   git push -u origin feature/nome-da-feature
   ```

   - Abra um Pull Request **feature → dev**.
   - Após revisão e aprovação, **merge** e delete a branch.

## 5. Testes e Deploy em Staging

- **Dev Branch** (`dev`) dispara deploys automáticos em:

  - **Render**: ambiente Staging do Strapi
  - **Vercel**: Preview Deploy do Next.js

## 6. Promovendo para Produção

1. **Atualize `dev`** (já mergeado tudo):

   ```bash
   git checkout dev
   git pull
   ```

2. **Merge em `master`**:

   ```bash
   git checkout master
   git merge dev
   git push origin master
   ```

3. **Ambientes de Produção**:

   - **Render**: branch `master` → Strapi em produção.
   - **Vercel**: branch `master` → Next.js em produção.

## 7. Versionamento de Releases

- Use **tags semânticas** no `master`:

  ```bash
  git tag v1.0.0
  git push origin v1.0.0
  ```

- Mantenha CHANGELOG.md atualizado.

## 8. Dicas Adicionais

- Configure **CI** (GitHub Actions, GitLab CI, etc.) para rodar linter e testes em todas as PRs.
- Utilize **Commitizen** e **conventional commits** para manter uniformidade nas mensagens.
- Considere usar **webhooks** ou **ISR** para atualizar seu frontend sem redeploy completo.

---

> **Resumo:** Mantenha `dev` como ambiente de desenvolvimento integrado, `master` como produção estável e use PRs para controlar merges e deploys automáticos.
