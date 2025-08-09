import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { cmdMap } from "../data/commands";

/* ---------- cursor pulse ---------- */
const pulse = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0.25; }
  100% { opacity: 1; }
`;

/* ---------- colours ---------- */
const BROWN = "#b5651d";
const BLUE = "#1e90ff";
const GREEN = "#009400";
const YELLOW = "#ffff00";

/* ---------- layout ---------- */
const Container = styled.div`
  background: #000;
  height: 100vh;
  padding: 1.5rem 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  font-family: "Fira Code", monospace;
  font-size: 0.8rem;
  line-height: 1.2;
`;

const AsciiContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const AsciiColumn = styled.div`
  flex: 1;
`;

const Prompt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const PromptLabel = styled.span`
  color: ${GREEN};
  user-select: none;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.55rem;
  height: 1.1rem;
  background: ${GREEN};
  border-radius: 2px;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Line = styled.div`
  white-space: pre-wrap;
`;

/* ---------- line-by-line typewriter ---------- */
function TypingLine({ line, color, onDone, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      if (onDone) {
        setTimeout(onDone, 150);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, onDone]);

  // Render either string or JSX
  return visible ? (
    <Line style={{ color }}>
      {typeof line === "string" && line.includes("<a href") ? (
        <SafeLink html={line} />
      ) : (
        line
      )}
    </Line>
  ) : null;
}
// Render links safely
function SafeLink({ html }) {
  const clean = html.replace(
    /<a\s+(href="[^"]+")/g,
    '<a $1 target="_blank" rel="noopener noreferrer"'
  );
  return <span dangerouslySetInnerHTML={{ __html: clean }} />;
}
/* ---------- main ---------- */
export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [showCompanyText, setShowCompanyText] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const inputRef = useRef(null);

  /* ---------- banner & welcome lines ---------- */
  const companyText =
    "HadeyGhoptey (HG) Not A Corporation. All ghoṭey reserved.";

  const pikachuLines = [
    "⢰⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀",
    "⠀⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣾⣿",
    "⠀⠘⢿⣿⣿⣿⣿⣦⣀⣀⣀⣄⣀⣀⣠⣀⣤⣶⣿⣿⣿⣿⣿⠇",
    "⠀⠀⠈⠻⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀",
    "⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠋⠀⠀⠀",
    "⠀⠀⠀⢠⣿⣿⡏⠆⢹⣿⣿⣿⣿⣿⣿⠒⠈⣿⣿⣿⣇⠀⠀⠀",
    "⠀⠀⠀⣼⣿⣿⣷⣶⣿⣿⣛⣻⣿⣿⣿⣶⣾⣿⣿⣿⣿⡀⠀⠀",
    "⠀⠀⠀⡁⠀⠈⣿⣿⣿⣿⢟⣛⡻⣿⣿⣿⣟⠀⠀⠈⣿⡇⠀⠀",
    "⠀⠀⠀⢿⣶⣿⣿⣿⣿⣿⡻⣿⡿⣿⣿⣿⣿⣶⣶⣾⣿⣿⠀⠀",
    "⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀",
    "⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀",
  ];

  const hadeyLines = [
    "                                                                          ",
    "                                                                          ",
    "    __  __          __           ________                __            ",
    "   / / / /___ _____/ /__  __  __/ ____/ /_  ____  ____  / /____  __  __",
    "  / /_/ / __ `/ __  / _ \\  / / / / __/ __ \\/ __ \\/ __ \\/ __/ _ \\/ / / /",
    " / __  / /_/ / /_/ /  __/ /_/ / /_/ / / / / /_/ / /_/ / /_/  __/ /_/ / ",
    "/_/ /_/\\__,_/\\__,_/\\___/\\__, /\\____/_/ /_/\\____/ .___/\\__/\\___/\\__, /  ",
    "                       /____/                 /_/             /____/   ",
  ];

  const welcomeLines = [
    "Welcome to my terminal portfolio. (Version 2.0)",
    "-----------------------------------------",
    "For a list of available commands, type 'help'.",
  ];

  /* ---------- command handling ---------- */
  const run = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const entry = cmdMap[trimmed];
    const output = entry
      ? entry.action()
      : [`Command not found: ${trimmed}. Type 'help' for list.`];

    setHistory((h) => [
      ...h,
      { cmd, output, prompt: `[guest@arch][~]$ ${trimmed}` },
    ]);
    setInput("");
  }, []);

  const handleKey = (e) => {
    if (e.key === "Enter") run(input);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  /* ---------- show texts timing ---------- */
  useEffect(() => {
    // Show company text quickly
    const companyTimer = setTimeout(() => {
      setShowCompanyText(true);
    }, 300);

    // Calculate typing duration for Pikachu and Hadey lines (max lines * delay per line + buffer)
    const totalLines = Math.max(pikachuLines.length, hadeyLines.length);
    const typingDuration = totalLines * 100 + 500;

    // Show welcome and prompt after ASCII art done typing
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, typingDuration);

    return () => {
      clearTimeout(companyTimer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  /* ---------- render ---------- */
  return (
    <Container onClick={() => inputRef.current?.focus()}>
      {/* Company text at top */}
      {showCompanyText && (
        <TypingLine line={companyText} color={BROWN} delay={0} />
      )}

      {/* ASCII art side by side */}
      <AsciiContainer>
        {/* Pikachu column */}
        <AsciiColumn>
          {pikachuLines.map((l, i) => (
            <TypingLine
              key={`pika-${i}`}
              line={l}
              color={YELLOW}
              delay={i * 100}
            />
          ))}
        </AsciiColumn>

        {/* HadeyGhoptey column */}
        <AsciiColumn>
          {hadeyLines.map((l, i) => (
            <TypingLine
              key={`hadey-${i}`}
              line={l}
              color={GREEN}
              delay={i * 100}
            />
          ))}
        </AsciiColumn>
      </AsciiContainer>

      {/* Welcome block typing with "help" in blue */}
      {showWelcome &&
        showCompanyText &&
        welcomeLines.map((l, i) => {
          if (l.includes("help")) {
            const parts = l.split("help");
            const jsxLine = (
              <>
                {parts[0]}
                <span style={{ color: BLUE }}>help</span>
                {parts[1]}
              </>
            );
            return (
              <TypingLine
                key={`welcome-${i}`}
                line={jsxLine}
                color={BROWN}
                delay={(i + 3) * 50}
              />
            );
          }
          return (
            <TypingLine
              key={`welcome-${i}`}
              line={l}
              color={BROWN}
              delay={(i + 3) * 50}
            />
          );
        })}

      {/* command history */}
      {history.map((h, i) => (
        <div key={i}>
          {h.prompt && (
            <Prompt>
              <PromptLabel>{h.prompt}</PromptLabel>
            </Prompt>
          )}
          {h.output.map((line, j) =>
            line === "__GALLERY__" ? (
              <GalleryGrid key={j} />
            ) : (
              <TypingLine key={j} line={line} color={BLUE} delay={j * 100} />
            )
          )}
        </div>
      ))}

      {/* live prompt */}
      {showWelcome && showCompanyText && (
        <Prompt>
          <PromptLabel>[guest@arch][~]$</PromptLabel>
          <HiddenInput
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
          <span style={{ color: BLUE }}>{input}</span>
          <Cursor />
        </Prompt>
      )}
    </Container>
  );
}
/* ---------- images + gallery ---------- */
const images = [
  { src: "/src/assets/FlagForge.png", desc: "FlagForge – CTF flag generator" },
  { src: "/src/assets/react.svg", desc: "React logo" },
  { src: "/src/assets/TeamFlagForge.png", desc: "FlagForge team shot" },
  { src: "/src/assets/TeamSafaStack.png", desc: "SafaStack squad" },
];

/* ---------- gallery grid ---------- */
function GalleryGrid() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {images.map(({ src, desc }, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            width: "140px",
            height: "90px",
            overflow: "hidden",
            border: `1px solid ${GREEN}`,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          <img
            src={src}
            alt={desc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 0)}
          >
            <span style={{ fontSize: "0.7rem", color: "#fff" }}>{desc}</span>
            <button
              style={{
                marginTop: "0.25rem",
                padding: "0.2rem 0.5rem",
                fontSize: "0.7rem",
                background: GREEN,
                color: "#000",
                border: "none",
                borderRadius: 3,
                cursor: "pointer",
              }}
              onClick={() => window.open(src, "_blank")}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
