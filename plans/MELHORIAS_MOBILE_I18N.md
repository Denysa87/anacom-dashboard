# 📱🌍 Plano de Melhorias: Mobile UX + Internacionalização (i18n)

**Projeto:** ANACOM Dashboard  
**Data:** 24 Março 2026  
**Objetivo:** Melhorar navegação mobile em todas as secções + Implementar toggle PT/EN

---

## 🎯 Visão Geral

### Objetivos Principais
1. **Mobile-First UX**: Otimizar navegação e usabilidade em dispositivos móveis (320px - 768px)
2. **Internacionalização (i18n)**: Sistema de toggle PT ↔ EN com persistência de preferência
3. **Performance**: Manter tempos de carregamento < 2s em 3G
4. **Acessibilidade**: WCAG 2.1 Level AA compliance

### Métricas de Sucesso
- ✅ Lighthouse Mobile Score > 90
- ✅ Touch targets ≥ 44px × 44px
- ✅ Texto legível sem zoom (≥ 16px base)
- ✅ Toggle de idioma funcional em < 200ms
- ✅ 100% das strings traduzidas

---

## 📋 SPRINT 1: Fundação Mobile + i18n Core (5 dias)

### Dia 1-2: Estrutura i18n
**Objetivo:** Criar sistema de internacionalização base

#### Tarefas:
1. **Criar ficheiro `i18n.js`**
   ```javascript
   const translations = {
     pt: { /* strings PT */ },
     en: { /* strings EN */ }
   };
   ```

2. **Implementar toggle de idioma**
   - Botão flutuante no header (🇵🇹 / 🇬🇧)
   - LocalStorage para persistência
   - Função `switchLanguage(lang)`
   - Atualização dinâmica de todos os textos

3. **Traduzir strings core**
   - Header e navegação principal
   - Labels de KPIs (top 4 cards)
   - Botões de ação (Export, filtros)
   - Mensagens de erro/loading

**Entregáveis:**
- ✅ `i18n.js` com 100+ strings traduzidas
- ✅ Toggle funcional no header
- ✅ Preferência guardada em localStorage

---

### Dia 3-5: Mobile Navigation Base
**Objetivo:** Melhorar navegação principal em mobile

#### Tarefas:
1. **Hamburger Menu para Main Tabs**
   - Converter tabs principais em menu hamburger < 768px
   - Animação slide-in suave
   - Overlay com backdrop blur
   - Touch-friendly (min 48px height)

2. **Sticky Header Mobile**
   - Header fixo com scroll
   - Altura reduzida (60px → 48px)
   - Logo compacto
   - Toggle idioma sempre visível

3. **Bottom Navigation (opcional)**
   - Barra inferior com 4 tabs principais
   - Ícones + labels
   - Active state claro
   - Safe area insets (iOS)

**Entregáveis:**
- ✅ Menu hamburger funcional
- ✅ Header sticky otimizado
- ✅ Navegação touch-friendly

---

## 📋 SPRINT 2: Tab "3T 2025" Mobile (3 dias)

### Objetivo: Otimizar primeira tab para mobile

#### Tarefas:
1. **KPI Cards Responsivos**
   - Grid 1 coluna em mobile (< 640px)
   - Cards com altura fixa (120px)
   - Ícones maiores (3rem)
   - Valores destacados (2.5rem)

2. **Gráficos Mobile-Optimized**
   - Penetração: Altura 300px, labels rotacionados
   - Receitas: Stacked bar horizontal em mobile
   - Legend abaixo do gráfico (não ao lado)
   - Touch zoom/pan (Chart.js plugin)

3. **Tabela Quotas Evolutiva**
   - Scroll horizontal suave
   - Primeira coluna sticky (operador)
   - Células maiores (min 44px height)
   - Highlight da coluna atual (3T 2025)

4. **Scorecards Operadores**
   - Grid 1 coluna em mobile
   - Cards expandíveis (accordion)
   - Métricas em 2 colunas dentro do card

**Entregáveis:**
- ✅ Tab "3T 2025" 100% mobile-friendly
- ✅ Todos os textos traduzidos PT/EN
- ✅ Gráficos interativos em mobile

---

## 📋 SPRINT 3: Tab "Comparar" Mobile (2 dias)

### Objetivo: Otimizar comparações em mobile

#### Tarefas:
1. **Filtros Compactos**
   - Período 1/2: Dropdowns full-width
   - Ícone ⚖️ entre períodos (centralizado)
   - Operador: Multi-select com chips
   - Botão "Aplicar Filtros" fixo no bottom

2. **Cards de Comparação**
   - Layout vertical (não grid)
   - Swipe horizontal entre cards
   - Indicadores de navegação (dots)
   - Animação suave

3. **Gráficos Comparativos**
   - Altura fixa 250px
   - Labels abreviados
   - Tooltip detalhado ao toque
   - Export para imagem (mobile-friendly)

