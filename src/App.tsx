/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Bell, 
  MessageCircle, 
  MessageSquare,
  Check, 
  Heart, 
  Church, 
  Calendar, 
  Users, 
  Home, 
  Megaphone, 
  Shield, 
  Clock, 
  Headphones, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Settings, 
  ArrowRight, 
  ChevronRight, 
  Monitor, 
  Tablet, 
  Smartphone,
  Video,
  Play,
  Pause,
  RotateCcw,
  UploadCloud,
  FileVideo,
  Globe,
  ArrowUpRight,
  Star,
  Sparkle,
  Trash,
  XCircle,
  Plus,
  Search,
  Lock,
  Unlock,
  Trash2,
  Edit,
  Compass,
  MapPin,
  Gift,
  AlertTriangle,
  Mail,
  Eye,
  Youtube
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Official WhatsApp Logo Icon SVG
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.975L2 22l5.233-1.371a9.92 9.92 0 0 0 4.777 1.21h.005c5.505 0 9.99-4.478 9.99-9.986C22.006 6.477 17.518 2 12.012 2zm6.056 14.153c-.266.751-1.325 1.373-1.826 1.434-.457.056-.913.085-1.37.042-.693-.066-1.528-.271-2.457-.655-3.834-1.583-6.275-5.467-6.467-5.723-.19-.256-1.393-1.854-1.393-3.538 0-1.684.855-2.512 1.159-2.856.304-.344.665-.43.886-.43.22 0 .443.002.637.011.201.009.472-.077.738.563.266.642.913 2.22.991 2.378.077.158.129.342.023.553-.106.21-.158.342-.315.524-.158.181-.332.404-.475.541-.159.151-.326.315-.14.636.186.321.82 1.348 1.758 2.186.938.838 1.725 1.096 2.046 1.233.321.137.51.114.7-.101.19-.215.82-.953 1.04-1.278.22-.325.44-.271.738-.161.299.111 1.888.891 2.211 1.052.321.161.536.24.614.375.078.135.078.78-.188 1.531z" />
    </svg>
  );
}

