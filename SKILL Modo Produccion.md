---
name: modo-produccion
description: Revisa una app/landing, detecta problemas típicos, propone mejoras y aplica correcciones con un checklist fijo para dejarlo listo para enseñar o publicar.
---

# Modo Producción (QA + Fix)

## Cuándo usar este skill

- Cuando ya tienes algo generado (landing/app) y quieres dejarlo "presentable".
- Cuando algo funciona "a medias" (móvil raro, imágenes rotas, botones sin acción, espaciados feos).
- Antes de enseñarlo a un cliente, grabarlo o publicarlo.

## Inputs necesarios

> Si alguno falta, pregunta antes de continuar.

1. Archivo principal del proyecto (ej. `index.html` o ruta del proyecto).
2. Objetivo de la revisión: `"lista para enseñar"` o `"lista para publicar"`.
3. Restricciones: no cambiar branding / no cambiar copy / no tocar estructura, etc.

## Checklist de calidad (orden fijo)

### A) Funciona y se ve
- [ ] Abre la preview / localhost sin errores.
- [ ] Imágenes cargan y no hay rutas rotas.
- [ ] Tipografías y estilos se aplican correctamente.

### B) Responsive (móvil primero)
- [ ] Se ve bien en móvil (no se corta, no hay scroll horizontal).
- [ ] Botones y textos tienen tamaños legibles.
- [ ] Secciones con espaciado coherente.

### C) Copy y UX básica
- [ ] Titular claro y coherente con la propuesta.
- [ ] CTAs consistentes (mismo verbo, misma intención).
- [ ] No hay texto "placeholder" tipo lorem ipsum.

### D) Accesibilidad mínima
- [ ] Contraste razonable en textos.
- [ ] Imágenes con atributo `alt`.
- [ ] Estructura de headings (`h1`, `h2`) lógica.

## Workflow

1. **Diagnóstico rápido**: lista de problemas en 5–10 bullets (priorizados).
2. **Plan de arreglos**: "qué cambio y por qué" (máximo 8 cambios).
3. **Aplicar cambios**: modifica los archivos necesarios.
4. **Validación**: vuelve a abrir preview y confirma el checklist.
5. **Resumen final**: cambios hechos + qué queda opcional para mejorar.

## Reglas

- No cambies el estilo de marca si existe un skill de marca activo.
- No rehagas todo: corrige lo mínimo para ganar calidad rápido.
- Si hay conflicto entre "bonito" y "claro", prioriza **claridad**.

## Manejo de errores

- Si el archivo principal no existe o no se puede abrir: pedir la ruta correcta antes de continuar.
- Si hay conflicto entre una corrección y una restricción del usuario: informar y proponer alternativa.
- Si tras aplicar cambios persiste un problema: documentarlo en "notas" del resumen final.

## Output (formato exacto)

```
### 1. Diagnóstico (priorizado)
- [CRÍTICO] ...
- [MEDIO] ...
- [OPCIONAL] ...

### 2. Cambios aplicados
- ...
- ...

### 3. Resultado
**Estado**: OK para enseñar / OK para publicar
**Notas**: ...
```