**Entregáveis:**
- ✅ Filtros mobile-optimized
- ✅ Swipe navigation entre comparações
- ✅ Strings traduzidas PT/EN

---

## 📋 SPRINT 4: Tab "Histórico" Mobile (4 dias)

### Objetivo: Otimizar visualização de dados históricos

#### Tarefas:
1. **Sub-tabs Responsivos**
   - Scroll horizontal de sub-tabs
   - Active indicator claro
   - Snap scroll behavior
   - Touch-friendly (min 44px)

2. **Gráficos Históricos**
   - Altura adaptativa (300-350px)
   - Zoom/pan touch gestures
   - Range selector mobile (slider)
   - Legend colapsável

3. **Quotas por Operador**
   - Pills de operador em 2 colunas
   - Gráfico altura 280px
   - Tooltip otimizado para touch
   - Export simplificado

4. **Insights Boxes**
   - Cards expandíveis (collapsed por default)
   - Ícone 📌 para expandir
   - Texto legível (16px)
   - Padding generoso (1.5rem)

**Entregáveis:**
- ✅ 5 sub-tabs mobile-optimized
- ✅ Gráficos interativos com gestures
- ✅ Todas as strings traduzidas

---

## 📋 SPRINT 5: Tab "Financeiro" Mobile (5 dias)

### Objetivo: Otimizar separador mais complexo

#### Tarefas:
1. **Sub-tab "Receitas"**
   - Filtro global: Toggle compacto
   - Slicers temporais: Accordion
   - Gráficos: Altura 300px, scroll vertical
   - Scorecards: 1 coluna, expandíveis

2. **Sub-tab "Rentabilidade"**
   - KPI Cards: 1 coluna
   - Gráfico margens: Altura 280px
   - Análise comparativa: Accordion
   - Highlight de métricas chave

3. **Sub-tab "Mix B2C/B2B"**
   - Doughnut charts: Grid 1 coluna
   - Tabela comparativa: Scroll horizontal
   - Análise estratégica: Expandível
   - Percentagens destacadas

4. **Sub-tab "Insights"**
   - Resumo executivo: Cards empilhados
   - Análise por operador: Accordion
   - Tendências: Lista vertical
   - Conclusão: Texto otimizado

5. **Sub-tab "Tabela Dinâmica"**
   - Filtros: Bottom sheet modal
   - Tabela: Scroll horizontal + vertical
   - Primeira coluna sticky
   - Export: Botão flutuante

**Entregáveis:**
- ✅ 5 sub-tabs financeiros mobile-ready
- ✅ Todas as interações touch-optimized
- ✅ 100% strings traduzidas PT/EN

---

## 📋 SPRINT 6: Polimento + Performance (3 dias)

### Objetivo: Refinamento final e otimizações

#### Tarefas:
1. **Performance Mobile**
   - Lazy loading de gráficos
   - Image optimization (WebP)
   - Code splitting (se aplicável)
   - Service Worker para cache

2. **Gestures & Animations**
   - Swipe to navigate entre tabs
   - Pull to refresh (opcional)
   - Smooth scroll behavior
   - Loading skeletons

3. **Acessibilidade**
   - ARIA labels em PT/EN
   - Focus management
   - Screen reader testing
   - Keyboard navigation (tablet)

4. **Testing Cross-Device**
   - iPhone SE (320px)
   - iPhone 12/13 (390px)
   - Android médio (360px)
   - iPad (768px)
   - Landscape mode

5. **Documentação**
   - README com screenshots mobile
   - Guia de tradução (adicionar novos idiomas)
   - Changelog detalhado
   - Deploy instructions

**Entregáveis:**
- ✅ Lighthouse Mobile Score > 90
- ✅ Todos os devices testados
- ✅ Documentação completa

---

## 🛠️ Stack Técnico

### Bibliotecas Necessárias
```javascript
// i18n
const i18next = require('i18next'); // Opcional, ou custom solution

// Mobile gestures
const Hammer = require('hammerjs'); // Touch gestures

// Performance
const lozad = require('lozad'); // Lazy loading
```

### Estrutura de Ficheiros
```
anacom-dashboard/
├── index.html
├── financial-data.js
├── i18n.js              # NOVO - Sistema de traduções
├── mobile-nav.js        # NOVO - Navegação mobile
├── translations/        # NOVO - Ficheiros de idioma
│   ├── pt.json
│   └── en.json
├── css/
│   ├── mobile.css       # NOVO - Estilos mobile
│   └── responsive.css   # NOVO - Media queries
└── plans/
    └── MELHORIAS_MOBILE_I18N.md  # Este ficheiro
```

---

## 📊 Estimativa de Esforço

