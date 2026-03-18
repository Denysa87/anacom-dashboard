# 🚀 Guia GitHub Desktop — Publicar Dashboard ANACOM

## ✅ Pré-requisitos Completos
- ✅ Repositório criado: `https://github.com/Denysa87/anacom-dashboard`
- ✅ GitHub Desktop instalado
- ✅ Dashboard pronto: `ANACOM_Dashboard_v2.html`

---

## 📝 Passo-a-Passo com GitHub Desktop

### **PASSO 1: Clonar o Repositório**

1. Abrir **GitHub Desktop**
2. Clicar em **File** → **Clone Repository**
3. Seleccionar tab **GitHub.com**
4. Procurar `Denysa87/anacom-dashboard` na lista
5. Escolher pasta local (sugestão: `/Users/denysa_/Documents/GitHub/anacom-dashboard`)
6. Clicar em **Clone**

✅ **Resultado:** Pasta local criada e sincronizada com GitHub

---

### **PASSO 2: Preparar Ficheiros**

#### A. Renomear Dashboard
```bash
# IMPORTANTE: Renomear o ficheiro principal
ANACOM_Dashboard_v2.html → index.html
```

**Porquê?** GitHub Pages procura automaticamente por `index.html` como página principal.

#### B. Copiar Ficheiros para a Pasta do Repositório

Copiar estes ficheiros para `/Users/denysa_/Documents/GitHub/anacom-dashboard/`:

```
anacom-dashboard/
├── index.html                          ← ANACOM_Dashboard_v2.html renomeado
├── README.md                           ← Criar (ver modelo abaixo)
├── data/                               ← Criar pasta (opcional)
│   ├── historico_data.json            
│   └── historico_por_operador_v2.json 
└── docs/                               ← Criar pasta (opcional)
    ├── CHANGELOG.md                    
    └── DEPLOY_GITHUB_PAGES.md         
```

**Ficheiros Essenciais:**
- ✅ `index.html` (obrigatório)
- ✅ `README.md` (recomendado)

**Ficheiros Opcionais:**
- ⚪ JSONs de dados (já estão embedidos no HTML)
- ⚪ Documentação extra

---

### **PASSO 3: Criar README.md**

Criar ficheiro `README.md` na raiz do repositório com este conteúdo:

```markdown
# 📡 Dashboard ANACOM — Mercado de Telecomunicações Portugal

Dashboard interactivo com análise do mercado de telecomunicações português baseado em dados oficiais da ANACOM.

## 🌐 Ver Dashboard Online

👉 **[https://denysa87.github.io/anacom-dashboard](https://denysa87.github.io/anacom-dashboard)**

## 📊 Funcionalidades

- **3T 2025** — KPIs actuais, quotas de mercado, scorecards de operadores (MEO, NOS, Vodafone, DIGI)
- **Comparar** — Análise comparativa entre períodos trimestrais
- **Histórico** — Evolução 2006–2024 (Penetração, Subscritores, Tecnologia, Receitas, Mercado)
- **Scorecards Operadores** — Receitas estimadas e métricas-chave por operador
- **Exportação Excel** — Download de dados em todos os gráficos
- **Responsive Design** — Optimizado para desktop, tablet e mobile

## 🛠️ Stack Técnica

- HTML5 + CSS3 (design Apple-inspired)
- Chart.js 4.4.0 (visualizações interactivas)
- Chart.js Annotation Plugin 3.0.1 (eventos históricos)
- SheetJS 0.18.5 (exportação Excel)

## 📈 Dados

- **Fonte:** ANACOM (Autoridade Nacional de Comunicações)
- **Período:** 2006–2024 (histórico) + 3T 2025 (actual)
- **Actualização:** Trimestral

## 📊 Operadores Analisados

| Operador | Receita 3T25 | Quota Mercado |
|----------|--------------|---------------|
| MEO | €375,8M | 37,4% |
| NOS | €317,4M | 31,6% |
| Vodafone | €286,3M | 28,5% |
| DIGI | €2,0M | 0,2% (novo) |

## 📄 Licença

Dados: © ANACOM | Dashboard: Uso interno/educacional

---

**Desenvolvido com ❤️ para análise do mercado português de telecomunicações**
```

