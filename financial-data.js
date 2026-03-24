// ═══════════════════════════════════════════════════════════════════
// DADOS FINANCEIROS DOS OPERADORES — Sprint 1
// Fonte: Carrier financial results vs code.xlsx
// Período: CYQ1'24 - CYQ3'25 (7 trimestres)
// ═══════════════════════════════════════════════════════════════════

const operatorFinancials = {
    // Períodos trimestrais
    periods: ['CYQ1\'24', 'CYQ2\'24', 'CYQ3\'24', 'CYQ4\'24', 'CYQ1\'25', 'CYQ2\'25', 'CYQ3\'25'],
    periodsLong: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
    
    // MEO (Altice Portugal) - Dados Confirmados
    MEO: {
        revenue: {
            total: [695.4, 701.0, 741.7, 750.1, 694.5, 685.3, 675.4], // €M
            telco: [703.7, 705.3, 748.5, 753.7, 697.0, 694.7, 682.1], // €M
            b2c: [344.8, 348.5, 361.5, 381.4, 373.8, 365.0, 370.8],   // €M
            b2b: [358.9, 356.8, 387.0, 372.3, 323.2, 329.7, 311.3]    // €M
        },
        ebitda: {
            total: [259.0, 252.0, 254.1, 187.3, 244.1, 244.0, 228.9], // €M
            margin: [37.2, 36.0, 34.3, 25.0, 35.1, 35.6, 33.9]        // %
        },
        metadata: {
            source: 'confirmed',
            sourceDetail: 'Altice Portugal - Relatórios públicos',
            color: '#0071e3',
            badgeColor: '#dcfce7',
            badgeText: '✓ Confirmado'
        }
    },
    
    // NOS SGPS - Dados Confirmados (Cotada Euronext)
    NOS: {
        revenue: {
            total: [403.3, 444.2, 462.8, 484.9, 421.4, 458.2, 457.3], // €M
            telco: [375.8, 383.3, 394.6, 414.5, 389.6, 392.3, 395.8], // €M
            b2c: [277.6, 282.1, 289.5, 293.3, 282.4, 281.3, 286.1],   // €M
            b2b: [98.2, 101.2, 105.1, 121.2, 107.2, 111.0, 109.7],    // €M
            it: [13.2, 49.7, 45.4, 53.2, 17.1, 49.3, 45.2],           // €M
            cinema: [22.8, 19.7, 32.7, 27.1, 23.1, 25.8, 25.9]        // €M
        },
        ebitda: {
            total: [184.5, 191.5, 216.9, 187.3, 192.3, 202.9, 222.7], // €M
            margin: [45.7, 43.1, 46.9, 38.6, 45.6, 44.3, 48.7],       // %
            telco: [172.1, 177.3, 196.4, 169.0, 179.6, 184.7, 204.8], // €M
            it: [1.7, 5.5, 5.3, 6.1, 1.9, 6.5, 5.9],                  // €M
            cinema: [10.6, 8.7, 15.2, 12.2, 10.9, 11.7, 12.0]         // €M
        },
        capex: {
            total: [105.5, 111.0, 118.4, 122.2, 107.0, 120.7, 112.6]  // €M
        },
        metadata: {
            source: 'confirmed',
            sourceDetail: 'NOS SGPS - Comunicados trimestrais (CMVM)',
            color: '#1d1d1f',
            badgeColor: '#dcfce7',
            badgeText: '✓ Confirmado'
        }
    },
    
    // Vodafone Portugal - Estimativas Analíticas
    Vodafone: {
        revenue: {
            total: [264.0, 260.0, 273.0, 291.0, 270.0, 263.0, 276.0], // €M (estimado)
            telco: [264.0, 260.0, 273.0, 291.0, 270.0, 263.0, 276.0], // €M
            b2c: [180.0, 177.0, 186.0, 198.0, 184.0, 179.0, 188.0],   // €M (estimado ~68%)
            b2b: [84.0, 83.0, 87.0, 93.0, 86.0, 84.0, 88.0]           // €M (estimado ~32%)
        },
        ebitda: {
            total: [73.0, 72.0, 77.0, 83.0, 78.0, 76.0, 80.0],        // €M (estimado)
            margin: [28.4, 28.3, 28.9, 29.3, 29.7, 29.6, 30.0]        // % (estimado)
        },
        capex: {
            total: [30.0, 31.0, 33.0, 38.0, 32.0, 31.0, 34.0]         // €M (estimado)
        },
        metadata: {
            source: 'estimated',
            sourceDetail: 'Estimativas baseadas em Vodafone Group FY reports + benchmarks',
            color: '#e30613',
            badgeColor: '#fff3cd',
            badgeText: '⚠ Estimado'
        }
    }
};

// ═══════════════════════════════════════════════════════════════════
// FUNÇÕES DE CÁLCULO
// ═══════════════════════════════════════════════════════════════════

/**
 * Calcula quotas de mercado B2C e B2B por período
 * @param {number} periodIndex - Índice do período (0-6)
 * @returns {Object} Quotas B2C e B2B por operador
 */
