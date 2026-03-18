# 📋 Plano de Melhorias — Dashboard ANACOM

**Data:** 18 de Março de 2026  
**Versão Actual:** ANACOM_Dashboard.html (2891 linhas, 142KB)  
**Objectivo:** Melhorar funcionalidades e UX do dashboard de telecomunicações português

---

## 📊 Estado Actual

### ✅ Implementado

**Estrutura:**
- 3 tabs principais: 📊 3T 2025 | 🔍 Comparar | 📈 Histórico
- 5 sub-tabs no Histórico: Penetração / Subscritores / Tecnologia / Receitas / Mercado
- Sistema de navegação com `switchMainTab()` e `switchSubTab()`

**Funcionalidades:**
- KPI cards com badges positivo/negativo
- Gráficos Chart.js 4.4.0 (line, bar, doughnut, stacked bar)
- Blocos "Quotas por Operador" em 4 de 5 sub-tabs históricos
- Pills de filtro por operador (MEO, NOS, Vodafone, NOWO)
- Exportação Excel via SheetJS 0.18.5
- Multi-select de operadores no tab Comparar
- Tabela de quotas trimestrais estilo Apple

**Dados:**
- Histórico 2006–2024 (agregado)
- Histórico por operador 2008–2024 (6 séries: inet, tv, stf, movel_v2, bundles_sub, bundles_rec)
- Dados trimestrais 2015Q1–2025Q3
- DIGI spotlight (entrada Nov 2024)

**Design:**
- Estilo Apple: `-apple-system`, cores #0071e3/#1d1d1f/#e30613/#34c759
- Responsivo com media queries @640px e @1200px
- Animações fadeIn, hover effects, scrollbar customizada

---

## 🎯 Melhorias Prioritárias

### **P1 — Quick Wins (Esforço Baixo, Impacto Alto)**

#### 1.1 Adicionar Tipo "Móvel" no Sub-tab Subscritores

**Localização:** Linha ~1157 (sub-tab Subscritores)

**Problema:** Bloco de operadores tem TV/Internet/Telefone Fixo/Pacotes mas falta Móvel, apesar dos dados `movel_v2` estarem disponíveis em `opHistDataV2`.

**Solução:**
```html
<!-- ADICIONAR após linha 1160 -->
<button class="sub-tab-btn" id="opType-sub-movel_v2" 
  onclick="switchOpTypeFor('sub','movel_v2')">📱 Móvel</button>
```

**Dados disponíveis:**
- Anos: 2010–2024
- Operadores: MEO, NOS (a partir 2014), Vodafone, NOWO (a partir 2016)
- Mostra fusão ZON+Optimus=NOS em 2014
- Mostra entrada NOWO MVNO em 2016

**Impacto:** ⭐⭐⭐⭐⭐ (completa funcionalidade existente)

---

#### 1.2 Nota Explicativa no Sub-tab Tecnologia

**Localização:** Linha ~1200 (após gráficos de tecnologia)

**Problema:** Único sub-tab sem bloco de operadores, pode causar confusão ao utilizador.

**Solução:**
```html
<!-- ADICIONAR após linha 1200 (após insights de tecnologia) -->
<div style="background:#fff3cd; border:1px solid #ffc107; border-radius:12px; 
  padding:1.25rem; margin-top:1.5rem;">
  <p style="font-size:0.85rem; color:#856404; margin:0; line-height:1.6;">
    <strong>ℹ️ Nota Importante:</strong> Os dados de tecnologia (ADSL, VDSL, 
    Fibra, Cabo, IPTV, Satélite) são agregados ao nível nacional e não estão 
    disponíveis desagregados por operador individual nas estatísticas oficiais 
    da ANACOM. Por este motivo, este sub-tab não inclui o bloco "Quotas por 
    Operador" presente nos restantes sub-tabs.
  </p>
</div>
```

**Impacto:** ⭐⭐⭐⭐ (melhora UX, clarifica ausência de dados)

---

#### 1.3 Download JSON Histórico

**Localização:** Linha ~2750 (funções JavaScript) + linha ~1280 (botão UI)

**Problema:** Dados históricos valiosos mas sem forma de download direto do browser.

**Solução:**

**JavaScript (adicionar após linha 2750):**
```javascript
// ===== DOWNLOAD JSON HISTÓRICO =====
function downloadHistoricoJSON() {
  const dataStr = JSON.stringify(opHistDataV2, null, 2);
  const blob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'historico_operadores_ANACOM_2008-2024.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
```

