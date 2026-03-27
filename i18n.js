/**
 * ANACOM Dashboard - Sistema de Internacionalização (i18n)
 * Suporta: Português (PT) e Inglês (EN)
 * Versão: 1.0
 * Data: 24 Março 2026
 */

const translations = {
    pt: {
        // Header
        header: {
            title: "Mercado de Telecomunicações — Portugal",
            subtitle: "Fonte: ANACOM | Factos & Números 3T 2025 + Anexo Estatístico 2024"
        },

        // Main Tabs
        tabs: {
            current: "📊 3T 2025",
            compare: "🔍 Comparar",
            historical: "📈 Histórico",
            financial: "💰 Financeiro"
        },

        // KPI Cards (3T 2025)
        kpis: {
            mobileInternet: "Móvel com Internet",
            fixedInternet: "Internet Fixa",
            fixedPhone: "Tel. Fixo",
            revenue: "Receitas",
            total: "Total",
            thousand: "mil"
        },

        // Badges
        badges: {
            confirmed: "✓ Confirmado",
            estimated: "≈ Estimado",
            leader: "Líder",
            new: "NOVO",
            entry: "✦ entrada"
        },

        // Buttons
        buttons: {
            export: "⬇ Excel",
            exportJson: "📥 JSON Histórico",
            all: "Todos",
            apply: "Aplicar Filtros"
        },

        // Operators
        operators: {
            all: "Todos os Operadores",
            meo: "MEO",
            nos: "NOS",
            vodafone: "Vodafone",
            digi: "DIGI",
            nowo: "NOWO",
            digiNowo: "DIGI / NOWO",
            others: "Outros"
        },

        // Services
        services: {
            mobileVoice: "Voz Móvel",
            mobileBroadband: "BL Móvel",
            fixedVoice: "Voz Fixa",
            fixedBroadband: "BL Fixa",
            tvSubscription: "TV Subscrição",
            multiplePlay: "Multiple Play",
            triplePlay: "Triple Play (3P)",
            quadPlay: "4/5 Play",
            bundles: "Pacotes"
        },

        // Financial Tab
        financial: {
            title: "Dados Financeiros dos Operadores",
            subtitle: "Análise financeira trimestral dos principais operadores de telecomunicações em Portugal",
            source: "Fonte: Relatórios públicos dos operadores e estimativas analíticas",
            
            // Sub-tabs
            subTabs: {
                revenue: "📊 Receitas",
                profitability: "💹 Rentabilidade",
                mix: "🎯 Mix B2C/B2B",
                insights: "💡 Insights",
                table: "📋 Tabela Dinâmica"
            },

            // Revenue types
            revenueTypes: {
                telcoOnly: "📡 Apenas Telco",
                total: "💼 Total (Telco + Outros)",
                telcoDesc: "Receitas de serviços de telecomunicações (excluindo equipamentos e outros)",
                totalDesc: "Receitas totais incluindo equipamentos, serviços digitais e outros"
            },

            // Metrics
            metrics: {
                totalRevenue: "Receita Total",
                telcoRevenue: "Receita Telco",
                b2c: "B2C",
                b2b: "B2B",
                b2cFull: "B2C (Consumidor)",
                b2bFull: "B2B (Empresas)",
                ebitda: "EBITDA",
                ebitdaMargin: "Margem EBITDA",
                capex: "CAPEX",
                mix: "Mix",
                quota: "quota mercado",
                yoy: "YoY"
            },

            // Periods
            periods: {
                quarter: "Por Quarter",
                year: "Por Ano (CY)",
                aggregation: "Agregação",
                startPeriod: "Período Inicial",
                endPeriod: "Período Final"
            },

            // Insights
            insights: {
                executiveSummary: "Resumo Executivo: Mercado Telco Português (CYQ3'25)",
                totalRevenues: "Receitas Totais",
                avgMargin: "Margem Média",
                ebitdaWeighted: "EBITDA ponderado",
                marketTotal: "Mercado total",
                strategicAnalysis: "Análise Estratégica por Operador",
                marketLeader: "Líder de mercado em receitas totais",
                profitabilityLeader: "Líder absoluto em rentabilidade",
                strongExpansion: "Forte expansão de rentabilidade",
                revenues: "Receitas",
                profitability: "Rentabilidade",
                strengths: "Forças",
                challenges: "Desafios",
                recommendation: "Recomendação",
                marketTrends: "Tendências de Mercado 2025-2026",
                conclusion: "Conclusão: Posicionamento Competitivo",
                outlook: "Outlook 2026"
            },

            // Data sources
            sources: {
                title: "Nota sobre Fontes de Dados",
                meo: "MEO (Altice Portugal): Dados confirmados de relatórios trimestrais públicos",
                nos: "NOS: Dados confirmados de relatórios à CMVM",
                vodafone: "Vodafone: Dados confirmados de Vodafone Group Q3 FY26 Additional Information",
                note: "Os dados financeiros não são da ANACOM, mas sim de fontes públicas dos operadores e estimativas"
            }
        },

        // Historical Tab
        historical: {
            title: "Histórico de Telecomunicações (2006–2024)",
            
            // Sub-tabs
            subTabs: {
                penetration: "📶 Penetração",
                subscribers: "👥 Subscritores",
                technology: "⚙️ Tecnologia",
                revenue: "💰 Receitas",
                market: "🏆 Mercado"
            },

            // Descriptions
            penetrationDesc: "Penetração de Serviços por 100 habitantes (2006–2024)",
            subscribersDesc: "Evolução de Subscritores por Serviço (2006–2024)",
            technologyDesc: "Evolução das Tecnologias de Acesso (2006–2024)",
            revenueDesc: "Receitas Retalhistas (2015–2024)",

            // Chart titles
            penetrationByService: "Penetração por Serviço 2006–2024",
            subscribersByService: "Subscritores por Serviço 2006–2024",
            internetByTech: "Internet por Tecnologia",
            tvByTech: "TV por Tecnologia",
            revenueBySegment: "Receitas por Segmento 2015–2024",
            multiplePlayEvolution: "Multiple Play (2006–2024)",
            operatorQuotas: "Quotas por Operador",

            // Insights
            insights: "Insights",
            
            // Number of operators
            numOperators: "Nº Operadores 2024",
            mobile: "Móvel",
            fixed: "Fixo",
            isp: "ISP",
            tv: "TV"
        },

        // Compare Tab
        compare: {
            period1: "Período 1",
            period2: "Período 2",
            operator: "Operador",
            comparison: "Comparação"
        },

        // Market Quotas
        quotas: {
            title: "Quotas de Mercado — Evolução Trimestral",
            subtitle: "Receitas retalhistas totais · % mercado",
            bySegment: "Quotas de Mercado por Segmento — 3T 2025",
            allSegments: "Todos os Segmentos",
            deltaYoY: "Δ YoY",
            pp: "pp",
            pointsPercentage: "pontos percentuais"
        },

        // Scorecards
        scorecards: {
            title: "Scorecards por Operador — 3T 2025",
            estimatedRevenue: "Receita Estimada 3T25",
            note: "Receitas estimadas com base nas quotas de mercado × Receitas totais 3T25 (€1.004,5M). Quotas por segmento reflectem dados oficiais ANACOM."
        },

        // Additional KPIs
        additionalKpis: {
            title: "KPIs Adicionais",
            penetrationSTF: "Penetração STF",
            penetrationSTM: "Penetração STM",
            penetrationBLM: "Penetração BLM",
            penetrationTVS: "Penetração TVS",
            trafficBLM: "Tráfego BLM",
            smsSent: "SMS Enviados",
            perHundredInhabitants: "/100 hab",
            stable: "Estável"
        },

        // Charts
        charts: {
            penetration: "Penetração",
            accumulatedRevenue: "Receitas Acumuladas por Tipo",
            period: "Jan–Set 2025 (€M) · vs. período homólogo 2024",
            quotasBySegment: "Quotas por Segmento — 3T 2025",
            evolution: "Evolução"
        },

        // Common
        common: {
            source: "Fonte",
            period: "Período",
            value: "Valor",
            change: "Variação",
            total: "Total",
            percentage: "Percentagem",
            million: "M",
            billion: "B",
            thousand: "mil"
        }
    },

    en: {
        // Header
        header: {
            title: "Telecommunications Market — Portugal",
            subtitle: "Source: ANACOM | Facts & Figures Q3 2025 + Statistical Annex 2024"
        },

        // Main Tabs
        tabs: {
            current: "📊 Q3 2025",
            compare: "🔍 Compare",
            historical: "📈 Historical",
            financial: "💰 Financial"
        },

        // KPI Cards (Q3 2025)
        kpis: {
            mobileInternet: "Mobile Internet",
            fixedInternet: "Fixed Internet",
            fixedPhone: "Fixed Phone",
            revenue: "Revenue",
            total: "Total",
            thousand: "thousand"
        },

        // Badges
        badges: {
            confirmed: "✓ Confirmed",
            estimated: "≈ Estimated",
            leader: "Leader",
            new: "NEW",
            entry: "✦ entry"
        },

        // Buttons
        buttons: {
            export: "⬇ Excel",
            exportJson: "📥 JSON Historical",
            all: "All",
            apply: "Apply Filters"
        },

        // Operators
        operators: {
            all: "All Operators",
            meo: "MEO",
            nos: "NOS",
            vodafone: "Vodafone",
            digi: "DIGI",
            nowo: "NOWO",
            digiNowo: "DIGI / NOWO",
            others: "Others"
        },

        // Services
        services: {
            mobileVoice: "Mobile Voice",
            mobileBroadband: "Mobile BB",
            fixedVoice: "Fixed Voice",
            fixedBroadband: "Fixed BB",
            tvSubscription: "TV Subscription",
            multiplePlay: "Multiple Play",
            triplePlay: "Triple Play (3P)",
            quadPlay: "4/5 Play",
            bundles: "Bundles"
        },

        // Financial Tab
        financial: {
            title: "Operator Financial Data",
            subtitle: "Quarterly financial analysis of main telecommunications operators in Portugal",
            source: "Source: Public operator reports and analytical estimates",
            
            // Sub-tabs
            subTabs: {
                revenue: "📊 Revenue",
                profitability: "💹 Profitability",
                mix: "🎯 B2C/B2B Mix",
                insights: "💡 Insights",
                table: "📋 Dynamic Table"
            },

            // Revenue types
            revenueTypes: {
                telcoOnly: "📡 Telco Only",
                total: "💼 Total (Telco + Others)",
                telcoDesc: "Telecommunications service revenue (excluding equipment and others)",
                totalDesc: "Total revenue including equipment, digital services and others"
            },

            // Metrics
            metrics: {
                totalRevenue: "Total Revenue",
                telcoRevenue: "Telco Revenue",
                b2c: "B2C",
                b2b: "B2B",
                b2cFull: "B2C (Consumer)",
                b2bFull: "B2B (Business)",
                ebitda: "EBITDA",
                ebitdaMargin: "EBITDA Margin",
                capex: "CAPEX",
                mix: "Mix",
                quota: "market share",
                yoy: "YoY"
            },

            // Periods
            periods: {
                quarter: "By Quarter",
                year: "By Year (CY)",
                aggregation: "Aggregation",
                startPeriod: "Start Period",
                endPeriod: "End Period"
            },

            // Insights
            insights: {
                executiveSummary: "Executive Summary: Portuguese Telco Market (CYQ3'25)",
                totalRevenues: "Total Revenues",
                avgMargin: "Average Margin",
                ebitdaWeighted: "Weighted EBITDA",
                marketTotal: "Total market",
                strategicAnalysis: "Strategic Analysis by Operator",
                marketLeader: "Market leader in total revenues",
                profitabilityLeader: "Absolute leader in profitability",
                strongExpansion: "Strong profitability expansion",
                revenues: "Revenues",
                profitability: "Profitability",
                strengths: "Strengths",
                challenges: "Challenges",
                recommendation: "Recommendation",
                marketTrends: "Market Trends 2025-2026",
                conclusion: "Conclusion: Competitive Positioning",
                outlook: "Outlook 2026"
            },

            // Data sources
            sources: {
                title: "Note on Data Sources",
                meo: "MEO (Altice Portugal): Confirmed data from public quarterly reports",
                nos: "NOS: Confirmed data from CMVM reports",
                vodafone: "Vodafone: Confirmed data from Vodafone Group Q3 FY26 Additional Information",
                note: "Financial data is not from ANACOM, but from public operator sources and estimates"
            }
        },

        // Historical Tab
        historical: {
            title: "Telecommunications History (2006–2024)",
            
            // Sub-tabs
            subTabs: {
                penetration: "📶 Penetration",
                subscribers: "👥 Subscribers",
                technology: "⚙️ Technology",
                revenue: "💰 Revenue",
                market: "🏆 Market"
            },

            // Descriptions
            penetrationDesc: "Service Penetration per 100 inhabitants (2006–2024)",
            subscribersDesc: "Subscriber Evolution by Service (2006–2024)",
            technologyDesc: "Access Technology Evolution (2006–2024)",
            revenueDesc: "Retail Revenues (2015–2024)",

            // Chart titles
            penetrationByService: "Penetration by Service 2006–2024",
            subscribersByService: "Subscribers by Service 2006–2024",
            internetByTech: "Internet by Technology",
            tvByTech: "TV by Technology",
            revenueBySegment: "Revenue by Segment 2015–2024",
            multiplePlayEvolution: "Multiple Play (2006–2024)",
            operatorQuotas: "Operator Quotas",

            // Insights
            insights: "Insights",
            
            // Number of operators
            numOperators: "Number of Operators 2024",
            mobile: "Mobile",
            fixed: "Fixed",
            isp: "ISP",
            tv: "TV"
        },

        // Compare Tab
        compare: {
            period1: "Period 1",
            period2: "Period 2",
            operator: "Operator",
            comparison: "Comparison"
        },

        // Market Quotas
        quotas: {
            title: "Market Share — Quarterly Evolution",
            subtitle: "Total retail revenues · % market",
            bySegment: "Market Share by Segment — Q3 2025",
            allSegments: "All Segments",
            deltaYoY: "Δ YoY",
            pp: "pp",
            pointsPercentage: "percentage points"
        },

        // Scorecards
        scorecards: {
            title: "Operator Scorecards — Q3 2025",
            estimatedRevenue: "Estimated Revenue Q3'25",
            note: "Estimated revenues based on market share × Total revenues Q3'25 (€1,004.5M). Segment quotas reflect official ANACOM data."
        },

        // Additional KPIs
        additionalKpis: {
            title: "Additional KPIs",
            penetrationSTF: "Fixed Phone Penetration",
            penetrationSTM: "Mobile Penetration",
            penetrationBLM: "Mobile BB Penetration",
            penetrationTVS: "TV Subscription Penetration",
            trafficBLM: "Mobile BB Traffic",
            smsSent: "SMS Sent",
            perHundredInhabitants: "/100 inhab",
            stable: "Stable"
        },

        // Charts
        charts: {
            penetration: "Penetration",
            accumulatedRevenue: "Accumulated Revenue by Type",
            period: "Jan–Sep 2025 (€M) · vs. same period 2024",
            quotasBySegment: "Quotas by Segment — Q3 2025",
            evolution: "Evolution"
        },

        // Common
        common: {
            source: "Source",
            period: "Period",
            value: "Value",
            change: "Change",
            total: "Total",
            percentage: "Percentage",
            million: "M",
            billion: "B",
            thousand: "thousand"
        }
    }
};

