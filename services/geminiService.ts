import { GoogleGenAI, Type, Content } from "@google/genai";
import { DiagnosticResult, ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const diagnosticSchema = {
    type: Type.OBJECT,
    properties: {
        problema_identificado: {
            type: Type.STRING,
            description: "Un resumen conciso del problema que el usuario describió. Por ejemplo: 'Congelamiento de la tubería de baja presión' o 'Fuga de agua en la unidad interior'."
        },
        posibles_causas: {
            type: Type.ARRAY,
            description: "Una lista de las causas más probables del problema.",
            items: {
                type: Type.OBJECT,
                properties: {
                    causa: {
                        type: Type.STRING,
                        description: "La posible causa. Por ejemplo: 'Filtro de aire sucio' o 'Bajo nivel de gas refrigerante'."
                    },
                    solucion_sugerida: {
                        type: Type.STRING,
                        description: "Una solución sugerida que el usuario podría intentar (si es segura) o que un técnico realizaría. Por ejemplo: 'Limpie o reemplace el filtro de aire.' o 'Un técnico debe verificar la carga de refrigerante y reparar cualquier fuga.'"
                    }
                },
                required: ["causa", "solucion_sugerida"]
            }
        },
        recomendacion_profesional: {
            type: Type.STRING,
            description: "Una recomendación final clara, enfatizando cuándo y por qué se debe contactar a un técnico profesional. Debe incluir una advertencia sobre los riesgos de reparaciones complejas."
        }
    },
    required: ["problema_identificado", "posibles_causas", "recomendacion_profesional"]
};

function validateDiagnosticResult(data: any): data is DiagnosticResult {
    return (
        data &&
        typeof data.problema_identificado === 'string' &&
        typeof data.recomendacion_profesional === 'string' &&
        Array.isArray(data.posibles_causas) &&
        data.posibles_causas.every(
            (item: any) =>
                item &&
                typeof item.causa === 'string' &&
                typeof item.solucion_sugerida === 'string'
        )
    );
}


export const getDiagnostic = async (problemDescription: string): Promise<DiagnosticResult> => {
    
    const systemInstruction = `
        Eres "FríoPro", un técnico experto en refrigeración y aire acondicionado con más de 20 años de experiencia.
        Tu objetivo es analizar la descripción del problema de un usuario y proporcionar un diagnóstico preliminar claro, profesional y seguro.
        Debes basar tu análisis en el conocimiento experto de HVAC, cubriendo sistemas split, mini-split, de ventana, industriales, neveras y congeladores.
        
        Considera las siguientes fallas comunes y sus causas:
        - Congelamiento de tuberías: falta de gas, filtro sucio, evaporador bloqueado, ventilador dañado, sensor de temperatura fallando.
        - Fugas de gas: tuberías aceitosas, conexiones flojas, corrosión.
        - No enfría: falta de gas, compresor dañado, filtro sucio, problemas de termostato.
        - Fugas de agua: drenaje obstruido, instalación incorrecta.
        - Olores extraños: moho en el evaporador, problemas eléctricos.
        - Ruidos inusuales: piezas sueltas, problema en el ventilador o compresor.
        - Ciclos cortos (enciende y apaga): termostato mal ubicado, equipo sobredimensionado, falta de refrigerante.
        - Compresor no arranca/apaga: capacitor dañado, problema de termostato, fallo eléctrico.

        Tu respuesta DEBE ser estructurada estrictamente en el formato JSON solicitado. No agregues ninguna explicación fuera del JSON.
        Sé directo y utiliza un lenguaje que un usuario no técnico pueda entender, pero que demuestre tu profesionalismo.
        Prioriza la seguridad: para cualquier tarea que implique manipular refrigerantes, componentes eléctricos o partes internas complejas, SIEMPRE debes recomendar contactar a un técnico certificado.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analiza el siguiente problema: "${problemDescription}"`,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: diagnosticSchema,
                temperature: 0.5,
            },
        });

        const jsonText = response.text?.trim();
        if (!jsonText) {
            throw new Error("La IA no generó una respuesta. Por favor, intenta de nuevo.");
        }

        const result = JSON.parse(jsonText);
        
        if (!validateDiagnosticResult(result)) {
            console.error("Invalid data structure received from AI:", result);
            throw new Error("La IA generó una respuesta con un formato inesperado. Por favor, intenta de nuevo.");
        }
        
        return result;

    } catch (error) {
        console.error("Error fetching or parsing diagnostic from Gemini:", error);
        if (error instanceof Error) {
            if (error.message.includes('JSON') || error.message.includes('inesperado')) {
                 throw new Error("Hubo un problema procesando la respuesta de la IA. Intenta reformular tu consulta.");
            }
            if(error.message.includes('IA no generó')) {
                throw error;
            }
            throw new Error("No se pudo comunicar con el servicio de IA. Verifica tu conexión o inténtalo más tarde.");
        }
        throw new Error("Ocurrió un error desconocido al contactar al servicio de IA.");
    }
};

export const getChatResponse = async (history: ChatMessage[], newMessage: string): Promise<string> => {
    const chatHistory: Content[] = history.map(message => ({
        role: message.role,
        parts: [{ text: message.text }],
    }));

    const contents: Content[] = [...chatHistory, { role: 'user', parts: [{ text: newMessage }] }];

    const systemInstruction = `Eres un asistente virtual de FríoPro, un servicio técnico experto en aire acondicionado y refrigeración. Eres amable, servicial y conocedor.
    Tu objetivo es responder las preguntas de los usuarios de forma concisa y clara.
    - Si te preguntan sobre un problema técnico, anímales a usar la herramienta de "Diagnóstico IA" que se encuentra en la página principal para un análisis más detallado.
    - Si quieren agendar una cita o un servicio, dirígelos a la sección de "Contacto".
    - Si preguntan por los servicios ofrecidos, resume brevemente los servicios (reparación, mantenimiento, instalación) y anímales a visitar la sección "Servicios".
    - Mantén las respuestas breves y al punto. No generes listas largas. Sé un asistente útil, no un manual técnico.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching chat response from Gemini:", error);
        return "Lo siento, estoy teniendo problemas para conectarme en este momento. Por favor, inténtalo de nuevo más tarde.";
    }
};