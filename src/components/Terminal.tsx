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
      content: "Welcome to Umer Jahangir's Interactive Developer CLI v2.0 (React + TypeScript).",
    },
    {
      id: 'welcome-2',
      type: 'system',
      content: "Type 'help' for a full list of commands or click the shortcut buttons below.",
    },
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    // Add user prompt
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
            <div className="space-y-1 text-slate-300">
              <div>Available Commands:</div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">whoami</span> : Summary of Umer Jahangir
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">skills</span> : Verified technical stack
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">projects</span> : Real projects &amp; architecture
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">education</span> : S.M.I.T, Cisco &amp; certs
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">contact</span> : Email, WhatsApp &amp; LinkedIn
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">resume</span> : Download official resume PDF
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">karachi-time</span> : Current local time in Karachi
              </div>
              <div className="pl-2">
                • <span className="text-amber-400 font-bold">clear</span> : Clear console window
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
              <div className="text-emerald-400 font-bold">{personalInfo.name}</div>
              <div>Role: {personalInfo.title}</div>
              <div>Location: {personalInfo.location}</div>
              <div className="text-slate-400 text-xs mt-1">{personalInfo.summary}</div>
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
                <span className="text-cyan-400 font-semibold">Frontend:</span> React 19, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vue.js
              </div>
              <div>
                <span className="text-indigo-400 font-semibold">Backend:</span> Node.js, Express.js, Python, FastAPI, RESTful APIs, GraphQL
              </div>
              <div>
                <span className="text-emerald-400 font-semibold">Databases:</span> PostgreSQL, MySQL, SQLite, MongoDB, Firebase
              </div>
              <div>
                <span className="text-amber-400 font-semibold">Tools:</span> Git, GitHub (@umer824), Vite, VS Code, Linux CLI
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
              <div>1. <span className="text-cyan-400 font-semibold">LinguaQuest</span> — Multilingual gamified learning app (React 19, TS, Tailwind, Node, Firebase)</div>
              <div>2. <span className="text-cyan-400 font-semibold">Iris AI Assistant</span> — Voice &amp; text engine (FastAPI, SQLAlchemy, SQLite, Pydantic)</div>
              <div>3. <span className="text-cyan-400 font-semibold">KicksHub</span> — Footwear e-commerce storefront (React 19, Vite, CSS3)</div>
              <div>4. <span className="text-cyan-400 font-semibold">3D Perspective Showcase</span> — 60 FPS CSS3 transform engine</div>
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
              <div>• <span className="text-cyan-400 font-semibold">Saylani Mass I.T Training (S.M.I.T) (2024)</span>: Certificate in Web Development</div>
              <div>• <span className="text-cyan-400 font-semibold">Cisco Networking Academy (2023)</span>: Networking Fundamentals Certificate</div>
              <div>• <span className="text-cyan-400 font-semibold">CSS Essentials Certification</span>: Advanced styling &amp; layouts</div>
              <div>• <span className="text-cyan-400 font-semibold">Board of Secondary Education Karachi</span>: Matriculation</div>
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
              <div>• Email: <span className="text-cyan-400 font-semibold">{personalInfo.email}</span></div>
              <div>• Phone / WhatsApp: <span className="text-cyan-400 font-semibold">{personalInfo.phone}</span></div>
              <div>• LinkedIn: <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{personalInfo.linkedinUrl}</a></div>
              <div>• GitHub: <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{personalInfo.githubUrl}</a></div>
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
          content: <span className="text-emerald-400">Opening official resume PDF in a new tab...</span>,
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
          content: <span>Karachi Local Time: <strong className="text-emerald-400">{timeStr} PKT (UTC+5)</strong></span>,
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
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            Interactive CLI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Developer Terminal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Recruiter &amp; Engineer Playground: Query qualifications directly via command line.
          </p>
        </div>

        {/* Console Box */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#090d16] shadow-2xl font-mono text-xs sm:text-sm">
          {/* Header */}
          <div className="bg-slate-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>umer@karachi: ~/portfolio (bash)</span>
            </div>
            <span className="text-[11px] text-slate-500">type 'help'</span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 min-h-[260px] max-h-[380px] overflow-y-auto space-y-2.5">
            {history.map((item) => (
              <div
                key={item.id}
                className={
                  item.type === 'user'
                    ? 'text-cyan-400 font-semibold'
                    : item.type === 'error'
                    ? 'text-rose-400'
                    : 'text-slate-300'
                }
              >
                {item.content}
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>

          {/* Input Row */}
          <div className="px-5 pb-4 pt-1 flex items-center gap-2">
            <span className="text-cyan-400 font-bold select-none">umer@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="try typing 'skills', 'projects', or 'whoami'..."
              className="flex-1 bg-transparent text-white outline-none font-mono text-xs sm:text-sm placeholder:text-slate-600"
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          {/* Quick Buttons */}
          <div className="bg-slate-950/80 px-4 py-2.5 border-t border-white/5 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-slate-500 mr-1">Quick run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-[11px] transition-colors"
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
