import { evaluateSymptoms } from "./health-engine.js";

const emergency = evaluateSymptoms({
  symptoms: "Tengo dolor de cabeza intenso y repentino",
  temperature: 38.2,
});
if (emergency.level !== "emergency") throw new Error("Debe detectar una señal de alarma");

const sameDay = evaluateSymptoms({
  symptoms: "Tengo dolor de cabeza y fiebre",
  temperature: 38.7,
});
if (sameDay.level !== "same-day") throw new Error("Debe recomendar evaluación médica");

const monitor = evaluateSymptoms({
  symptoms: "Tengo cansancio leve",
});
if (monitor.level !== "monitor") throw new Error("Debe permitir seguimiento");
