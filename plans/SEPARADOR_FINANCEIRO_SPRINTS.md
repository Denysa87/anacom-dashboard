# 💰 Novo Separador: Dados Financeiros dos Operadores

**Projeto:** Dashboard ANACOM - Análise Financeira dos Operadores  
**Data:** 23 de Março de 2026  
**Fonte de Dados:** `Carrier financial results vs code.xlsx`  
**Metodologia:** Desenvolvimento em Sprints (Agile)

---

## 📋 Visão Geral do Projeto

### Objetivo
Criar um novo separador no dashboard ANACOM com análise financeira detalhada dos 3 principais operadores (MEO, NOS, Vodafone), incluindo:
- Evolução de receitas (Total, B2C, B2B)
- Margens EBITDA e rentabilidade
- Mix B2C vs B2B por operador
- Estimativas de quotas de mercado B2C e B2B
- Insights estratégicos do setor

### Fontes de Dados
- **MEO:** Relatórios Altice Portugal (dados confirmados + estimativas analíticas)
- **NOS:** Comunicados trimestrais NOS SGPS (dados públicos confirmados)
- **Vodafone:** Vodafone Group + estimativas analíticas (dados trimestrais não divulgados separadamente)

### Período de Dados
- **CYQ1'24** até **CYQ3'25** (6 trimestres)
- Possibilidade de adicionar CYQ4'25 quando disponível

---

## 🎯 Estrutura em Sprints

### **Sprint 1: Preparação e Estrutura de Dados** (3-5 dias)

#### Objetivos
- Extrair dados do Excel para estruturas JavaScript
- Criar estrutura base do novo separador
- Definir esquema de cores e design

#### Tarefas
1. **Extração de Dados do Excel**
   - [ ] Extrair dados MEO (Revenue, EBITDA, B2C/B2B)
   - [ ] Extrair dados NOS (Revenue, EBITDA, B2C/B2B, IT, Cinema)
   - [ ] Extrair dados Vodafone (Revenue estimado, EBITDA, B2C/B2B)
   - [ ] Criar estrutura JSON com dados trimestrais

2. **Estrutura HTML Base**
   - [ ] Adicionar novo botão de tab "💰 Financeiro" no menu principal
   - [ ] Criar container do tab com estrutura básica
   - [ ] Definir sub-tabs: Receitas | Rentabilidade | Mix B2C/B2B | Insights

3. **Design e Cores**
   - [ ] Manter paleta Apple-inspired existente
   - [ ] Adicionar badges para dados confirmados vs estimados
   - [ ] Criar legenda de fontes de dados

#### Entregáveis Sprint 1
- Estrutura de dados JavaScript completa
- HTML base do novo separador
- Navegação funcional entre tabs

---

### **Sprint 2: Gráficos de Receitas e Slicers** (5-7 dias)

#### Objetivos
- Implementar gráficos de evolução de receitas
- Criar slicers temporais interativos
- Adicionar filtros por operador

#### Tarefas
1. **Gráfico: Evolução de Receitas Total**
   - [ ] Gráfico de linhas com 3 séries (MEO, NOS, Vodafone)
   - [ ] Tooltip multi-operador
   - [ ] Exportação Excel
   - [ ] Anotações de eventos (se relevante)

2. **Gráfico: Receitas B2C vs B2B por Operador**
   - [ ] Gráfico de barras empilhadas (stacked bar)
   - [ ] Comparação lado a lado dos 3 operadores
   - [ ] Percentagens e valores absolutos

3. **Slicers Temporais**
   - [ ] Dropdown de período inicial (CYQ1'24 - CYQ3'25)
   - [ ] Dropdown de período final (CYQ1'24 - CYQ3'25)
   - [ ] Botões rápidos: Q1'25, H1'25, YTD'25, Últimos 4Q
   - [ ] Atualização automática de todos os gráficos

4. **Filtros de Operador**
   - [ ] Pills de seleção (MEO, NOS, Vodafone)
   - [ ] Toggle on/off individual
   - [ ] Opção "Todos" / "Nenhum"

#### Entregáveis Sprint 2
- 2 gráficos de receitas funcionais
- Slicers temporais operacionais
- Filtros de operador integrados

