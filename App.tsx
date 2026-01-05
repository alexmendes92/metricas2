import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { PromptCard } from './components/PromptCard';
import { AppData, GeneratedPrompt } from './types';
import { generatePrompts } from './utils/generators';
import { Wand2, Zap, Rocket } from 'lucide-react';

const App: React.FC = () => {
  const [prompts, setPrompts] = useState<GeneratedPrompt[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = (data: AppData) => {
    setHasGenerated(false);
    // Simulate processing time for "Robustness" feel
    setTimeout(() => {
        const newPrompts = generatePrompts(data);
        setPrompts(newPrompts);
        setHasGenerated(true);
        // Smooth scroll to results
        setTimeout(() => {
            const element = document.getElementById('results-section');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <Wand2 className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-500">
              PromptMaster Pro <span className="text-xs font-normal text-slate-400 ml-1">v2.0</span>
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 hidden sm:flex">
             <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Sistema Online</span>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100">
            <Rocket className="w-3 h-3" />
            10 Módulos de Inteligência
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Engenharia de Prompt <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Adaptável a Qualquer Nicho</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Um sistema robusto que gera automaticamente <strong>10 estratégias completas</strong> (Marketing, Vendas, Produto e SEO) com base na sua profissão.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Input Section - Sticky */}
          <div className="xl:col-span-4 xl:sticky xl:top-24 z-10">
            <InputForm onGenerate={handleGenerate} />
            
            {!hasGenerated && (
                <div className="mt-6 p-6 border border-slate-200 bg-white rounded-xl text-center shadow-sm">
                  <h3 className="text-slate-900 font-bold mb-2">Como funciona?</h3>
                  <ul className="text-left text-sm text-slate-600 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-indigo-500 font-bold">1.</span>
                        Defina seu nicho (ex: Médico, Músico).
                    </li>
                    <li className="flex gap-2">
                        <span className="text-indigo-500 font-bold">2.</span>
                        Escolha o tom de voz da marca.
                    </li>
                    <li className="flex gap-2">
                        <span className="text-indigo-500 font-bold">3.</span>
                        Receba 10 prompts prontos para usar.
                    </li>
                  </ul>
                </div>
              )}
          </div>

          {/* Results Section */}
          <div id="results-section" className="xl:col-span-8 min-h-[500px]">
            {hasGenerated ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    Kit Estratégico Gerado
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
                    {prompts.length} Arquivos
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl text-white text-center shadow-lg">
                  <p className="font-semibold text-lg mb-1">🚀 Próximo Passo</p>
                  <p className="text-indigo-100 text-sm">
                    Copie os prompts acima e cole no ChatGPT, Claude ou Google Gemini para obter os resultados finais.
                  </p>
                </div>
              </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 opacity-60">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <Wand2 className="w-8 h-8 text-slate-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-400">Aguardando Dados</h4>
                  <p className="text-slate-400 text-center max-w-md mt-2">
                    Preencha o formulário ao lado para liberar o poder da Inteligência Artificial no seu negócio.
                  </p>
               </div>
            )}
          </div>
        </div>
      </main>

      <footer className="mt-20 py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm font-medium">
                &copy; {new Date().getFullYear()} PromptMaster Pro. 
                <span className="mx-2 text-slate-300">|</span> 
                Sistema de Arquitetura de Prompts Avançada.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;