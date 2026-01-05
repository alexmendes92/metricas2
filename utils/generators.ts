import { AppData, GeneratedPrompt } from '../types';

// Function 1: Product Strategy
const generateStrategy = (data: AppData) => `Atue como um Especialista em Gestão de Produtos para a área de ${data.industryArea}.
Produto: '${data.appName}'
Funcionalidades: ${data.features}
Público: ${data.targetAudience}

Sua tarefa é mapear a psicologia do consumidor. Crie uma tabela com:
1. 20 Frustrações latentes (dores operacionais/emocionais).
2. 20 Desejos ardentes (o que querem alcançar).
3. 20 Medos profundos (o que tira o sono deles).

Para cada item, explique como o '${data.appName}' resolve isso.`;

// Function 2: Copywriting Matrix
const generateCopyMatrix = (data: AppData) => `Você é um Copywriter Senior B2B. Crie uma Matriz de Dores e Soluções para '${data.appName}' (${data.industryArea}).
Tom de voz: ${data.tone}.

Gere uma tabela com 60 linhas (20 Frustrações, 20 Desejos, 20 Medos).
Colunas:
1. Tipo
2. Cenário Real (Storytelling curto da dor/desejo)
3. Funcionalidade do App que resolve
4. Headline de Anúncio curta baseada nisso.`;

// Function 3: Social Content
const generateSocial = (data: AppData) => `Atue como Estrategista de Social Media. Crie um Calendário Editorial de 7 dias para Instagram/LinkedIn para atrair ${data.targetAudience}.
Produto: ${data.appName}.

Para cada dia:
1. Headline (Gancho)
2. Formato (Reels/Carrossel/Texto)
3. Dor/Desejo abordado
4. CTA específico para conhecer o app.`;

// Function 4: Email Sequence (New)
const generateEmailSequence = (data: AppData) => `Crie uma Sequência de E-mail Marketing de 5 etapas para vender o software '${data.appName}' para ${data.targetAudience}.
Estilo: ${data.tone}.

E-mail 1: Identificação da Dor (Cold Mail)
E-mail 2: Agitação + Introdução da Solução
E-mail 3: Prova Social e Benefícios (Foco em: ${data.features})
E-mail 4: Quebra de Objeções
E-mail 5: Oferta Irresistível e Escassez (Fechamento)

Escreva o Assunto e o Corpo do e-mail para cada um.`;

// Function 5: Landing Page Structure (New)
const generateLandingPage = (data: AppData) => `Atue como UX Designer e Copywriter. Estruture a Landing Page Perfeita para o '${data.appName}'.
Público: ${data.targetAudience}.

Defina o texto e a intenção para cada seção:
1. Hero Section (H1, Subtítulo, CTA Principal)
2. Seção de Problemas (Como abordar as dores de ${data.industryArea})
3. Seção da Solução (Como apresentar: ${data.features})
4. Seção de Benefícios (Transformação na vida do usuário)
5. Prova Social (O que os depoimentos deveriam dizer)
6. FAQ (5 perguntas frequentes com respostas persuasivas).`;

// Function 6: Persona Builder (New)
const generatePersona = (data: AppData) => `Crie o Avatar (Persona) ideal do comprador do '${data.appName}'.
Nicho: ${data.industryArea}.

Descreva detalhadamente:
1. Nome e Cargo
2. Dados Demográficos
3. Rotina Diária (O que ele faz das 8h às 18h)
4. Principais ferramentas que usa hoje (Concorrentes ou métodos manuais)
5. O que ele valoriza mais: Tempo, Dinheiro ou Status?
6. Vocabulário específico (gírias ou termos técnicos da área de ${data.industryArea}).`;

// Function 7: Objection Handling (Sales Script) (New)
const generateObjections = (data: AppData) => `Você é um Treinador de Vendas. Crie um Script de Vendas para lidar com objeções ao vender o '${data.appName}'.

Liste as 10 objeções mais comuns que um ${data.targetAudience} faria (ex: "Está caro", "Já uso planilha", "Não tenho tempo de aprender").
Para cada uma, escreva uma resposta matadora usando a técnica de "Empatia + Reenquadramento + Benefício (${data.features})".`;