---

### **Sprint 3: Análise de Rentabilidade (EBITDA)** (4-6 dias)

#### Objetivos
- Visualizar evolução de margens EBITDA
- Comparar rentabilidade entre operadores
- Destacar tendências e variações

#### Tarefas
1. **Gráfico: Evolução de Margem EBITDA**
   - [ ] Gráfico de linhas com % EBITDA por operador
   - [ ] Linha de referência (média do setor ~35-40%)
   - [ ] Destaque de variações significativas (>200bps)

2. **Gráfico: EBITDA Absoluto vs Margem**
   - [ ] Gráfico combinado (bar + line)
   - [ ] Barras: EBITDA em €M
   - [ ] Linha: Margem %
   - [ ] Comparação trimestral

3. **Cards de KPIs de Rentabilidade**
   - [ ] Card MEO: EBITDA atual, variação YoY, margem
   - [ ] Card NOS: EBITDA atual, variação YoY, margem
   - [ ] Card Vodafone: EBITDA atual (estimado), variação YoY, margem
   - [ ] Badges de tendência (↑ melhoria, ↓ deterioração)

4. **Tabela Comparativa**
   - [ ] Tabela estilo Apple com dados trimestrais
   - [ ] Colunas: Operador, Q1'24, Q2'24, ..., Q3'25, Δ YoY
   - [ ] Ordenação por margem EBITDA
   - [ ] Exportação Excel

#### Entregáveis Sprint 3
- 2 gráficos de rentabilidade
- 3 cards de KPIs
- Tabela comparativa funcional

---

### **Sprint 4: Mix B2C vs B2B e Quotas** (5-7 dias)

#### Objetivos
- Visualizar mix de receitas B2C vs B2B
- Estimar quotas de mercado B2C e B2B
- Identificar tendências de segmentação

#### Tarefas
1. **Gráfico: Mix B2C/B2B por Operador**
   - [ ] Gráfico de donut ou pie chart por operador
   - [ ] 3 donuts lado a lado (MEO, NOS, Vodafone)
   - [ ] Percentagens e valores absolutos
   - [ ] Evolução temporal com slicer

2. **Gráfico: Evolução do Mix B2C/B2B**
   - [ ] Gráfico de área empilhada (100% stacked area)
   - [ ] Mostrar mudança de mix ao longo do tempo
   - [ ] Por operador individual

3. **Estimativa de Quotas B2C e B2B**
   - [ ] Calcular quota de mercado B2C por operador
   - [ ] Calcular quota de mercado B2B por operador
   - [ ] Fórmula: Receita Operador / Σ Receitas Mercado
   - [ ] Gráfico de barras horizontais com quotas

4. **Tabela de Quotas Estimadas**
   - [ ] Tabela com quotas B2C e B2B por trimestre
   - [ ] Comparação com quotas totais (dados ANACOM)
   - [ ] Validação cruzada de estimativas

#### Entregáveis Sprint 4
- 3 gráficos de mix B2C/B2B
- Cálculo de quotas de mercado
- Tabela de quotas estimadas

---

### **Sprint 5: Insights Estratégicos e Finalização** (3-5 dias)

#### Objetivos
- Adicionar secção de insights estratégicos
- Documentar fontes e metodologia
- Testes finais e ajustes

#### Tarefas
1. **Secção: Insights Estratégicos**
   - [ ] Card "Tendências de Receita"
     - Crescimento/declínio por operador
     - Identificação de outliers
   - [ ] Card "Rentabilidade Comparativa"
     - Ranking de margens EBITDA
     - Análise de eficiência operacional
   - [ ] Card "Dinâmica B2C vs B2B"
     - Tendências de segmentação
     - Oportunidades e riscos
   - [ ] Card "Alertas Estratégicos"
     - MEO: Queda B2B acentuada
     - NOS: Crescimento consistente
     - Vodafone: Convergência acelerada

2. **Documentação de Fontes**
   - [ ] Nota explicativa sobre dados confirmados vs estimados
   - [ ] Legenda de cores (verde = confirmado, laranja = estimado)
   - [ ] Links para fontes públicas (investor.nos.pt, altice.net, vodafone.com)
   - [ ] Metodologia de estimativas Vodafone