---

### **PASSO 4: Fazer Commit no GitHub Desktop**

1. Abrir **GitHub Desktop**
2. Verificar que está no repositório `anacom-dashboard` (canto superior esquerdo)
3. Ver lista de ficheiros alterados no painel esquerdo:
   - ✅ `index.html` (novo)
   - ✅ `README.md` (novo)
   - ✅ Outros ficheiros (se copiou)

4. **Escrever mensagem de commit** (caixa inferior esquerda):
   ```
   Summary: 🚀 Dashboard ANACOM v2 com scorecards de operadores
   
   Description (opcional):
   - Dashboard interactivo 3T 2025
   - Scorecards MEO, NOS, Vodafone, DIGI
   - Histórico 2006-2024
   - Exportação Excel
   - Responsive design
   ```

5. Clicar em **Commit to main** (botão azul)

✅ **Resultado:** Ficheiros guardados localmente no Git

---

### **PASSO 5: Fazer Push para GitHub**

1. Clicar em **Push origin** (botão azul no topo)
2. Aguardar upload (barra de progresso)
3. ✅ Ficheiros agora estão no GitHub online!

**Verificar:** Abrir `https://github.com/Denysa87/anacom-dashboard` no browser e confirmar que ficheiros aparecem.

---

### **PASSO 6: Activar GitHub Pages**

1. Ir a `https://github.com/Denysa87/anacom-dashboard`
2. Clicar em **Settings** (⚙️ tab no topo)
3. Menu lateral esquerdo → **Pages**
4. Em **Source:**
   - Branch: **main** (seleccionar no dropdown)
   - Folder: **/ (root)** (seleccionar no dropdown)
5. Clicar em **Save**
6. Aguardar 1-2 minutos
7. Página recarrega e mostra:
   ```
   ✅ Your site is live at https://denysa87.github.io/anacom-dashboard/
   ```

---

### **PASSO 7: Testar o Dashboard Online**

1. Abrir `https://denysa87.github.io/anacom-dashboard/`
2. Verificar:
   - ✅ Dashboard carrega correctamente
   - ✅ Gráficos aparecem
   - ✅ Scorecards de operadores visíveis
   - ✅ Exportação Excel funciona
   - ✅ Tabs navegam correctamente
   - ✅ Responsive em mobile (testar no telemóvel)

---

### **PASSO 8: Partilhar com Colegas**

Partilhar este URL:
```
https://denysa87.github.io/anacom-dashboard/
```

