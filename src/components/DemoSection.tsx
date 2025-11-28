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
      text: "El usuario está preguntando por qué fallo o cometió errores. Para abordar esto, necesito explicar las limitaciones y restricciones de mis capacidades actuales basadas en las herramientas disponibles para mí.\n\nLos fallos pueden ocurrir por varias razones, incluyendo:\n\n1. \"Limitaciones de las herramientas\": Las herramientas que tengo a mi disposición tienen capacidades específicas. Si una solicitud va más allá de lo que estas herramientas pueden hacer, no podré completarla.\n\n2. \"Datos insuficientes o incorrectos\": Si los datos proporcionados no son suficientes o contienen errores, puede que no pueda proporcionar una respuesta precisa.\n\n3. \"Solicitudes ambiguas\": Si una solicitud no está clara o es ambigua, puede que no entienda exactamente lo que se me está pidiendo.\n\n4. \"Errores en las herramientas\": Ocasionalmente, las herramientas pueden fallar o proporcionar resultados incorrectos. En estos casos, intento adaptarme y encontrar una solución alternativa.\n\nSi tienes una solicitud específica que no pude completar, por favor proporcióname más detalles para que pueda intentar ayudarte de una manera más efectiva.",
      isUser: false,
      timestamp: "2024-03-28 22:44:45"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "¿Cómo puedo optimizar mis procesos?",
    "¿Qué información necesitas de mi empresa?",
    "¿Cómo funciona la búsqueda inteligente?",
    "¿Puedes analizar documentos PDF?"
  ];

  const responses: { [key: string]: string } = {
    "optimizar|procesos|mejorar|eficiencia": "Puedo ayudarte a optimizar tus procesos analizando tus documentos internos, identificando cuellos de botella y sugiriendo mejoras basadas en mejores prácticas. Por ejemplo, puedo:\n\n• Analizar flujos de trabajo actuales\n• Identificar tareas repetitivas que pueden automatizarse\n• Sugerir reorganización de equipos\n• Proporcionar métricas de rendimiento\n\n¿Te gustaría que analice algún proceso específico?",
    
    "información|necesitas|datos|empresa": "Para brindarte el mejor servicio, necesito acceso a:\n\n• Documentos internos (políticas, procedimientos, manuales)\n• Bases de conocimiento existentes\n• Correos electrónicos corporativos (opcional)\n• Sistemas de gestión (CRM, ERP)\n• Documentación técnica\n\nToda la información se procesa de forma segura y encriptada. ¿Qué tipo de documentos tienes disponibles?",
    
    "búsqueda|search|buscar|encontrar": "La búsqueda inteligente de Embebo utiliza IA avanzada para:\n\n• Entender el contexto de tu pregunta, no solo palabras clave\n• Buscar en múltiples fuentes simultáneamente\n• Proporcionar respuestas resumidas y relevantes\n• Aprender de tus búsquedas anteriores\n• Sugerir información relacionada que podrías necesitar\n\nPor ejemplo, si preguntas 'política de vacaciones', no solo encuentra el documento, sino que te da la respuesta específica.",
    
    "pdf|documentos|archivos|excel": "¡Sí! Puedo analizar múltiples tipos de documentos:\n\n• PDFs (incluso escaneados con OCR)\n• Word, Excel, PowerPoint\n• Correos electrónicos\n• Páginas web internas\n• Bases de datos\n• Código fuente\n\nExtrae información, genera resúmenes, responde preguntas específicas y cruza datos entre diferentes documentos. ¿Qué tipo de análisis necesitas?",
    
    "seguridad|privacidad|protección|datos": "La seguridad es nuestra prioridad:\n\n• Encriptación end-to-end\n• Cumplimiento con GDPR y SOC 2\n• Datos almacenados en servidores seguros\n• Control de acceso granular\n• Auditorías de seguridad regulares\n• Sin entrenamiento de modelos con tus datos\n\nTus datos nunca se comparten con terceros ni se usan para entrenar modelos públicos.",
    
    "precio|costo|plan|suscripción": "Ofrecemos planes flexibles según el tamaño de tu empresa:\n\n• Startup: Para equipos de hasta 50 personas\n• Business: Para empresas medianas\n• Enterprise: Soluciones personalizadas\n\nTodos incluyen:\n✓ Búsqueda ilimitada\n✓ Soporte prioritario\n✓ Integraciones\n✓ Análisis avanzado\n\n¿Te gustaría agendar una demo personalizada?",
    
    "hola|hi|hello|buenos días|buenas tardes": "¡Hola! 👋 Soy el asistente de IA de Embebo. Estoy aquí para ayudarte a entender cómo podemos transformar la forma en que tu empresa accede y utiliza su conocimiento interno.\n\n¿En qué puedo ayudarte hoy?",
    
    "gracias|thank you|excelente": "¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas sobre cómo Embebo puede beneficiar a tu empresa, no dudes en preguntar.",
    
    "default": "Entiendo tu pregunta. Embebo puede ayudarte con:\n\n• Búsqueda inteligente en documentos internos\n• Análisis de datos empresariales\n• Automatización de respuestas frecuentes\n• Integración con tus sistemas existentes\n• Generación de insights de negocio\n\n¿Podrías darme más detalles sobre lo que necesitas? O selecciona una de las preguntas sugeridas."
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
        text: "¡Hola! 👋 Soy el asistente de IA de Embebo. Estoy aquí para ayudarte a entender cómo podemos transformar la forma en que tu empresa accede y utiliza su conocimiento interno.\n\n¿En qué puedo ayudarte hoy?",
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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ve Embebo en Acción
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestra IA analiza y optimiza tus procesos en tiempo real
          </p>
        </div>

        {/* Demo Interface */}
        <div className="relative">
          {/* Browser Chrome */}
          <div className="bg-gray-200 rounded-t-xl p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-white rounded-md px-4 py-1 text-sm text-gray-500 ml-4">
              app.embebo.com/chat
            </div>
          </div>

          {/* Main Demo Card */}
          <Card className="rounded-t-none shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-[240px_1fr] min-h-[600px]">
              {/* Sidebar */}
              <div className="bg-gray-50 border-r border-gray-200 p-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-indigo-600">Embebo</h3>
                </div>
                
                <nav className="space-y-2">
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Dashboard</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Usuarios</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Áreas</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span>Archivos</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-lg border-l-4 border-indigo-600 font-medium cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Chat</span>
                  </div>
                </nav>
              </div>

              {/* Chat Content */}
              <div className="flex flex-col bg-white">
                {/* Chat Header */}
                <div className="border-b border-gray-200 px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Páginas / Chat</p>
                      <h2 className="text-3xl font-bold text-gray-900">Chat</h2>
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
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                          readOnly
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      </button>
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                        AE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-8 py-6 max-h-[400px]">
                  {!showDemo ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <button
                          onClick={handleStartDemo}
                          className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl hover:bg-indigo-700 hover:scale-110 transition-all mx-auto mb-4"
                        >
                          <Play className="w-10 h-10 text-white fill-white ml-1" />
                        </button>
                        <p className="text-gray-600 text-lg font-medium">
                          Haz clic para iniciar el demo interactivo
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
                              ? "ml-auto bg-indigo-600 text-white"
                              : "bg-gray-100 text-gray-700"
                          } rounded-2xl p-6 max-w-[85%] ${message.isUser ? "ml-auto" : ""}`}
                        >
                          <p className="leading-relaxed whitespace-pre-line">
                            {message.text}
                          </p>
                          <p className={`text-xs mt-4 ${message.isUser ? "text-indigo-200" : "text-gray-500"}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="bg-gray-100 rounded-2xl p-6 max-w-[85%]">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                {/* Suggested Questions */}
                {showDemo && messages.length <= 2 && (
                  <div className="px-8 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-sm text-gray-600 mb-3 font-medium">Preguntas sugeridas:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          disabled={isTyping}
                          className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                        placeholder="Escribe un mensaje..."
                        className="w-full px-6 py-4 pr-16 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        rows={1}
                        disabled={isTyping}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="absolute right-4 bottom-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">IA Contextual</h3>
            <p className="text-gray-600">
              Análisis inteligente basado en el contexto de tu organización
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Respuestas Instantáneas</h3>
            <p className="text-gray-600">
              Obtén insights y recomendaciones en tiempo real
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguro y Privado</h3>
            <p className="text-gray-600">
              Tus datos protegidos con los más altos estándares de seguridad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;