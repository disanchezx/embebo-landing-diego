import { Play, Send, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const DemoSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 ¡Hola! Soy el asistente de Embebo.\n\nPrueba preguntarme algo como:\n• '¿Cuál es nuestra política de vacaciones?'\n• '¿Quién maneja el proyecto X?'\n• '¿Dónde está el manual de onboarding?'\n\nO selecciona una de las preguntas sugeridas abajo 👇",
      isUser: false,
      timestamp: new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "¿Cuál es nuestra política de vacaciones?",
    "¿Quién maneja el proyecto de marketing?",
    "¿Dónde está el manual de onboarding?",
    "Muéstrame las ventas del último trimestre"
  ];

  const responses: { [key: string]: string } = {
    "vacaciones|política|días": "📄 Encontré tu política de vacaciones:\n\n• **15 días al año** (aumenta a 20 después de 3 años)\n• Se pueden acumular hasta 5 días\n• Solicitud con 2 semanas de anticipación\n\n💡 **Tip:** El 80% del equipo toma vacaciones en julio-agosto. ¿Quieres ver la disponibilidad de tu equipo?",
    
    "proyecto|marketing|quién|maneja": "👥 El proyecto de marketing lo lidera:\n\n**Ana Rodríguez** - Marketing Manager\n📧 ana.rodriguez@empresa.com\n📱 Ext. 234\n\n**Equipo:**\n• Carlos (Content)\n• María (Design)\n• Luis (Analytics)\n\n📊 Última actualización: hace 2 días\n🎯 Estado: En progreso (75% completado)",
    
    "manual|onboarding|nuevo": "📚 Manual de Onboarding encontrado:\n\n**Ubicación:** Drive > HR > Onboarding 2024\n\n**Contenido principal:**\n1. Bienvenida y cultura (15 min)\n2. Herramientas y accesos (30 min)\n3. Estructura del equipo (20 min)\n4. Primeros 30 días (checklist)\n\n🔗 ¿Quieres que te envíe el link directo?",
    
    "ventas|trimestre|últimas": "📈 Ventas Q4 2024:\n\n**Total:** $2.4M (+18% vs Q3)\n\n**Por región:**\n• Norte: $980K (↑ 22%)\n• Sur: $720K (↑ 15%)\n• Centro: $700K (↑ 12%)\n\n**Top productos:**\n1. Plan Enterprise: $1.2M\n2. Plan Business: $850K\n3. Plan Startup: $350K\n\n💡 ¿Quieres ver el desglose por mes?",
    
    "hola|hi|hello|buenos días|buenas tardes": "👋 ¡Hola! \n\nSoy el asistente de Embebo. Puedo ayudarte a encontrar cualquier información de tu empresa en segundos.\n\n**Prueba preguntarme:**\n• Políticas y procedimientos\n• Contactos del equipo\n• Documentos y reportes\n• Métricas y KPIs\n\n¿Qué necesitas buscar?",
    
    "gracias|thank you|excelente|perfecto": "¡De nada! 😊\n\nSi necesitas buscar algo más, solo pregunta. Estoy aquí 24/7.\n\n💡 **Dato curioso:** El equipo promedio ahorra 8 horas/semana usando Embebo.",
    
    "default": "🤔 Déjame buscar eso en tu base de conocimiento...\n\nPuedo ayudarte con:\n• 📄 Documentos y políticas\n• 👥 Información del equipo\n• 📊 Reportes y métricas\n• 🔧 Procedimientos técnicos\n• 💼 Datos de clientes\n\n¿Podrías ser más específico? O prueba con una de las preguntas sugeridas."
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keywords, response] of Object.entries(responses)) {
      if (keywords === "default") continue;
      
      const keywordList = keywords.split("|");
      if (keywordList.some(keyword => lowerMessage.includes(keyword))) {
        return response;
      }
    }
    
    return responses.default;
  };

  const simulateTyping = async (responseText: string) => {
    setIsTyping(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newMessage: Message = {
      id: Date.now(),
      text: responseText,
      isUser: false,
      timestamp: new Date().toLocaleString('es-ES', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      })
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleString('es-ES', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    const response = getResponse(inputValue);
    await simulateTyping(response);
  };

  const handleSuggestedQuestion = async (question: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isUser: true,
      timestamp: new Date().toLocaleString('es-ES', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setMessages(prev => [...prev, userMessage]);

    const response = getResponse(question);
    await simulateTyping(response);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        text: "👋 ¡Hola! Soy el asistente de Embebo.\n\nPrueba preguntarme algo como:\n• '¿Cuál es nuestra política de vacaciones?'\n• '¿Quién maneja el proyecto X?'\n• '¿Dónde está el manual de onboarding?'\n\nO selecciona una de las preguntas sugeridas abajo 👇",
        isUser: false,
        timestamp: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      }
    ]);
    setInputValue("");
    setShowDemo(true);
  };

  const handleStartDemo = () => {
    setShowDemo(true);
    handleReset();
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-mono text-sm animate-pulse">$ ./demo --interactive</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pruébalo tú mismo
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Haz una pregunta y ve cómo Embebo encuentra la respuesta en segundos
            <span className="block text-base text-cyan-400/70 mt-2 font-mono">
              <span className="text-cyan-500">[</span> Demo simulado • Velocidad real <span className="text-cyan-500">]</span>
            </span>
          </p>
        </div>

        {/* Demo Interface */}
        <div className="relative">
          {/* Terminal-style Chrome */}
          <div className="bg-slate-950 border-b border-cyan-500/30 rounded-t-xl p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-cyan-500/20 rounded-md px-4 py-1 text-sm text-cyan-400 ml-4 font-mono flex items-center gap-2">
              <span className="text-cyan-500">$</span>
              <span>embebo://chat</span>
              <span className="ml-auto text-xs text-slate-500">localhost:3000</span>
            </div>
          </div>

          {/* Main Demo Card */}
          <Card className="rounded-t-none shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden border border-cyan-500/20 bg-slate-900/90 backdrop-blur-sm">
            <div className="grid md:grid-cols-[240px_1fr] min-h-[600px]">
              {/* Sidebar */}
              <div className="bg-slate-950/50 border-r border-cyan-500/20 p-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                    &gt; Embebo_
                  </h3>
                </div>
                
                <nav className="space-y-2">
                  <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-cyan-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Dashboard</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-cyan-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Usuarios</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-cyan-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Áreas</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-all duration-200 cursor-pointer border border-transparent hover:border-cyan-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span>Archivos</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 bg-cyan-500/10 text-cyan-400 rounded-lg border-l-4 border-cyan-500 font-medium cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Chat</span>
                  </div>
                </nav>
              </div>

              {/* Chat Content */}
              <div className="flex flex-col bg-slate-900/50">
                {/* Chat Header */}
                <div className="border-b border-cyan-500/20 px-8 py-6 bg-slate-950/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-cyan-400/70 mb-1 font-mono">~/pages/chat</p>
                      <h2 className="text-3xl font-bold text-white font-mono flex items-center gap-2">
                        <span className="text-cyan-500">$</span> Chat
                        <span className="w-2 h-6 bg-cyan-400 animate-blink"></span>
                      </h2>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReset}
                        className="flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Reiniciar
                      </Button>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="pl-10 pr-4 py-2 bg-slate-900 border border-cyan-500/30 text-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64 font-mono text-sm"
                          readOnly
                        />
                        <svg className="w-5 h-5 text-cyan-400/50 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <button className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors border border-transparent hover:border-cyan-500/30">
                        <svg className="w-6 h-6 text-slate-400 hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors border border-transparent hover:border-cyan-500/30">
                        <svg className="w-6 h-6 text-slate-400 hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      </button>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <span className="font-mono">AI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-8 py-6 max-h-[400px] bg-slate-950/30">
                  {!showDemo ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <button
                          onClick={handleStartDemo}
                          className="relative w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-110 transition-all mx-auto mb-4 border-2 border-cyan-400/50 group"
                        >
                          <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></div>
                          <Play className="w-10 h-10 text-white fill-white ml-1 relative z-10 group-hover:scale-110 transition-transform" />
                        </button>
                        <p className="text-white text-lg font-medium font-mono">
                          <span className="text-cyan-400">$</span> Inicia el demo
                        </p>
                        <p className="text-slate-400 text-sm mt-2 font-mono">
                          <span className="text-cyan-500">[</span> Sin registro <span className="text-cyan-500">•</span> 30 segundos <span className="text-cyan-500">]</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-4xl space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`${
                            message.isUser
                              ? "ml-auto bg-gradient-to-br from-cyan-600 to-blue-600 text-white border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                              : "bg-slate-800/50 text-slate-200 border border-cyan-500/20 backdrop-blur-sm"
                          } rounded-2xl p-6 max-w-[85%] ${message.isUser ? "ml-auto" : ""} font-mono text-sm`}
                        >
                          <p className="leading-relaxed whitespace-pre-line">
                            {message.text}
                          </p>
                          <p className={`text-xs mt-4 font-mono ${message.isUser ? "text-cyan-200" : "text-slate-500"}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="bg-slate-800/50 border border-cyan-500/20 rounded-2xl p-6 max-w-[85%] backdrop-blur-sm">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ animationDelay: "0ms" }}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ animationDelay: "150ms" }}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ animationDelay: "300ms" }}></div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                {/* Suggested Questions */}
                {showDemo && messages.length <= 2 && (
                  <div className="px-8 py-4 border-t border-cyan-500/20 bg-slate-950/30">
                    <p className="text-sm text-cyan-400 mb-3 font-medium font-mono">
                      <span className="text-cyan-500">$</span> Preguntas sugeridas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          disabled={isTyping}
                          className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-full text-sm text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input */}
                {showDemo && (
                  <div className="border-t border-gray-200 px-8 py-6">
                    <div className="max-w-4xl relative">
                      <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        placeholder="$ Escribe un mensaje..."
                        className="w-full px-6 py-4 pr-16 bg-slate-900 border border-cyan-500/30 text-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none font-mono text-sm placeholder:text-slate-500"
                        rows={1}
                        disabled={isTyping}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="absolute right-4 bottom-4 w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-400/30"
                      >
                        <Send className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-mono group-hover:text-cyan-400 transition-colors">
              <span className="text-cyan-500 text-sm">01.</span> IA Contextual
            </h3>
            <p className="text-slate-400">
              Análisis inteligente basado en el contexto de tu organización
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-mono group-hover:text-cyan-400 transition-colors">
              <span className="text-cyan-500 text-sm">02.</span> Respuestas Instantáneas
            </h3>
            <p className="text-slate-400">
              Obtén insights y recomendaciones en tiempo real
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-mono group-hover:text-cyan-400 transition-colors">
              <span className="text-cyan-500 text-sm">03.</span> Seguro y Privado
            </h3>
            <p className="text-slate-400">
              Tus datos protegidos con los más altos estándares de seguridad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;