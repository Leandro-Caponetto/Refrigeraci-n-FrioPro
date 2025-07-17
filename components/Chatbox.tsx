/** @format */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "../types";
import { getChatResponse } from "../services/geminiService";
import { ChatBubbleIcon, CloseIcon, SendIcon } from "./IconComponents";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "init",
          role: "model",
          text: "¡Hola! Soy el asistente de FríoPro. ¿Cómo puedo ayudarte hoy?",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      const trimmedInput = userInput.trim();
      if (!trimmedInput) return;

      const newUserMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        text: trimmedInput,
      };
      const newMessages = [...messages, newUserMessage];
      setMessages(newMessages);
      setUserInput("");
      setIsLoading(true);

      try {
        const responseText = await getChatResponse(newMessages, trimmedInput);
        const newModelMessage: ChatMessage = {
          id: Date.now().toString() + "m",
          role: "model",
          text: responseText,
        };
        setMessages((prev) => [...prev, newModelMessage]);
      } catch (error) {
        const errorMessage: ChatMessage = {
          id: Date.now().toString() + "e",
          role: "model",
          text: "Lo siento, ocurrió un error. Por favor, intenta de nuevo.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [userInput, messages]
  );

  return (
    <>
      <div
        className={`fixed bottom-10 right-0 m-6 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-24 opacity-0" : "translate-x-0 opacity-100"
        }`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
          aria-label="Abrir chat">
          <ChatBubbleIcon className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`fixed bottom-6 right-6 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[500px] z-50 bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-brand-gray-light bg-brand-gray-light/50 rounded-t-2xl">
          <h3 className="font-bold text-lg text-brand-gray-dark">
            <span className="text-brand-blue">Asistente</span> ❄️ FríoPro
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-gray hover:text-brand-gray-dark">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-brand-gray-light/30">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}>
                {msg.role === "model" && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-gray-dark flex items-center justify-center text-white font-bold text-sm">
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-brand-blue text-white rounded-br-none"
                      : "bg-white text-brand-gray-dark rounded-bl-none border border-brand-gray-light"
                  }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-gray-dark flex items-center justify-center text-white font-bold text-sm">
                  IA
                </div>
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-white text-brand-gray-dark rounded-bl-none border border-brand-gray-light">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-brand-gray rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 bg-brand-gray rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 bg-brand-gray rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-brand-gray-light">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-brand-blue text-white rounded-full p-3 hover:bg-brand-blue-dark disabled:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              disabled={!userInput.trim() || isLoading}
              aria-label="Enviar mensaje">
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