**HTML (adicionar no sub-tab Mercado, linha ~1280):**
```html
<!-- ADICIONAR ao lado do botão Excel no bloco de operadores -->
<button class="chart-export-btn" onclick="downloadHistoricoJSON()" 
  style="margin-left:0.5rem;">
  📥 JSON Histórico
</button>
```

**Conteúdo do JSON:**
- 6 séries completas: inet, tv, stf, movel_v2, bundles_sub, bundles_rec
- Metadados: fonte ANACOM, descrição, anos, operadores
- Formato: JSON indentado (2 espaços)
- Tamanho: ~15KB

**Impacto:** ⭐⭐⭐⭐ (transparência, reutilização de dados, análise externa)

---

#### 1.4 Tooltips Multi-Operador

**Localização:** Linha ~2571 (opções dos gráficos de operadores)

**Problema:** Ao fazer hover num ano, tooltip só mostra um operador de cada vez. Dificulta comparação directa.

**Solução:**
```javascript
// MODIFICAR opções dos gráficos buildOpChartFor() e buildOpChart()
// Linha ~2571 e ~2638
tooltip: {
  mode: 'index',           // ← NOVO: mostra todos os datasets
  intersect: false,        // ← NOVO: activa em qualquer ponto do eixo X
  backgroundColor: '#1d1d1f',
  titleColor: '#fff',
  bodyColor: '#fff',
  padding: 12,
  callbacks: {
    label: c => c.dataset.label + ': ' + 
      (c.parsed.y != null ? c.parsed.y.toFixed(1) : 'n/d') + '%'
  }
}
```

**Exemplo de tooltip:**
```
2020
MEO: 40.5%
NOS: 35.0%
Vodafone: 20.7%
NOWO: 3.5%
```

**Impacto:** ⭐⭐⭐⭐⭐ (melhora análise comparativa, UX superior)

---

### **P2 — Melhorias UX (Esforço Médio, Impacto Alto)**

#### 2.1 Responsividade Mobile/Tablet

**Localização:** Linha ~540 (media queries CSS)

**Problemas identificados:**
1. Gráficos de operadores com altura fixa 240px pequenos em mobile
2. Pills de operadores quebram linha de forma desorganizada
3. Tabela de quotas com scroll horizontal excessivo
4. Botões de tipo muito pequenos em mobile

**Solução:**
```css
/* ADICIONAR após linha 553 (após media query @640px) */

@media (max-width: 768px) {
  /* Gráficos de operadores maiores em tablet/mobile */
  div[style*="height:240px"] canvas {
    height: 300px !important;
  }
  
  /* Pills de operadores em grid 2 colunas */
  .op-pill {
    flex: 1 1 calc(50% - 0.5rem);
    min-width: 120px;
    text-align: center;
    justify-content: center;
  }
  
  /* Botões de tipo em coluna */
  div[style*="display:flex"] .sub-tab-btn {
    flex: 1 1 100%;
  }
  
  /* Tabela quotas mais compacta */
  #quotasEvolTable {
    font-size: 11px;
  }
  #quotasEvolTable th,
  #quotasEvolTable td {
    padding: 6px 4px !important;
  }
  
  /* Chart headers em coluna */
  .chart-header {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 0.75rem;
  }
  
  /* Export buttons full width em mobile */
  .chart-export-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  /* Pills em coluna em mobile pequeno */
  .op-pill {
    flex: 1 1 100%;
  }
  
  /* Gráficos ainda maiores em mobile pequeno */
  div[style*="height:240px"] canvas {
    height: 320px !important;
  }
}
```

**Testes necessários:**
- iPhone SE (375px)
- iPhone 14 Pro (393px)
- iPad Mini (768px)
- iPad Pro (1024px)

**Impacto:** ⭐⭐⭐⭐ (essencial para uso mobile)

---

#### 2.2 Anotações de Eventos-Chave

**Localização:** Linha ~2750 (novo plugin Chart.js)

**Problema:** Gráficos históricos não contextualizam eventos importantes do mercado português.

**Eventos a marcar:**
1. **2014** — Fusão ZON+Optimus → NOS
2. **2015** — Altice adquire Portugal Telecom
3. **2016** — NOWO lança serviço MVNO
4. **2024** — DIGI entra no mercado (4 Nov)

