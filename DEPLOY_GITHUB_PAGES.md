# 🚀 Guia de Publicação — GitHub Pages (Gratuito)

## 📋 Pré-requisitos

- ✅ Conta GitHub (gratuita)
- ✅ Git instalado no computador
- ✅ Dashboard HTML pronto (`ANACOM_Dashboard_v2.html`)

---

## 🎯 Estratégia de Publicação

Vamos usar **GitHub Pages** — serviço gratuito do GitHub que hospeda sites estáticos directamente do repositório.

### ✨ Vantagens
- ✅ **100% Gratuito** (sem custos)
- ✅ **HTTPS automático** (seguro)
- ✅ **URL personalizado** (username.github.io/repo-name)
- ✅ **Actualizações instantâneas** (push → deploy automático)
- ✅ **Sem limites de visualizações** (partilha ilimitada)

---

## 📝 Passo-a-Passo

### **1. Criar Repositório no GitHub**

1. Aceder a [github.com](https://github.com)
2. Clicar em **"New repository"** (botão verde)
3. Configurar:
   - **Nome:** `anacom-dashboard` (ou outro à escolha)
   - **Descrição:** "Dashboard interactivo do mercado de telecomunicações português (ANACOM)"
   - **Visibilidade:** 
     - ✅ **Public** (recomendado para GitHub Pages gratuito)
     - ⚠️ **Private** (requer GitHub Pro para Pages)
   - ✅ Marcar **"Add a README file"**
4. Clicar em **"Create repository"**

---

### **2. Preparar Ficheiros Localmente**

Criar estrutura de pastas no computador:

```bash
# Criar pasta do projecto
mkdir anacom-dashboard
cd anacom-dashboard

# Inicializar Git
git init

# Configurar Git (se ainda não configurado)
git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"
```

---

### **3. Organizar Ficheiros**

Copiar ficheiros para a pasta `anacom-dashboard/`:

```
anacom-dashboard/
├── index.html                          ← Renomear ANACOM_Dashboard_v2.html
├── README.md                           ← Documentação do projecto
├── data/
│   ├── historico_data.json            ← Dados históricos gerais
│   └── historico_por_operador_v2.json ← Dados por operador
└── docs/
    ├── CHANGELOG.md                    ← Histórico de alterações
    └── PLANO_MELHORIAS.md             ← Roadmap futuro
```

**⚠️ IMPORTANTE:** Renomear `ANACOM_Dashboard_v2.html` para **`index.html`** (GitHub Pages procura este nome por defeito)

---

### **4. Criar README.md**

Criar ficheiro `README.md` na raiz do projecto:

```markdown
# 📡 Dashboard ANACOM — Mercado de Telecomunicações Portugal

Dashboard interactivo com análise do mercado de telecomunicações português baseado em dados oficiais da ANACOM.

## 🌐 Ver Dashboard Online

👉 **[https://SEU-USERNAME.github.io/anacom-dashboard](https://SEU-USERNAME.github.io/anacom-dashboard)**

## 📊 Funcionalidades

- **3T 2025** — KPIs actuais, quotas de mercado, scorecards de operadores
- **Comparar** — Análise comparativa entre períodos trimestrais
- **Histórico** — Evolução 2006–2024 (Penetração, Subscritores, Tecnologia, Receitas, Mercado)
- **Scorecards Operadores** — MEO, NOS, Vodafone, DIGI com receitas estimadas
- **Exportação Excel** — Download de dados em todos os gráficos
- **Responsive Design** — Optimizado para desktop, tablet e mobile

## 🛠️ Stack Técnica

- HTML5 + CSS3 (design Apple-inspired)
- Chart.js 4.4.0 (visualizações)
- Chart.js Annotation Plugin 3.0.1 (eventos históricos)
- SheetJS 0.18.5 (exportação Excel)

## 📈 Dados

- **Fonte:** ANACOM (Autoridade Nacional de Comunicações)
- **Período:** 2006–2024 (histórico) + 3T 2025 (actual)
- **Actualização:** Trimestral

## 📄 Licença

Dados: © ANACOM | Dashboard: Uso interno/educacional

---

**Desenvolvido com ❤️ para análise do mercado português de telecomunicações**
```

---

### **5. Fazer Upload para GitHub**

```bash
# Adicionar ficheiros ao Git
git add .

# Criar primeiro commit
git commit -m "🚀 Initial commit: Dashboard ANACOM v2 com scorecards de operadores"

# Conectar ao repositório remoto (substituir SEU-USERNAME e REPO-NAME)
git remote add origin https://github.com/SEU-USERNAME/anacom-dashboard.git

# Renomear branch para 'main' (padrão GitHub)
git branch -M main

# Fazer push para GitHub
git push -u origin main
```

**💡 Dica:** Se pedir autenticação, usar **Personal Access Token** em vez de password:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Marcar `repo` → Generate
3. Copiar token e usar como password no terminal

---

### **6. Activar GitHub Pages**

1. No repositório GitHub, ir a **Settings** (⚙️)
2. Menu lateral → **Pages**
3. Configurar:
   - **Source:** Deploy from a branch
   - **Branch:** `main` + `/root` (pasta raiz)
4. Clicar em **Save**
5. Aguardar 1-2 minutos (GitHub constrói o site)
6. URL aparecerá: `https://SEU-USERNAME.github.io/anacom-dashboard`

---

### **7. Partilhar com Colegas**

Partilhar o URL:
```
https://SEU-USERNAME.github.io/anacom-dashboard
```

**Opções de partilha:**
- 📧 Email com link directo
- 💬 Slack/Teams com preview automático
- 📱 QR Code (usar [qr-code-generator.com](https://www.qr-code-generator.com/))
- 🔗 Encurtar URL (usar [bit.ly](https://bitly.com/) ou [tinyurl.com](https://tinyurl.com/))

---

## 🔄 Actualizar Dashboard (Futuro)

Quando quiser actualizar dados ou melhorias:

```bash
# 1. Editar ficheiros localmente
# 2. Adicionar alterações
git add .

# 3. Criar commit descritivo
git commit -m "📊 Actualização dados 4T 2025"

# 4. Fazer push
git push

# 5. GitHub Pages actualiza automaticamente em 1-2 minutos
```

---

## 🎨 Personalização Avançada (Opcional)

### Domínio Personalizado (Gratuito)

Se tiver domínio próprio (ex: `dashboard.empresa.pt`):

1. GitHub Pages → Settings → Custom domain
2. Adicionar domínio
3. Configurar DNS:
   ```
   Type: CNAME
   Name: dashboard (ou @)
   Value: SEU-USERNAME.github.io
   ```

### Protecção com Password (Alternativa)

GitHub Pages não suporta autenticação nativa. Opções:

**Opção A: Repositório Privado** (requer GitHub Pro — €4/mês)
- Apenas colaboradores autorizados acedem

**Opção B: Cloudflare Access** (gratuito até 50 utilizadores)
1. Cloudflare → Zero Trust → Access
2. Configurar autenticação por email
3. Proteger URL do dashboard

**Opção C: Netlify com Password** (gratuito)
1. Importar repo do GitHub para Netlify
2. Activar "Password Protection" nas settings
3. Partilhar password com colegas

---

## 📊 Monitorização (Opcional)

Adicionar Google Analytics para ver estatísticas de acesso:

1. Criar conta [Google Analytics](https://analytics.google.com/)
2. Obter código de tracking
3. Adicionar antes de `</head>` no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ⚡ Alternativas ao GitHub Pages

Se preferir outras plataformas (todas gratuitas):

| Plataforma | Vantagens | Limitações |
|------------|-----------|------------|
| **Netlify** | Deploy automático, formulários, redirects | 100GB bandwidth/mês |
| **Vercel** | Muito rápido, preview automático | Optimizado para Next.js |
| **Cloudflare Pages** | CDN global, ilimitado | Builds limitados |
| **GitLab Pages** | Privado gratuito, CI/CD | Interface menos intuitiva |

---

## 🆘 Resolução de Problemas

### Problema: "404 Page Not Found"
**Solução:** Verificar se ficheiro se chama `index.html` (não `ANACOM_Dashboard_v2.html`)

### Problema: "Gráficos não aparecem"
**Solução:** Verificar se CDNs (Chart.js, SheetJS) estão acessíveis (não bloqueados por firewall)

### Problema: "Dados não carregam"
**Solução:** Se usar ficheiros JSON externos, verificar paths relativos (`./data/historico_data.json`)

### Problema: "Site não actualiza"
**Solução:** 
1. Limpar cache do browser (Ctrl+Shift+R)
2. Aguardar 2-3 minutos (GitHub Pages demora a rebuildar)
3. Verificar Actions tab no GitHub (ver se build passou)

---

## 📞 Suporte

- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/pages)
- **GitHub Community:** [github.community](https://github.community)
- **Stack Overflow:** Tag `github-pages`

---

## ✅ Checklist Final

Antes de partilhar com colegas:

- [ ] Dashboard funciona localmente (abrir `index.html` no browser)
- [ ] Repositório criado no GitHub
- [ ] Ficheiros enviados (`git push`)
- [ ] GitHub Pages activado (Settings → Pages)
- [ ] URL acessível e funcional
- [ ] Gráficos carregam correctamente
- [ ] Exportação Excel funciona
- [ ] Responsive em mobile (testar no telemóvel)
- [ ] README.md actualizado com URL correcto
- [ ] Colegas testaram e confirmaram acesso

---

**🎉 Pronto! Dashboard online e acessível 24/7 sem custos!**
