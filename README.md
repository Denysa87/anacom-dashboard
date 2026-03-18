# 📡 Dashboard ANACOM — Mercado de Telecomunicações Portugal

Dashboard interactivo com análise do mercado de telecomunicações português baseado em dados oficiais da ANACOM.

## 🌐 Ver Dashboard Online

👉 **[https://denysa87.github.io/anacom-dashboard](https://denysa87.github.io/anacom-dashboard)**

## 📊 Funcionalidades

### **Tab 3T 2025**
- KPIs principais (Móvel com Internet, Internet Fixa, Telefone Fixo, Receitas)
- Gráficos de penetração com dropdown (STF, STM, BLM, TVS)
- Receitas acumuladas com variação YoY
- Tabela de evolução de quotas trimestrais
- Quotas de mercado por segmento (Móvel, Fixo, Pacotes)
- **Scorecards de Operadores** com receitas estimadas

### **Tab Comparar**
- Comparação entre dois períodos trimestrais
- Multi-select de operadores (MEO, NOS, Vodafone, DIGI/NOWO)
- Métricas comparativas com variação percentual

### **Tab Histórico (2006–2024)**
- **Penetração:** Evolução de STF, STM, BLF, TVS por 100 habitantes
- **Subscritores:** Evolução de Fixo, Móvel, Internet Fixa, TV
- **Tecnologia:** Internet (ADSL, VDSL, Fibra, Cabo) e TV (IPTV, Cabo, Satélite)
- **Receitas:** Pacotes, Móvel, Fixo (2015–2024)
- **Mercado:** Multiple Play, nº operadores, quotas por operador

### **Funcionalidades Transversais**
- ✅ Exportação Excel em todos os gráficos
- ✅ Download JSON de dados históricos
- ✅ Tooltips multi-operador (hover simultâneo)
- ✅ Anotações de eventos-chave (Fusão NOS 2014, Altice 2015)
- ✅ Responsive design (desktop, tablet, mobile)

## 📊 Scorecards de Operadores (3T 2025)

| Operador | Receita Estimada | Quota Mercado | Voz Móvel | BL Móvel | Voz Fixa | Multiple Play |
|----------|------------------|---------------|-----------|----------|----------|---------------|
| **MEO** | €375,8M | 37,4% | 36,1% | 34,0% | 44,7% | 41,7% |
| **NOS** | €317,4M | 31,6% | 31,0% | 32,4% | 32,9% | 34,9% |
| **Vodafone** | €286,3M | 28,5% | 27,8% | 27,8% | 19,7% | 20,4% |
| **DIGI** | €2,0M | 0,2% | 2,7% | 3,2% | — | 6,2% (3P) |

*Receitas estimadas = Quota de mercado × Receitas totais 3T25 (€1.004,5M)*

## 🛠️ Stack Técnica

- **HTML5 + CSS3** — Design Apple-inspired com cores corporativas
- **Chart.js 4.4.0** — Visualizações interactivas (line, bar, doughnut)
- **Chart.js Annotation Plugin 3.0.1** — Anotações de eventos históricos
- **SheetJS 0.18.5** — Exportação para Excel
- **Responsive Design** — Media queries para mobile (@768px) e tablet (@480px)

## 📈 Dados

- **Fonte:** ANACOM (Autoridade Nacional de Comunicações)
- **Período Histórico:** 2006–2024 (19 anos)
- **Dados Actuais:** 3T 2025
- **Actualização:** Trimestral
- **Formato:** JSON embedido no HTML (auto-contido)

## 🎨 Design

### Cores dos Operadores
- 🔵 **MEO:** #0071e3 (Apple Blue)
- ⚫ **NOS:** #1d1d1f (Apple Black)
- 🔴 **Vodafone:** #e30613 (Vodafone Red)
- 🟢 **DIGI:** #34c759 (Apple Green)
- 🔵 **NOWO:** #5ac8fa (Apple Light Blue)
- ⚪ **Outros:** #b0b0b8 (Apple Gray)

### Tipografia
- **Font:** -apple-system, BlinkMacSystemFont, "SF Pro Display"
- **Estilo:** Minimalista, clean, focado em dados

## 📂 Estrutura do Projecto

```
anacom-dashboard/
├── index.html                          ← Dashboard principal
├── README.md                           ← Este ficheiro
└── docs/                               ← Documentação (opcional)
    ├── CHANGELOG.md                    ← Histórico de alterações
    ├── PLANO_MELHORIAS.md             ← Roadmap futuro
    ├── DEPLOY_GITHUB_PAGES.md         ← Guia publicação (terminal)
    └── GUIA_GITHUB_DESKTOP.md         ← Guia publicação (GitHub Desktop)
```

## 🚀 Como Usar

### **Ver Online**
Aceder directamente a: [https://denysa87.github.io/anacom-dashboard](https://denysa87.github.io/anacom-dashboard)

### **Executar Localmente**
1. Fazer download de `index.html`
2. Abrir no browser (duplo-clique)
3. Não requer servidor — funciona offline!

### **Actualizar Dados**
1. Editar `index.html` → Secção JavaScript com dados
2. Actualizar valores nas variáveis:
   - `quarterlyData` (dados trimestrais)
   - `operadorQuotas` (quotas por operador)
   - `historicalData` (dados históricos)
3. Guardar e fazer push para GitHub
4. GitHub Pages actualiza automaticamente em 1-2 minutos

## 📊 Melhorias Implementadas (v2)

1. ✅ **Responsividade Mobile/Tablet** — Media queries optimizadas
2. ✅ **Download JSON Histórico** — Botão para guardar dados
3. ✅ **Tooltips Multi-Operador** — Hover simultâneo em gráficos
4. ✅ **Nota Explicativa Tecnologia** — Ausência de dados por operador
5. ✅ **Organização de Ficheiros** — Estrutura limpa
6. ✅ **Anotações Eventos-Chave** — Fusão NOS 2014, Altice 2015
7. ✅ **DIGI Entrada Marcada** — Badge "novo" e destaque visual
8. ✅ **Gaps NOWO Mantidos** — spanGaps para dados ausentes
9. ✅ **Cores Padronizadas** — Constante COLORS centralizada
10. ✅ **Scorecards Operadores** — Receitas estimadas e métricas-chave

## 🔄 Roadmap Futuro

### **Fase 3 — Dados Avançados**
- [ ] Separação completa DIGI vs NOWO em dados históricos
- [ ] Preencher gaps NOWO 2021-2023 com dados do Excel
- [ ] Adicionar dados de ARPU (Average Revenue Per User)
- [ ] Métricas de churn por operador

### **Fase 4 — Interactividade**
- [ ] Filtros dinâmicos por ano/trimestre
- [ ] Comparação multi-operador em gráfico único
- [ ] Previsões com tendências (linear regression)
- [ ] Alertas de variações significativas

### **Fase 5 — Dados Externos**
- [ ] Integração API ANACOM (se disponível)
- [ ] Actualização automática trimestral
- [ ] Notificações de novos dados

## 📄 Licença

- **Dados:** © ANACOM (Autoridade Nacional de Comunicações)
- **Dashboard:** Uso interno/educacional
- **Código:** Livre para uso e modificação

## 👥 Contribuir

Para sugerir melhorias ou reportar problemas:
1. Abrir issue no GitHub
2. Descrever melhoria/problema
3. Aguardar feedback

## 📞 Suporte

- **GitHub Issues:** [github.com/Denysa87/anacom-dashboard/issues](https://github.com/Denysa87/anacom-dashboard/issues)
- **Documentação:** Ver pasta `docs/`
- **ANACOM:** [anacom.pt](https://www.anacom.pt)

---

## 📊 Estatísticas do Dashboard

- **Linhas de código:** 3.150
- **Tamanho:** 152 KB
- **Gráficos:** 20+ interactivos
- **Operadores:** 4 scorecards completos
- **Período histórico:** 2006–2024 (19 anos)
- **Dados actuais:** 3T 2025
- **Custo de hosting:** €0,00 (GitHub Pages gratuito)

---

**Desenvolvido com ❤️ para análise do mercado português de telecomunicações**

*Última actualização: Março 2026*