**Solução:**
```javascript
// ADICIONAR após linha 2750 (antes de initChartsHistorical)

// ===== PLUGIN: ANOTAÇÕES DE EVENTOS =====
const eventAnnotationsPlugin = {
  id: 'eventAnnotations',
  afterDatasetsDraw(chart) {
    const {ctx, chartArea, scales} = chart;
    if (!scales.x || !chartArea) return;
    
    const events = [
      {year: 2014, label: 'Fusão ZON+Optimus→NOS', color: '#1d1d1f'},
      {year: 2015, label: 'Altice adquire PT', color: '#0071e3'},
      {year: 2024, label: 'DIGI entra (Nov)', color: '#34c759'}
    ];
    
    events.forEach(evt => {
      const x = scales.x.getPixelForValue(evt.year);
      if (x >= chartArea.left && x <= chartArea.right) {
        // Linha vertical tracejada
        ctx.save();
        ctx.strokeStyle = evt.color + '40'; // 25% opacity
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(x, chartArea.top);
        ctx.lineTo(x, chartArea.bottom);
        ctx.stroke();
        
        // Label rotacionado
        ctx.fillStyle = evt.color;
        ctx.font = 'bold 10px -apple-system, sans-serif';
        ctx.textAlign = 'left';
        ctx.translate(x + 5, chartArea.top + 10);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(evt.label, 0, 0);
        
        ctx.restore();
      }
    });
  }
};

// MODIFICAR funções de criação de gráficos históricos
// Adicionar plugin em: createHistoricoPenetracao, createHistoricoSubscritores,
// createHistoricoReceitas, buildOpChartFor, buildOpChart

// Exemplo (linha ~1888):
charts['histChartPenetracao'] = new Chart(ctx, {
  type: 'line',
  plugins: [eventAnnotationsPlugin], // ← ADICIONAR
  data: { ... },
  options: { ... }
});
```

**Impacto:** ⭐⭐⭐ (contexto histórico, storytelling)

---

### **P3 — Dados Avançados (Esforço Alto, Impacto Médio)**

#### 3.1 Separação DIGI vs NOWO

**Problema:** Dados actuais misturam "DIGI/NOWO" mas são entidades diferentes:
- **NOWO:** 2008–2024 (Cabovisão → NOWO → Onitelecom → Grupo Apax)
- **DIGI:** Entrada Nov 2024 (operador romeno)

**Solução:**

**Fase 1 — Dados:**
Extrair do Excel `Anexo_Estatistico2024.xlsx`:
- Sheet 7.2.1: Separar DIGI de NOWO em 2024
- Sheets de quotas: Verificar se DIGI aparece separado

**Fase 2 — Código:**
```javascript
// MODIFICAR opHistDataV2 (linha ~2464)
movel_v2: {
  anos: [2010,...,2024],
  MEO: [...],
  NOS: [...],
  Vodafone: [...],
  NOWO: [..., 1.5], // 2024: apenas NOWO
  DIGI: [null,...,null, 0.5] // 2024: apenas DIGI
}
```

**Fase 3 — UI:**
- Adicionar pill DIGI separada
- Cor DIGI: `#34c759` (verde)
- Cor NOWO: `#5ac8fa` (azul claro)
- Legenda: "NOWO (2008–2024)" e "DIGI (2024)"

**Impacto:** ⭐⭐ (precisão histórica, mas requer trabalho de dados)

---

#### 3.2 Filtro de Intervalo de Anos

**Localização:** Novo componente no tab Histórico

**Funcionalidade:**
- Slider duplo (range) para seleccionar período
- Exemplo: 2015–2020
- Actualiza todos os gráficos do sub-tab activo

**Tecnologia:**
- HTML5 `<input type="range">` duplo
- JavaScript para sincronizar min/max
- Filtrar `chart.data.labels` e `chart.data.datasets[].data`

**Impacto:** ⭐⭐⭐ (análise focada em períodos específicos)

---

#### 3.3 Modo Escuro

**Localização:** Toggle no header + CSS variables

**Implementação:**
```css
:root {
  --bg-primary: #f5f5f7;
  --bg-card: #ffffff;
  --text-primary: #1d1d1f;
  --text-secondary: #6e6e73;
  --border-color: #d2d2d7;
}

[data-theme="dark"] {
  --bg-primary: #1d1d1f;
  --bg-card: #2d2d2f;
  --text-primary: #f5f5f7;
  --text-secondary: #a1a1a6;
  --border-color: #424245;
}
```

