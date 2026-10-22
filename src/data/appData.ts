import { ScreenshotInfo, FaqItem, AppFeature } from '../types';

export const GOOGLE_DRIVE_DOWNLOAD_URL = 'https://drive.google.com/drive/folders/1JIlg5bX93xQbCnjfclP2Z9o6GO4gyU4d';

export const APP_SCREENSHOTS: ScreenshotInfo[] = [
  {
    id: 'dashboard',
    title: 'Painel Inicial e Criação de Listas',
    subtitle: 'Gestão de Listas e Estatísticas Diárias',
    description: 'Interface escura e intuitiva com contadores de listas ativas, contatos cadastrados e campanhas executadas no dia. Permite criar novas listas de transmissão em um toque.',
    path: '/assets/aistudio/Screenshot_2026-10-21-09-05-29-536_br.com.broadcastauto_d5beaf21.jpg',
    tag: 'Tela Principal'
  },
  {
    id: 'detalhes-envio',
    title: 'Monitoramento em Tempo Real',
    subtitle: 'Métricas de Entrega e Acompanhamento',
    description: 'Acompanhe cada disparo com contadores em tempo real: mensagens enviadas ao app, falhas detectadas, leituras e progresso por contato com botões de Retomar e Cancelar.',
    path: '/assets/aistudio/Screenshot_2026-10-21-19-29-03-192_br.com.broadcastauto_f788e662.jpg',
    tag: 'Detalhes do Envio'
  },
  {
    id: 'campanhas-recentes',
    title: 'Histórico Completo de Campanhas',
    subtitle: 'Auditoria e Confirmação de Disparos',
    description: 'Visualize todas as campanhas disparadas no dia, com registros de status (Concluída, Cancelada, Conferência de Envios), timestamps precisos e detalhamento de contatos.',
    path: '/assets/aistudio/Screenshot_2026-10-21-17-53-03-258_br.com.broadcastauto_effab500.jpg',
    tag: 'Histórico e Status'
  }
];

export const APP_FEATURES: AppFeature[] = [
  {
    number: '01',
    title: 'Automação de Mensagens em Massa',
    description: 'Chega de gastar horas copiando e colando mensagens uma a uma. Crie suas listas com centenas de contatos e execute campanhas automáticas em poucos minutos com total comodidade.',
    highlight: 'Economize até 90% do seu tempo diário'
  },
  {
    number: '02',
    title: 'Métricas e Status por Contato',
    description: 'Visualize com clareza quais contatos receberam a mensagem, contatos com falha e confirmações em tempo real. O app exibe o progresso de cada disparo com total transparência.',
    highlight: 'Controle cirúrgico de cada envio'
  },
  {
    number: '03',
    title: 'Pausa, Retomada e Cancelamento',
    description: 'Teve um imprevisto ou precisa responder a um cliente importante no meio da transmissão? Pause o envio a qualquer instante e retome exatamente de onde parou com 1 clique.',
    highlight: 'Total liberdade durante as transmissões'
  },
  {
    number: '04',
    title: 'Zero Mensalidade e Sem APIs Caras',
    description: 'Diferente de plataformas em nuvem que cobram milhares de reais por mês ou taxas por mensagem enviada, o WhatsTransmissão roda direto no seu aparelho Android sem mensalidades.',
    highlight: 'Economia financeira imediata'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Geral',
    question: 'O que é o WhatsTransmissão da App Datena?',
    answer: 'O WhatsTransmissão é o primeiro aplicativo proprietário desenvolvido pela App Datena. Ele é uma ferramenta para Android que automatiza o envio de mensagens em listas de transmissão para negócios, simplificando o atendimento ao cliente, comunicados e ofertas sem exigir digitação manual contato por contato.'
  },
  {
    category: 'Download e Instalação',
    question: 'Como faço para baixar e instalar o WhatsTransmissão?',
    answer: 'Basta clicar no botão "Baixar WhatsTransmissão" nesta página para acessar nossa pasta segura oficial no Google Drive. Lá você baixa o arquivo APK e executa no seu aparelho Android. Se o Android solicitar permissão para instalar aplicativos de fontes desconhecidas, basta autorizar o navegador ou gerenciador de arquivos.'
  },
  {
    category: 'Compatibilidade',
    question: 'Quais aparelhos são compatíveis?',
    answer: 'O WhatsTransmissão é compatível com smartphones Android rodando Android 8.0 (Oreo) ou versões superiores. Não requer root nem configurações complicadas no celular.'
  },
  {
    category: 'Custos',
    question: 'Existe alguma taxa mensal ou cobrança por mensagem?',
    answer: 'Não! O download disponibilizado na pasta oficial do Google Drive permite você baixar e utilizar a solução diretamente no seu dispositivo sem mensalidades surpresas ou cobrança por mensagem enviada.'
  },
  {
    category: 'Segurança',
    question: 'É seguro baixar pelo Google Drive?',
    answer: 'Sim, 100% seguro. O arquivo APK está armazenado diretamente no Google Drive oficial verificado da App Datena, protegido contra malwares e disponível para download rápido a qualquer momento.'
  },
  {
    category: 'Dúvidas e Suporte',
    question: 'O que mais a App Datena desenvolve?',
    answer: 'A App Datena é uma fábrica e loja de soluções de software e aplicativos próprios para empreendedores e pequenas e médias empresas. O WhatsTransmissão é o nosso produto principal atual, e em breve traremos novas ferramentas para gestão de vendas e relacionamento.'
  }
];