3. **Notas de Rodapé e Disclaimers**
   - [ ] "Dados MEO: Altice Portugal (confirmados)"
   - [ ] "Dados NOS: NOS SGPS - CMVM (confirmados)"
   - [ ] "Dados Vodafone: Estimativas analíticas baseadas em Vodafone Group"
   - [ ] "Quotas B2C/B2B: Estimativas baseadas em dados públicos"

4. **Testes e Validação**
   - [ ] Testar slicers temporais em todos os gráficos
   - [ ] Validar cálculos de quotas
   - [ ] Testar responsividade mobile/tablet
   - [ ] Verificar exportações Excel
   - [ ] Validar tooltips e interatividade

5. **Ajustes Finais**
   - [ ] Otimizar performance (lazy loading de gráficos)
   - [ ] Ajustar cores e espaçamentos
   - [ ] Adicionar animações de transição
   - [ ] Documentar código JavaScript

#### Entregáveis Sprint 5
- Secção de insights completa
- Documentação de fontes
- Dashboard testado e validado

---

## 📊 Estrutura de Dados JavaScript

### Dados Financeiros dos Operadores

```javascript
const operatorFinancials = {
    periods: ['CYQ1\'24', 'CYQ2\'24', 'CYQ3\'24', 'CYQ4\'24', 'CYQ1\'25', 'CYQ2\'25', 'CYQ3\'25'],
    
    MEO: {
        revenue: {
            total: [695.4, 701.0, 741.7, 750.1, 694.5, 685.3, 675.4],
            b2c: [344.8, 348.5, 361.5, 381.4, 373.8, 365.0, 370.8],
            b2b: [358.9, 356.8, 387.0, 372.3, 323.2, 329.7, 311.3]
        },
        ebitda: {
            total: [259.0, 252.0, 254.1, 187.3, 244.1, 244.0, 228.9],
            margin: [37.2, 36.0, 34.3, 25.0, 35.1, 35.6, 33.9]
        },
        source: 'confirmed', // ou 'estimated'
        notes: 'Altice Portugal - Relatórios públicos'
    },
    
    NOS: {
        revenue: {
            total: [403.3, 444.2, 462.8, 484.9, 421.4, 458.2, 457.3],
            b2c: [277.6, 282.1, 289.5, 293.3, 282.4, 281.3, 286.1],
            b2b: [98.2, 101.2, 105.1, 121.2, 107.2, 111.0, 109.7],
            it: [13.2, 49.7, 45.4, 53.2, 17.1, 49.3, 45.2],
            cinema: [22.8, 19.7, 32.7, 27.1, 23.1, 25.8, 25.9]
        },
        ebitda: {
            total: [184.5, 191.5, 216.9, 187.3, 192.3, 202.9, 222.7],
            margin: [45.7, 43.1, 46.9, 38.6, 45.6, 44.3, 48.7]
        },
        source: 'confirmed',
        notes: 'NOS SGPS - Comunicados trimestrais (CMVM)'
    },
    
    Vodafone: {
        revenue: {
            total: [264.0, 260.0, 273.0, 291.0, 270.0, 263.0, 276.0],
            b2c: [180.0, 177.0, 186.0, 198.0, 184.0, 179.0, 188.0],
            b2b: [84.0, 83.0, 87.0, 93.0, 86.0, 84.0, 88.0]
        },
        ebitda: {
            total: [73.0, 72.0, 77.0, 83.0, 78.0, 76.0, 80.0],
            margin: [28.4, 28.3, 28.9, 29.3, 29.7, 29.6, 30.0]
        },
        source: 'estimated',
        notes: 'Estimativas baseadas em Vodafone Group FY reports'
    }
};
```

### Cálculo de Quotas de Mercado