**Toggle:**
```html
<button onclick="toggleDarkMode()" style="position:fixed; top:1rem; right:1rem;">
  🌙 / ☀️
</button>
```

**Impacto:** ⭐⭐ (conforto visual, preferência pessoal)

---

## 📐 Arquitectura de Dados

### Estrutura `opHistDataV2`

```javascript
opHistDataV2 = {
  inet: {
    anos: [2008,...,2024],      // 17 anos
    MEO: [...],                  // 17 valores
    NOS: [...],
    Vodafone: [...],
    NOWO: [...],                 // com nulls em 2021-2023
    titulo: "...",
    unit: "%"
  },
  tv: { ... },                   // 17 anos
  stf: { ... },                  // 17 anos
  movel_v2: { ... },             // 15 anos (2010-2024)
  bundles_sub: { ... },          // 14 anos (2011-2024)
  bundles_rec: { ... }           // 10 anos (2015-2024)
}
```

### Gestão de Estado

```javascript
opChartInst = {
  pen: {
    type: 'inet',              // tipo activo
    pills: {                   // operadores visíveis
      MEO: true,
      NOS: true,
      Vodafone: true,
      NOWO: true
    }
  },
  sub: { type: 'tv', pills: {...} },
  rec: { type: 'bundles_rec', pills: {...} }
}
```

### Fluxo de Actualização

```
switchOpTypeFor('pen', 'movel_v2')
  ↓
opChartInst.pen.type = 'movel_v2'
  ↓
buildOpChartFor('pen')
  ↓
destroyChart('opCanvas-pen')
  ↓
new Chart(ctx, {
  data: {
    labels: opHistDataV2.movel_v2.anos,
    datasets: filteredByPills
  }
})
  ↓
charts['opCanvas-pen'] = chartInstance
```

---

## 🎨 Guia de Estilo

### Cores Operadores

| Operador | Hex | Uso |
|----------|-----|-----|
| MEO | `#0071e3` | Apple Blue — Líder mercado |
| NOS | `#1d1d1f` | Apple Black — 2º maior |
| Vodafone | `#e30613` | Vodafone Red — 3º maior |
| NOWO | `#5ac8fa` | Apple Light Blue — Challenger |
| DIGI | `#34c759` | Apple Green — Novo entrante |
| Outros | `#b0b0b8` | Apple Gray — Agregado |

### Tipografia

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif;

/* Títulos */
h1: 2.2rem, 700
h2: 1.5rem, 600
h3: 1.1rem, 500
h4: 0.95rem, 600

/* Corpo */
body: 1rem, 400
small: 0.85rem, 500
```

### Espaçamento

```css
/* Padding cards */
.card: 2rem
.kpi-card: 2rem
.chart-wrapper: 1.5rem

/* Gaps */
.kpi-grid: 1.5rem
.chart-row: 1.5rem
.sub-tabs: 0.5rem

