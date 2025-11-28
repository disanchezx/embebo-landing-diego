import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const DemoSection = () => {
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
                <div className="flex-1 overflow-y-auto px-8 py-6">
                  <div className="max-w-4xl">
                    {/* AI Message */}
                    <div className="bg-gray-100 rounded-2xl p-6 mb-6 relative">
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-2xl backdrop-blur-[1px] group hover:bg-black/10 transition-colors cursor-pointer">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-indigo-600 fill-indigo-600 ml-1" />
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        <strong>El usuario está preguntando por qué fallo o cometió errores.</strong> Para abordar esto, necesito explicar las limitaciones y restricciones de mis capacidades actuales basadas en las herramientas disponibles para mí.
                      </p>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Los fallos pueden ocurrir por varias razones, incluyendo:
                      </p>

                      <div className="space-y-3 mb-4">
                        <p className="text-gray-700">
                          <strong>1. "Limitaciones de las herramientas":</strong> Las herramientas que tengo a mi disposición tienen capacidades específicas. Si una solicitud va más allá de lo que estas herramientas pueden hacer, no podré completarla.
                        </p>
                        
                        <p className="text-gray-700">
                          <strong>2. "Datos insuficientes o incorrectos":</strong> Si los datos proporcionados no son suficientes o contienen errores, puede que no pueda proporcionar una respuesta precisa.
                        </p>
                        
                        <p className="text-gray-700">
                          <strong>3. "Solicitudes ambiguas":</strong> Si una solicitud no está clara o es ambigua, puede que no entienda exactamente lo que se me está pidiendo.
                        </p>
                        
                        <p className="text-gray-700">
                          <strong>4. "Errores en las herramientas":</strong> Ocasionalmente, las herramientas pueden fallar o proporcionar resultados incorrectos. En estos casos, intento adaptarme y encontrar una solución alternativa.
                        </p>
                      </div>

                      <p className="text-gray-700 mb-2">
                        Si tienes una solicitud específica que no pude completar, por favor proporcióname más detalles para que pueda intentar ayudarte de una manera más efectiva.
                      </p>

                      <p className="text-xs text-gray-500 mt-4">
                        2024-03-28 22:44:45
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-gray-200 px-8 py-6">
                  <div className="max-w-4xl relative">
                    <textarea
                      placeholder="Escribe un mensaje..."
                      className="w-full px-6 py-4 pr-16 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                      rows={1}
                      readOnly
                    />
                    <button className="absolute right-4 bottom-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
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