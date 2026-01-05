import React, { useState, useEffect } from 'react';
import { AppData } from '../types';
import { Sparkles, ArrowRight, Briefcase, User, Box, Layers, Mic2, Save, RotateCcw } from 'lucide-react';

interface InputFormProps {
  onGenerate: (data: AppData) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ onGenerate }) => {
  const [formData, setFormData] = useState<AppData>({
    appName: '',
    industryArea: '',
    targetAudience: '',
    features: '',
    tone: 'Profissional e Empático'
  });

  const [savedStatus, setSavedStatus] = useState<string>('');

  // API 1: LocalStorage - Load data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('promptMasterData');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
        setSavedStatus('Dados recuperados');
        setTimeout(() => setSavedStatus(''), 3000);
      } catch (e) {
        console.error('Erro ao carregar dados locais', e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    
    // API 1: LocalStorage - Save on every change (Debounce simulation)
    localStorage.setItem('promptMasterData', JSON.stringify(newData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const handleClear = () => {
    const emptyState = {
      appName: '',
      industryArea: '',
      targetAudience: '',
      features: '',
      tone: 'Profissional e Empático'
    };
    setFormData(emptyState);
    localStorage.removeItem('promptMasterData');
    setSavedStatus('Formulário limpo');
    setTimeout(() => setSavedStatus(''), 3000);
  };

  const fillDemo = (type: 'pet' | 'medic' | 'music' | 'ecom') => {
    let data: AppData;
    if (type === 'pet') {
      data = {
        appName: 'PetGestor Pro',
        industryArea: 'Mercado Pet e Veterinário',
        targetAudience: 'Dono de Petshop e Clínica Veterinária',
        features: 'Controle de estoque validade, Agendamento de banho e tosa, Prontuário digital com vacinas',
        tone: 'Amigável e Cuidadoso'
      };
    } else if (type === 'medic') {
      data = {
        appName: 'MedAgenda',
        industryArea: 'Saúde e Medicina',
        targetAudience: 'Médico Especialista (Dermatologista)',
        features: 'Confirmação via WhatsApp, Prontuário Eletrônico, Telemedicina integrada',
        tone: 'Autoridade e Científico'
      };
    } else if (type === 'music') {
      data = {
        appName: 'IndieStage',
        industryArea: 'Indústria Musical',
        targetAudience: 'Músico Independente e Produtor',
        features: 'Gestão de Royalties, Pitching para Playlists, Agenda de Shows',
        tone: 'Descolado e Criativo'
      };
    } else {
      data = {
        appName: 'ShopFácil',
        industryArea: 'Ecommerce de Moda',
        targetAudience: 'Lojista de Roupas Femininas',
        features: 'Integração com Instagram Shopping, Recuperação de carrinho, Gestão de envio',
        tone: 'Energético e Focado em Vendas'
      };
    }
    setFormData(data);
    localStorage.setItem('promptMasterData', JSON.stringify(data));
  };

  // Base classes for strictly light inputs
  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-white font-semibold text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Configurar Produto
          </h2>
          <p className="text-indigo-100 text-xs mt-1">
            Seus dados são salvos automaticamente no navegador.
          </p>
        </div>
        {savedStatus && (
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded animate-pulse">
            {savedStatus}
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              Área de Atuação
            </label>
            <input
              type="text"
              name="industryArea"
              required
              value={formData.industryArea}
              onChange={handleChange}
              placeholder="Ex: Varejo, Direito, Fitness..."
              className={inputClass}
            />
          </div>

          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <User className="w-4 h-4 text-indigo-600" />
              Público Alvo
            </label>
            <input
              type="text"
              name="targetAudience"
              required
              value={formData.targetAudience}
              onChange={handleChange}
              placeholder="Ex: Advogados, Personal Trainers..."
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Box className="w-4 h-4 text-indigo-600" />
              Nome do App/Produto
            </label>
            <input
              type="text"
              name="appName"
              required
              value={formData.appName}
              onChange={handleChange}
              placeholder="Ex: FitTracker, JusSystem..."
              className={inputClass}
            />
          </div>

           <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Mic2 className="w-4 h-4 text-indigo-600" />
              Tom de Voz
            </label>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Profissional e Empático">Profissional e Empático</option>
              <option value="Autoridade e Sério">Autoridade e Sério</option>
              <option value="Divertido e Descolado">Divertido e Descolado</option>
              <option value="Urgente e Vendedor">Urgente e Vendedor</option>
              <option value="Minimalista e Sofisticado">Minimalista e Sofisticado</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Layers className="w-4 h-4 text-indigo-600" />
            Funcionalidades (Separe por vírgulas)
          </label>
          <textarea
            name="features"
            required
            rows={3}
            value={formData.features}
            onChange={handleChange}
            placeholder="Ex: Geração de contratos PDF, Calculadora jurídica, Agenda sincronizada com Google..."
            className={inputClass}
          />
        </div>

        <div className="pt-2 border-t border-slate-100 mt-4">
           <div className="flex flex-wrap gap-2 mb-5 text-xs text-slate-500 font-medium">
             <span>Exemplos rápidos:</span>
             <button type="button" onClick={() => fillDemo('pet')} className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-indigo-600 transition-colors">Petshop</button>
             <button type="button" onClick={() => fillDemo('medic')} className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-indigo-600 transition-colors">Médico</button>
             <button type="button" onClick={() => fillDemo('music')} className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-indigo-600 transition-colors">Músico</button>
             <button type="button" onClick={() => fillDemo('ecom')} className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-indigo-600 transition-colors">Ecommerce</button>
           </div>
           
           <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-3 bg-white border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-2 font-medium"
              title="Limpar formulário"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5" />
              Gerar 10 Estratégias
              <ArrowRight className="w-5 h-5" />
            </button>
           </div>
        </div>
      </form>
    </div>
  );
};