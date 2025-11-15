import React, { useState } from 'react';

const App = () => {
  
  
  const [input, setInput] = useState("");

  /**
   * Adiciona uma nova tarefa a lista se o inpu nao estiver vazio.
   */
  function adicionarTarefa() {
    if (input.trim()) {
      // Adiciona o novo input ao array, de tarefas e lipa o campo
      setTarefas([...tarefas, input.trim()]);
      setInput("");
    }
  }

  /**
   
   * @param {number} indexParaRemover O índice do elemento a ser removidoo.
   */
  function removerTarefa(indexParaRemover) {
    
    const novasTarefas = tarefas.filter((_, index) => index !== indexParaRemover);
    setTarefas(novasTarefas);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-gray-100 transform hover:scale-[1.01] transition duration-300">
        
        {}
        <h1 className="text-4xl font-extrabold text-emerald-600 mb-8 text-center tracking-tight">
          Lista de Afazeres ✨
        </h1>

        {}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && adicionarTarefa()}
            placeholder="O que precisa ser feito?"
            aria-label="Nova tarefa"
            className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 transition duration-200 shadow-inner"
          />
          <button
            onClick={adicionarTarefa}
            className="flex-shrink-0 flex items-center justify-center bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl hover:bg-emerald-600 transition duration-200 shadow-md active:shadow-sm active:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim()}
          >
            <span className="text-xl mr-1">➕</span>
          </button>
        </div>

        {/* Lista de Tarefas */}
        <ul className="space-y-3">
          {tarefas.length === 0 ? (
            <p className="text-center text-gray-400 italic py-4">
              Comece adicionando sua primeira tarefa!
            </p>
          ) : (
            tarefas.map((tarefa, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-xl border-l-4 border-emerald-400 shadow-lg hover:shadow-xl transition duration-300 transform hover:translate-y-[-1px] cursor-pointer"
              >
                {/* Conteúdo da Tarefa */}
                <span className="text-gray-700 text-lg break-words flex-1 pr-4">
                  {tarefa}
                </span>

                {/* Botão de Remover */}
                <button
                  onClick={() => removerTarefa(index)}
                  aria-label={`Remover tarefa: ${tarefa}`}
                  className="p-2 text-red-500 hover:text-white rounded-full transition duration-150 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  <span className="text-lg">🗑️</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;