| Sprint | Dias | Complexidade | Prioridade |
|--------|------|--------------|------------|
| Sprint 1: Fundação | 5 | Alta | 🔴 Crítica |
| Sprint 2: 3T 2025 | 3 | Média | 🔴 Crítica |
| Sprint 3: Comparar | 2 | Baixa | 🟡 Alta |
| Sprint 4: Histórico | 4 | Alta | 🟡 Alta |
| Sprint 5: Financeiro | 5 | Muito Alta | 🔴 Crítica |
| Sprint 6: Polimento | 3 | Média | 🟢 Média |
| **TOTAL** | **22 dias** | - | - |

---

## 🎨 Design Guidelines Mobile

### Tipografia
```css
/* Base */
--font-size-base: 16px;      /* Nunca menor que 16px */
--font-size-small: 14px;
--font-size-large: 18px;
--font-size-xlarge: 24px;

/* Headings */
--h1-mobile: 1.75rem;        /* 28px */
--h2-mobile: 1.5rem;         /* 24px */
--h3-mobile: 1.25rem;        /* 20px */
```

### Spacing
```css
/* Touch targets */
--touch-target-min: 44px;    /* Apple HIG */
--touch-target-ideal: 48px;  /* Material Design */

/* Padding */
--padding-mobile: 1rem;      /* 16px */
--padding-card: 1.25rem;     /* 20px */
```

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px)  { /* Large mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

---

## 🌍 Sistema de Traduções

### Exemplo de Estrutura
```javascript
// translations/pt.json
{
  "header": {
    "title": "Mercado de Telecomunicações — Portugal",
    "source": "Fonte: ANACOM"
  },
  "tabs": {
    "current": "3T 2025",
    "compare": "Comparar",
    "historical": "Histórico",
    "financial": "Financeiro"
  },
  "kpis": {
    "mobile_internet": "Móvel com Internet",
    "fixed_internet": "Internet Fixa",
    "fixed_phone": "Tel. Fixo",
    "revenue": "Receitas"
  }
}

// translations/en.json
{
  "header": {
    "title": "Telecommunications Market — Portugal",
    "source": "Source: ANACOM"
  },
  "tabs": {
    "current": "Q3 2025",
    "compare": "Compare",
    "historical": "Historical",
    "financial": "Financial"
  },
  "kpis": {
    "mobile_internet": "Mobile Internet",
    "fixed_internet": "Fixed Internet",
    "fixed_phone": "Fixed Phone",
    "revenue": "Revenue"
  }
}
```

---

## ✅ Checklist de Aceitação

### Mobile UX
- [ ] Todos os elementos têm min 44px de touch target
- [ ] Texto base ≥ 16px (sem zoom necessário)
- [ ] Gráficos interativos com touch gestures
- [ ] Navegação fluida entre tabs/sub-tabs
- [ ] Tabelas com scroll horizontal suave
- [ ] Cards/accordions expandíveis
- [ ] Loading states em todas as ações
- [ ] Landscape mode funcional

### Internacionalização
- [ ] Toggle PT/EN visível e acessível
- [ ] Preferência guardada em localStorage
- [ ] 100% das strings traduzidas
- [ ] Números formatados por locale (PT: 1.234,56 | EN: 1,234.56)
- [ ] Datas formatadas por locale
- [ ] Gráficos com labels traduzidos
- [ ] Meta tags og:locale corretos

### Performance
- [ ] Lighthouse Mobile Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Lazy loading de imagens/gráficos
- [ ] Minificação de CSS/JS

### Acessibilidade
- [ ] ARIA labels em ambos idiomas
- [ ] Navegação por teclado funcional
- [ ] Contraste WCAG AA (4.5:1)
- [ ] Screen reader friendly
- [ ] Focus indicators visíveis

---

## 🚀 Próximos Passos

1. **Aprovar plano** e priorizar sprints
2. **Criar branch** `feature/mobile-i18n`
3. **Sprint 1**: Começar com fundação i18n
4. **Review incremental** após cada sprint
5. **Deploy staging** para testes mobile
6. **User testing** com dispositivos reais
7. **Deploy produção** com feature flag

---

## 📝 Notas Importantes

### Considerações Técnicas
- **Chart.js**: Verificar plugins mobile (zoom, pan, touch)
- **LocalStorage**: Fallback para cookies se bloqueado
- **Service Worker**: Testar em HTTPS (localhost OK)
- **Gestures**: Não conflitar com scroll nativo

### Riscos
- ⚠️ Ficheiro HTML muito grande (2000+ linhas) → Considerar modularização
- ⚠️ Chart.js pode ser pesado em mobile → Lazy load
- ⚠️ Muitas traduções → Automatizar com script

### Oportunidades
- 💡 PWA (Progressive Web App) para instalação mobile
- 💡 Dark mode toggle (além de idioma)
- 💡 Exportar relatórios em PDF mobile-friendly
- 💡 Notificações push para novos dados ANACOM

---

**Criado por:** Roo AI Assistant  
**Última atualização:** 24 Março 2026  
**Versão:** 1.0
