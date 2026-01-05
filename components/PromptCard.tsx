import React, { useState } from 'react';
import { GeneratedPrompt } from '../types';
import { Copy, Check, Terminal, Download } from 'lucide-react';

interface PromptCardProps {
  prompt: GeneratedPrompt;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  // API 2: Clipboard API
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // API 3: Blob API & URL API for Download
  const handleDownload = () => {
    const blob = new Blob([prompt.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt_${prompt.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all duration-300 flex flex-col h-full group">
      <div className="p-5 border-b border-slate-100 bg-white rounded-t-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
          <div className="flex items-start gap-3">
            <span className={`mt-1 p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300`}>
              <Terminal className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">{prompt.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{prompt.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 self-end md:self-start">
             <button
              onClick={handleDownload}
              className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100"
              title="Baixar Arquivo .txt"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                copied
                  ? 'bg-green-50 border-green-200 text-green-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-600'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copiar
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 mt-2 flex-wrap">
          {prompt.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium uppercase rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-1 p-0 relative bg-slate-50 rounded-b-xl overflow-hidden">
        <pre className="w-full h-64 md:h-72 p-5 text-sm text-slate-700 font-mono whitespace-pre-wrap overflow-y-auto custom-scrollbar leading-relaxed selection:bg-indigo-100">
          {prompt.content}
        </pre>
      </div>
    </div>
  );
};