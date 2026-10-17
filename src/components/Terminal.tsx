import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface CommandOutput {
  id: string;
  type: 'user' | 'system' | 'error';
  content: string | React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'welcome-1',
      type: 'system',
      content: "Umer Jahangir — Developer Console (v2.0)",
    },
    {
      id: 'welcome-2',
      type: 'system',
      content: "Type 'help' to see all available commands, or click the quick commands below.",
    },
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    // Add user command
    const newItems: CommandOutput[] = [
      {
        id: `user-${Date.now()}`,
        type: 'user',
        content: `umer@portfolio:~$ ${trimmed}`,
      },
    ];

    switch (trimmed) {
      case 'clear':
        setHistory([]);
        return;

      case 'help':
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: (
            <div className="space-y-1 text-[#EAE4DD]/90">
              <div className="text-white font-semibold">Available Commands:</div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">whoami</span> : Summary of Umer Jahangir
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">skills</span> : Verified technical stack
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">projects</span> : Real projects &amp; architecture
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">education</span> : S.M.I.T, Cisco &amp; certs
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">contact</span> : Email, WhatsApp &amp; LinkedIn
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">resume</span> : Download official resume PDF
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">karachi-time</span> : Current local time in Karachi
              </div>
              <div className="pl-2">
                • <span className="text-[#F15A24] font-bold">clear</span> : Clear console window
              </div>
            </div>
          ),
        });
        break;

      case 'whoami':
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: (
            <div className="space-y-1">
              <div className="text-[#F15A24] font-bold">{personalInfo.name}</div>
              <div>Role: {personalInfo.title}</div>
              <div>Location: {personalInfo.location}</div>
              <div className="text-[#EAE4DD]/70 text-xs mt-1">{personalInfo.summary}</div>
            </div>
          ),
        });
        break;

      case 'skills':
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: (
            <div className="space-y-1 text-xs">
              <div>
                <span className="text-[#F15A24] font-semibold">Frontend:</span> React 19, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vue.js
              </div>
              <div>
                <span className="text-white font-semibold">Backend:</span> Node.js, Express.js, Python, FastAPI, RESTful APIs, GraphQL
              </div>
              <div>
                <span className="text-[#F15A24] font-semibold">Databases:</span> PostgreSQL, MySQL, SQLite, MongoDB, Firebase
              </div>
              <div>
                <span className="text-white font-semibold">Tools:</span> Git, GitHub (@umer824), Vite, VS Code, Linux CLI
              </div>
            </div>
          ),
        });
        break;

      case 'projects':
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: (
            <div className="space-y-1 text-xs">
              <div>1. <span className="text-[#F15A24] font-semibold">LinguaQuest</span> — Multilingual gamified learning app (React 19, TS, Tailwind, Node, Firebase)</div>
              <div>2. <span className="text-[#F15A24] font-semibold">Iris AI Assistant</span> — Voice &amp; text engine (FastAPI, SQLAlchemy, SQLite, Pydantic)</div>
              <div>3. <span className="text-[#F15A24] font-semibold">KicksHub</span> — Footwear e-commerce storefront (React 19, Vite, CSS3)</div>
              <div>4. <span className="text-[#F15A24] font-semibold">3D Perspective Showcase</span> — 60 FPS CSS3 transform engine</div>
            </div>
          ),
        });
        break;

      case 'education':
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: (
            <div className="space-y-1 text-xs">
              <div>• <span className="text-[#F15A24] font-semibold">Saylani Mass I.T Training (S.M.I.T) (2024)</span>: Certificate in Web Development</div>
              <div>• <span className="text-[#F15A24] font-semibold">Cisco Networking Academy (2023)</span>: Networking Fundamentals Certificate</div>
              <div>• <span className="text-[#F15A24] font-semibold">CSS Essentials Certification</span>: Advanced styling &amp; layouts</div>
              <div>• <span className="text-[#F15A24] font-semibold">Board of Secondary Education Karachi</span>: Matriculation</div>
            </div>
          ),
        });
        break;

      case 'contact':
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: (
            <div className="space-y-1 text-xs">
              <div>• Email: <span className="text-[#F15A24] font-semibold">{personalInfo.email}</span></div>
              <div>• Phone / WhatsApp: <span className="text-[#F15A24] font-semibold">{personalInfo.phone}</span></div>
              <div>• LinkedIn: <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-white underline">{personalInfo.linkedinUrl}</a></div>
              <div>• GitHub: <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-white underline">{personalInfo.githubUrl}</a></div>
              <div>• Location: {personalInfo.location}</div>
            </div>
          ),
        });
        break;

      case 'resume':
        window.open(personalInfo.resumeUrl, '_blank');
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: <span className="text-[#F15A24]">Opening official resume PDF in a new tab...</span>,
        });
        break;

      case 'karachi-time':
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        newItems.push({
          id: `sys-${Date.now()}`,
          type: 'system',
          content: <span>Karachi Local Time: <strong className="text-[#F15A24]">{timeStr} PKT (UTC+5)</strong></span>,
        });
        break;

      default:
        newItems.push({
          id: `err-${Date.now()}`,
          type: 'error',
          content: `Command not found: "${trimmed}". Type 'help' to see valid commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newItems]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'education', 'contact', 'resume', 'karachi-time', 'clear'];

  return (
    <section id="terminal" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EAE4DD] text-[#F15A24] font-mono text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Interactive CLI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1C1C1C] tracking-tight">
            Developer Terminal
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            Recruiter &amp; Engineer Playground: Query qualifications directly via command line.
          </p>
        </div>

        {/* Console Box */}
        <div className="rounded-3xl overflow-hidden border border-[#EAE4DD] bg-[#1C1C1C] shadow-[0_12px_40px_rgba(28,28,28,0.12)] font-mono text-xs sm:text-sm">
          {/* Header */}
          <div className="bg-[#141414] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
              <TerminalIcon className="w-3.5 h-3.5 text-[#F15A24]" />
              <span>umer@karachi: ~/portfolio (bash)</span>
            </div>
            <span className="text-[11px] text-slate-400">type 'help'</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3">
            {history.map((item) => (
              <div
                key={item.id}
                className={
                  item.type === 'user'
                    ? 'text-[#F15A24] font-semibold'
                    : item.type === 'error'
                    ? 'text-[#FF5F56]'
                    : 'text-[#EAE4DD]'
                }
              >
                {item.content}
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>

          {/* Input Row */}
          <div className="px-6 pb-4 pt-1 flex items-center gap-2 border-t border-white/5 bg-[#171717]">
            <span className="text-[#F15A24] font-bold select-none">umer@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="try typing 'skills', 'projects', or 'whoami'..."
              className="flex-1 bg-transparent text-white outline-none font-mono text-xs sm:text-sm placeholder:text-slate-500 py-2"
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          {/* Quick Buttons */}
          <div className="bg-[#111111] px-5 py-2.5 border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-400 mr-1">Quick run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-0.5 rounded-full bg-[#222222] hover:bg-[#2e2e2e] text-[#F15A24] border border-white/10 text-[11px] font-mono transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