**Opções de partilha:**
- 📧 **Email:** Enviar link directo
- 💬 **Teams/Slack:** Colar URL (preview automático)
- 📱 **QR Code:** Gerar em [qr-code-generator.com](https://www.qr-code-generator.com/)
- 🔗 **Encurtar:** Usar [bit.ly](https://bitly.com/) → `bit.ly/anacom-dash`

---

## 🔄 Actualizar Dashboard no Futuro

Quando quiser actualizar dados (ex: 4T 2025):

### **Opção A: GitHub Desktop (Recomendado)**

1. Editar `index.html` localmente (no VS Code ou editor)
2. Guardar alterações
3. Abrir **GitHub Desktop**
4. Ver ficheiros alterados
5. Escrever commit: `📊 Actualização dados 4T 2025`
6. Clicar em **Commit to main**
7. Clicar em **Push origin**
8. Aguardar 1-2 minutos → Dashboard actualizado online!

### **Opção B: Editar Directamente no GitHub**

1. Ir a `https://github.com/Denysa87/anacom-dashboard`
2. Clicar em `index.html`
3. Clicar no ícone ✏️ (Edit this file)
4. Fazer alterações
5. Scroll down → **Commit changes**
6. Escrever mensagem → **Commit changes**
7. Aguardar 1-2 minutos → Dashboard actualizado!

---

## 🎨 Personalização Avançada (Opcional)

### **Domínio Personalizado**

Se tiver domínio próprio (ex: `dashboard.empresa.pt`):

1. GitHub Pages → Settings → Pages → Custom domain
2. Adicionar: `dashboard.empresa.pt`
3. Configurar DNS no fornecedor do domínio:
   ```
   Type: CNAME
   Name: dashboard
   Value: denysa87.github.io
   ```
4. Aguardar propagação DNS (até 24h)

### **Protecção com Password**

GitHub Pages público não suporta password nativo. Alternativas:

**Opção 1: Repositório Privado** (requer GitHub Pro — €4/mês)
- Settings → Change visibility → Private
- Adicionar colaboradores autorizados

**Opção 2: Netlify com Password** (gratuito)
1. Importar repo do GitHub para [Netlify](https://netlify.com)
2. Settings → Site details → Password protection
3. Definir password
4. Partilhar password com colegas

---

## 📊 Monitorização de Acessos (Opcional)

### **Google Analytics**

1. Criar conta [Google Analytics](https://analytics.google.com/)
2. Criar propriedade → Obter ID (ex: `G-XXXXXXXXXX`)
3. Editar `index.html` → Adicionar antes de `</head>`:

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

4. Commit e push
5. Ver estatísticas em Google Analytics (visitantes, páginas vistas, etc.)

---

## 🆘 Resolução de Problemas

### ❌ Problema: "404 Page Not Found"
**Causa:** Ficheiro não se chama `index.html`  
**Solução:** Renomear para `index.html` exactamente (minúsculas)

### ❌ Problema: "Site não actualiza após push"
**Causa:** Cache do browser ou GitHub Pages a rebuildar  
**Solução:**
1. Limpar cache: `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
2. Aguardar 2-3 minutos
3. Verificar Actions tab no GitHub (ver se build passou)

### ❌ Problema: "Gráficos não aparecem"
**Causa:** CDNs bloqueados ou erro JavaScript  
**Solução:**
1. Abrir DevTools (F12) → Console
2. Ver erros (vermelho)
3. Verificar se CDNs carregam:
   - Chart.js: `https://cdn.jsdelivr.net/npm/chart.js@4.4.0`
   - SheetJS: `https://cdn.jsdelivr.net/npm/xlsx@0.18.5`

### ❌ Problema: "GitHub Desktop não mostra alterações"
**Causa:** Ficheiros fora da pasta do repositório  
**Solução:** Copiar ficheiros para `/Users/denysa_/Documents/GitHub/anacom-dashboard/`

### ❌ Problema: "Push failed"
**Causa:** Autenticação ou conflitos  
**Solução:**
1. GitHub Desktop → Repository → Repository settings
2. Verificar Remote URL
3. Re-autenticar: Account → Sign out → Sign in

---

## ✅ Checklist Final

Antes de partilhar com colegas:

- [ ] Repositório clonado no GitHub Desktop
- [ ] `index.html` criado (renomeado de `ANACOM_Dashboard_v2.html`)
- [ ] `README.md` criado
- [ ] Commit feito com mensagem descritiva
- [ ] Push para GitHub concluído
- [ ] GitHub Pages activado (Settings → Pages)
- [ ] URL acessível: `https://denysa87.github.io/anacom-dashboard/`
- [ ] Dashboard carrega correctamente
- [ ] Gráficos funcionam
- [ ] Scorecards visíveis
- [ ] Exportação Excel funciona
- [ ] Testado em mobile
- [ ] Colegas testaram e confirmaram acesso

---

## 📞 Suporte

- **GitHub Desktop Docs:** [docs.github.com/desktop](https://docs.github.com/desktop)
- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/pages)
- **GitHub Community:** [github.community](https://github.community)

---

## 🎉 Resumo Rápido

```bash
1. Clonar repo no GitHub Desktop
2. Renomear: ANACOM_Dashboard_v2.html → index.html
3. Copiar ficheiros para pasta do repo
4. Criar README.md
5. Commit: "🚀 Dashboard ANACOM v2"
6. Push origin
7. Activar GitHub Pages (Settings → Pages → main → Save)
8. Partilhar: https://denysa87.github.io/anacom-dashboard/
```

**Tempo total:** 5-10 minutos  
**Custo:** €0,00  
**Resultado:** Dashboard online 24/7 acessível a todos!

---

**🚀 Pronto para publicar! Siga os passos acima e o dashboard estará online em minutos!**
