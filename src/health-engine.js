/**
 * Motor de orientación inicial. No diagnostica ni prescribe.
 * Requiere revisión clínica antes de usarse con pacientes reales.
 */
const RED_FLAGS = [
  "dolor de cabeza intenso y repentino",
  "confusión",
  "desmayo",
  "rigidez de cuello",
  "dificultad para respirar",
  "convulsiones",
  "debilidad de un lado del cuerpo",
];

export function evaluateSymptoms(input) {
  const text = String(input?.symptoms || "").toLowerCase();
  const temperature = Number(input?.temperature);
  const age = Number(input?.age);
  const matchedFlags = RED_FLAGS.filter((flag) => text.includes(flag));

  if (matchedFlags.length > 0 || temperature >= 40) {
    return {
      level: "emergency",
      title: "Busca atención urgente",
      message: "Hay señales que requieren evaluación profesional inmediata.",
      matchedFlags,
      actions: ["Acude a emergencias o contacta los servicios locales.", "No conduzcas si estás confundido, débil o desmayado."],
      source: "MINSA — señales de alarma en salud",
      reviewedAt: "PENDIENTE DE REVISIÓN CLÍNICA",
    };
  }

  if (temperature >= 38.5 || text.includes("fiebre")) {
    return {
      level: "same-day",
      title: "Considera una evaluación médica",
      message: "La fiebre o su persistencia justifican consultar a un profesional.",
      matchedFlags: [],
      actions: ["Registra la temperatura y la hora.", "Mantén hidratación y reposo si puedes.", "Busca atención si empeoras o aparecen señales de alarma."],
      source: "MINSA — orientación de fiebre",
      reviewedAt: "PENDIENTE DE REVISIÓN CLÍNICA",
    };
  }

  return {
    level: "monitor",
    title: "Observa tu evolución",
    message: "No se identificaron señales de alarma en esta primera revisión.",
    matchedFlags: [],
    actions: ["Registra cómo evolucionan tus síntomas.", "Consulta si persisten, empeoran o te preocupan."],
    source: "Base de orientación Salud Perú",
    reviewedAt: "PENDIENTE DE REVISIÓN CLÍNICA",
  };
}
