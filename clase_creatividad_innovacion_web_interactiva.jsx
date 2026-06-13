export default function ClaseCreatividadInnovacion() {
  const actividades = [
    {
      titulo: "Desafío Creativo Inmediato",
      descripcion:
        "Observa los objetos que tienes cerca y transforma uno de ellos en una solución tecnológica innovadora para una comunidad.",
      herramienta: "Mentimeter",
      ejemplo:
        "Convertir una sombrilla en un dispositivo inteligente que alerte sobre lluvias intensas y rutas seguras.",
    },
    {
      titulo: "Pensamiento Lógico vs Pensamiento Creativo",
      descripcion:
        "Analizaremos cómo dos tipos de pensamiento pueden resolver el mismo problema de formas completamente distintas.",
      herramienta: "Canva Whiteboard",
      ejemplo:
        "¿Cómo ayudar digitalmente a adultos mayores que no saben usar aplicaciones bancarias?",
    },
    {
      titulo: "Laboratorio de Innovación",
      descripcion:
        "Construiremos una idea innovadora basada en problemas reales de una comunidad usando Design Thinking.",
      herramienta: "FigJam",
      ejemplo:
        "Aplicación para reportar problemas de accesibilidad en espacios públicos.",
    },
  ];

  const preguntas = [
    "¿La creatividad se aprende o se nace con ella?",
    "¿Qué problema de su comunidad les gustaría solucionar usando tecnología?",
    "¿Por qué algunas ideas innovadoras fracasan?",
    "¿Qué aplicación consideran realmente útil para la sociedad y por qué?",
    "¿Cómo creen que la creatividad ayuda al desarrollo de un país?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center space-y-4 py-10">
          <h1 className="text-5xl font-bold">Desarrollando la Creatividad</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Clase virtual interactiva sobre creatividad, innovación y pensamiento creativo aplicada a la solución de problemas glocales.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-6">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
              🚀 Innovación Digital
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
              🧠 Pensamiento Creativo
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
              💡 Solución de Problemas
            </div>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">📚 Objetivo de la sesión</h2>
            <p className="text-lg leading-relaxed text-slate-100">
              Comprender la relación entre creatividad, innovación y pensamiento lógico-creativo para el desarrollo de soluciones digitales orientadas a problemas reales de una comunidad.
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">🧠 Conceptos clave</h2>
            <ul className="space-y-3 text-lg text-slate-100">
              <li>✔ Creatividad</li>
              <li>✔ Innovación</li>
              <li>✔ Pensamiento lógico</li>
              <li>✔ Pensamiento creativo</li>
              <li>✔ Design Thinking</li>
              <li>✔ Solución de problemas</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 rounded-3xl p-10 backdrop-blur-md shadow-2xl space-y-8">
          <h2 className="text-4xl font-bold text-center">🎓 Desarrollo de la Clase</h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-100">
            <div className="bg-slate-900/40 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4">🌍 Creatividad e Innovación</h3>
              <p>
                La creatividad es la capacidad de generar ideas originales y útiles. La innovación ocurre cuando esas ideas logran resolver un problema real y generar un impacto positivo en una comunidad.
              </p>
              <p className="mt-4">
                Actualmente vivimos en un entorno donde las tecnologías digitales transforman la manera en que estudiamos, trabajamos y nos comunicamos. Por esta razón, las soluciones innovadoras son fundamentales para mejorar la calidad de vida de las personas.
              </p>
            </div>

            <div className="bg-slate-900/40 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4">🧠 Tipos de Pensamiento</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-cyan-500/20 rounded-2xl p-6">
                  <h4 className="text-2xl font-bold mb-3">Pensamiento Lógico</h4>
                  <ul className="space-y-2">
                    <li>✔ Analiza información</li>
                    <li>✔ Sigue procesos organizados</li>
                    <li>✔ Utiliza razonamiento</li>
                    <li>✔ Busca soluciones estructuradas</li>
                  </ul>
                </div>

                <div className="bg-blue-500/20 rounded-2xl p-6">
                  <h4 className="text-2xl font-bold mb-3">Pensamiento Creativo</h4>
                  <ul className="space-y-2">
                    <li>✔ Genera ideas innovadoras</li>
                    <li>✔ Relaciona conceptos diferentes</li>
                    <li>✔ Propone alternativas nuevas</li>
                    <li>✔ Rompe esquemas tradicionales</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6">
                La mayoría de soluciones innovadoras nacen cuando ambos pensamientos trabajan juntos.
              </p>
            </div>

            <div className="bg-slate-900/40 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4">📱 Innovación en la Vida Real</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-xl font-bold mb-2">Uber</h4>
                  <p>Transformó el transporte conectando personas mediante tecnología móvil.</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-xl font-bold mb-2">Duolingo</h4>
                  <p>Innovó en educación usando gamificación para aprender idiomas.</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-xl font-bold mb-2">Nequi</h4>
                  <p>Facilitó servicios financieros digitales para miles de usuarios.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-3xl p-8 shadow-2xl text-center">
            <h2 className="text-5xl font-bold mb-4">🎯 Actividades Interactivas</h2>
            <p className="text-xl text-slate-100 max-w-4xl mx-auto">
              Durante la sesión desarrollaremos ejercicios prácticos para fortalecer la creatividad, la innovación y la solución de problemas.
            </p>
          </div>
          <h2 className="text-4xl font-bold text-center">🚀 Actividades Dinámicas</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {actividades.map((actividad, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{actividad.titulo}</h3>
                <p className="mb-3 text-cyan-200">⏱ {actividad.tiempo}</p>
                <p className="mb-4 leading-relaxed">{actividad.descripcion}</p>

                <div className="bg-slate-900/40 rounded-2xl p-4 mb-3">
                  <p className="font-semibold">🛠 Herramienta:</p>
                  <p>{actividad.herramienta}</p>
                </div>

                <div className="bg-cyan-500/20 rounded-2xl p-4">
                  <p className="font-semibold">💬 Ejemplo:</p>
                  <p>{actividad.ejemplo}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/10 rounded-3xl p-10 backdrop-blur-md shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">📖 Referencias Bibliográficas Explicadas</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <div className="bg-slate-900/40 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Castelló Tiarrida (2014)</h3>
              <p>
                Explica cómo el pensamiento creativo surge de conectar conocimientos previos y organizar ideas de forma diferente.
              </p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Novillo Maldonado et al. (2017)</h3>
              <p>
                Relacionan creatividad e innovación con el desarrollo social y tecnológico de las comunidades.
              </p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Tiburcio García y Sánchez Vázquez (2018)</h3>
              <p>
                Presentan el Design Thinking como metodología centrada en comprender a las personas y generar soluciones innovadoras.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">❓ Preguntas para interactuar</h2>

            <div className="space-y-4">
              {preguntas.map((pregunta, index) => (
                <div
                  key={index}
                  className="bg-slate-900/40 rounded-2xl p-4 hover:bg-cyan-500/20 transition"
                >
                  {pregunta}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">📝 Requisitos del Entregable</h2>

            <ul className="space-y-4 text-lg">
              <li>📄 Documento en Word</li>
              <li>👥 Trabajo colaborativo</li>
              <li>🖋 Letra Calibri 11</li>
              <li>📏 Espaciado 1.5</li>
              <li>📚 Máximo 2 páginas</li>
              <li>🎓 Portada con integrantes</li>
              <li>💬 Subir reflexión breve en plataforma</li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-5xl font-bold mb-6">✨ Mensaje Final</h2>
          <p className="text-2xl leading-relaxed max-w-4xl mx-auto">
            La creatividad no es solamente tener ideas diferentes. Es la capacidad de comprender problemas reales, conectar conocimientos y construir soluciones que transformen positivamente la vida de las personas.
          </p>
        </section>
      </div>
    </div>
  );
}