/* Border radius */
.card: 18px
.button: 980px (pill)
.metric-box: 12px
```

---

## ✅ Checklist de Implementação

### Fase 1 — Quick Wins

- [ ] **1.1** Adicionar botão Móvel no sub-tab Subscritores
  - [ ] HTML: botão `opType-sub-movel_v2`
  - [ ] Testar: clicar botão → gráfico actualiza
  - [ ] Validar: dados 2010–2024, NOS a partir 2014

- [ ] **1.2** Nota explicativa no sub-tab Tecnologia
  - [ ] HTML: div com background amarelo
  - [ ] Texto: explicar ausência de dados por operador
  - [ ] Posição: após insights de tecnologia

- [ ] **1.3** Download JSON histórico
  - [ ] JavaScript: função `downloadHistoricoJSON()`
  - [ ] HTML: botão no sub-tab Mercado
  - [ ] Testar: download → abrir JSON → validar estrutura

- [ ] **1.4** Tooltips multi-operador
  - [ ] Modificar: `buildOpChartFor()` linha ~2571
  - [ ] Modificar: `buildOpChart()` linha ~2638
  - [ ] Adicionar: `mode: 'index', intersect: false`
  - [ ] Testar: hover → ver todos operadores

### Fase 2 — Melhorias UX

- [ ] **2.1** Responsividade mobile/tablet
  - [ ] CSS: media query @768px
  - [ ] CSS: media query @480px
  - [ ] Testar: iPhone SE, iPhone 14 Pro, iPad
  - [ ] Validar: gráficos legíveis, pills organizadas

- [ ] **2.2** Anotações de eventos
  - [ ] JavaScript: plugin `eventAnnotationsPlugin`
  - [ ] Adicionar: em 5 gráficos históricos
  - [ ] Testar: linhas verticais visíveis
  - [ ] Validar: labels legíveis

### Fase 3 — Dados Avançados (Opcional)

- [ ] **3.1** Separação DIGI/NOWO
  - [ ] Extrair: dados Excel sheet 7.2.1
  - [ ] Modificar: `opHistDataV2.movel_v2`
  - [ ] UI: pill DIGI separada
  - [ ] Testar: filtros independentes

- [ ] **3.2** Filtro de intervalo de anos
  - [ ] HTML: range slider duplo
  - [ ] JavaScript: filtrar dados
  - [ ] Testar: seleccionar 2015–2020

- [ ] **3.3** Modo escuro
  - [ ] CSS: variables + [data-theme]
  - [ ] JavaScript: toggle + localStorage
  - [ ] Testar: alternar temas

---

## 🧪 Testes de Validação

### Funcionalidade

| Teste | Descrição | Critério de Sucesso |
|-------|-----------|---------------------|
| T1 | Navegação entre tabs | Todos os 3 tabs abrem sem erro |
| T2 | Navegação entre sub-tabs | Todos os 5 sub-tabs abrem sem erro |
| T3 | Gráficos renderizam | Todos os gráficos visíveis e interactivos |
| T4 | Pills de operadores | Toggle on/off actualiza gráfico |
| T5 | Exportação Excel | Download funciona em todos os gráficos |
| T6 | Download JSON | Ficheiro válido, estrutura correcta |
| T7 | Tooltips multi-operador | Hover mostra todos operadores |
| T8 | Responsividade | Layout correcto em 3 tamanhos |

### Performance

| Métrica | Alvo | Actual |
|---------|------|--------|
| Tempo de carregamento | < 2s | ? |
| Tamanho HTML | < 200KB | 142KB ✅ |
| Tamanho JSON | < 20KB | ~15KB ✅ |
| FPS animações | 60fps | ? |
| Memória (charts) | < 50MB | ? |

### Compatibilidade

| Browser | Versão Mínima | Testado |
|---------|---------------|---------|
| Chrome | 90+ | [ ] |
| Safari | 14+ | [ ] |
| Firefox | 88+ | [ ] |
| Edge | 90+ | [ ] |
| Safari iOS | 14+ | [ ] |

---

## 📦 Entregáveis

### Ficheiros Finais

1. **ANACOM_Dashboard_v2.html** — Dashboard melhorado
2. **historico_por_operador_v2.json** — Dados históricos (inalterado)
3. **CHANGELOG.md** — Registo de alterações
4. **README.md** — Documentação de uso

### Documentação

1. **Guia de Utilização** — Como navegar no dashboard
2. **Guia de Dados** — Descrição das fontes e séries
3. **Guia de Desenvolvimento** — Como adicionar novos gráficos

---

## 🚀 Roadmap Futuro

### Q2 2026

- [ ] Integração API ANACOM (dados em tempo real)
- [ ] Comparação internacional (PT vs ES vs EU)
- [ ] Previsões com ML (tendências 2025–2027)

### Q3 2026

- [ ] Dashboard regional (Lisboa, Porto, Algarve)
- [ ] Análise de preços (ARPU por operador)
- [ ] Indicadores de qualidade (velocidade, latência)

### Q4 2026

- [ ] Relatórios PDF automáticos
- [ ] Alertas de mudanças significativas
- [ ] Partilha social (Twitter, LinkedIn)

---

## 📞 Contactos & Recursos

**Fontes de Dados:**
- ANACOM: https://www.anacom.pt/
- Anexo Estatístico 2024: `/Users/denysa_/Downloads/Anexo_Estatistico2024.xlsx`

**Tecnologias:**
- Chart.js: https://www.chartjs.org/
- SheetJS: https://sheetjs.com/

**Ficheiros do Projecto:**
- Dashboard: `/Users/denysa_/Documents/Enchanté/Conversations/530DEF1E-13EC-4C7B-86C9-7D1C3926C96C/ANACOM_Dashboard.html`
- JSON: `/Users/denysa_/Documents/Enchanté/Conversations/530DEF1E-13EC-4C7B-86C9-7D1C3926C96C/historico_por_operador_v2.json`

---

**Última actualização:** 18 de Março de 2026  
**Versão do plano:** 1.0  
**Autor:** Roo (Architect Mode)
