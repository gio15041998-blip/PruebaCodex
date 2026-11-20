# Salud Perú — estructura del producto

## Pantallas del MVP
1. Landing y consulta de síntomas
2. Acceso y creación de cuenta
3. Resultado orientativo y resumen
4. Historial de consultas
5. Evolución personal
6. Perfil y consentimiento
7. Estadísticas agregadas por región

## Flujo principal
Landing → Consultar síntomas → Cuenta → Consulta guardada → Resumen → Historial/Evolución.

## Datos
- Cuenta: nombre, correo, edad y consentimiento.
- Consulta: texto libre, fecha, región opcional y estado de seguimiento.
- Estadísticas: únicamente agregadas, con tamaño de muestra y sin identificadores.

## Pendiente para producción
- Google OAuth real.
- Base de datos y API.
- Gestión de sesiones y recuperación de cuenta.
- Consentimiento versionado y eliminación de datos.
- Revisión médica de contenidos y reglas.
- Auditoría de seguridad y cumplimiento peruano.
