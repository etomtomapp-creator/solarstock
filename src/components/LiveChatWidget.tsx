import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  Zap,
  ArrowRight,
  Calculator,
  FileText,
  PhoneCall,
  Clock,
  RotateCcw,
  Minus
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: () => void }[];
}

interface LiveChatWidgetProps {
  onOpenQuote?: () => void;
  onOpenSizing?: () => void;
  onNavigateToProducts?: () => void;
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  onOpenQuote,
  onOpenSizing,
  onNavigateToProducts
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'agent',
      text: 'Hello! Welcome to SolarStock B2B Engineering Desk. How can our team assist your project today?',
      timestamp: 'Just now'
    },
    {
      id: 'm2',
      sender: 'agent',
      text: 'We have Tier-1 N-Type TOPCon bifacial modules, Deye hybrid inverters, and containerized BESS ready for regional dispatch. Select a topic below or type your inquiry:',
      timestamp: 'Just now',
      quickActions: [
        {
          label: '⚡ Check Tongwei 620W Stock',
          action: () => handleSelectTopic('Can you check availability and pricing for Tongwei 620W N-Type bifacial solar panels?')
        },
        {
          label: '🔋 2MWh BESS Storage Specs',
          action: () => handleSelectTopic('What are the lead times and specs for a 2MWh liquid-cooled BESS battery storage container?')
        },
        {
          label: '🔄 Deye Inverter Compatibility',
          action: () => handleSelectTopic('Are Deye three-phase hybrid inverters compatible with high-voltage LiFePO4 battery racks?')
        },
        {
          label: '📐 Free System Sizing / BOM',
          action: () => handleSelectTopic('How can I calculate solar string sizing and generate a bill of materials for my factory?')
        }
      ]
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const generateAgentReply = (userQuery: string) => {
    const q = userQuery.toLowerCase();
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      let replyActions: { label: string; action: () => void }[] | undefined;

      if (q.includes('tongwei') || q.includes('panel') || q.includes('module') || q.includes('620w')) {
        replyText =
          'Tongwei 620W N-Type Bifacial TOPCon modules (22.8% efficiency, 16BB) are currently in stock at our regional distribution depots in Bangkok and Dhaka. Available in 40ft HC container lots (682 pcs / container) with 25-year product and 30-year linear power warranty.';
        replyActions = [
          {
            label: 'Request Container Quotation',
            action: () => {
              onOpenQuote?.();
              setIsOpen(false);
            }
          },
          {
            label: 'View Module Catalog',
            action: () => {
              onNavigateToProducts?.();
              setIsOpen(false);
            }
          }
        ];
      } else if (q.includes('bess') || q.includes('battery') || q.includes('storage') || q.includes('mwh')) {
        replyText =
          'Our 20FT BESS Liquid-Cooled Energy Storage containers utilize CATL Tier-1 LiFePO4 cells, 0.5C/1C discharge ratings, dual-loop liquid thermal management, and certified aerosol fire suppression. Scalable from 1MWh to 50MWh.';
        replyActions = [
          {
            label: 'Get BESS Engineering Datasheet',
            action: () => {
              onOpenQuote?.();
              setIsOpen(false);
            }
          }
        ];
      } else if (q.includes('deye') || q.includes('inverter') || q.includes('hybrid')) {
        replyText =
          'Yes, Deye 8kW–50kW three-phase hybrid inverters feature 100% unbalanced three-phase output, dual MPPT trackers, and plug-and-play CAN/RS485 communication with SolarStock, Pylontech, and Deye HV batteries.';
        replyActions = [
          {
            label: 'Explore Inverter Lineup',
            action: () => {
              onNavigateToProducts?.();
              setIsOpen(false);
            }
          }
        ];
      } else if (q.includes('sizing') || q.includes('bom') || q.includes('calculate')) {
        replyText =
          'You can use our interactive System Sizing & BOM Tool to input your facility load, sunlight peak hours, and backup requirements to instantly configure PV strings, inverter kVA, and battery rack counts.';
        replyActions = [
          {
            label: 'Launch System Sizing Tool',
            action: () => {
              onOpenSizing?.();
              setIsOpen(false);
            }
          }
        ];
      } else if (q.includes('shipping') || q.includes('delivery') || q.includes('port')) {
        replyText =
          'Standard dispatch from our Shenzhen factory hub is 14–21 days to Chittagong / Laem Chabang ports. Ex-stock warehouse items in Bangkok and Dhaka dispatch within 48–72 hours via bonded logistics.';
        replyActions = [
          {
            label: 'Request Expedited Freight',
            action: () => {
              onOpenQuote?.();
              setIsOpen(false);
            }
          }
        ];
      } else {
        replyText =
          'Thank you for reaching out! Our lead applications engineering desk has received your request. We can prepare a customized bill of materials and formal commercial quotation within 2 business hours.';
        replyActions = [
          {
            label: 'Submit Formal RFQ',
            action: () => {
              onOpenQuote?.();
              setIsOpen(false);
            }
          },
          {
            label: 'Launch Sizing Tool',
            action: () => {
              onOpenSizing?.();
              setIsOpen(false);
            }
          }
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          sender: 'agent',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quickActions: replyActions
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSelectTopic = (text: string) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    generateAgentReply(text);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText('');

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    generateAgentReply(query);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'm1',
        sender: 'agent',
        text: 'Chat session refreshed. How can we support your renewable energy project today?',
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* =========================================================================
          1. FLOATING LIVE CHAT HOVER CIRCLE BUTTON
          ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        
        {/* Hover Expandable Pill Tooltip (Desktop) */}
        <div
          onClick={handleOpen}
          className={`hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-slate-950/95 text-white text-xs font-medium shadow-xl border border-slate-800 backdrop-blur-md transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'opacity-0 pointer-events-none translate-x-3'
              : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-400">Live Engineering Desk</span>
          <span className="text-slate-400 text-[11px]">· Online</span>
        </div>

        {/* Master Circle Button */}
        <button
          onClick={() => (isOpen ? handleClose() : handleOpen())}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group-hover:scale-105 active:scale-95 ${
            isOpen
              ? 'bg-slate-900 border border-slate-700 text-slate-300 rotate-90'
              : 'bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950 border-2 border-emerald-500/40 shadow-emerald-950/50 hover:border-emerald-400'
          }`}
          aria-label={isOpen ? 'Close live chat' : 'Open live support chat'}
          title="Live Energy Solutions Desk"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-300" />
          ) : (
            <>
              {/* Outer Pulsing Glow Aura */}
              <span className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm animate-pulse" />

              {/* Chat Bubble Icon */}
              <MessageSquare className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform relative z-10" />

              {/* Online Green Presence Indicator */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950 z-20">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>

              {/* Unread Counter Badge */}
              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -left-1.5 px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold shadow-md z-20 animate-bounce">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* =========================================================================
          2. INTERACTIVE DEMO LIVE CHAT MODAL / DRAWER
          ========================================================================= */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="SolarStock Live Support Chat"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[550px] max-h-[85vh] rounded-3xl bg-white shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
        >
          {/* Header */}
          <div className="p-4 bg-slate-950 text-white border-b border-slate-900 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Specialist Avatar */}
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow">
                  <Bot className="w-5 h-5 text-emerald-100" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm font-heading tracking-tight text-white">
                    SolarStock Technical Desk
                  </h3>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Senior Application Engineers Online</span>
                </p>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={handleReset}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="Restart chat"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="Minimize chat"
                aria-label="Close chat"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Verification Trust Strip */}
          <div className="px-4 py-2 bg-emerald-950/20 border-b border-emerald-900/30 flex items-center justify-between text-[11px] text-emerald-800">
            <span className="flex items-center gap-1 font-medium">
              <Zap className="w-3 h-3 text-emerald-600" />
              <span>Direct OEM Inquiries · Average reply &lt; 2 mins</span>
            </span>
            <span className="font-mono text-[10px] text-slate-500">B2B Live</span>
          </div>

          {/* Chat Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/80">
            {messages.map((msg) => {
              const isAgent = msg.sender === 'agent';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
                >
                  <div className="flex items-end gap-2 max-w-[88%]">
                    {isAgent && (
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-emerald-400 shrink-0 text-[10px] font-bold">
                        SS
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                        isAgent
                          ? 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-sm'
                          : 'bg-emerald-600 text-white rounded-br-sm font-medium'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 mt-1 px-8 font-mono">
                    {msg.timestamp}
                  </span>

                  {/* Interactive Quick Action Buttons Attached to Agent Messages */}
                  {isAgent && msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="mt-2.5 ml-8 flex flex-wrap gap-1.5">
                      {msg.quickActions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={action.action}
                          className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-emerald-700 transition-colors shadow-xs flex items-center gap-1.5 text-left"
                        >
                          <span>{action.label}</span>
                          <ArrowRight className="w-3 h-3 shrink-0 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Simulated Live Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-emerald-400 shrink-0 text-[10px]">
                  SS
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => {
                onOpenSizing?.();
                setIsOpen(false);
              }}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-emerald-50 text-[11px] font-medium text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <Calculator className="w-3 h-3 text-emerald-600" />
              <span>Sizing Tool</span>
            </button>
            <button
              onClick={() => {
                onOpenQuote?.();
                setIsOpen(false);
              }}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-emerald-50 text-[11px] font-medium text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-emerald-600" />
              <span>Request Quote</span>
            </button>
            <button
              onClick={() => {
                onNavigateToProducts?.();
                setIsOpen(false);
              }}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-emerald-50 text-[11px] font-medium text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <Zap className="w-3 h-3 text-emerald-600" />
              <span>Catalog</span>
            </button>
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask an engineer (e.g., 500kW inverter stock)..."
              className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-slate-950 text-white hover:bg-emerald-600 disabled:opacity-40 disabled:hover:bg-slate-950 transition-colors shrink-0 shadow-sm"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