// Function 8: Ads Framework (New)
const generateAds = (data: AppData) => `Crie 5 Roteiros de Anúncios (Ads) para Facebook e Instagram focados em conversão.
Produto: ${data.appName}. Tom: ${data.tone}.

Use frameworks variados:
Ad 1: AIDA (Atenção, Interesse, Desejo, Ação)
Ad 2: PAS (Problema, Agitação, Solução)
Ad 3: Depoimento/História de Sucesso
Ad 4: Comparativo (Antes vs Depois do app)
Ad 5: "Isso te irrita?" (Foco na dor imediata).`;

// Function 9: Competitor Analysis Strategy (New)
const generateCompetitorAnalysis = (data: AppData) => `Atue como Consultor de Negócios. Ajude-me a diferenciar o '${data.appName}' no mercado de ${data.industryArea}.

Com base nas funcionalidades [${data.features}], crie uma tabela comparativa teórica contra:
1. O "Método Velho" (Planilhas, Caderno, Manual)
2. O "Concorrente Caro" (Líder de mercado)
3. O "Concorrente Barato" (Apps genéricos)

Destaque qual é a "Unique Value Proposition" (UVP) do nosso app para o ${data.targetAudience} em cada cenário.`;

// Function 10: SEO & Blog Strategy (New)
const generateSEO = (data: AppData) => `Atue como Especialista em SEO. Crie uma estratégia de conteúdo orgânico para o blog do '${data.appName}'.

Liste 15 Palavras-chave de cauda longa (Long Tail Keywords) que um ${data.targetAudience} pesquisaria no Google quando está com problemas.
Para cada palavra-chave, sugira um Título de Artigo Irresistível (Clickbait ético) e um esboço de 3 tópicos que o artigo deve cobrir para vender o software indiretamente.`;

export const generatePrompts = (data: AppData): GeneratedPrompt[] => {
  return [
    {
      id: 'strategy',
      title: '1. Estratégia Profunda de Produto',
      description: 'Mapeamento psicológico completo de dores, desejos e medos.',
      content: generateStrategy(data),
      tags: ['Estratégia', 'Psicologia', 'Product Market Fit']
    },
    {
      id: 'copywriting',
      title: '2. Matriz de Copywriting & Vendas',
      description: 'Tabela massiva para criar qualquer material de venda.',
      content: generateCopyMatrix(data),
      tags: ['Vendas', 'Copywriting', 'Anúncios']
    },
    {
      id: 'content',
      title: '3. Calendário Social (7 Dias)',
      description: 'Planejamento semanal para engajar nas redes sociais.',
      content: generateSocial(data),
      tags: ['Social Media', 'Engajamento', 'Instagram']
    },
    {
      id: 'email',
      title: '4. Sequência de E-mail de Vendas',
      description: 'Funil de 5 e-mails para converter leads em clientes.',
      content: generateEmailSequence(data),
      tags: ['Email Marketing', 'Funil', 'Conversão']
    },
    {
      id: 'landing',
      title: '5. Estrutura de Landing Page',
      description: 'O esqueleto perfeito para sua página de vendas.',
      content: generateLandingPage(data),
      tags: ['UX', 'Web Design', 'Conversão']
    },
    {
      id: 'persona',
      title: '6. Gerador de Persona (Avatar)',
      description: 'Perfil detalhado de quem é seu cliente ideal.',
      content: generatePersona(data),
      tags: ['Marketing', 'Branding', 'Público-Alvo']
    },
    {
      id: 'objections',
      title: '7. Script Quebra de Objeções',
      description: 'Como responder quando o cliente diz "não".',
      content: generateObjections(data),
      tags: ['Vendas', 'Negociação', 'Treinamento']
    },
    {
      id: 'ads',
      title: '8. Roteiros de Anúncios (Ads)',
      description: 'Scripts prontos para vídeos ou textos patrocinados.',
      content: generateAds(data),
      tags: ['Tráfego Pago', 'Facebook Ads', 'Criativos']
    },
    {
      id: 'competitor',
      title: '9. Diferenciação de Mercado',
      description: 'Análise estratégica para vencer a concorrência.',
      content: generateCompetitorAnalysis(data),
      tags: ['Estratégia', 'Benchmarking', 'Posicionamento']
    },
    {
      id: 'seo',
      title: '10. Estratégia de SEO & Blog',
      description: 'Tópicos para ser encontrado no Google organicamente.',
      content: generateSEO(data),
      tags: ['SEO', 'Google', 'Tráfego Orgânico']
    }
  ];
};