// Custom crisp SVG Logo for Agenda Ministerial Inteligente - Designed exactly like the original uploaded image
function AppLogo({ showText = true, className = "", variant = "dark" }: { showText?: boolean, className?: string, variant?: "dark" | "light" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Logo Icon Styled Exactly Like the Uploaded Image (Black Rounded Icon, Gold Calendar & Fountain Pen) */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-b from-[#1E1F22] to-[#0B0C0E] border border-amber-500/20 shadow-lg flex items-center justify-center p-1 overflow-hidden">
        {/* Subtle radial sheen gold background element */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_70%)]" />
        
        {/* Vector SVG representation of the gold/dark calendar + fountain pen */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[90%] h-[90%] select-none drop-shadow-md">
          {/* Calendar Body Outline - Thick Premium Gold Border */}
          <rect x="20" y="24" width="56" height="50" rx="9" stroke="#EAB308" strokeWidth="4.5" fill="#141517" />
          
          {/* 3 Top Binder Loops - Metallic Charcoal with gold accents */}
          <rect x="30" y="12" width="6" height="16" rx="3" fill="#0C0D0F" stroke="#EAB308" strokeWidth="1.5" />
          <rect x="45" y="12" width="6" height="16" rx="3" fill="#0C0D0F" stroke="#EAB308" strokeWidth="1.5" />
          <rect x="60" y="12" width="6" height="16" rx="3" fill="#0C0D0F" stroke="#EAB308" strokeWidth="1.5" />

          {/* Calendar Grid Days (3x4 rows/columns) - Rounded slate/graphite grids */}
          {/* Row 1 */}
          <rect x="29" y="34" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="40" y="34" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="51" y="34" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="62" y="34" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          
          {/* Row 2 */}
          <rect x="29" y="44" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="40" y="44" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          {/* Original Logo Highlighted Gold/Orange Day (Row 2, Column 3) */}
          <rect x="51" y="44" width="7" height="6" rx="1.5" fill="#EAB308" />
          <rect x="62" y="44" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          
          {/* Row 3 */}
          <rect x="29" y="54" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="40" y="54" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="51" y="54" width="7" height="6" rx="1.5" fill="#2A2B2F" />
          <rect x="62" y="54" width="7" height="6" rx="1.5" fill="#2A2B2F" />

          {/* Huge thick sweep gold checkmark passing behind/crossing the pen */}
          <path d="M36 57 L47 67 L76 39" stroke="#EAB308" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

          {/* Diagonal Fountain Pen with gold accents crossing the calendar */}
          {/* Rotated to point elegantly towards the checkmark center */}
          <g transform="rotate(27, 50, 48)">
            {/* Pen cap & upper barrel - Black/Carbon texture */}
            <rect x="47" y="10" width="7" height="42" rx="1.5" fill="#141517" stroke="#4B5563" strokeWidth="1" />
            <rect x="47" y="15" width="7" height="2" fill="#EAB308" />
            
            {/* Gold clip */}
            <path d="M54 15 L59 15 L59 28 L54 28" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Lower grip section - Dark charcoal */}
            <rect x="47.5" y="52" width="6" height="12" fill="#242529" />
            {/* Gold connector ring */}
            <rect x="47" y="51" width="7" height="2" fill="#EAB308" />
            
            {/* Exquisite Gold Nib pointing to the check path */}
            <path d="M48 64 L46 72 L50.5 79 L55 72 L53 64 Z" fill="#EAB308" />
            {/* Nib detailing lines */}
            <line x1="50.5" y1="64" x2="50.5" y2="76" stroke="#141517" strokeWidth="1" />
            <circle cx="50.5" cy="72" r="0.8" fill="#141517" />
          </g>
        </svg>
      </div>

      {/* Styled Text Block from the Original Logo Design */}
      {showText && (
        <div className="flex flex-col select-none font-display">
          <span className={`text-base tracking-[0.14em] font-black leading-none ${variant === "dark" ? "text-slate-900" : "text-white"}`}>
            AGENDA
          </span>
          <span className={`text-[10px] tracking-[0.24em] font-extrabold leading-none ${variant === "dark" ? "text-slate-500" : "text-slate-300"} mt-1 uppercase`}>
            MINISTERIAL
          </span>
          {/* Spaced out INTELIGENTE with thin separator lines on left and right */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className={`h-[1px] w-2 ${variant === "dark" ? "bg-amber-500/40" : "bg-amber-400/40"}`} />
            <span className="text-[9px] tracking-[0.16em] font-black leading-none text-amber-500 uppercase">
              INTELIGENTE
            </span>
            <div className={`h-[1px] w-2 ${variant === "dark" ? "bg-amber-500/40" : "bg-amber-400/40"}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  // Configurable Target WhatsApp Number and prefilled message
  const [whatsappNumber, setWhatsappNumber] = useState(() => {
    return localStorage.getItem("ami_wa_number") || "5511977294510";
  });
  const [whatsappMsg, setWhatsappMsg] = useState(() => {
    return localStorage.getItem("ami_wa_message") || "Olá! Quero conhecer a Agenda Ministerial Inteligente e saber mais sobre o teste grátis de 7 dias.";
  });

  const [showConfig, setShowConfig] = useState(false);
  
  // Admin Mode state - defaults to true in development/preview environments, and false in production custom domains, but can be activated/deactivated anytime!
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "true" || params.get("config") === "true") {
        localStorage.setItem("ami_admin_active", "true");
        return true;
      }
      
      const saved = localStorage.getItem("ami_admin_active");
      if (saved === "true") return true;
      if (saved === "false") return false;

      // Automatically enable admin mode in development/preview stages so the user doesn't get locked out
      const host = window.location.hostname;
      if (
        host.includes("localhost") || 
        host.includes("127.0.0.1") || 
        host.includes("ais-dev") || 
        host.includes("ais-pre") || 
        host.includes("run.app")
      ) {
        return true;
      }
    }
    return false;
  });

  const [isCopied, setIsCopied] = useState(false);

  // Active states for interactive system devices preview
  const [activeDeviceTab, setActiveDeviceTab] = useState<"dashboard" | "escalas" | "aniversariantes">("dashboard");
  const [mobileScreen, setMobileScreen] = useState<"aniversariantes" | "visitas" | "escalas">("aniversariantes");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estados para o Módulo de Escalas e Notificações Interativo Estilo BR
  const [interactiveVolunteers, setInteractiveVolunteers] = useState([
    { id: 1, name: "David Oliveira", role: "Ministério de Louvor", phone: "(11) 98765-4321", status: "Pendente", time: "Domingo às 19:00", avatarBg: "bg-amber-500", substitute: "Júlia Costa" },
    { id: 2, name: "Ana Clara", role: "Infantil & Berçário", phone: "(11) 97777-6655", status: "Confirmado", time: "Domingo às 18:45", avatarBg: "bg-pink-500", substitute: "Sarah Souza" },
    { id: 3, name: "Tiago Gomes", role: "Mídia & Áudio", phone: "(11) 96123-4567", status: "Pendente", time: "Domingo às 18:30", avatarBg: "bg-blue-500", substitute: "Lucas Lima" },
    { id: 4, name: "Roberto Santos", role: "Diáconos & Recepção", phone: "(11) 95555-4433", status: "Confirmado", time: "Domingo às 18:05", avatarBg: "bg-teal-500", substitute: "Marcos Pinheiro" }
  ]);
  const [selectedVolId, setSelectedVolId] = useState(1);
  const [dispatchStates, setDispatchStates] = useState<{ [key: number]: "idle" | "sending" | "dispatched" }>({});
  const [fallbackLogs, setFallbackLogs] = useState<string[]>([]);

  const handleDispatchZap = (id: number) => {
    setDispatchStates(prev => ({ ...prev, [id]: "sending" }));
    setTimeout(() => {
      setDispatchStates(prev => ({ ...prev, [id]: "dispatched" }));
      const vol = interactiveVolunteers.find(v => v.id === id);
      if (vol) {
        setFallbackLogs(prev => [
          `Disparo de escala enviado para ${vol.name} (${vol.phone}) às ${new Date().toLocaleTimeString('pt-BR')}! 🚀`,
          ...prev
        ]);
      }
    }, 1000);
  };

  // Estados para a Central de Segurança e Banco de Dados com Dados Pessoais Integrados
  const [dbMembers, setDbMembers] = useState([
    { id: 1, name: "Pastor Presidente", role: "Pastor Presidente", email: "pastor@agenda.com", password: "Senha_Forte_@2026", personalData: "Dados Limitados à Igreja Local", accessLevel: "Administrador Geral" },
    { id: 2, name: "Secretaria Geral", role: "Coord. Geral de Escalas", email: "secretaria@agenda.com", password: "Secretaria_99", personalData: "Dados Limitados à Igreja Local", accessLevel: "Líder de Escala" },
    { id: 3, name: "Líder de Louvor", role: "Líder de Louvor", email: "louvor@agenda.com", password: "Louvor_Geral_77", personalData: "Dados Limitados à Igreja Local", accessLevel: "Voluntário Autorizado" },
    { id: 4, name: "Líder Infantil", role: "Líder Infantil", email: "infantil@agenda.com", password: "Infantil_Geral_88", personalData: "Dados Limitados à Igreja Local", accessLevel: "Voluntário Autorizado" }
  ]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("Voluntário");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberPassword, setNewMemberPassword] = useState("");
  const [newMemberPersonal, setNewMemberPersonal] = useState("");
  const [newMemberAccess, setNewMemberAccess] = useState("Voluntário Autorizado");
  const [showMemberPasswords, setShowMemberPasswords] = useState<{ [key: number]: boolean }>({});
  const [isChurchSyncEnabled, setIsChurchSyncEnabled] = useState(true);
  const [dbNotification, setDbNotification] = useState("");

  const handleAddDbMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName || !newMemberEmail || !newMemberPassword) {
      setDbNotification("⚠️ Por favor, insira Nome, E-mail (Login) e Senha para criar o acesso pessoal!");
      return;
    }
    const newM = {
      id: Date.now(),
      name: newMemberName,
      role: newMemberRole,
      email: newMemberEmail,
      password: newMemberPassword,
      personalData: newMemberPersonal || "CPF: Não Informado | RG: Não Informado",
      accessLevel: newMemberAccess
    };
    setDbMembers(prev => [...prev, newM]);
    setDbNotification(`✅ Usuário "${newMemberName}" cadastrado com sucesso! Credenciais e dados pessoais arquivados em ambiente criptografado.`);
    setNewMemberName("");
    setNewMemberEmail("");
    setNewMemberPassword("");
    setNewMemberPersonal("");
    setTimeout(() => setDbNotification(""), 5000);
  };

  const togglePasswordVisibility = (id: number) => {
    setShowMemberPasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSimulateResponse = (id: number, answer: "Confirmado" | "Recusado") => {
    const vol = interactiveVolunteers.find(v => v.id === id);
    if (!vol) return;

    if (answer === "Confirmado") {
      setInteractiveVolunteers(prev => prev.map(v => {
        if (v.id === id) {
          return { ...v, status: "Confirmado" };
        }
        return v;
      }));
      setFallbackLogs(prev => [
        `✓ ${vol.name} respondeu "OK" pelo WhatsApp. Status definido como: CONFIRMADO! 🎉`,
        ...prev
      ]);
    } else {
      setFallbackLogs(prev => [
        `✓ Nova escala recomposta! ${vol.substitute} está confirmado no ministério. 💪`,
        `🔔 Suplente ${vol.substitute} respondeu OK via WhatsApp e aceitou a vaga!`,
        `🤖 ROBÔ PREVENTIVO ACIONADO: Enviando notificação para o suplente da fila (${vol.substitute})...`,
        `❌ ${vol.name} recusou a escala por impossibilidade.`,
        ...prev
      ]);

      setInteractiveVolunteers(prev => prev.map(v => {
        if (v.id === id) {
          return { ...v, name: `${v.substitute}`, status: "Confirmado" };
        }
        return v;
      }));
    }
  };

  const handleResetInteractiveVolunteers = () => {
    setInteractiveVolunteers([
      { id: 1, name: "David Oliveira", role: "Ministério de Louvor", phone: "(11) 98765-4321", status: "Pendente", time: "Domingo às 19:00", avatarBg: "bg-amber-500", substitute: "Júlia Costa" },
      { id: 2, name: "Ana Clara", role: "Infantil & Berçário", phone: "(11) 97777-6655", status: "Confirmado", time: "Domingo às 18:45", avatarBg: "bg-pink-500", substitute: "Sarah Souza" },
      { id: 3, name: "Tiago Gomes", role: "Mídia & Áudio", phone: "(11) 96123-4567", status: "Pendente", time: "Domingo às 18:30", avatarBg: "bg-blue-500", substitute: "Lucas Lima" },
      { id: 4, name: "Roberto Santos", role: "Diáconos & Recepção", phone: "(11) 95555-4433", status: "Confirmado", time: "Domingo às 18:05", avatarBg: "bg-teal-500", substitute: "Marcos Pinheiro" }
    ]);
    setDispatchStates({});
    setFallbackLogs([]);
    setSelectedVolId(1);
  };

  // Synchronize dynamic parameters in localStorage
  useEffect(() => {
    localStorage.setItem("ami_wa_number", whatsappNumber);
  }, [whatsappNumber]);

  useEffect(() => {
    localStorage.setItem("ami_wa_message", whatsappMsg);
  }, [whatsappMsg]);

  // Construct final WhatsApp redirection url
  const getWhatsAppLink = (customText?: string) => {
    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    const encodedText = encodeURIComponent(customText || whatsappMsg);
    return `https://wa.me/${cleanNumber}?text=${encodedText}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getWhatsAppLink());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Sales video state and custom YouTube/Promo URL link options - Optimized for lightweight loading!
  const [videoUrl, setVideoUrl] = useState<string>(() => {
    const saved = localStorage.getItem("ami_wa_video_url");
    if (saved === "CLEARED") return "";
    return saved || "https://www.youtube.com";
  });
  const [videoInputText, setVideoInputText] = useState("");
  const [showVideoSettings, setShowVideoSettings] = useState(true);

  // Handlers for video setting - Simplified to prevent heavy local file loads and keep the page ultra fast
  const handleSaveVideoUrl = (url: string) => {
    const trimmed = url.trim();
    localStorage.setItem("ami_wa_video_url", trimmed);
    setVideoUrl(trimmed);
  };

  const handleClearVideo = () => {
    localStorage.setItem("ami_wa_video_url", "CLEARED");
    setVideoUrl("");
    setVideoInputText("");
  };

  const handleRestoreDefaultVideo = () => {
    localStorage.removeItem("ami_wa_video_url");
    const defaultUrl = "https://www.youtube.com";
    setVideoUrl(defaultUrl);
    setVideoInputText("");
  };

  const isYouTubeUrl = (url: string) => {
    if (!url) return false;
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=0&rel=0`;
    }
    return null;
  };

  // Mock Data for the interactive mock screens
  const aniversariantesData = [
    { name: "João Silva", relative: "Hoje de aniversário! 🎉", status: "Hoje", phone: "5511999999999", avatarBg: "bg-amber-500" },
    { name: "Maria Souza", relative: "Aniversário amanhã! 🎂", status: "Amanhã", phone: "5511999999999", avatarBg: "bg-blue-500" },
    { name: "Pedro Lima", relative: "Próxima terça (15/06) 🎈", status: "15/06", phone: "5511999999999", avatarBg: "bg-pink-500" },
  ];

  const escalasData = [
    { ministry: "Louvor & Adoração", time: "Dom, 19:00", leader: "David Oliveira", badge: "Afinado" },
    { ministry: "Palavra (Pregação)", time: "Dom, 19:30", leader: "Pr. Marcos Souza", badge: "Confirmado" },
    { ministry: "Mídia & Transmissão", time: "Dom, 18:30", leader: "Tiago Gomes", badge: "Confirmado" },
    { ministry: "Infantil & Berçário", time: "Dom, 18:45", leader: "Ana Clara", badge: "Aguardando" },
    { ministry: "Diáconos & Recepção", time: "Dom, 18:00", leader: "Roberto Santos", badge: "Confirmado" },
  ];

  const visitasData = [
    { member: "Família Oliveira", reason: "Visita Pastoral Trimestral", schedule: "Hoje às 15:00", address: "Rua das Oliveiras, 45" },
    { member: "Irmã Cleide Ramos", reason: "Apoio e Oração Hospitalar", schedule: "Amanhã às 10:00", address: "Hospital Metropolitano" },
    { member: "Recém-Casados Lucas & Bia", reason: "Conselho Ministerial", schedule: "Quarta às 19:30", address: "Sede Pastoral" }
  ];

  return (
    <div className="min-h-screen font-sans bg-[#F4F8FA] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      
      {/* Interactive Settings Gear Button (Dynamic customization of conversion path) */}
      {isAdmin && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 pointer-events-auto border border-amber-400/30 group focus:outline-hidden"
            id="toggle_settings_button"
          >
            <Settings className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-[9px] font-extrabold uppercase tracking-widest pr-0.5">Configurar</span>
          </button>

          {/* Floating customization dialog */}
          <AnimatePresence>
            {showConfig && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute bottom-16 left-0 w-85 bg-white rounded-2xl p-5.5 shadow-2xl border border-slate-200 z-50 overflow-hidden"
              >
                <div className="flex justify-between items-center mb-3.5">
                  <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5 font-display uppercase tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                    WhatsApp Business Config
                  </h4>
                  <button 
                    onClick={() => setShowConfig(false)}
                    className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 mb-4.5 leading-relaxed bg-blue-50/50 border border-blue-101 rounded-xl p-3">
                  <span className="font-bold text-blue-900 block mb-1">Como funciona a Integração Real?</span>
                  Ao preencher os campos abaixo, <strong className="text-slate-800">todos os botões "Quero saber mais" e canais de contato</strong> deste site direcionarão os visitantes com a sua mensagem correta! Seu robô do WhatsApp Business poderá ler esta palavra-chave para enviar seu link de testes automaticamente.
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-black text-slate-700 block mb-1 uppercase tracking-wider">
                      Seu Número do WhatsApp Business:
                    </label>
                    <input
                      type="text"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="Ex: 5511999999999"
                      className="w-full text-xs px-3.5 py-2.5 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-800 font-mono bg-slate-50 border-slate-200"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block leading-normal">
                      Coloque código do país (55 para Brasil), DDD e Celular (sem traços, espaços ou parênteses).
                    </span>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 block mb-1 uppercase tracking-wider">
                      Mensagem de Disparo (Gatilho da Automação)
                    </label>
                    <textarea
                      rows={3}
                      value={whatsappMsg}
                      onChange={(e) => setWhatsappMsg(e.target.value)}
                      placeholder="Ex: Olá! Quero conhecer mais sobre o painel..."
                      className="w-full text-xs px-3.5 py-2.5 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-slate-50 border-slate-200 leading-relaxed font-medium"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block leading-normal">
                      Seu bot ou autoresponder lerá essa mensagem e responderá com o link do seu app!
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex gap-2.5">
                    <button
                      onClick={handleCopyLink}
                      className="flex-1 px-3 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 border border-slate-200 uppercase tracking-wider"
                    >
                      {isCopied ? "Copiado!" : "Copiar Link"}
                    </button>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black transition-all text-center flex items-center justify-center gap-1 shadow-md shadow-emerald-100 uppercase tracking-wider"
                    >
                      Testar Bot
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>

                  <div className="text-[9px] text-center text-slate-400 border-t border-slate-200/50 pt-2.5">
                    💡 <span className="font-semibold text-slate-500">Dica:</span> Envie seu número e mensagens no chat se desejar gravá-los permanentemente nas opções-padrão do código fonte do site!
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Floating Official Floating WhatsApp Button (Standard for conversion in BR market) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:scale-115 transition-all duration-300 group flex items-center justify-center glow-green"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Fale Conosco
        </span>
      </a>

      {/* Modern Sticky Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-55/40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <AppLogo showText={true} />
            
            {/* Nav Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Início</a>
              <a href="#recursos" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Recursos</a>
              <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Benefícios</a>
              <a href="#diferenciais" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Diferenciais</a>
              <a href="#como-funciona" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Como Funciona</a>
              <a href="#planos" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Planos</a>
            </div>

            {/* CTA Navbar - Adjusted to be clean and compact */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-full text-[11px] font-extrabold shadow-xs transition-all flex items-center gap-1.5 border border-blue-800"
              >
                <span>Teste 7 Dias Grátis</span>
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            {/* Mobile menu toggle button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-light-blue-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                <a 
                  href="#inicio" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-2.5 border-b border-slate-50"
                >
                  Início
                </a>
                <a 
                  href="#recursos" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-2.5 border-b border-slate-50"
                >
                  Recursos
                </a>
                <a 
                  href="#beneficios" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-2.5 border-b border-slate-50"
                >
                  Benefícios
                </a>
                <a 
                  href="#diferenciais" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-2.5 border-b border-slate-50"
                >
                  Diferenciais
                </a>
                <a 
                  href="#como-funciona" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-2.5 border-b border-slate-50"
                >
                  Como Funciona
                </a>
                <a 
                  href="#planos" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-2.5"
                >
                  Planos
                </a>

                {/* Mobile Drawer Key CTA */}
                <div className="pt-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-md hover:bg-green-600 transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Quero meu teste grátis agora</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Head Section with beautiful gradients */}
      <header id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-[#F4F8FA]">
        
        {/* Absolute Background abstract light shapes (No cluttering, beautiful subtle blue/yellow) */}
        <div className="absolute top-1/4 right-0 leading-none pointer-events-none transform translate-x-1/3 select-none opacity-40 blur-3.5xl">
          <div className="w-96 h-96 rounded-full bg-blue-300" />
        </div>
        <div className="absolute top-10 left-0 leading-none pointer-events-none transform -translate-x-1/4 select-none opacity-20 blur-3.5xl">
          <div className="w-80 h-80 rounded-full bg-amber-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO LEFT: TEXTS, PILLS & GIGANTIC CONVERSION BUTTON */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Promo Badge Teste 7 dias */}
              <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-100/60 border border-yellow-250 rounded-full shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                <span className="text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  Teste grátis por 7 dias
                </span>
              </div>

              {/* Majestic Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
                Organize sua igreja com uma{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-800 bg-clip-text text-transparent">
                  Agenda Ministerial Inteligente
                </span>
              </h1>

              {/* High-Converting Subtitle */}
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Gestão completa de cultos, visitas pastorais, escalas e aniversariantes com integração total com WhatsApp.
              </p>

              {/* Interactive Badges / Functional Pills from Image */}
              <div className="grid grid-cols-2 gap-3.5 w-full max-w-xl mb-10">
                <div className="bg-white/80 backdrop-blur-xs border border-blue-105 p-3.5 rounded-xl flex items-center gap-3 shadow-xs hover:border-blue-300 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 leading-none">Lembretes</h3>
                    <p className="text-[10px] text-slate-500 mt-1">Sempre inteligentes</p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs border border-blue-105 p-3.5 rounded-xl flex items-center gap-3 shadow-xs hover:border-blue-300 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 leading-none">Integração Zap</h3>
                    <p className="text-[10px] text-slate-500 mt-1">Conexão instantânea</p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs border border-blue-105 p-3.5 rounded-xl flex items-center gap-3 shadow-xs hover:border-blue-300 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <Church className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 leading-none">Gestão Total</h3>
                    <p className="text-[10px] text-slate-500 mt-1">Controle simplificado</p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs border border-blue-105 p-3.5 rounded-xl flex items-center gap-3 shadow-xs hover:border-blue-300 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 leading-none">Mais Tempo</h3>
                    <p className="text-[10px] text-slate-500 mt-1">Para o acolhimento</p>
                  </div>
                </div>
              </div>

              {/* PRIMARY HUGE WHATSAPP CONVERSION BUTTON & ASSISTANT REDIRECT */}
              <div className="w-full max-w-md">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 md:px-8 bg-[#25D366] hover:bg-[#1eba56] text-white font-bold text-lg rounded-2xl shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3.5 glow-green border-b-4 border-emerald-700 hover:border-emerald-800"
                >
                  <WhatsAppIcon className="w-6 h-6 fill-white" />
                  <span>Quero conhecer mais</span>
                </a>
                
                {/* Secondary explanatory label with handwriting link */}
                <div className="mt-4.5 flex gap-2.5 items-center justify-center text-slate-500 px-1 relative">
                  {/* Subtle curly handwritten arrow SVG */}
                  <div className="absolute -right-4 lg:-right-16 top-6 leading-none hidden lg:block text-slate-500 font-medium select-none pointer-events-none transform -rotate-12 translate-y-1">
                    <div className="flex flex-col items-center">
                      <span className="font-display italic text-sm text-blue-600 font-semibold mb-1">
                        Use no celular, tablet ou computador!
                      </span>
                      {/* Swirly Arrow */}
                      <svg className="w-14 h-9 text-blue-500" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M10 10 C 40 40, 70 40, 85 20" />
                        <path d="M75 22 L85 20 L80 10" />
                      </svg>
                    </div>
                  </div>

                  <span className="text-xs text-center leading-relaxed font-medium">
                    Fale com nossa equipe no WhatsApp e receba um vídeo exclusivo mostrando tudo sobre o sistema!
                  </span>
                </div>
              </div>
            </div>

            {/* HERO RIGHT: MULTI-DEVICE SaaS PRODUCT SHOWCASE (MOBILE, TABLET, DESKTOP) */}
            <div className="lg:col-span-6 relative mt-10 lg:mt-0 flex flex-col items-center justify-center min-h-[440px] md:min-h-[500px]">

              {/* Large responsive device display canvas */}
              <div className="relative w-full max-w-[540px] h-[380px] sm:h-[440px] select-none scale-90 sm:scale-100 flex items-center justify-center">
                
                {/* 1. DESKTOP/LAPTOP MONITOR FRAME (Back Layer - Always Opaque & Present) */}
                <div className="absolute bottom-6 sm:bottom-10 left-2 sm:left-6 md:left-10 w-[290px] sm:w-[350px] md:w-[410px] aspect-video bg-slate-950 rounded-2xl p-1.5 sm:p-2 shadow-2xl border border-slate-800/40 z-10 opacity-100 scale-100 transition-all duration-500">
                  {/* Screen Frame Bezel */}
                  <div className="w-full h-full bg-[#0f1013] rounded-xl relative overflow-hidden flex flex-col border border-slate-900">
                    {/* Top Browser bar mock */}
                    <div className="h-5.5 bg-[#121316] border-b border-white/5 flex items-center px-2.5 gap-1 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                      <div className="text-[7.5px] font-mono text-slate-500 mx-auto select-none">
                        app.agendaministerial.com.br
                      </div>
                    </div>

                    {/* App Internal Body matching user's Image 1 & 2 */}
                    <div className="flex-1 flex overflow-hidden">
                      {/* Sidebar mimicking Image 1/2 */}
                      <div className="w-20 bg-[#131418] border-r border-white/5 p-1 flex flex-col gap-0.5 select-none text-left">
                        {/* Logo header */}
                        <div className="px-1 py-1 border-b border-white/5 mb-1 text-left">
                          <span className="text-[5.5px] font-black text-amber-400 block tracking-tight leading-none">
                            Agenda Ministerial
                          </span>
                          <span className="text-[4px] font-black text-amber-500 bg-amber-500/10 px-1 py-0.2 rounded-sm block uppercase tracking-widest mt-0.5 text-center leading-none">
                            INTELIGENTE
                          </span>
                        </div>
                        {/* Selected User Account */}
                        <div className="px-1 text-[4px] text-slate-500 truncate mb-1">
                          Igreja de Jesus Cristo
                        </div>

                        {/* Navigation items mimicking original */}
                        <div className="space-y-[1px] flex-1">
                          <div className="text-[4.5px] font-bold text-amber-400 bg-amber-500/10 border-l-2 border-amber-500 px-1 py-0.5 rounded-sm flex items-center gap-0.5">
                            <Home className="w-1 h-1 text-amber-500" />
                            <span>Dashboard</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Calendar className="w-1 h-1" />
                            <span>Eventos (Igreja)</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Compass className="w-1 h-1" />
                            <span>Min. Itinerante</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Users className="w-1 h-1" />
                            <span>Escalas</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Heart className="w-1 h-1" />
                            <span>Visitas Pastorais</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Gift className="w-1 h-1" />
                            <span>Aniversariantes</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Megaphone className="w-1 h-1" />
                            <span>Avisos</span>
                          </div>
                          <div className="text-[4.5px] font-medium text-slate-400 px-1 py-0.5 flex items-center gap-0.5 hover:text-slate-200">
                            <Settings className="w-1 h-1" />
                            <span>Configurações</span>
                          </div>
                        </div>

                        {/* SaaS License inactive box inside original app */}
                        <div className="mt-auto border border-red-500/20 bg-red-500/5 p-1 rounded-sm text-[4px] leading-tight text-left">
                          <span className="text-[#EF4444] font-black block text-[4.5px]">LICENÇA SAAS INATIVO</span>
                          <span className="text-slate-400 block mt-0.5">Licença indisponível</span>
                          <span className="text-slate-500 block">Ative seu teste por $19.90</span>
                          <div className="mt-1 bg-amber-500 text-[#0f1013] font-bold text-center rounded-[2px] py-0.5 text-[4px] select-none scale-95 origin-left">
                            Assinar Planos ↗
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 p-2 overflow-y-auto style-scrollbar flex flex-col gap-1.5 text-left bg-[#0f1013]">
                        {/* MVP Welcome Banner inside Image 2 */}
                        <div className="bg-[#181a1f] border border-amber-500/10 rounded-md p-1.5 relative overflow-hidden flex justify-between items-center bg-gradient-to-r from-[#181a1f] to-[#1e2026]">
                          <div className="max-w-[70%]">
                            <div className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-400/25 px-1 py-[1px] rounded-full text-amber-400 text-[3.5px] font-black uppercase mb-0.5">
                              <Sparkles className="w-0.5 h-0.5 text-amber-400 animate-pulse" />
                              MVP Ativo
                            </div>
                            <h5 className="text-[5.5px] font-black text-white leading-tight uppercase">
                              Olá, Líder da <span className="text-amber-400">Igreja de Jesus Cristo</span>
                            </h5>
                            <p className="text-[4px] text-slate-400 mt-[2px] leading-tight">
                              Bem-vindo ao aplicativo Agenda Ministerial Inteligente! O seu hub definitivo.
                            </p>
                          </div>
                          {/* Mini logo card */}
                          <div className="border border-amber-500/30 rounded px-1.5 py-1 bg-slate-900 flex flex-col items-center">
                            <span className="text-[4px] font-black text-amber-400">AGENDA</span>
                            <span className="text-[3px] text-slate-400 leading-none">MINISTERIAL</span>
                          </div>
                        </div>

                        {/* Top 6 Counter Widgets exactly like Image 1/2 */}
                        <div className="grid grid-cols-6 gap-1">
                          
                          {/* Widget 1: IGREJA LOCAL */}
                          <div className="bg-[#1c1d22] p-1 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[4px] font-bold text-slate-400 uppercase leading-none block">IGREJA LOCAL</span>
                              <Church className="w-1 h-1 text-blue-400" />
                            </div>
                            <span className="text-xs font-black text-white mt-1 leading-none">5</span>
                            <span className="text-[3.5px] text-slate-500 mt-0.5 font-mono">Agenda int →</span>
                          </div>

                          {/* Widget 2: VISITAS PASTORAIS */}
                          <div className="bg-[#1c1d22] p-1 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[4px] font-bold text-slate-400 uppercase leading-none block">VISITAS</span>
                              <Heart className="w-1 h-1 text-emerald-400" />
                            </div>
                            <span className="text-xs font-black text-white mt-1 leading-none">2</span>
                            <span className="text-[3.5px] text-slate-500 mt-0.5 font-mono">Ver visitas →</span>
                          </div>

                          {/* Widget 3: AVISOS DA IGREJA */}
                          <div className="bg-[#1c1d22] p-1 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[4px] font-bold text-slate-400 uppercase leading-none block">AVISOS</span>
                              <Megaphone className="w-1 h-1 text-amber-500" />
                            </div>
                            <span className="text-xs font-black text-white mt-1 leading-none">3</span>
                            <span className="text-[3.5px] text-slate-500 mt-0.5 font-mono">Ver mural →</span>
                          </div>

                          {/* Widget 4: ESCALA MINISTERIAL */}
                          <div className="bg-[#1c1d22] p-1 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[4px] font-bold text-slate-400 uppercase leading-none block">ESCALA</span>
                              <Users className="w-1 h-1 text-violet-400" />
                            </div>
                            <span className="text-xs font-black text-white mt-1 leading-none">6</span>
                            <span className="text-[3.5px] text-slate-500 mt-0.5 font-mono">Ver escalas →</span>
                          </div>

                          {/* Widget 5: ANIVERSARIANTES */}
                          <div className="bg-[#1c1d22] p-1 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[4px] font-bold text-slate-400 uppercase leading-none block">NÍVER</span>
                              <Gift className="w-1 h-1 text-pink-400" />
                            </div>
                            <span className="text-xs font-black text-white mt-1 leading-none">5</span>
                            <span className="text-[3.5px] text-slate-500 mt-0.5 font-mono">Felicitar →</span>
                          </div>

                          {/* Widget 6: MIN. ITINERANTE */}
                          <div className="bg-[#1c1d22] p-1 rounded border border-white/5 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[4px] font-bold text-slate-400 uppercase leading-none block">ITINERANTE</span>
                              <Compass className="w-1 h-1 text-[#f59e0b]" />
                            </div>
                            <span className="text-xs font-black text-white mt-1 leading-none">3</span>
                            <span className="text-[3.5px] text-slate-500 mt-0.5 font-mono">Agenda ext →</span>
                          </div>

                        </div>

                        {/* Screen main content block */}
                        <div className="flex gap-1.5 flex-1 min-h-0 overflow-hidden">
                          
                          {/* Left layout section of Image 1: Próximos Compromissos list */}
                          <div className="flex-1 bg-[#181a1f] rounded-md p-1.5 border border-white/5 flex flex-col min-h-0">
                            <div className="flex justify-between items-center mb-1 pb-1 border-b border-white/5">
                              <div>
                                <span className="text-[5.5px] font-bold text-white block">Próximos Compromissos</span>
                                <span className="text-[3.5px] text-slate-500 block leading-none">Agenda Geral Unificada</span>
                              </div>
                              <div className="flex gap-0.5 scale-95 origin-right">
                                <span className="text-[3.5px] font-semibold text-slate-900 bg-amber-500 px-1 py-0.5 rounded-[2px]">TODOS</span>
                                <span className="text-[3.5px] font-semibold text-slate-400 border border-white/5 px-1 py-0.5 rounded-[2px]">IGREJA</span>
                                <span className="text-[3.5px] font-semibold text-slate-400 border border-white/5 px-1 py-0.5 rounded-[2px]">ITINERANTE</span>
                              </div>
                            </div>

                            {/* Scrollable list replicating database and list from screenshot */}
                            <div className="space-y-1 overflow-y-auto flex-1 style-scrollbar pr-0.5">
                              
                              {/* Compromisso 1 */}
                              <div className="bg-[#131418] p-1 rounded border border-white/5 flex flex-col gap-0.5">
                                <div className="flex justify-between items-center">
                                  <span className="text-[3.5px] font-black uppercase text-[#f59e0b] bg-[#3b2100] px-1 rounded-[1px]">ITINERANTE • PARTICIPAÇÕES</span>
                                  <span className="text-[3px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-1 rounded-sm uppercase tracking-wide">Concluído</span>
                                </div>
                                <h6 className="text-[4.5px] font-bold text-white max-w-[85%] truncate">Participação Especial no Congresso de Louvor</h6>
                                <p className="text-[3.5px] text-slate-400 leading-tight">Ministros de louvor e oração de encerramento.</p>
                                <div className="grid grid-cols-2 text-[3.5px] text-slate-500 font-mono mt-0.5">
                                  <span>📅 05/06 às 19:00</span>
                                  <span className="text-right truncate">📍 Comunidade Sara No...</span>
                                </div>
                              </div>

                              {/* Compromisso 2 */}
                              <div className="bg-[#131418] p-1 rounded border border-white/5 flex flex-col gap-0.5">
                                <div className="flex justify-between items-center">
                                  <span className="text-[3.5px] font-black uppercase text-[#f59e0b] bg-[#3b2100] px-1 rounded-[1px]">ITINERANTE • CRUZADAS</span>
                                  <span className="text-[3px] text-[#60a5fa] font-bold bg-blue-500/10 border border-blue-500/20 px-1 rounded-sm uppercase tracking-wide">Agendado</span>
                                </div>
                                <h6 className="text-[4.5px] font-bold text-white max-w-[85%] truncate">Cruzada Evangelística Clamor pelas Nações</h6>
                                <p className="text-[3.5px] text-slate-400 leading-tight">Grande evento com oração pelos enfermos e evangelismo.</p>
                                <div className="grid grid-cols-2 text-[3.5px] text-slate-500 font-mono mt-0.5">
                                  <span>📅 12/06 às 20:00</span>
                                  <span className="text-right truncate">📍 Praça Central...</span>
                                </div>
                              </div>

                              {/* Compromisso 3 */}
                              <div className="bg-[#131418] p-1 rounded border border-white/5 flex flex-col gap-0.5">
                                <div className="flex justify-between items-center">
                                  <span className="text-[3.5px] font-black uppercase text-blue-400 bg-blue-950/40 px-1 rounded-[1px]">IGREJA LOCAL</span>
                                  <span className="text-[3px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-1 rounded-sm uppercase tracking-wide font-black">Este Domingo</span>
                                </div>
                                <h6 className="text-[4.5px] font-bold text-white max-w-[85%] truncate">Culto de Celebração & Família</h6>
                                <p className="text-[3.5px] text-slate-400 leading-tight">Tradicional culto com louvor, adoração e comunhão.</p>
                                <div className="grid grid-cols-2 text-[3.5px] text-slate-500 font-mono mt-0.5">
                                  <span>📅 14/06 às 19:00</span>
                                  <span className="text-right truncate">📍 Templo Principal</span>
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Right layout section of Image 1: Lembretes & Aniversariantes */}
                          <div className="w-24 flex flex-col gap-1 overflow-hidden select-none">
                            
                            {/* Lembretes de Visitas container */}
                            <div className="bg-[#181a1f] p-1 rounded border border-white/5 text-left">
                              <span className="text-[4.2px] font-bold text-[#f59e0b] uppercase tracking-wide">Lembretes de Visitas</span>
                              <div className="bg-[#131418] border border-red-500/35 p-1 rounded-[3px] mt-0.5 flex flex-col gap-[1px]">
                                <div className="flex justify-between items-center leading-none">
                                  <span className="text-[3.8px] font-black text-white truncate">Ir. Cleide Mendonça</span>
                                  <span className="text-[3px] bg-red-500 text-white font-extrabold px-[1px] rounded-[1px] leading-tight animate-pulse">!</span>
                                </div>
                                <span className="text-[3px] text-[#EF4444] font-black uppercase leading-none block">ATRASADA!</span>
                                <p className="text-[3.2px] text-slate-400 truncate leading-none">Acompanhamento pós-batismo.</p>
                              </div>
                            </div>

                            {/* Aniversariantes sidebar list */}
                            <div className="bg-[#181a1f] p-1 rounded border border-white/5 text-left">
                              <span className="text-[4.2px] font-bold text-[#f59e0b] uppercase tracking-wide">Aniversariantes</span>
                              <div className="space-y-[2px] mt-0.5">
                                <div className="flex justify-between items-center bg-[#131418] p-[3px] rounded leading-none border-l border-amber-500">
                                  <span className="text-[3.8px] font-extrabold text-white truncate">Thiago Menezes PR</span>
                                  <span className="text-[3.2px] text-amber-400 font-bold">Hoje 🎉</span>
                                </div>
                                <div className="flex justify-between items-center bg-[#131418] p-[3px] rounded opacity-75 leading-none">
                                  <span className="text-[3.8px] text-slate-350 truncate">Marcia Brandão LD</span>
                                  <span className="text-[3.2px] text-slate-500">15/06</span>
                                </div>
                              </div>
                            </div>

                            {/* Avisos Mural box */}
                            <div className="bg-[#181a1f] p-1 rounded border border-white/5 text-left">
                              <span className="text-[4.2px] font-bold text-[#f59e0b] uppercase tracking-wide">Avisos Mural</span>
                              <div className="bg-[#131418] p-1 rounded-[3px] mt-0.5 text-left border border-[#f59e0b]/10 bg-gradient-to-br from-[#131418] to-amber-500/5 leading-tight">
                                <span className="text-[3.5px] font-extrabold text-amber-500 uppercase block">Congresso Jovens 2026</span>
                                <p className="text-[3.2px] text-slate-400 leading-none mt-0.5 truncate">Lotes promocionais na secretaria.</p>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Elegant iMac-style stand */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-300 rounded-b-md shadow-lg flex flex-col items-center">
                    <div className="w-24 h-1 bg-slate-400 rounded-full mt-7" />
                  </div>
                </div>

                {/* 2. TABLET FRAME - CADASTRO DE ANIVERSARIANTES (Image 3 - Hidden on smallest viewports, shown on MD) */}
                <div className="hidden md:block absolute top-[15px] right-2 md:right-4 w-[160px] md:w-[190px] aspect-[3/4] bg-slate-900 rounded-xl p-1 sm:p-1.5 shadow-2xl border border-slate-800/40 z-20 opacity-80 hover:opacity-100 transition-all duration-300 scale-95 hover:scale-100">
                  <div className="w-full h-full bg-[#0f1013] rounded-lg relative overflow-hidden flex flex-col p-2 border border-slate-900 text-left">
                    {/* Tablet Camera */}
                    <div className="absolute top-1 right-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-slate-800" />

                    {/* Header bar mimicking Image 3 */}
                    <div className="flex justify-between items-start mb-1 pb-1 border-b border-white/5 mt-1.5 leading-none">
                      <div>
                        <h4 className="text-[8px] font-black text-[#f59e0b] leading-tight">Cadastro de Aniversariantes</h4>
                        <p className="text-[5px] text-slate-400 leading-snug">Guarde os aniversários e felicite o corpo de Cristo.</p>
                      </div>
                      <span className="text-[5px] bg-[#f59e0b] font-extrabold text-[#0f1013] px-1 py-0.5 rounded flex items-center gap-[1px] select-none">
                        <Plus className="w-1 h-1 stroke-[4]" /> Cadastrar
                      </span>
                    </div>

                    {/* Table Filters aligned like screenshot 3 */}
                    <div className="flex flex-col gap-1 mb-1.5 leading-none">
                      <div className="relative">
                        <Search className="w-1.5 h-1.5 text-slate-500 absolute left-1 top-1" />
                        <input 
                          type="text" 
                          placeholder="Pesquisar por nome ou ministério..." 
                          className="w-full bg-[#181a1f] border border-white/5 text-[5px] pl-3.5 py-0.5 rounded text-white focus:outline-none" 
                          disabled
                        />
                      </div>
                      <div className="flex gap-[2px]">
                        <span className="text-[4px] font-black text-slate-900 bg-amber-500 px-1 py-0.2 rounded-[1px] select-none">TODOS</span>
                        <span className="text-[4px] font-black text-amber-500 bg-amber-500/10 px-1 py-0.2 rounded-[1px] select-none">HOJE (1)</span>
                        <span className="text-[4px] text-slate-400 border border-white/5 px-1 py-0.2 rounded-[1px] select-none">ESTA SEMANA (2)</span>
                        <span className="text-[4px] text-slate-400 border border-white/5 px-1 py-0.2 rounded-[1px] select-none">ESTE MÊS (JUNHO)</span>
                      </div>
                    </div>

                    {/* Datatable replicating Image 3 columns and typography */}
                    <div className="flex-1 overflow-y-auto style-scrollbar space-y-[2px]">
                      <div className="min-w-full text-left">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-0.5 py-[3px] border-b border-white/5 text-[4px] font-black text-slate-400 uppercase tracking-wider">
                          <span className="col-span-4">Nome</span>
                          <span className="col-span-2">Data Nasc.</span>
                          <span className="col-span-2">Telefone</span>
                          <span className="col-span-2">Ministério</span>
                          <span className="col-span-2">Ações</span>
                        </div>

                        {/* Member 1: Juliana Vieira */}
                        <div className="grid grid-cols-12 gap-0.5 py-0.5 border-b border-white/5 items-center bg-[#131418] px-1 rounded-sm">
                          <div className="col-span-4 flex items-center gap-1 leading-none">
                            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 text-slate-950 font-black text-[5px] flex items-center justify-center">JU</span>
                            <div>
                              <span className="text-[5px] font-extrabold text-white block truncate">Juliana Vieira</span>
                              <span className="text-[3.5px] italic text-[#60a5fa] font-bold">LÍDER • FEM</span>
                            </div>
                          </div>
                          <span className="col-span-2 text-[4.2px] text-slate-200">11/06 (1994)</span>
                          <span className="col-span-2 text-[4px] font-mono text-slate-450 tracking-tighter truncate">(11) 98765-4321</span>
                          <span className="col-span-2 text-[4px] text-blue-400 font-bold bg-blue-950/40 text-center rounded py-0.2 font-medium">LOUVOR</span>
                          <div className="col-span-2 flex gap-1">
                            <span className="w-2.5 h-2.5 bg-emerald-500/20 text-emerald-400 rounded flex items-center justify-center font-bold text-[3.5px]">Z</span>
                            <span className="w-2.5 h-2.5 bg-yellow-400/20 text-yellow-500 rounded flex items-center justify-center font-bold text-[3.5px]">E</span>
                          </div>
                        </div>

                        {/* Member 2: Thiago Menezes (ACTIVE BIRTHDAY) */}
                        <div className="grid grid-cols-12 gap-0.5 py-0.5 border-b border-amber-500/25 items-center bg-amber-500/5 px-1 rounded-sm border-l-2 border-amber-500">
                          <div className="col-span-4 flex items-center gap-1 leading-none">
                            <span className="w-3.5 h-3.5 rounded-full bg-orange-600 text-white font-black text-[5px] flex items-center justify-center">TH</span>
                            <div>
                              <span className="text-[5px] font-extrabold text-white block truncate">Thiago Menezes</span>
                              <span className="text-[3.5px] italic text-[#f59e0b] font-bold">PASTOR • MASC</span>
                              <span className="text-[3px] bg-[#f59e0b] text-slate-950 px-1 py-[0.5px] rounded-[1px] block mt-0.5 font-bold leading-none select-none text-center">HOJE 🎂</span>
                            </div>
                          </div>
                          <span className="col-span-2 text-[4.2px] text-slate-200 font-bold">14/06 (1982)</span>
                          <span className="col-span-2 text-[4px] font-mono text-slate-450 tracking-tighter truncate">(11) 97777-6666</span>
                          <span className="col-span-2 text-[4px] text-blue-400 font-bold bg-blue-950/40 text-center rounded py-0.2 font-medium">PREGADORES</span>
                          <div className="col-span-2 flex gap-1">
                            <span className="w-2.5 h-2.5 bg-emerald-500/20 text-emerald-400 rounded flex items-center justify-center font-bold text-[3.5px]">Z</span>
                            <span className="w-2.5 h-2.5 bg-yellow-400/20 text-yellow-500 rounded flex items-center justify-center font-bold text-[3.5px]">E</span>
                          </div>
                        </div>

                        {/* Member 3: Beatriz Fonseca */}
                        <div className="grid grid-cols-12 gap-0.5 py-0.5 border-b border-white/5 items-center bg-[#131418] px-1 rounded-sm">
                          <div className="col-span-4 flex items-center gap-1 leading-none">
                            <span className="w-3.5 h-3.5 rounded-full bg-purple-600 text-white font-black text-[5px] flex items-center justify-center">BE</span>
                            <div>
                              <span className="text-[5px] font-extrabold text-slate-250 block truncate">Beatriz Fonseca</span>
                              <span className="text-[3.5px] italic text-slate-400 font-medium">MEMBRO • FEM</span>
                            </div>
                          </div>
                          <span className="col-span-2 text-[4.2px] text-slate-400">28/06 (1988)</span>
                          <span className="col-span-2 text-[4px] font-mono text-slate-450 tracking-tighter truncate">(11) 99911-2233</span>
                          <span className="col-span-2 text-[4px] text-blue-400 font-bold bg-blue-950/40 text-center rounded py-0.2 font-medium">INFANTIL</span>
                          <div className="col-span-2 flex gap-1">
                            <span className="w-2.5 h-2.5 bg-emerald-500/20 text-emerald-400 rounded flex items-center justify-center font-bold text-[3.5px]">Z</span>
                            <span className="w-2.5 h-2.5 bg-yellow-400/20 text-yellow-500 rounded flex items-center justify-center font-bold text-[3.5px]">E</span>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="mt-1 text-center border-t border-white/5 pt-1">
                      <span className="text-[6px] text-[#f59e0b] font-bold">✓ Central de Aniversariantes e Escalas em tempo real</span>
                    </div>
                  </div>
                </div>

                {/* 3. MOBILE DEVICE FRAME - STANDS PROUDLY IN THE FOREGROUND */}
                <div className="absolute bottom-2 left-[180px] sm:left-[240px] md:left-[280px] lg:left-[310px] w-[115px] sm:w-[150px] md:w-[170px] h-[225px] sm:h-[295px] md:h-[345px] bg-[#0c0d0f] rounded-3xl p-1 sm:p-1.5 shadow-3xl border-[2.5px] sm:border-[3px] border-slate-800 shadow-[0_20px_50px_rgba(245,158,11,0.15)] z-30 opacity-100 scale-105 origin-bottom transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_25px_60px_rgba(245,158,11,0.25)] hover:border-amber-500/50">
                  {/* Smartphone screen */}
                  <div className="w-full h-full bg-[#0a0b0d] rounded-2xl relative overflow-hidden flex flex-col text-white text-left">
                    {/* Phone Notch */}
                    <div className="absolute top-0 inset-x-0 h-3 bg-black flex justify-center items-[flex-start] z-50">
                      <div className="w-10 h-1.5 bg-black rounded-b-md flex justify-around items-center px-1">
                        <div className="w-0.5 h-0.5 rounded-full bg-slate-800" />
                        <div className="w-2.5 h-0.3 bg-slate-800 rounded-full" />
                      </div>
                    </div>

                    {/* Mobile Dashboard Body Area Container */}
                    <div className="flex-1 flex flex-col px-1.5 sm:px-2.5 pb-2 sm:pb-3 font-sans relative overflow-y-auto style-scrollbar mt-3 text-left select-none">
                      
                      {/* AppBar Header */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-1 sm:pb-1.5 mb-1 sm:mb-1.5 font-sans">
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 rounded-full bg-[#f59e0b] text-slate-950 font-black text-[4.5px] sm:text-[5px] flex items-center justify-center shadow-xs animate-pulse">
                            IJC
                          </div>
                          <div>
                            <span className="text-[3px] sm:text-[4px] text-slate-400 block leading-none">Líder Ativo</span>
                            <span className="text-[4.5px] sm:text-[5.5px] font-black text-white truncate max-w-[50px] sm:max-w-[70px] block leading-none mt-0.5">Igreja de Jesus Cristo</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-[3px] sm:gap-1 mt-1">
                          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[3px] sm:text-[3.5px] text-slate-400 font-bold uppercase tracking-wider font-mono">ONLINE</span>
                        </div>
                      </div>

                      {/* Small Quick Cards Slider styled like native eclesiastic app dashboard */}
                      <div className="grid grid-cols-2 gap-1 mb-1 sm:mb-1.5 font-sans">
                        {/* Box 1: Nossas Escalas */}
                        <div className="bg-[#131418] border border-white/5 p-1 rounded-md">
                          <span className="text-[3px] sm:text-[3.5px] font-bold text-slate-400 uppercase block">Minhas Escalas</span>
                          <span className="text-[8px] sm:text-xs font-black text-amber-500 leading-none block mt-0.5">6 Atividades</span>
                          <p className="text-[2.8px] sm:text-[3.2px] text-slate-450 mt-0.5 font-sans">2 Confirmadas ✓</p>
                        </div>
                        {/* Box 2: Aniversariantes */}
                        <div className="bg-[#131418] border border-white/5 p-1 rounded-md">
                          <span className="text-[3px] sm:text-[3.5px] font-bold text-slate-400 uppercase block">Nívers</span>
                          <span className="text-[8px] sm:text-xs font-black text-rose-500 leading-none block mt-0.5">5 Membros</span>
                          <p className="text-[2.8px] sm:text-[3.2px] text-slate-450 mt-0.5 font-sans text-rose-300">Hoje: Tiago 👋</p>
                        </div>
                      </div>

                      {/* Main Scrollable section */}
                      <div className="space-y-1 font-sans">
                        <span className="text-[3px] sm:text-[3.8px] font-black text-slate-450 uppercase tracking-widest block mb-0.5">Mural de Avisos</span>
                        
                        {/* Alert notification widget */}
                        <div className="bg-indigo-950/40 border border-indigo-500/20 rounded-md p-1 sm:p-1.5 text-[3px] sm:text-[3.8px] leading-tight text-indigo-200">
                          <div className="flex items-center gap-0.5 sm:gap-1 font-bold text-white mb-[1.5px]">
                            <Sparkles className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-amber-400 animate-bounce" />
                            <span>Escalas de Junho Ativas</span>
                          </div>
                          Por favor, confirme as escalas do ministério de louvor e recepção até Sábado!
                        </div>

                        {/* Interactive Scales Feed */}
                        <div className="mt-1.5 sm:mt-2.5">
                          <span className="text-[3px] sm:text-[3.8px] font-black text-slate-455 uppercase tracking-widest block mb-1">Próxima Escala</span>
                          
                          {/* Scale item 1 */}
                          <div className="bg-[#111215] border-l-2 border-amber-500 p-1 sm:p-1.5 rounded-r-md flex flex-col gap-0.5 border border-white/5 border-l-0">
                            <div className="flex justify-between items-center leading-none">
                              <span className="text-[2.8px] sm:text-[3.5px] font-black text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded-sm">ESCALA • LOUVOR</span>
                              <span className="text-[2.5px] sm:text-[3px] text-emerald-400 font-extrabold bg-emerald-500/10 px-0.5 sm:px-1 py-[0.5px] rounded-[1px] tracking-wide">Confirmada</span>
                            </div>
                            <h6 className="text-[3.8px] sm:text-[4.5px] font-bold text-white uppercase mt-0.5 truncate leading-tight">Culto de Celebração</h6>
                            <span className="text-[2.8px] sm:text-[3.2px] text-slate-400 leading-none">Função: Teclado & Voz</span>
                            <div className="flex items-center justify-between text-[2.5px] sm:text-[3px] text-slate-500 mt-1 pb-[1px] font-mono leading-none">
                              <span>📅 Dom, 14/06 às 19:00</span>
                              <span>📍 Templo Sede</span>
                            </div>
                          </div>

                          {/* Scale item 2 */}
                          <div className="bg-[#111215] border-l-2 border-blue-500 p-1 sm:p-1.5 rounded-r-md flex flex-col gap-0.5 border border-white/5 border-l-0 mt-1">
                            <div className="flex justify-between items-center leading-none">
                              <span className="text-[2.8px] sm:text-[3.5px] font-black text-blue-400 bg-blue-500/10 px-1 py-0.2 rounded-sm">VISITA PASTORAL</span>
                              <span className="text-[2.5px] sm:text-[3px] text-amber-400 font-extrabold bg-amber-550/10 px-0.5 sm:px-1 py-[0.5px] rounded-[1px] tracking-wide">Pendente</span>
                            </div>
                            <h6 className="text-[3.8px] sm:text-[4.5px] font-bold text-white uppercase mt-0.5 truncate leading-tight">Visita Ir. Cleide Mendonça</h6>
                            <span className="text-[2.8px] sm:text-[3.2px] text-slate-400 leading-none">Função: Oração & Visita</span>
                            <div className="flex items-center justify-between text-[2.5px] sm:text-[3px] text-slate-500 mt-1 pb-[1px] font-mono leading-none">
                              <span>📅 Ter, 16/06 às 14:00</span>
                              <span>📍 Residencial Sul</span>
                            </div>
                          </div>
                        </div>

                        {/* Navigation bottom bar block mimicking real native app menu */}
                        <div className="border-t border-white/5 pt-1 sm:pt-1.5 mt-2 flex justify-around items-center select-none">
                          <div className="flex flex-col items-center gap-0.2 sm:gap-0.5 text-amber-500">
                            <Home className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                            <span className="text-[2.5px] sm:text-[3px] font-bold leading-none animate-pulse">Início</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.2 sm:gap-0.5 text-slate-400 hover:text-slate-200">
                            <Calendar className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                            <span className="text-[2.5px] sm:text-[3px] font-medium leading-none">Eventos</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.2 sm:gap-0.5 text-slate-400 hover:text-slate-200">
                            <Users className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                            <span className="text-[2.5px] sm:text-[3px] font-medium leading-none">Escalas</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.2 sm:gap-0.5 text-slate-400 hover:text-slate-200">
                            <Settings className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                            <span className="text-[2.5px] sm:text-[3px] font-medium leading-none">Ajustes</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Grid Features / "Tudo o que sua igreja precisa" section */}
      <section id="recursos" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0D3B8E] tracking-tight mb-4">
              Tudo o que <span className="text-blue-600">sua igreja</span> precisa em um só lugar
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mb-4" />
            <p className="text-slate-600 font-medium text-base sm:text-lg">
              Deixe de lado os papéis, grupos desorganizados e agendas estáticas. Centralize sua igreja de forma simples e intuitiva.
            </p>
          </div>

          {/* Grid of 6 interactive cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Igreja Local */}
            <div className="p-8 bg-[#F4F8FA] border border-blue-100 rounded-2xl flex flex-col items-start hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-900 shadow-xs mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                <Church className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Igreja Local</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gestão completa da sua igreja em um só lugar, permitindo monitoramento de atividades e dados consistentes.
              </p>
            </div>

            {/* Card 2: Visitas Pastorais */}
            <div className="p-8 bg-[#F4F8FA] border border-blue-100 rounded-2xl flex flex-col items-start hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-rose-500 shadow-xs mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visitas Pastorais</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Agende, lembre e registre visitas com facilidade. Nunca mais esqueça de dar amparo a quem mais precisa.
              </p>
            </div>

            {/* Card 3: Escalas de Culto */}
            <div className="p-8 bg-[#F4F8FA] border border-blue-100 rounded-2xl flex flex-col items-start hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-xs mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Escalas de Culto</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Organize louvor, pregação, mídia, recepção e muito mais. Escalas automáticas e de fácil replicação semanal.
              </p>
            </div>

            {/* Card 4: Aniversariantes */}
            <div className="p-8 bg-[#F4F8FA] border border-blue-100 rounded-2xl flex flex-col items-start hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-pink-500 shadow-xs mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <GiftIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aniversariantes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lembretes automáticos e mensagens de felicitação prontas. Demonstre cuidado com mensagens no dia correto.
              </p>
            </div>

            {/* Card 5: Avisos e Comunicados */}
            <div className="p-8 bg-[#F4F8FA] border border-blue-100 rounded-2xl flex flex-col items-start hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-xs mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Megaphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Avisos e Comunicados</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mural de notícias, avisos urgentes e informativos para que toda a igreja permaneça alinhada e engajada.
              </p>
            </div>

            {/* Card 6: Agenda Inteligente */}
            <div className="p-8 bg-[#F4F8FA] border border-blue-100 rounded-2xl flex flex-col items-start hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-teal-500 shadow-xs mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Agenda Inteligente</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Agenda integrada com notificações automáticas das atividades e cronogramas diários dos departamentos de ministério.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits & Social emotional Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-[#F4F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            
            {/* Visual element side - Interactive list showcasing actual layouts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center order-2 lg:order-1">
              {/* Mapa Mental Interativo de Onboarding SaaS Compacto */}
              <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-xl p-4.5 shadow-lg border border-blue-500/20 relative overflow-hidden max-w-xs w-full" id="mind_map_saas_container">
                {/* Visual glow decoration design elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                
                {/* Title & subtitle of section */}
                <div className="mb-3.5 relative z-10 text-center">
                  <h4 className="text-xs font-black font-display text-white tracking-tight leading-tight uppercase">
                    Como funciona
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Ative sua agenda em apenas 2 passos simples:
                  </p>
                </div>

                {/* Vertical mind map layout with connections flow - compact, high density */}
                <div className="relative z-10 space-y-3.5 pl-3 border-l border-dashed border-blue-500/20 ml-1.5 text-left">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-2">
                    <div className="absolute -left-[18.5px] top-0.5 w-3 h-3 rounded-full bg-slate-900 border border-blue-500 flex items-center justify-center text-[8px] font-bold text-blue-400">
                      1
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-white">Contato & Acesso</h5>
                      <p className="text-[10px] text-slate-350 leading-relaxed mt-0.5">Chame no WhatsApp para liberar imediatamente o seu período gratuito de teste.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-2">
                    <div className="absolute -left-[18.5px] top-0.5 w-3 h-3 rounded-full bg-slate-900 border border-emerald-500 flex items-center justify-center text-[8px] font-bold text-emerald-400">
                      2
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-white">Prontidão Imediata</h5>
                      <p className="text-[10px] text-slate-350 leading-relaxed mt-0.5">Cadastre seus voluntários e monte suas escalas com sigilo absoluto.</p>
                    </div>
                  </div>

                </div>

                {/* Final action trigger */}
                <div className="mt-4 pt-3.5 border-t border-white/5 flex flex-col gap-2 items-center text-center relative z-10">
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] text-slate-300 font-medium">Suporte e teste de 7 dias grátis</span>
                  </div>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center text-emerald-400 font-extrabold hover:text-emerald-300 transition-colors text-[9px] uppercase tracking-wider bg-emerald-950/50 py-2 rounded-lg border border-emerald-500/20"
                  >
                    Testar Grátis no WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-md space-y-5 text-left">
                <div className="border-b border-slate-100 pb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Confirmação via WhatsApp Ativada
                  </span>
                  
                  <blockquote className="text-slate-700 italic text-sm font-semibold leading-relaxed mb-4">
                    "O Agenda Ministerial Inteligente nos poupou incontáveis horas de telefonemas e mensagens individuais. Agora as escalas são disparadas automaticamente e a equipe confirma em segundos!"
                  </blockquote>
                  
                  <div className="flex items-center gap-2.5 mt-2">
                    <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs shadow-md">
                      PM
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-slate-900">Pastor Marcos Souza</h5>
                      <span className="text-[10px] text-slate-500 font-semibold">Igreja Comunidade Batista</span>
                    </div>
                  </div>
                </div>

                {/* Explicador de Cores solicitador pelo usuário (Ausente, Confirmar, Presente) */}
                <div className="bg-slate-50/80 border border-slate-200/85 rounded-2xl p-4.5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[11px] font-black text-slate-800 uppercase tracking-wider font-display">
                      Painel de Confirmação Automatizada
                    </h5>
                    <span className="text-[8px] font-mono font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200 uppercase tracking-widest">
                      WhatsApp Zap
                    </span>
                  </div>

                  <p className="text-[11.5px] text-slate-600 leading-relaxed font-medium">
                    Chega de mandar áudios e gastar horas ligando! Quando a escala é disparada, o voluntário recebe uma notificação direta no WhatsApp para confirmar e responder na hora. O painel atualiza dinamicamente as três cores de presença:
                  </p>

                  <div className="space-y-3 pt-1">
                    {/* RED Status (Ausente) */}
                    <div className="flex items-start gap-3 bg-white border border-red-200/90 p-3 rounded-xl shadow-[0_1px_2px_rgba(239,68,68,0.05)] hover:border-red-300 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5 font-bold">
                        ✕
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-black text-red-700 font-display">AUSENTE (Em Vermelho)</span>
                          <span className="text-[8px] bg-red-50 text-red-600 border border-red-200 px-1.5 py-0.2 rounded font-black tracking-wider uppercase">Falta Marcada</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal mt-1">
                          Se o voluntário responder que não pode comparecer, ele fica assinalado em <strong>Vermelho</strong>. O pastor visualiza imediatamente a falta e consegue providenciar a substituição a tempo!
                        </p>
                      </div>
                    </div>

                    {/* YELLOW Status (Confirmar) */}
                    <div className="flex items-start gap-3 bg-white border border-amber-200/90 p-3 rounded-xl shadow-[0_1px_2px_rgba(245,158,11,0.05)] hover:border-amber-300 transition-colors font-sans">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5 font-mono font-bold">
                        ⏳
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-black text-amber-700 font-display">CONFIRMAR (Em Amarelo)</span>
                          <span className="text-[8px] bg-amber-50 text-amber-600 border border-amber-200 px-1.5 py-0.2 rounded font-black tracking-wider uppercase">Pendente / Respondendo</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal mt-1">
                          Sinaliza que o convite foi enviado ao WhatsApp do voluntário, mas ele ainda precisa clicar para <strong>Confirmar</strong>. Serve como alerta visual de quem ainda precisa responder.
                        </p>
                      </div>
                    </div>

                    {/* GREEN Status (Presente) */}
                    <div className="flex items-start gap-3 bg-white border border-emerald-200/90 p-3 rounded-xl shadow-[0_1px_2px_rgba(16,185,129,0.05)] hover:border-emerald-300 transition-colors font-sans">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-black text-emerald-700 font-display">PRESENTE (Em Verde)</span>
                          <span className="text-[8px] bg-emerald-50 text-emerald-600 border border-emerald-200 px-1.5 py-0.2 rounded font-black tracking-wider uppercase">Confirmado Ativo</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal mt-1">
                          Confirmado com sucesso! Assim que o voluntário responde o zap de forma positiva, o painel muda dinamicamente para <strong>Verde (Presente)</strong>, garantindo sua tranquilidade na escala.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits detail texts */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0D3B8E] tracking-tight mb-6">
                Organização inteligente, fé restaurada na eficiência
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                Nós criamos uma ferramenta amigável que respeita as particularidades da sua igreja. O nosso software ministerial é leve, seguro e acessível a voluntários e líderes de todas as idades.
              </p>

              {/* Bullet list */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Organização Rápida de Cultos</h4>
                    <p className="text-xs text-slate-500 mt-1">Defina pregações, hinos e avisos com antecedência para que todos os envolvidos preparem seu melhor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Cuidado Pastoral de Visitas</h4>
                    <p className="text-xs text-slate-500 mt-1">Mantenha registro histórico de quem foi visitado para dar suporte contínuo a viúvas, enfermos e novos decididos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Lembretes Automáticos no Dia Certo</h4>
                    <p className="text-xs text-slate-500 mt-1">O robô do sistema monitora sua planilha de aniversariantes e envia notificações para que líderes os felicitem na hora certa.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Differentials Section (Seção Diferencial) */}
      <section id="diferenciais" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        
        {/* Subtle decorative background lights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.3),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-4 text-white">
              Por que somos a Agenda ideal para sua Igreja?
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mb-4" />
            <p className="text-blue-100 text-sm sm:text-base">
              Diferenciais focados na praticidade e no crescimento saudável da sua comunidade pastoral.
            </p>
          </div>

          {/* Highlights grids / horizontal components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white/10 backdrop-blur-xs p-6.5 rounded-2xl border border-white/10 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 font-yellow mb-4 text-xl">
                <MessageCircle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Integração Total Zap</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Seus ministros e voluntários não precisam baixar aplicativos pesados. Eles recebem o cronograma direto no WhatsApp.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-6.5 rounded-2xl border border-white/10 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 font-yellow mb-4 text-xl">
                <Sparkle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Interface Simples</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Design limpo estilo Notion, pensado especificamente para que qualquer pessoa consiga usar sem dificuldades de navegação.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-6.5 rounded-2xl border border-white/10 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 font-yellow mb-4 text-xl">
                <Monitor className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Multi-Dispositivo</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Funciona perfeitamente em celular, tablet e computador sem perder dados, mantendo sincronia instantânea.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-6.5 rounded-2xl border border-white/10 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 font-yellow mb-4 text-xl">
                <Bell className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Sistema Inteligente</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Robô inteligente de prevenção de falhas em escalas, notificando suplentes quando houver recusas no ministério.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO RELEVANTE: CENTRAL DE SEGURANÇA E PRIVACIDADE COMPACTA */}
      <section id="seguranca" className="py-12 bg-white relative border-y border-blue-50/50">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/25 rounded-full blur-2xl pointer-events-none opacity-40" />
        
        <div className="max-w-md mx-auto px-4 relative z-10 flex flex-col items-center">
          
          {/* Header da Seção Compacto */}
          <div className="text-center mb-5">
            <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full select-none">
              <Shield className="w-3 h-3 text-blue-800" />
              <span className="text-[9px] font-black tracking-wider text-blue-800 uppercase">
                Segurança & Zelo
              </span>
            </div>
            <h2 className="text-xl font-display font-extrabold text-[#0D3B8E] tracking-tight text-center">
              Compromisso de Privacidade
            </h2>
          </div>

          {/* O Quadradinho Bem Pequenininho e Informativo */}
          <div className="w-full bg-[#0F1115] text-slate-100 rounded-2xl p-5 border border-slate-800 shadow-xl text-left font-sans">
            <div className="space-y-4">
              
              {/* Item 1: Aplicativo Estritamente Administrativo */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Aplicativo Estritamente Administrativo</h3>
                  <p className="text-[10.5px] text-slate-300 mt-1 leading-relaxed">
                    O sistema é estruturado apenas para cronogramas, escalas de voluntários e eventos internos. <strong>Não solicita, não armazena e não tem acesso a dízimos, ofertas ou recursos financeiros</strong> de sua congregação.
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-slate-800/60" />

              {/* Item 2: Zelo no Compartilhamento de Informação */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">Zelo no Compartilhamento de Informações</h3>
                  <p className="text-[10.5px] text-slate-300 mt-1 leading-relaxed">
                    Privacidade absoluta sob medida para o pastor e secretaria. Nenhuma outra igreja ou agente externo tem qualquer possibilidade de ver seus membros ou escalas, mantendo sigilo de informação total.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Como Funciona Section & Teste gratis 7 dias */}
      <section id="como-funciona" className="py-20 bg-[#F4F8FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-blue-900 tracking-tight">
              Como Funciona a Plataforma?
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
              Assista ao vídeo explicativo rápido e sem complicações (de no máximo 2 a 3 minutos) ou acompanhe as etapas simples do processo para ativar as suas escalas hoje mesmo!
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Widescreen Video Explainer + Custom Upload Panel */}
            <div className="xl:col-span-7 bg-white border border-blue-101 shadow-md p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">
                      Vídeo de Demonstração
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">Duração recomendada de menos de 3 minutos</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200">
                    ⏱️ Máx. 3 Minutos
                  </span>
                </div>

                {/* Explanation text on how to access and watch */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Descubra os principais recursos da plataforma! Nosso tour detalha as rotinas fundamentais para líderes e voluntários acessarem tudo com facilidade pelo celular. Clique no botão de reprodução abaixo para assistir.
                </p>

                {/* 16:9 Widescreen Video Player Canvas (YouTube Formats) - Optimized for YouTube Redirection to be light & fast */}
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group aspect-video flex items-center justify-center">
                  
                  {!videoUrl ? (
                    /* Elegant placeholder / empty state when no video is loaded */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/95 text-center p-6 relative">
                      <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 mb-3 animate-pulse">
                        <Video className="w-8 h-8 text-amber-500" />
                      </div>
                      <h4 className="text-sm font-black text-white uppercase tracking-wider">
                        Nenhum Link do YouTube Configurado
                      </h4>
                      <p className="text-[11px] text-slate-400 max-w-sm mt-1.5 leading-relaxed">
                        Defina o link do seu vídeo do YouTube logo abaixo no painel administrativo para que ele apareça aqui!
                      </p>
                    </div>
                  ) : (
                    /* Elegant mock video player that acts as a direct link to YouTube */
                    <a 
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group select-none bg-slate-950 border border-slate-700/60 rounded-2xl shadow-2xl"
                    >
                      {/* Extremely Expressive & High-Impact Mockup of the System Open (O Sistema Aberto e Preenchido) */}
                      <div className="absolute inset-0 w-full h-full p-2.5 sm:p-4 text-left select-none pointer-events-none opacity-95 group-hover:opacity-100 transition-all duration-300 flex gap-2 sm:gap-3 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 scale-100 group-hover:scale-[1.01]">
                        
                        {/* 1. LEFT SIDE: Elegant Sidebar Panel mock */}
                        <div className="w-[90px] sm:w-[130px] bg-slate-900/95 rounded-xl p-2 border border-slate-800 flex flex-col justify-between shrink-0 shadow-xl relative overflow-hidden backdrop-blur-xs">
                          {/* Active brand accent bar */}
                          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 text-[0px]" />
                          <div>
                            <div className="flex items-center gap-1.5 mb-3">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-[6.5px] shadow-sm shrink-0">
                                AM
                              </div>
                              <span className="text-[7.5px] sm:text-[9.5px] font-black text-white truncate max-w-[80px] uppercase tracking-wider">Agenda Min.</span>
                            </div>
                            
                            <div className="space-y-1.5">
                              {/* Option 1 Active */}
                              <div className="h-4.5 rounded-lg bg-amber-500/20 border border-amber-500/40 px-2 flex items-center gap-1.5 shadow-xs">
                                <Calendar className="w-2 sm:w-3.5 h-2 sm:h-3.5 text-amber-400 shrink-0" />
                                <span className="text-[5.5px] sm:text-[7.5px] font-black text-amber-200">Painel Geral</span>
                              </div>
                              {/* Option 2 */}
                              <div className="h-4.5 rounded-lg px-2 flex items-center gap-1.5 opacity-70 hover:bg-slate-800/45 transition-colors">
                                <Users className="w-2 sm:w-3.5 h-2 sm:h-3.5 text-slate-300 shrink-0" />
                                <span className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-300">Voluntários</span>
                              </div>
                              {/* Option 3 */}
                              <div className="h-4.5 rounded-lg px-2 flex items-center gap-1.5 opacity-70 hover:bg-slate-800/45 transition-colors">
                                <Church className="w-2 sm:w-3.5 h-2 sm:h-3.5 text-slate-300 shrink-0" />
                                <span className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-300">Ministérios</span>
                              </div>
                              {/* Option 4 */}
                              <div className="h-4.5 rounded-lg px-2 flex items-center gap-1.5 opacity-70 hover:bg-slate-800/45 transition-colors">
                                <MessageSquare className="w-2 sm:w-3.5 h-2 sm:h-3.5 text-emerald-400 shrink-0" />
                                <span className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-300">WhatsApp Zap</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-[5px] sm:text-[6.5px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center justify-between font-mono font-bold">
                            <span className="text-emerald-400 flex items-center gap-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                              SISTEMA NO AR
                            </span>
                          </div>
                        </div>

                        {/* 2. RIGHT SIDE: Fully Prefilled Dashboard with Charts, Scales details & Confirmations */}
                        <div className="flex-grow space-y-1.5 flex flex-col justify-between">
                          {/* Breadcrumb row */}
                          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[7.5px] sm:text-[9px] font-black text-white flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                Gestão Ativa • Catedral da Família
                              </span>
                            </div>
                            <div className="flex gap-1">
                              <span className="text-[5px] sm:text-[7px] bg-[#16a34a]/30 text-[#4ade80] border border-[#22c55e]/40 px-1.5 py-0.5 rounded-md font-black uppercase tracking-wider">94% CONFIRMAÇÕES</span>
                              <span className="text-[5px] sm:text-[7px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded-md font-black uppercase tracking-wider">OUT-AHEAD</span>
                            </div>
                          </div>

                          {/* Interactive bento columns */}
                          <div className="grid grid-cols-2 gap-2 flex-grow items-stretch py-0.5">
                            
                            {/* Panel Block A: Multi-Service Active Scale list (Sunday Services) */}
                            <div className="bg-slate-900/95 border border-slate-800/80 rounded-xl p-2 shadow-lg flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between">
                                  <span className="text-[4px] sm:text-[6px] text-amber-400 font-extrabold uppercase tracking-widest block">Próximo Culto • Domingo 19h</span>
                                  <span className="text-[4.5px] sm:text-[5.5px] font-mono font-black text-slate-500">SET DE ESCALAS</span>
                                </div>
                                <span className="text-[6.5px] sm:text-[9px] font-black text-white block mt-0.5">Música & Apoio Operacional</span>
                                
                                <div className="space-y-1 mt-2 text-[5px] sm:text-[7px]">
                                  <div className="flex items-center justify-between bg-slate-950/80 p-1.5 rounded-md border border-slate-800/60 shadow-xs">
                                    <span className="font-bold text-slate-200 flex items-center gap-1 truncate max-w-[90px] sm:max-w-none">
                                      <span className="text-[6px]">🎸</span> Louvor: Banda Ebenézer
                                    </span>
                                    <span className="text-emerald-400 font-black shrink-0 flex items-center gap-0.5 text-[5px] sm:text-[6.5px] bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/20 shadow-inner">
                                      ✓ Confirmado via WhatsApp
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between bg-slate-950/80 p-1.5 rounded-md border border-slate-800/60 shadow-xs">
                                    <span className="font-bold text-slate-200 flex items-center gap-1 truncate max-w-[90px] sm:max-w-none">
                                      <span className="text-[6px]">👥</span> Portaria: 4 Integrantes
                                    </span>
                                    <span className="text-emerald-400 font-black shrink-0 flex items-center gap-0.5 text-[5px] sm:text-[6.5px] bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/20 shadow-inner">
                                      ✓ Confirmado via WhatsApp
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between bg-slate-950/80 p-1.5 rounded-md border border-slate-800/60 shadow-xs">
                                    <span className="font-bold text-slate-200 flex items-center gap-1 truncate max-w-[90px] sm:max-w-none">
                                      <span className="text-[6px]">🎥</span> Transmissão: João S.
                                    </span>
                                    <span className="text-amber-400 font-black shrink-0 flex items-center gap-0.5 text-[5px] sm:text-[6.5px] bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/20 shadow-inner animate-pulse">
                                      ⏳ Aguardando Notificação
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Panel Block B: Live Integration panel & metric metrics */}
                            <div className="bg-slate-900/95 border border-slate-800/80 rounded-xl p-2 shadow-lg flex flex-col justify-between">
                              <div>
                                <span className="text-[4px] sm:text-[6px] text-emerald-400 font-extrabold uppercase tracking-widest block">INTEGRAÇÃO DE ENVIOS</span>
                                <span className="text-[6.5px] sm:text-[9px] font-black text-white block mt-0.5">Status Robô Automatizado</span>
                                
                                {/* Realistic WhatsApp bubble mock inside screen */}
                                <div className="mt-1.5 bg-[#0b141a] rounded-lg p-1.5 border border-[#128c7e]/35 shadow-inner">
                                  <div className="flex items-center gap-1 border-b border-[#202c33] pb-1 mb-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[5px] font-bold text-white shrink-0 font-sans">✓</div>
                                    <span className="text-[4.5px] sm:text-[6px] text-emerald-400 font-bold font-mono">Disparador Whatsapp Ativo:</span>
                                  </div>
                                  <p className="text-[4.5px] sm:text-[6px] text-slate-300 font-sans italic leading-tight">
                                    "Atenção ministro, você foi escalado para Domingo. Responda SIM p/ confirmar."
                                  </p>
                                </div>

                                <div className="grid grid-cols-2 gap-1.5 mt-2">
                                  <div className="bg-slate-950/60 p-1 rounded-md border border-slate-800/70 text-center">
                                    <span className="text-[3.5px] sm:text-[5px] text-slate-500 block uppercase font-mono font-bold">Taxa de Resposta</span>
                                    <span className="text-[6.5px] sm:text-[8px] font-black text-emerald-400">97.8%</span>
                                  </div>
                                  <div className="bg-slate-950/60 p-1 rounded-md border border-slate-800/70 text-center">
                                    <span className="text-[3.5px] sm:text-[5px] text-slate-500 block uppercase font-mono font-bold">Confirmações</span>
                                    <span className="text-[6.5px] sm:text-[8px] font-black text-blue-400">Automáticas</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      {/* Translucent Backdrop filter overlay to pop the Play icon while leaving visual layout fully obvious */}
                      <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-950/35" />

                      {/* Video info title bar on hover/idle */}
                      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-slate-950/95 to-transparent p-4 flex items-center justify-between text-left relative z-10 transition-transform duration-300">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-md">
                            <Youtube className="w-4 h-4 text-white fill-current animate-pulse" />
                          </div>
                          <div>
                            <span className="text-[11px] font-black uppercase tracking-wider text-white block">Visualizar Sistema</span>
                            <span className="text-[9px] text-slate-300 font-sans block">Veja como funciona o sistema aberto em detalhes no YouTube!</span>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-red-600/35 text-red-200 px-2.5 py-0.5 rounded-full border border-red-500/35">
                          YouTube
                        </span>
                      </div>

                      {/* Giant glowing custom YouTube Play button in center */}
                      <div className="relative flex flex-col items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                        <div className="w-20 h-14 bg-red-600 group-hover:bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-red-600/30 transition-colors duration-300 relative">
                          {/* Inner triangle play shape */}
                          <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white translate-x-1" />
                        </div>
                        <span className="text-[11px] font-black tracking-widest text-white uppercase block mt-3 font-display">
                          VER SISTEMA ABERTO NO YOUTUBE ↗
                        </span>
                        <span className="text-[9px] text-amber-300/90 font-bold block mt-1 uppercase tracking-wider bg-black/40 px-2.5 py-0.5 rounded-full">
                          ASSISTA AGORA • COMPLETO & VIBRANTE
                        </span>
                      </div>

                      {/* Progress bar simulation at bottom */}
                      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-slate-800 relative z-10">
                        <div className="w-1/3 h-full bg-red-600" />
                      </div>
                    </a>
                  )}

                </div>

                {videoUrl && (
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 bg-red-600 hover:bg-gradient-to-r from-red-600 to-red-700 hover:scale-[1.01] text-white font-black py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/15 hover:shadow-red-600/25 uppercase tracking-wider text-xs border border-red-500/20"
                  >
                    <Youtube className="w-5 h-5 text-white fill-current animate-pulse" />
                    Assistir na Minha Página do YouTube (Mais Rápido & Leve) ↗
                  </a>
                )}

                {/* Administrator Video Paster - Optimized for pure URL links */}
                {isAdmin && (
                  <div className="mt-6 border-t border-dashed border-slate-200 pt-5">
                    <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
                      <span className="p-1 rounded-md bg-amber-100 text-amber-700">
                        <Settings className="w-4 h-4 animate-spin-slow" />
                      </span>
                      <h4 className="text-sm font-black text-slate-800 tracking-tight">
                        Configurar Link de Apresentação / YouTube
                      </h4>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-4 shadow-xs text-left">
                      {/* Instructions Box */}
                      <div className="text-xs text-slate-600 bg-white border border-slate-100 rounded-xl p-3.5 leading-relaxed space-y-2">
                        <p className="font-bold text-red-600 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Otimização de Desempenho Ativada:
                        </p>
                        <p className="text-[11px] text-slate-505 leading-relaxed">
                          Para garantir que o seu site carregue instantaneamente (em menos de 1 segundo) nos celulares, os arquivos de vídeo locais (que deixavam o carregamento pesado) foram descontinuados. 
                          Agora você pode simplesmente colar o link direto do seu vídeo de apresentação ou o link da sua página do YouTube!
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200/60 rounded-xl p-4 space-y-3">
                        <div>
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-display">
                            Link Oficial do seu Canal ou Vídeo do YouTube
                          </span>
                          <span className="text-[9px] text-slate-400 leading-normal block mt-0.5 mb-2.5">
                            Insira o link completo do seu canal ou vídeo abaixo.
                          </span>
                          <input 
                            type="text" 
                            value={videoInputText} 
                            onChange={(e) => setVideoInputText(e.target.value)}
                            placeholder="Ex: https://www.youtube.com/watch?v=... ou https://youtube.com/@SeuCanal" 
                            className="w-full text-xs px-3.5 py-3 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-red-500 bg-slate-50/50 focus:bg-white transition-all text-slate-700 font-medium font-mono"
                          />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 pt-1">
                          <button 
                            onClick={() => handleSaveVideoUrl(videoInputText)}
                            className="flex-grow text-[11px] font-black bg-red-600 hover:bg-red-700 text-white py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs uppercase tracking-wider"
                          >
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Salvar Link do YouTube
                          </button>
                          
                          <div className="flex gap-1.5">
                            <button 
                              onClick={handleClearVideo}
                              className="text-[11px] font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1 border border-rose-200"
                              title="Apagar e limpar completamente o vídeo atual da página"
                            >
                              <Trash className="w-3.5 h-3.5 text-rose-500" /> Limpar
                            </button>
                            <button 
                              onClick={handleRestoreDefaultVideo}
                              className="text-[11px] font-semibold bg-slate-100 text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-1 border border-slate-200"
                              title="Restaurar o vídeo padrão de demonstração"
                            >
                              <RotateCcw className="w-3.5 h-3.5" /> Padrão
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-400 border-t border-slate-200/55 pt-2.5 flex items-center gap-1.5 justify-center md:justify-start">
                        <Globe className="w-3.5 h-3.5 text-slate-300" />
                        <span>O link configurado é salvo e atualizado instantaneamente para todos os seus visitantes de forma 100% otimizada!</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 text-center xl:text-left">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">⏱️ Apresentação direta, rápida e transparente</span>
              </div>
            </div>

            {/* COLUMN 2: Como Funciona - Steps */}
            <div className="xl:col-span-5 bg-white border border-blue-101 shadow-md p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-black text-blue-900 tracking-tight mb-2">
                  Passo a Passo Simples
                </h3>
                <div className="w-12 h-1 bg-yellow-400 mb-8 rounded-full" />

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                        <WhatsAppIcon className="w-4 h-4 text-green-500 fill-current" />
                        Inicie o contato
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Você clica em "Quero conhecer mais" e fala diretamente com nossa equipe de suporte no WhatsApp Business.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                        <Video className="w-4 h-4 text-blue-600" />
                        Assista à demonstração
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Você assiste o vídeo rápido para ver como o painel ajuda sua igreja a poupar tempo com as escalas.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        Ganhe o seu período cortesia
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Você ganha 7 dias grátis para registrar seus membros, montar suas escalas e testar sem limitações!
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                        Adesão Simplificada
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Gostou e quer continuar facilitando a gestão ministerial? Transforme sua igreja por apenas R$ 19,90/mensais!
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-8 text-center sm:text-left">
                <span className="text-xs text-slate-400 font-medium">Você tem controle absoluto. Sem pegadinhas.</span>
              </div>
            </div>

            {/* ROW 2: Teste gratis por 7 dias & Gold Seal Centered Centerpiece */}
            <div id="planos" className="xl:col-span-12 bg-white border border-blue-101 shadow-md p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              
              {/* Golden dynamic subtle particles badge and border highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-2xl font-display font-black text-blue-900 tracking-tight mb-2 flex items-center gap-2 justify-center">
                  Teste grátis por 7 dias
                </h3>
                <div className="w-12 h-1 bg-yellow-400 mb-8 rounded-full mx-auto" />

                {/* Grid items checkmarks alongside Majestic Gold Seal */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-12 w-full lg:w-auto">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 stroke-[2.5] flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">Acesso completo a todas as funcionalidades</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 stroke-[2.5] flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">Pagamento recorrente</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 stroke-[2.5] flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">Pagamento Pix ou Crédito</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 stroke-[2.5] flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">Cancele quando quiser</span>
                    </div>
                  </div>

                  {/* GOLD SEAL - "CANCELE QUANDO QUISER" with Stars */}
                  <div className="relative flex-shrink-0 transform hover:scale-105 transition-all duration-300">
                    <svg className="w-32 h-32 text-amber-500 drop-shadow-md select-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Symmetrical Jagged Ribbon Seal Border (28 teeth) */}
                      <path 
                        d={(() => {
                          const points = [];
                          const numPoints = 28;
                          for (let i = 0; i < numPoints * 2; i++) {
                            const angle = (i * Math.PI) / numPoints - Math.PI / 2;
                            const radius = i % 2 === 0 ? 47.5 : 42.5;
                            const x = 50 + radius * Math.cos(angle);
                            const y = 50 + radius * Math.sin(angle);
                            points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
                          }
                          return `M ${points.join(" L ")} Z`;
                        })()}
                        fill="#F59E0B" 
                        stroke="#D97706" 
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      {/* Inner gold circle */}
                      <circle cx="50" cy="50" r="38" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                      <circle cx="50" cy="50" r="32" fill="none" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Symmetrical aligned high-contrast stars */}
                      <path 
                        d={(() => {
                          const getStarPath = (cx: number, cy: number, rOut: number, rIn: number) => {
                            const pts = [];
                            for (let i = 0; i < 10; i++) {
                              const angle = (i * Math.PI) / 5 - Math.PI / 2;
                              const r = i % 2 === 0 ? rOut : rIn;
                              const x = cx + r * Math.cos(angle);
                              const y = cy + r * Math.sin(angle);
                              pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
                            }
                            return `M ${pts.join(" L ")} Z`;
                          };
                          return `${getStarPath(50, 21, 5, 2.2)} ${getStarPath(34, 27, 4, 1.8)} ${getStarPath(66, 27, 4, 1.8)}`;
                        })()} 
                        fill="#78350F" 
                      />

                      {/* Perfectly centered text */}
                      <text x="50" y="49" fill="#78350F" fontSize="8.5" fontWeight="900" textAnchor="middle" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">
                        CANCELE
                      </text>
                      <text x="50" y="58" fill="#78350F" fontSize="8.5" fontWeight="900" textAnchor="middle" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">
                        QUANDO
                      </text>
                      <text x="50" y="67" fill="#78350F" fontSize="8.5" fontWeight="900" textAnchor="middle" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">
                        QUISER
                      </text>
                    </svg>
                  </div>
                </div>

                {/* HUGE GREEN BUTTON */}
                <div className="space-y-3 max-w-2xl mx-auto">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1eba56] text-white font-extrabold text-base md:text-lg rounded-2xl shadow-xl hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3.5 glow-green border-b-4 border-emerald-700"
                  >
                    <WhatsAppIcon className="w-5.5 h-5.5 fill-white" />
                    <span>Quero meu teste grátis agora!</span>
                  </a>

                  <div className="text-center">
                    <span className="text-xs font-bold text-slate-600 block mt-1">
                      Após o período de teste: apenas <span className="text-blue-700 font-extrabold text-sm font-mono">R$ 19,90/mês</span>
                    </span>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-slate-150 mt-8 flex justify-between items-center text-[11px] text-slate-400">
                <span className="font-semibold text-slate-500">Valor fixo de manutenção</span>
                <span>Suporte incluso 100% livre</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges section */}
      <section className="py-12 bg-white border-y border-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-center gap-3.5 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Seguro e Confiável</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Seus dados protegidos.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Economize Tempo</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Menos burocracia de planilhas.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Fácil de Usar</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Interface simples e intuitiva.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Suporte Dedicado</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Atendimento rápido e humanizado.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CALL ACTION: Conversão Final */}
      <section className="py-20 relative bg-gradient-to-t from-blue-900 via-blue-950 to-blue-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.1),transparent_35%)]" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Pronto para revolucionar a gestão da sua igreja?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Esqueça as escalas conflitantes, telefonemas cansativos e datas de aniversariantes esquecidas. Transforme seu ministério em um exemplo de organização!
          </p>

          <div className="pt-4 max-w-xs sm:max-w-md mx-auto">
            {/* Repeat exact button yellow / green WhatsApp button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4.5 px-8 bg-[#25D366] hover:bg-[#1eba56] text-white font-extrabold text-lg rounded-2xl shadow-xl hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-3.5 glow-green border-b-4 border-emerald-700"
            >
              <WhatsAppIcon className="w-6 h-6 fill-white" />
              <span>Quero saber mais</span>
            </a>

            <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest block mt-4">
              ✨ Teste grátis de 7 dias sem compromisso!
            </span>
          </div>

        </div>
      </section>

      {/* Footer message strip bar */}
      <div className="bg-[#0B1528] py-4.5 text-center text-xs text-blue-200 border-b border-white/5 tracking-wider font-semibold font-display uppercase">
        Organização, propósito e excelência para sua igreja
      </div>

      {/* Main Footer layout */}
      <footer className="bg-[#070D1A] text-slate-400 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-8">
            
            {/* Logo variant light */}
            <AppLogo showText={true} variant="light" />

            {/* Centralized WhatsApp contact info */}
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 font-semibold text-xs text-white">
              <WhatsAppIcon className="w-4 h-4 text-green-400" />
              <span>WhatsApp de Contato: (11) 97729-4510</span>
            </div>

            {/* Quick links footer */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
              <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
              <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Preço</a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px]">
            <span>
              &copy; 2025 Agenda Ministerial Inteligente. Todos os direitos reservados.
            </span>
            <div className="flex items-center gap-3">
              <span className="text-slate-500">
                Desenvolvido com excelência para a união ministerial.
              </span>
              {/* Subtle administrative lock button for configuration panels */}
              <button
                onClick={() => {
                  const nextVal = !isAdmin;
                  setIsAdmin(nextVal);
                  localStorage.setItem("ami_admin_active", nextVal ? "true" : "false");
                  if (!nextVal) {
                    setShowConfig(false);
                  }
                }}
                className="text-slate-700 hover:text-slate-500 transition-colors duration-200 cursor-pointer p-1 rounded-sm focus:outline-none flex items-center gap-1"
                title="Acesso Restrito: Configurações do Site"
              >
                <Lock className="w-3 h-3" />
                <span className="text-[9px] font-mono tracking-tighter opacity-45 hover:opacity-100 transition-opacity">
                  {isAdmin ? "EDITOR: ATIVO" : "EDITOR: OCULTO"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Simple supporting icon definition for cake/gift
function GiftIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" rx="1" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