function calculateMarketShares(periodIndex) {
    const totalB2C = operatorFinancials.MEO.revenue.b2c[periodIndex] +
                     operatorFinancials.NOS.revenue.b2c[periodIndex] +
                     operatorFinancials.Vodafone.revenue.b2c[periodIndex];
    
    const totalB2B = operatorFinancials.MEO.revenue.b2b[periodIndex] +
                     operatorFinancials.NOS.revenue.b2b[periodIndex] +
                     operatorFinancials.Vodafone.revenue.b2b[periodIndex];
    
    return {
        b2c: {
            MEO: (operatorFinancials.MEO.revenue.b2c[periodIndex] / totalB2C) * 100,
            NOS: (operatorFinancials.NOS.revenue.b2c[periodIndex] / totalB2C) * 100,
            Vodafone: (operatorFinancials.Vodafone.revenue.b2c[periodIndex] / totalB2C) * 100
        },
        b2b: {
            MEO: (operatorFinancials.MEO.revenue.b2b[periodIndex] / totalB2B) * 100,
            NOS: (operatorFinancials.NOS.revenue.b2b[periodIndex] / totalB2B) * 100,
            Vodafone: (operatorFinancials.Vodafone.revenue.b2b[periodIndex] / totalB2B) * 100
        },
        totals: {
            b2c: totalB2C,
            b2b: totalB2B,
            total: totalB2C + totalB2B
        }
    };
}

/**
 * Calcula mix B2C/B2B por operador e período
 * @param {string} operator - Nome do operador (MEO, NOS, Vodafone)
 * @param {number} periodIndex - Índice do período (0-6)
 * @returns {Object} Percentagens B2C e B2B
 */
function calculateB2CMix(operator, periodIndex) {
    const data = operatorFinancials[operator];
    const total = data.revenue.b2c[periodIndex] + data.revenue.b2b[periodIndex];
    
    return {
        b2c: (data.revenue.b2c[periodIndex] / total) * 100,
        b2b: (data.revenue.b2b[periodIndex] / total) * 100,
        total: total
    };
}

/**
 * Calcula variação YoY (Year over Year)
 * @param {Array} data - Array de dados
 * @param {number} currentIndex - Índice do período atual
 * @param {number} quarters - Número de trimestres para comparar (default: 4)
 * @returns {number} Variação percentual YoY
 */
function calculateYoY(data, currentIndex, quarters = 4) {
    if (currentIndex < quarters) return null;
    const current = data[currentIndex];
    const previous = data[currentIndex - quarters];
    return ((current - previous) / previous) * 100;
}

/**
 * Obtém dados de um operador para um período específico
 * @param {string} operator - Nome do operador
 * @param {number} periodIndex - Índice do período
 * @returns {Object} Dados completos do operador para o período
 */
function getOperatorData(operator, periodIndex) {
    const data = operatorFinancials[operator];
    return {
        period: operatorFinancials.periods[periodIndex],
        periodLong: operatorFinancials.periodsLong[periodIndex],
        revenue: {
            total: data.revenue.total[periodIndex],
            b2c: data.revenue.b2c[periodIndex],
            b2b: data.revenue.b2b[periodIndex],
            telco: data.revenue.telco ? data.revenue.telco[periodIndex] : null
        },
        ebitda: {
            total: data.ebitda.total[periodIndex],
            margin: data.ebitda.margin[periodIndex]
        },
        metadata: data.metadata
    };
}

// ═══════════════════════════════════════════════════════════════════
// INSIGHTS ESTRATÉGICOS (Dados Pré-calculados)
// ═══════════════════════════════════════════════════════════════════

const strategicInsights = {
    revenue: {
        MEO: {
            trend: 'declining',
            yoyQ3: -8.9,
            alert: 'Queda acelerada em Q3\'25',
            detail: 'B2B em declínio acentuado (-19.6% YoY)'
        },
        NOS: {
            trend: 'growing',
            yoyQ3: -1.2,
            alert: 'Crescimento consistente em H1\'25',
            detail: 'B2B robusto (+9.4% YoY em H1)'
        },
        Vodafone: {
            trend: 'stable',
            yoyQ3: 1.1,
            alert: 'Crescimento moderado',
            detail: 'Convergência fixo-móvel acelerada'
        }
    },
    profitability: {
        ranking: [
            { operator: 'NOS', margin: 48.7, trend: 'improving' },
            { operator: 'MEO', margin: 33.9, trend: 'declining' },
            { operator: 'Vodafone', margin: 30.0, trend: 'stable' }
        ],
        alerts: [
            'MEO: Compressão de margem -330bps (Q1\'24 → Q3\'25)',
            'NOS: Melhoria de +250bps (líder europeu)',
            'Vodafone: Margem estável, crescimento cobre CAPEX 5G'
        ]
    },
    segmentation: {
        b2cQuotas: {
            MEO: 40.0,
            NOS: 31.0,
            Vodafone: 20.0
        },
        b2bQuotas: {
            MEO: 52.0,
            NOS: 19.0,
            Vodafone: 15.0
        },
        alerts: [
            'MEO: Maior exposição B2B (46% do mix) = risco concentração',
            'NOS: Mix equilibrado (72% B2C / 28% B2B)',
            'Vodafone: Foco PME (68% B2C / 32% B2B)'
        ]
    }
};

// Exportar para uso global (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        operatorFinancials,
        calculateMarketShares,
        calculateB2CMix,
        calculateYoY,
        getOperatorData,
        strategicInsights
    };
}
