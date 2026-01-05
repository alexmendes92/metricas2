export interface AppData {
  appName: string;
  industryArea: string; // e.g., "Saúde Mental", "Varejo Pet", "Música"
  targetAudience: string; // e.g., "Psicólogo Clínico", "Dono de Petshop", "Músico Independente"
  features: string; // e.g., "Agendamento, Prontuário, Financeiro"
  tone: string; // New: Tone of voice
}

export interface GeneratedPrompt {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
}