```javascript
function calculateMarketShares(period) {
    const totalB2C = operatorFinancials.MEO.revenue.b2c[period] +
                     operatorFinancials.NOS.revenue.b2c[period] +
                     operatorFinancials.Vodafone.revenue.b2c[period];
    
    const totalB2B = operatorFinancials.MEO.revenue.b2b[period] +
                     operatorFinancials.NOS.revenue.b2b[period] +
                     operatorFinancials.Vodafone.revenue.b2b[period];
    
    return {
        b2c: {
            MEO: (operatorFinancials.MEO.revenue.b2c[period] / totalB2C) * 100,
            NOS: (operatorFinancials.NOS.revenue.b2c[period] / totalB2C) * 100,
            Vodafone: (operatorFinancials.Vodafone.revenue.b2c[period] / totalB2C) * 100
        },
        b2b: {
            MEO: (operatorFinancials.MEO.revenue.b2b[period] / totalB2B) * 100,
            NOS: (operatorFinancials.NOS.revenue.b2b[period] / totalB2B) * 100,
            Vodafone: (operatorFinancials.Vodafone.revenue.b2b[period] / totalB2B) * 100
        }
    };
}
```

---

## 🎨 Wireframes e Layout

### Layout do Separador "💰 Financeiro"

```
┌─────────────────────────────────────────────────────────────┐
│  📊 3T 2025  |  🔍 Comparar  |  📈 Histórico  |  💰 Financeiro │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Sub-tabs:                                                   │
│  [📈 Receitas] [💹 Rentabilidade] [🔀 Mix B2C/B2B] [💡 Insights] │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Slicers Temporais:                                          │
│  Período: [CYQ1'24 ▼] até [CYQ3'25 ▼]  [Q1'25] [H1'25] [YTD] │
│  Operadores: [● MEO] [● NOS] [● Vodafone]                    │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────┬──────────────────────────────┐
│  Gráfico: Evolução Receitas  │  Gráfico: Receitas B2C/B2B   │
│  (Line chart)                │  (Stacked bar)               │
│                              │                              │
│  [Chart.js visualization]    │  [Chart.js visualization]    │
│                              │                              │
│  ⬇ Excel                     │  ⬇ Excel                     │
└──────────────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Tabela Comparativa de Receitas                             │
│  ┌──────────┬────────┬────────┬────────┬────────┬─────────┐ │
│  │ Operador │ Q1'24  │ Q2'24  │ Q3'24  │ ...    │ Δ YoY   │ │
│  ├──────────┼────────┼────────┼────────┼────────┼─────────┤ │
│  │ MEO      │ 695.4M │ 701.0M │ 741.7M │ ...    │ -8.9%   │ │
│  │ NOS      │ 403.3M │ 444.2M │ 462.8M │ ...    │ -1.2%   │ │
│  │ Vodafone │ 264.0M │ 260.0M │ 273.0M │ ...    │ +1.1%   │ │
│  └──────────┴────────┴────────┴────────┴────────┴─────────┘ │
│  ⬇ Excel                                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔍 Insights Estratégicos (Conteúdo)

### 1. Tendências de Receita

**MEO (Altice Portugal)**
- ⚠️ **Queda acelerada:** -8.9% YoY em Q3'25
- 📉 **B2B em declínio:** -19.6% YoY (perda de contratos enterprise)
- ✅ **B2C resiliente:** +2.6% YoY em H1'25 (bundling quad-play)

**NOS SGPS**
- ✅ **Crescimento consistente:** +3.8% YoY em H1'25
- 📈 **B2B robusto:** +9.4% YoY (IT e serviços geridos)
- 🎬 **Cinema estável:** Diferenciador competitivo

**Vodafone Portugal**
- ➡️ **Crescimento moderado:** +1.1% YoY estimado
- 🌐 **Convergência acelerada:** Expansão fixo-móvel via wholesale
- 📱 **Foco PME:** Parcerias cloud (Microsoft Azure)

### 2. Rentabilidade Comparativa

**Ranking de Margens EBITDA (Q3'25)**
1. 🥇 **NOS:** 48.7% (líder europeu de rentabilidade)
2. 🥈 **MEO:** 33.9% (compressão de -330bps vs Q1'24)
3. 🥉 **Vodafone:** ~30.0% (estimado, melhoria gradual)

**Alertas:**
- MEO: Margem em queda de 37.2% → 33.9% em 6 trimestres
- NOS: Melhoria de 43.1% → 48.7% (+250bps)
- Vodafone: Margem estável, crescimento cobre CAPEX 5G

### 3. Dinâmica B2C vs B2B

**Mix de Receitas (Q3'25)**
- **MEO:** 54% B2C / 46% B2B (exposição B2B mais alta)
- **NOS:** 72% B2C / 28% B2B (mix equilibrado)
- **Vodafone:** 68% B2C / 32% B2B (foco PME)

**Quotas de Mercado Estimadas (Q3'25)**
- **B2C:** MEO 40%, NOS 31%, Vodafone 20%
- **B2B:** MEO 52%, NOS 19%, Vodafone 15%

### 4. Alertas Estratégicos

⚠️ **Risco MEO:** Declínio B2B pode indicar perda de contratos para cloud providers  
📈 **Oportunidade NOS:** Único operador a crescer consistentemente  
🌐 **Tendência Vodafone:** Convergência fixo-móvel via parcerias wholesale  
💼 **Mercado B2B:** Consolidação em curso, hyperscalers competem diretamente

---

## 📅 Cronograma Estimado

| Sprint | Duração | Início | Fim | Entregáveis |
|--------|---------|--------|-----|-------------|
| Sprint 1 | 3-5 dias | Semana 1 | Semana 1 | Estrutura de dados + HTML base |
| Sprint 2 | 5-7 dias | Semana 2 | Semana 2-3 | Gráficos de receitas + slicers |
| Sprint 3 | 4-6 dias | Semana 3 | Semana 3-4 | Análise de rentabilidade |
| Sprint 4 | 5-7 dias | Semana 4 | Semana 5 | Mix B2C/B2B + quotas |
| Sprint 5 | 3-5 dias | Semana 5 | Semana 5-6 | Insights + finalização |

**Total:** 20-30 dias (4-6 semanas)

---

## ✅ Checklist de Implementação

### Sprint 1: Preparação
- [ ] Extrair dados do Excel para JSON
- [ ] Criar estrutura HTML do separador
- [ ] Adicionar navegação de tabs
- [ ] Definir esquema de cores

### Sprint 2: Receitas
- [ ] Gráfico de evolução de receitas
- [ ] Gráfico B2C vs B2B
- [ ] Slicers temporais
- [ ] Filtros de operador

### Sprint 3: Rentabilidade
- [ ] Gráfico de margens EBITDA
- [ ] Gráfico EBITDA absoluto
- [ ] Cards de KPIs
- [ ] Tabela comparativa

### Sprint 4: Mix e Quotas
- [ ] Gráficos de mix B2C/B2B
- [ ] Cálculo de quotas
- [ ] Gráfico de quotas estimadas
- [ ] Validação cruzada

### Sprint 5: Finalização
- [ ] Secção de insights
- [ ] Documentação de fontes
- [ ] Testes de responsividade
- [ ] Validação final

---

## 🎯 Critérios de Sucesso

1. ✅ **Funcionalidade:** Todos os gráficos e slicers operacionais
2. ✅ **Precisão:** Dados validados com fontes públicas
3. ✅ **Transparência:** Fontes e metodologia claramente documentadas
4. ✅ **UX:** Interface intuitiva e responsiva
5. ✅ **Performance:** Carregamento rápido (<2s)
6. ✅ **Insights:** Análise estratégica relevante e acionável

---

## 📚 Recursos e Referências

### Fontes de Dados
- **MEO:** altice.net / Altice Group Investor Relations
- **NOS:** investor.nos.pt / CMVM
- **Vodafone:** investor.vodafone.com / FY Reports

### Tecnologias
- **Chart.js 4.4.0:** Gráficos interativos
- **SheetJS 0.18.5:** Exportação Excel
- **JavaScript ES6:** Cálculos e manipulação de dados

### Documentação Existente
- [`README.md`](../README.md)
- [`RETOMAR_PROJETO_2026.md`](RETOMAR_PROJETO_2026.md)
- [`ANACOM_Dashboard_Plano_Melhorias.md`](../ANACOM_Dashboard_Plano_Melhorias.md)

---

**Desenvolvido com ❤️ para análise financeira do mercado português de telecomunicações**

*Última atualização: 23 de Março de 2026*