// Current language (default: Portuguese)
let currentLang = localStorage.getItem('anacom-lang') || 'pt';

/**
 * Get translation for a given key path
 * @param {string} keyPath - Dot notation path (e.g., 'header.title')
 * @returns {string} Translated string
 */
function t(keyPath) {
    const keys = keyPath.split('.');
    let value = translations[currentLang];
    
    for (const key of keys) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            console.warn(`Translation key not found: ${keyPath}`);
            return keyPath;
        }
    }
    
    return value || keyPath;
}

/**
 * Switch language
 * @param {string} lang - Language code ('pt' or 'en')
 */
function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language not supported: ${lang}`);
        return;
    }
    
    currentLang = lang;
    localStorage.setItem('anacom-lang', lang);
    
    // Update all translatable elements
    updatePageTranslations();
    
    // Dispatch custom event for charts/dynamic content
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
    return currentLang;
}

/**
 * Update all page translations
 */
function updatePageTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        // Update text content or placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            // Preserve emojis and icons
            const emoji = element.textContent.match(/^[\u{1F300}-\u{1F9FF}][\s]*/u);
            if (emoji) {
                element.textContent = emoji[0] + translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document title
    document.title = `📡 ${t('header.title')}`;
    
    // Translate dynamic content without data-i18n
    translateDynamicContent();
    
    // Update language toggle button
    updateLanguageToggle();
}

/**
 * Translate dynamic content that doesn't have data-i18n attributes
 */
function translateDynamicContent() {
    const lang = currentLang;
    
    // Service names mapping
    const services = {
        'Voz Móvel': lang === 'pt' ? 'Voz Móvel' : 'Mobile Voice',
        'BL Móvel': lang === 'pt' ? 'BL Móvel' : 'Mobile BB',
        'Voz Fixa': lang === 'pt' ? 'Voz Fixa' : 'Fixed Voice',
        'BL Fixa': lang === 'pt' ? 'BL Fixa' : 'Fixed BB',
        'TV Subscrição': lang === 'pt' ? 'TV Subscrição' : 'TV Subscription',
        'Multiple Play': 'Multiple Play',
        'Triple Play (3P)': 'Triple Play (3P)',
        '4/5 Play': '4/5 Play'
    };
    
    // Update chart headers with service names
    document.querySelectorAll('h4').forEach(h4 => {
        Object.keys(services).forEach(ptName => {
            if (h4.textContent.includes(ptName)) {
                h4.textContent = h4.textContent.replace(ptName, services[ptName]);
            }
        });
    });
    
    // Update "Receita Estimada" in scorecards
    document.querySelectorAll('div[style*="text-transform: uppercase"]').forEach(el => {
        if (el.textContent.includes('Receita Estimada')) {
            el.textContent = lang === 'pt' ? 'Receita Estimada 3T25' : 'Estimated Revenue Q3\'25';
        }
    });
    
    // Update "quota mercado" / "market share"
    document.querySelectorAll('div').forEach(el => {
        if (el.textContent.match(/[\d.]+%\s+quota mercado/)) {
            const match = el.textContent.match(/([\d.]+%)\s+quota mercado/);
            if (match) {
                el.textContent = lang === 'pt' ? `${match[1]} quota mercado` : `${match[1]} market share`;
            }
        }
    });
    
    // Update operator badges
    document.querySelectorAll('div[style*="border-radius: 6px"]').forEach(badge => {
        if (badge.textContent === 'Líder') badge.textContent = lang === 'pt' ? 'Líder' : 'Leader';
        if (badge.textContent === 'NOVO') badge.textContent = lang === 'pt' ? 'NOVO' : 'NEW';
        if (badge.textContent === '#2') badge.textContent = '#2';
        if (badge.textContent === '#3') badge.textContent = '#3';
    });
    
    // Update "Fonte: ANACOM"
    document.querySelectorAll('p').forEach(p => {
        if (p.textContent.includes('Fonte: ANACOM')) {
            p.textContent = p.textContent.replace('Fonte: ANACOM', lang === 'pt' ? 'Fonte: ANACOM' : 'Source: ANACOM');
        }
        if (p.textContent.includes('pp = pontos percentuais')) {
            p.textContent = p.textContent.replace('pp = pontos percentuais', lang === 'pt' ? 'pp = pontos percentuais' : 'pp = percentage points');
        }
    });
}

/**
 * Update language toggle button state
 */
function updateLanguageToggle() {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.textContent = currentLang === 'pt' ? '🇬🇧 EN' : '🇵🇹 PT';
        toggle.setAttribute('aria-label', 
            currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'
        );
    }
}

/**
 * Format number according to current locale
 * @param {number} num - Number to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted number
 */
function formatNumber(num, decimals = 2) {
    const locale = currentLang === 'pt' ? 'pt-PT' : 'en-US';
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(num);
}

/**
 * Format currency according to current locale
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency
 */
function formatCurrency(amount) {
    const locale = currentLang === 'pt' ? 'pt-PT' : 'en-US';
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}

/**
 * Initialize i18n system
 */
function initI18n() {
    // Set initial language from localStorage or browser
    const savedLang = localStorage.getItem('anacom-lang');
    const browserLang = navigator.language.split('-')[0];
    
    if (savedLang) {
        currentLang = savedLang;
    } else if (browserLang === 'en') {
        currentLang = 'en';
    }
    
    // Update page on load
    updatePageTranslations();
    
    console.log(`✅ i18n initialized: ${currentLang.toUpperCase()}`);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Export functions for global use
window.i18n = {
    t,
    switchLanguage,
    getCurrentLanguage,
    formatNumber,
    formatCurrency,
    updatePageTranslations
};
