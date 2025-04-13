import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Menu, MenuItem } from "@/components/ui/menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon, Moon, Sun, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [problem, setProblem] = useState('');
  const [answer, setAnswer] = useState('');
  const [conversation, setConversation] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [question, setQuestion] = useState('');
  const [finalResult, setFinalResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const startSession = async () => {
    try {
      const res = await axios.post(`${api}/api/sessions`, { problem });
      setSessionId(res.data.sessionId);
      setConversation([`🟡 Problema: ${problem}`, `🤖 ${res.data.question}`]);
      setQuestion(res.data.question);
    } catch (err) {
      alert("Erro ao iniciar análise.");
    }
  };

  const sendAnswer = async () => {
    if (!answer.trim()) return;
    try {
      const res = await axios.post(`${api}/api/sessions/${sessionId}`, {
        answer: answer.trim()
      });

      setConversation(prev => [...prev, `👤 ${answer}`]);
      setAnswer('');

      if (res.data.final) {
        setConversation(prev => [...prev, `✅ ${res.data.result}`]);
        setFinalResult(res.data.result);
        setQuestion('');
      } else {
        setConversation(prev => [...prev, `🤖 ${res.data.question}`]);
        setQuestion(res.data.question);
      }
    } catch (err) {
      alert("Erro ao enviar resposta.");
    }
  };

  const exportToTextFile = () => {
    const blob = new Blob([conversation.join('\n') + '\n' + finalResult], { type: 'text/plain' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "analise-5porques.txt";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100">
      <header className
