<style>
  /* ═══════════════════════════════════════════════════════════════
   NODE.JS WALL NOTES — REFINED LIGHT THEME CSS
   Color System: Warm Ivory base · Deep Charcoal text · 
                 Sage Green accent · Teal highlight · Amber keyword
   Font Stack: Literata (body) · JetBrains Mono (code) · Fraunces (headings)
   ═══════════════════════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,300;0,7..72,400;0,7..72,500;0,7..72,600;1,7..72,400&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;1,9..144,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* ─── DESIGN TOKENS ─────────────────────────────────────────── */
:root {
  /* Base surfaces */
  --bg-page:          #F7F4EF;   /* warm ivory — main background */
  --bg-card:          #FFFFFF;   /* pure white — content cards */
  --bg-code:          #F0EDE7;   /* warm cream — inline code bg */
  --bg-code-block:    #1E1E2A;   /* deep navy — code block bg */
  --bg-blockquote:    #EEF7F2;   /* soft mint — definition boxes */
  --bg-table-header:  #2C3E35;   /* deep forest — table headers */
  --bg-table-alt:     #F4F8F5;   /* faint green — alt table row */
  --bg-keyword:       #FFF8EC;   /* warm cream — keyword chips */

  /* Typography */
  --text-primary:     #1A1A1A;   /* near-black — body text */
  --text-heading:     #0F1F17;   /* darkest forest — headings */
  --text-secondary:   #3D4D45;   /* dark muted green — subtext */
  --text-muted:       #6B7D74;   /* medium sage — captions */
  --text-code:        #C85A2A;   /* burnt orange — inline code */
  --text-code-block:  #D4E8D4;   /* soft green — code block text */
  --text-link:        #1A6644;   /* deep green — links */
  --text-keyword:     #8A5C00;   /* dark amber — keyword text */
  --text-table-head:  #FFFFFF;   /* white — table header text */
  --text-blockquote:  #1E4030;   /* deep teal — definition text */

  /* Accents & Borders */
  --accent-primary:   #2D7A55;   /* Node.js green — primary accent */
  --accent-secondary: #1A6644;   /* deep emerald — hover/active */
  --accent-amber:     #B87800;   /* amber — keywords highlight */
  --accent-teal:      #1E8080;   /* teal — diagrams/special */
  --accent-coral:     #C04A2A;   /* coral — warnings/important */

  --border-light:     #E2DDD6;   /* warm beige border */
  --border-medium:    #C8C0B4;   /* medium warm border */
  --border-accent:    #2D7A55;   /* green accent border */
  --border-code:      #3A3A4E;   /* code block border */

  /* Shadows */
  --shadow-card:      0 2px 12px rgba(15, 31, 23, 0.07), 
                      0 1px 3px rgba(15, 31, 23, 0.05);
  --shadow-table:     0 2px 8px rgba(15, 31, 23, 0.06);
  --shadow-code:      inset 0 1px 4px rgba(0, 0, 0, 0.15);

  /* Spacing & Shape */
  --radius-sm:        4px;
  --radius-md:        8px;
  --radius-lg:        12px;
  --radius-xl:        16px;
}


/* ─── RESET & BASE ───────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Literata', Georgia, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: var(--text-primary);
  background-color: var(--bg-page);
  background-image:
    radial-gradient(circle at 20% 10%, rgba(45, 122, 85, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 90%, rgba(30, 128, 128, 0.04) 0%, transparent 50%);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/* ─── LAYOUT WRAPPER ─────────────────────────────────────────── */
.markdown-body,
article,
main,
.content {
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 2rem 5rem;
}


/* ─── HEADINGS ───────────────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Fraunces', Georgia, serif;
  color: var(--text-heading);
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.01em;
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-heading);
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid var(--accent-primary);
  position: relative;
}

h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--accent-amber);
  margin-top: 4px;
}

h2 {
  font-size: 1.6rem;
  color: var(--text-heading);
  margin-top: 3rem;
  margin-bottom: 1.25rem;
  padding: 0.6rem 1rem 0.6rem 1.1rem;
  background: linear-gradient(135deg, #EEF7F2 0%, #F4FBF7 100%);
  border-left: 4px solid var(--accent-primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  box-shadow: var(--shadow-card);
}

h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-top: 1.75rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.3rem;
  border-bottom: 1.5px dashed var(--border-medium);
  font-family: 'Literata', serif;
  letter-spacing: 0.01em;
}

h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-top: 1.25rem;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  font-family: 'Literata', serif;
  letter-spacing: 0.06em;
  font-size: 0.8rem;
}


/* ─── PARAGRAPHS & TEXT ──────────────────────────────────────── */
p {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 0.975rem;
  line-height: 1.8;
}

strong {
  font-weight: 600;
  color: var(--text-heading);
}

em {
  font-style: italic;
  color: var(--text-secondary);
}

a {
  color: var(--text-link);
  text-decoration: underline;
  text-decoration-color: rgba(45, 122, 85, 0.35);
  text-underline-offset: 2px;
  transition: color 0.2s, text-decoration-color 0.2s;
}

a:hover {
  color: var(--accent-primary);
  text-decoration-color: var(--accent-primary);
}

hr {
  border: none;
  border-top: 1.5px solid var(--border-light);
  margin: 2.5rem 0;
}


/* ─── BLOCKQUOTES (DEFINITIONS) ─────────────────────────────── */
blockquote {
  background: var(--bg-blockquote);
  border-left: 4px solid var(--accent-primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1rem 1.25rem;
  margin: 1.25rem 0;
  color: var(--text-blockquote);
  font-size: 0.95rem;
  font-style: normal;
  box-shadow: var(--shadow-card);
  position: relative;
}

blockquote::before {
  content: '📖';
  position: absolute;
  top: -8px;
  left: 12px;
  font-size: 0.85rem;
  background: var(--bg-blockquote);
  padding: 0 4px;
  line-height: 1;
}

blockquote p {
  margin-bottom: 0.4rem;
  color: var(--text-blockquote);
  font-size: 0.95rem;
}

blockquote p:last-child {
  margin-bottom: 0;
}

blockquote strong {
  color: var(--accent-secondary);
}

blockquote em {
  color: var(--text-muted);
  font-size: 0.875rem;
}


/* ─── LISTS ──────────────────────────────────────────────────── */
ul, ol {
  padding-left: 1.6rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

li {
  margin-bottom: 0.35rem;
  font-size: 0.975rem;
  line-height: 1.7;
}

ul li::marker {
  color: var(--accent-primary);
  font-size: 1.1em;
}

ol li::marker {
  color: var(--accent-primary);
  font-weight: 600;
}

li strong {
  color: var(--text-heading);
}


/* ─── INLINE CODE ────────────────────────────────────────────── */
code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.84em;
  font-weight: 500;
  color: var(--text-code);
  background: var(--bg-code);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  padding: 0.15em 0.45em;
  white-space: nowrap;
}


/* ─── CODE BLOCKS ────────────────────────────────────────────── */
pre {
  background: var(--bg-code-block);
  border: 1px solid var(--border-code);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 1.25rem 0;
  box-shadow: var(--shadow-code), var(--shadow-card);
  position: relative;
}

pre::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background: #FF5F57;
  border-radius: 50%;
  box-shadow: 20px 0 0 #FEBC2E, 40px 0 0 #28C840;
  margin-bottom: 1rem;
  opacity: 0.85;
}

pre code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  font-weight: 400;
  color: var(--text-code-block);
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  white-space: pre;
  line-height: 1.65;
}


/* ─── TABLES ─────────────────────────────────────────────────── */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.88rem;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-table);
  border: 1px solid var(--border-light);
}

thead tr {
  background: var(--bg-table-header);
}

thead th {
  color: var(--text-table-head);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 2px solid var(--accent-primary);
}

tbody tr {
  background: var(--bg-card);
  transition: background 0.15s ease;
}

tbody tr:nth-child(even) {
  background: var(--bg-table-alt);
}

tbody tr:hover {
  background: #E8F4EE;
}

tbody td {
  padding: 0.65rem 1rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-light);
  line-height: 1.55;
  vertical-align: top;
}

tbody td:first-child {
  font-weight: 500;
  color: var(--text-heading);
}

tbody td code {
  font-size: 0.8em;
}


/* ─── HORIZONTAL RULES ───────────────────────────────────────── */
hr {
  border: none;
  height: 1px;
  background: linear-gradient(
    to right, 
    transparent, 
    var(--border-medium) 20%, 
    var(--accent-primary) 50%, 
    var(--border-medium) 80%, 
    transparent
  );
  margin: 2.75rem 0;
}


/* ─── KEYWORD / BADGE CHIPS ──────────────────────────────────── */
/* For "🔑 Key Keywords" lines — use spans or style adjacent strong tags */
p > strong:only-child,
.keyword {
  display: inline-block;
  background: var(--bg-keyword);
  color: var(--text-keyword);
  border: 1px solid rgba(184, 120, 0, 0.25);
  border-radius: 100px;
  padding: 0.1em 0.65em;
  font-size: 0.78rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  letter-spacing: 0.02em;
  margin: 0 2px 2px 0;
  white-space: nowrap;
}


/* ─── SECTION CARDS ──────────────────────────────────────────── */
/* Wrap each numbered section in a card div if using HTML renderer */
.section-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease;
}

.section-card:hover {
  box-shadow: 0 4px 20px rgba(15, 31, 23, 0.1), 0 1px 4px rgba(15, 31, 23, 0.06);
}


/* ─── TABLE OF CONTENTS ──────────────────────────────────────── */
.toc,
nav {
  background: linear-gradient(135deg, #F0F8F4 0%, #EEF6F2 100%);
  border: 1px solid rgba(45, 122, 85, 0.2);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
}

.toc ol,
.toc ul,
nav ol,
nav ul {
  columns: 2;
  column-gap: 2rem;
}

.toc a,
nav a {
  font-size: 0.875rem;
  font-family: 'Literata', serif;
  color: var(--text-link);
  text-decoration: none;
  font-weight: 500;
}

.toc a:hover,
nav a:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}


/* ─── DIAGRAM / PRE ASCII BLOCKS ─────────────────────────────── */
pre code.language-,
pre:has(code:not([class])) {
  /* ASCII block diagrams get slightly warmer tone */
  font-size: 0.78rem;
  line-height: 1.5;
  letter-spacing: 0.01em;
}


/* ─── FOOTNOTES / SOURCES ────────────────────────────────────── */
em:last-child,
p > em:only-child {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-style: italic;
}


/* ─── SCROLLBAR ──────────────────────────────────────────────── */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-page);
}

::-webkit-scrollbar-thumb {
  background: var(--border-medium);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary);
}


/* ─── SELECTION HIGHLIGHT ────────────────────────────────────── */
::selection {
  background: rgba(45, 122, 85, 0.18);
  color: var(--text-heading);
}


/* ─── PRINT STYLES ───────────────────────────────────────────── */
@media print {
  body {
    background: #fff;
    font-size: 11pt;
  }

  pre {
    background: #F5F5F5;
    border: 1px solid #DDD;
  }

  pre code {
    color: #1A1A1A;
  }

  pre::before {
    display: none;
  }

  h2 {
    background: none;
    border-left: 3px solid #2D7A55;
    color: #0F1F17;
    box-shadow: none;
  }

  .section-card {
    box-shadow: none;
    border: 1px solid #E0E0E0;
  }

  a {
    color: #1A6644;
    text-decoration: none;
  }
}


/* ─── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 680px) {
  .markdown-body,
  article,
  main,
  .content {
    padding: 1.5rem 1rem 3rem;
  }

  h1 { font-size: 1.65rem; }
  h2 { font-size: 1.3rem; }
  h3 { font-size: 1rem; }

  table {
    font-size: 0.78rem;
    display: block;
    overflow-x: auto;
  }

  .toc ol,
  .toc ul,
  nav ol,
  nav ul {
    columns: 1;
  }

  pre {
    padding: 1rem;
  }

  pre code {
    font-size: 0.75rem;
  }
}
</style># 🟢 Node.js — Complete Interview Prep Wall Notes

> **Light Theme | Topic-by-Topic | Structured for Memory & Interviews**

---

## 📌 TABLE OF CONTENTS

1. [Node.js Architecture](#1-nodejs-architecture)
2. [V8 JavaScript Engine](#2-v8-javascript-engine)
3. [libuv & Async I/O](#3-libuv--async-io)
4. [Event Loop & Its Phases](#4-event-loop--its-phases)
5. [Module Systems: CJS vs ESM](#5-module-systems-cjs-vs-esm)
6. [Advanced Module Structuring](#6-advanced-module-structuring)
7. [Synchronous vs Asynchronous Execution](#7-synchronous-vs-asynchronous-execution)
8. [SetTimeout Trust Issues](#8-settimeout-trust-issues)
9. [Client-Server Architecture](#9-client-server-architecture)
10. [DNS, Domain Names & Ports](#10-dns-domain-names--ports)
11. [Data Transmission & TCP/IP](#11-data-transmission--tcpip)
12. [Building a Server with Node.js](#12-building-a-server-with-nodejs)
13. [Databases: RDBMS vs NoSQL](#13-databases-rdbms-vs-nosql)

---

## 1. Node.js Architecture

### 📖 Definition
> **Node.js** is a cross-platform, open-source JavaScript runtime environment built on Chrome's V8 engine. It executes JavaScript outside the browser, enabling server-side scripting.
> *(Source: Node.js Official Docs)*

### 🔑 Key Keywords
`Runtime` · `V8 Engine` · `C++ Application` · `Single-threaded` · `Non-blocking I/O` · `Full-Stack JS`

### 🏗️ Block Diagram

```
┌─────────────────────────────────────────────────┐
│                    NODE.JS                       │
│                                                  │
│   ┌────────────────┐    ┌─────────────────────┐  │
│   │  V8 JS Engine  │    │        libuv         │  │
│   │  (C++ based)   │    │  (Async I/O Library) │  │
│   │                │    │                     │  │
│   │ • Memory Heap  │    │ • Event Loop        │  │
│   │ • Call Stack   │    │ • Thread Pool       │  │
│   │ • GC           │    │ • Callback Queues   │  │
│   └────────────────┘    └─────────────────────┘  │
│                                                  │
│   ┌──────────────────────────────────────────┐   │
│   │         Node.js Core APIs / Modules       │   │
│   │  http · fs · path · os · crypto · events  │   │
│   └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

### ✅ Key Points
- Node.js is a **C++ application** with the V8 engine embedded inside it.
- Beyond V8, Node.js adds **"superpowers"** via APIs: file system access, HTTP, databases, timers.
- JavaScript traditionally ran only in browsers; Node.js allows it to run **on the server**.
- Enables **full-stack development** with a single language (JavaScript).

---

## 2. V8 JavaScript Engine

### 📖 Definition
> **V8** is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. It compiles JavaScript directly to native machine code using JIT (Just-In-Time) compilation.
> *(Source: Google V8 Docs)*

### 🔑 Key Keywords
`JIT Compilation` · `Machine Code` · `Memory Heap` · `Call Stack` · `Garbage Collector` · `C++`

### 🏗️ Block Diagram — V8 Internals

```
┌────────────────────────────────────┐
│          V8 JS ENGINE               │
│                                    │
│  JavaScript Source Code            │
│         ↓                          │
│  ┌──────────────┐                  │
│  │   Parser     │ → AST (Abstract  │
│  └──────────────┘   Syntax Tree)   │
│         ↓                          │
│  ┌──────────────┐                  │
│  │  Interpreter │ → Bytecode       │
│  │  (Ignition)  │                  │
│  └──────────────┘                  │
│         ↓                          │
│  ┌──────────────┐                  │
│  │  JIT Compiler│ → Machine Code   │
│  │  (TurboFan)  │                  │
│  └──────────────┘                  │
│                                    │
│  ┌─────────┐   ┌────────────────┐  │
│  │  Memory │   │   Call Stack   │  │
│  │   Heap  │   │  (Execution)   │  │
│  └─────────┘   └────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │     Garbage Collector (GC)   │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

### ✅ Key Points
- V8 reads JavaScript → converts to **machine-level binary code** the processor understands.
- Handles **memory allocation** and **garbage collection** automatically.
- Executes code on the **main thread** (single thread).
- V8 alone cannot access file system, network, or OS → that's where **Node.js + libuv** help.

---

## 3. libuv & Async I/O

### 📖 Definition
> **libuv** is a multi-platform C library that provides support for asynchronous I/O based on event loops. It is the primary reason for Node.js's high performance and non-blocking nature.
> *(Source: libuv Official Docs)*

### 🔑 Key Keywords
`Asynchronous` · `Non-blocking` · `Event Loop` · `Thread Pool` · `Callback Queue` · `OS Interaction`

### 🏗️ Block Diagram — libuv Architecture

```
┌────────────────────────────────────────────────────────┐
│                        libuv                            │
│                                                        │
│   Incoming Async Tasks (API calls, fs, timers, DB)     │
│                    ↓                                   │
│   ┌─────────────────────────────────────────────────┐  │
│   │               EVENT LOOP                        │  │
│   │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │  │
│   │  │  Timers  │→│  Poll    │→│  Check / Close   │ │  │
│   │  └──────────┘ └──────────┘ └──────────────────┘ │  │
│   └─────────────────────────────────────────────────┘  │
│                    ↓                                   │
│   ┌─────────────────────────────────────────────────┐  │
│   │          THREAD POOL (Default: 4 threads)        │  │
│   │  Thread 1 │ Thread 2 │ Thread 3 │ Thread 4      │  │
│   │  (fs ops)   (crypto)   (DNS)     (custom)       │  │
│   └─────────────────────────────────────────────────┘  │
│                    ↓                                   │
│              OS Kernel (Network, Disk, etc.)           │
└────────────────────────────────────────────────────────┘
                    ↓  (callback ready)
             V8 Call Stack ← Callback pushed back
```

### ✅ Key Points
- V8 offloads tasks like **API calls, file I/O, timers** to libuv.
- libuv interacts with the **operating system** to execute these tasks without blocking V8.
- Once a task finishes, the **callback** is pushed back to the call stack.
- Thread pool (default 4 threads) handles heavy CPU tasks like crypto, DNS, file compression.

---

## 4. Event Loop & Its Phases

### 📖 Definition
> The **Event Loop** is the mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible. It cycles through phases to determine what callbacks to execute next.
> *(Source: Node.js Official Docs)*

### 🔑 Key Keywords
`Phases` · `Timers` · `Poll` · `Check` · `Close` · `Microtask Queue` · `macroTask`

### 🏗️ Event Loop Phases Diagram

```
        ┌─────────────────────────────────┐
        │         EVENT LOOP CYCLE         │
        └─────────────────────────────────┘
                        │
          ┌─────────────▼──────────────┐
          │  1. TIMERS PHASE            │
          │  Executes: setTimeout()     │
          │             setInterval()   │
          └─────────────┬──────────────┘
                        │
          ┌─────────────▼──────────────┐
          │  2. PENDING CALLBACKS       │
          │  I/O errors from prev cycle │
          └─────────────┬──────────────┘
                        │
          ┌─────────────▼──────────────┐
          │  3. IDLE / PREPARE          │
          │  Internal use only          │
          └─────────────┬──────────────┘
                        │
          ┌─────────────▼──────────────┐
          │  4. POLL PHASE              │
          │  Retrieve new I/O events    │
          │  Execute I/O callbacks      │
          └─────────────┬──────────────┘
                        │
          ┌─────────────▼──────────────┐
          │  5. CHECK PHASE             │
          │  Executes: setImmediate()   │
          └─────────────┬──────────────┘
                        │
          ┌─────────────▼──────────────┐
          │  6. CLOSE CALLBACKS         │
          │  socket.on('close', ...)    │
          └─────────────┬──────────────┘
                        │
          ┌─────────────▼──────────────┐
          │   Microtask Queue           │
          │   (process.nextTick,        │
          │    Promises .then)          │
          │   → Runs BETWEEN phases     │
          └────────────────────────────┘
```

### 📊 Priority Order Table

| Priority | Queue | Example |
|----------|-------|---------|
| 1 (Highest) | Microtasks: `process.nextTick` | `process.nextTick(fn)` |
| 2 | Microtasks: Promise callbacks | `Promise.resolve().then(fn)` |
| 3 | Timers | `setTimeout`, `setInterval` |
| 4 | I/O Callbacks | `fs.readFile` callbacks |
| 5 | `setImmediate` | `setImmediate(fn)` |
| 6 (Lowest) | Close callbacks | `socket.on('close')` |

---

## 5. Module Systems: CJS vs ESM

### 📖 Definition
> A **Module** is a reusable piece of code encapsulated in its own file. Node.js supports two module systems: CommonJS (legacy) and ES Modules (modern standard).
> *(Source: Node.js Docs — Modules)*

### 🔑 Key Keywords
`require` · `module.exports` · `import` · `export` · `synchronous` · `asynchronous` · `strict mode`

### 📊 CJS vs ESM Comparison Table

| Feature | CommonJS (CJS) | ES Modules (ESM) |
|---|---|---|
| **Syntax** | `require()` / `module.exports` | `import` / `export` |
| **Loading** | Synchronous | Asynchronous |
| **Mode** | Non-strict (sloppy mode) | Strict mode by default |
| **File Extension** | `.js` (default in Node) | `.mjs` or `"type":"module"` |
| **Dynamic Import** | Yes, native | `import()` dynamic syntax |
| **Tree Shaking** | ❌ Not supported | ✅ Supported |
| **Top-Level Await** | ❌ Not supported | ✅ Supported |
| **Usage** | Legacy/Default Node.js | Modern, standardized |

### 🏗️ Code Comparison

```
CJS (CommonJS)                    ESM (ES Modules)
──────────────────────────────    ─────────────────────────────
// Export                         // Export
module.exports = { add, sub }     export const add = (a,b) => a+b
                                  export default function sub(){}
// Import                         // Import
const { add } = require('./math') import { add } from './math.js'
```

### ✅ Enable ESM
```json
// package.json
{
  "type": "module"
}
```

---

## 6. Advanced Module Structuring

### 📖 Definition
> **Folder Modules** allow a directory to act as a single module via an `index.js` file that aggregates and re-exports functionalities, creating a clean abstraction layer.

### 🔑 Key Keywords
`index.js` · `Barrel Export` · `Abstraction Layer` · `JSON Import` · `Module Caching`

### 🏗️ Folder Module Structure

```
project/
│
├── routes/
│   ├── index.js        ← Aggregates all routes (barrel file)
│   ├── userRoutes.js
│   └── productRoutes.js
│
├── models/
│   ├── index.js
│   └── User.js
│
└── app.js              ← imports from 'routes' (not specific file)
     const routes = require('./routes') // reads routes/index.js
```

### ✅ Key Points
- `index.js` in a folder = the **default entry point** for that module.
- JSON files can be **directly imported** using `require('./data.json')`.
- Node.js **caches modules** after the first `require()` — subsequent calls return cached version.
- Abstraction: `app.js` doesn't need to know what's inside `routes/` folder.

---

## 7. Synchronous vs Asynchronous Execution

### 📖 Definitions

> **Synchronous execution** means operations are performed one at a time, in sequence. Each operation must complete before the next begins. *(blocks the thread)*

> **Asynchronous execution** means operations are initiated and the program continues running. A callback/promise handles the result when the operation completes. *(non-blocking)*

### 🔑 Key Keywords
`Blocking` · `Non-Blocking` · `readFileSync` · `readFile` · `Callback` · `Promise` · `async/await`

### 🏗️ Execution Flow Diagram

```
SYNCHRONOUS (Blocking)               ASYNCHRONOUS (Non-Blocking)
──────────────────────               ─────────────────────────────
  Call Stack                           Call Stack + libuv
  ┌─────────────┐                      ┌────────┐   ┌──────────┐
  │ Task 1      │                      │Task 1  │   │ libuv    │
  │ (completes) │                      │        │   │ ┌──────┐ │
  ├─────────────┤                      ├────────┤   │ │Task 2│ │
  │ Task 2      │  ← BLOCKS HERE       │Task 3  │   │ │(I/O) │ │
  │ (slow I/O)  │                      │        │   │ └──┬───┘ │
  ├─────────────┤                      └────────┘   └───┼──────┘
  │ Task 3      │  ← Waits...                           │
  └─────────────┘                      ← Callback(Task 2) when ready
```

### 📊 Sync vs Async Methods

| Method | Type | Blocks Thread? | Use In Production? |
|--------|------|----------------|--------------------|
| `fs.readFileSync()` | Sync | ✅ Yes | ❌ Avoid |
| `fs.readFile()` | Async | ❌ No | ✅ Yes |
| `crypto.pbkdf2Sync()` | Sync | ✅ Yes | ❌ Avoid |
| `crypto.pbkdf2()` | Async | ❌ No | ✅ Yes |
| `require()` | Sync | ✅ Yes | ✅ OK (startup only) |

### ⚠️ Blocking Code Warning
```
Sync methods "choke" the V8 engine:
  → Server cannot handle OTHER requests while blocked
  → Use only at startup (e.g., config loading), NEVER in request handlers
```

---

## 8. SetTimeout Trust Issues

### 📖 Definition
> `setTimeout(fn, 0)` does **not** guarantee immediate execution. Callbacks are only pushed to the call stack once the **current execution context is empty** AND the timer phase of the event loop is reached.

### 🔑 Key Keywords
`Timer Phase` · `Minimum Delay` · `Call Stack Empty` · `Callback Queue` · `Trust Issues`

### 🏗️ setTimeout(fn, 0) Execution Flow

```
Code: setTimeout(() => console.log("A"), 0)
      console.log("B")
      console.log("C")

Timeline:
  ┌─────────────────────────────────────────┐
  │ 1. setTimeout registered → libuv timer  │
  │ 2. console.log("B") → executes NOW      │
  │ 3. console.log("C") → executes NOW      │
  │ 4. Call stack EMPTY                     │
  │ 5. Event loop checks timer queue        │
  │ 6. console.log("A") → executes          │
  └─────────────────────────────────────────┘

Output:  B → C → A
```

### ✅ Key Insight
- Even `setTimeout(fn, 0)` has a **minimum delay** (typically ~1ms in browsers, ~1ms+ in Node).
- The callback waits for the **call stack to be empty** before it can run.
- This is why `setTimeout` has "trust issues" — its timing is **conditional**, not guaranteed.

---

## 9. Client-Server Architecture

### 📖 Definition
> The **client-server model** is a distributed application structure that partitions tasks between providers of a resource (servers) and requesters (clients) communicating over a network.
> *(Source: GeeksforGeeks — Client-Server Architecture)*

### 🔑 Key Keywords
`Client` · `Server` · `Socket` · `Request` · `Response` · `HTTP` · `FTP` · `SMTP` · `IP Address`

### 🏗️ Client-Server Block Diagram

```
  CLIENT                          SERVER (102.209.1.3)
  ┌─────────────────────┐         ┌──────────────────────────────────┐
  │  User → Browser     │         │                                  │
  │  IP: 271.1.7.98     │         │  ┌──────────────────────────┐    │
  │                     │ socket  │  │     Server Application    │    │
  │                     │◄───────►│  │  ┌─────┐┌──────┐┌─────┐  │    │
  │                     │ HTTP /  │  │  │HTML ││ API  ││ DB  │  │    │
  └─────────────────────┘ FTP /   │  │  └─────┘└──────┘└─────┘  │    │
                          SMTP    │  └──────────────────────────┘    │
                          TCP/IP  │                                  │
                                  └──────────┬───────────────────────┘
                                             │
                         ┌───────────────────┼───────────────────┐
                         ▼                   ▼                   ▼
                    ┌─────────┐        ┌──────────┐        ┌──────────┐
                    │Database │        │ Frontend │        │  Cache   │
                    │ Server  │        │  Server  │        │  Server  │
                    └─────────┘        └──────────┘        └──────────┘
```

### 📊 Web Protocols Table

| Protocol | Full Form | Purpose |
|----------|-----------|---------|
| **HTTP** | HyperText Transfer Protocol | Web data transfer |
| **HTTPS** | HTTP Secure | Encrypted web transfer |
| **FTP** | File Transfer Protocol | File transfers |
| **SMTP** | Simple Mail Transfer Protocol | Email sending |
| **TCP/IP** | Transmission Control/Internet Protocol | Reliable data delivery |
| **WebSocket** | — | Real-time bidirectional communication |

### ✅ Key Points
- A **socket** is a temporary open connection (endpoint) between client and server.
- Data travels as **packets** — small chunks governed by TCP/IP.
- Why AWS over personal computers: dedicated IP, 24/7 uptime, power backup, scalability.

---

## 10. DNS, Domain Names & Ports

### 📖 Definitions

> **DNS (Domain Name System)** is the internet's phonebook — it translates human-readable domain names (like `google.com`) into machine-readable IP addresses.
> *(Source: Cloudflare Docs)*

> **Port** is a virtual point where network connections start and end. It's a number that identifies a specific process/application on a server.
> *(Source: GeeksforGeeks)*

### 🔑 Key Keywords
`DNS` · `Domain` · `IP Address` · `Port Number` · `Name Resolution` · `A Record`

### 🏗️ DNS Resolution Flow

```
User types: www.namastedev.com
                    │
                    ▼
          ┌─────────────────┐
          │   DNS Server    │  ← Looks up domain → IP mapping
          └────────┬────────┘
                   │
                   │  Returns: 102.209.1.3
                   ▼
          ┌─────────────────────────────┐
          │  Client now connects to     │
          │  102.209.1.3 : PORT         │
          └─────────────────────────────┘
```

### 🏗️ IP + Port + Path Structure

```
  Domain Name
      ↕
  IP Address  +  PORT  +  PATH
  ─────────────────────────────────────────
  123.4.5.6   :  3000  /api/users

  ↑               ↑         ↑
  Server IP    HTTP Server  API endpoint
               (app port)   (routing)
```

### 📊 Common Port Numbers

| Port | Service | Description |
|------|---------|-------------|
| 80 | HTTP | Default web traffic |
| 443 | HTTPS | Encrypted web traffic |
| 21 | FTP | File transfers |
| 25 | SMTP | Email sending |
| 3000 | Node.js/Express | Dev server (common default) |
| 27017 | MongoDB | Default MongoDB port |
| 5432 | PostgreSQL | Default PostgreSQL port |
| 3306 | MySQL | Default MySQL port |

---

## 11. Data Transmission & TCP/IP

### 📖 Definition
> **TCP/IP (Transmission Control Protocol/Internet Protocol)** is a suite of communication protocols that defines how data should be transmitted, packaged, addressed, routed, and received on the internet.
> *(Source: GeeksforGeeks — TCP/IP Model)*

### 🔑 Key Keywords
`Packets` · `Buffers` · `Streams` · `TCP Handshake` · `Reliable Delivery` · `IP Routing`

### 🏗️ Data Transmission Diagram

```
Sender (Client)                        Receiver (Server)
───────────────                        ─────────────────

  Large Data                              Reassembled
  ┌─────────────────┐                     ┌─────────────────┐
  │  Hello, this is │                     │  Hello, this is │
  │  my message!    │                     │  my message!    │
  └─────────────────┘                     └─────────────────┘
         │                                       ▲
         │  Split into packets                   │ Reassemble
         ▼                                       │
  ┌────┐ ┌────┐ ┌────┐ ┌────┐         ┌────┐ ┌────┐ ┌────┐
  │Pkt1│ │Pkt2│ │Pkt3│ │Pkt4│  ──────►│Pkt1│ │Pkt2│ │Pkt3│
  └────┘ └────┘ └────┘ └────┘         └────┘ └────┘ └────┘

  Socket (connection pipe) ─────────────────────────────────►
```

### 🔄 In Node.js Context

| Concept | Node.js Equivalent | Purpose |
|---------|-------------------|---------|
| TCP Connection | `Socket` | Persistent connection channel |
| Data Chunks | `Buffer` | Holds binary data chunks |
| Continuous flow | `Stream` | Reads/writes data in chunks |
| Packet reassembly | `Stream + Buffer` | Efficient large data handling |

---

## 12. Building a Server with Node.js

### 📖 Definition
> The **`http` module** in Node.js is a built-in core module that provides functionality to create HTTP servers and make HTTP requests without any external dependencies.

### 🔑 Key Keywords
`http.createServer` · `server.listen` · `req` · `res` · `Express.js` · `MERN Stack` · `Routing`

### 🏗️ Server Creation Flow

```
Node.js HTTP Server Lifecycle:
  ┌──────────────────────────────────────────────┐
  │                                              │
  │  1. http.createServer((req, res) => { ... }) │
  │            ↓                                 │
  │  2. server.listen(3000)                      │
  │            ↓                                 │
  │  3. Server waits for connections             │
  │            ↓                                 │
  │  4. Client connects → socket opened          │
  │            ↓                                 │
  │  5. req (IncomingMessage) parsed             │
  │            ↓                                 │
  │  6. res (ServerResponse) sent back           │
  │            ↓                                 │
  │  7. Socket may close or persist (keep-alive) │
  └──────────────────────────────────────────────┘
```

### 💻 Minimal HTTP Server Code

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

### 📊 http Module vs Express.js

| Feature | Native `http` Module | Express.js |
|---------|----------------------|------------|
| Routing | Manual (if-else) | Built-in Router |
| Middleware | Manual | `app.use()` |
| Request Parsing | Manual | Built-in parsers |
| Code Verbosity | High | Low |
| Learning Value | High (internals) | High (production) |
| Production Use | Tedious | ✅ Industry Standard |

### ✅ MERN Stack Context
```
MongoDB → Database
Express → Backend Framework (wraps Node.js http)
React   → Frontend
Node.js → Runtime Environment
```

---

## 13. Databases: RDBMS vs NoSQL

### 📖 Definitions

> **Database:** A structured or organized collection of data that allows for efficient retrieval, insertion, update, and deletion operations.
> *(Source: GeeksforGeeks)*

> **DBMS (Database Management System):** A software layer that sits between the user/application and the database to manage data interactions, access control, and integrity.

> **NoSQL:** "Not Only SQL" — a class of database systems designed for flexible schemas, horizontal scaling, and unstructured/semi-structured data, emerging in the late 2000s.

### 🔑 Key Keywords
`Schema` · `ACID` · `Collections` · `Documents` · `Joins` · `Foreign Key` · `Sharding` · `Replication`

### 🏗️ Database Architecture Diagram

```
Application Layer
       │
       ▼
┌─────────────────────────────────────────┐
│              DBMS Layer                 │
│  (Query Engine, Access Control,         │
│   Transaction Manager, Cache)           │
└─────────────────┬───────────────────────┘
                  │
      ┌───────────┴────────────┐
      ▼                        ▼
┌───────────┐           ┌───────────────┐
│  RDBMS    │           │  NoSQL DB     │
│  Tables   │           │  Collections  │
│  Rows     │           │  Documents    │
│  Columns  │           │  Fields       │
│  (MySQL,  │           │  (MongoDB,    │
│ PostgreSQL)│           │  Redis, etc.) │
└───────────┘           └───────────────┘
```

### 📊 RDBMS vs NoSQL Comparison

| Feature | RDBMS | NoSQL (e.g., MongoDB) |
|---------|-------|-----------------------|
| **Data Structure** | Tables, rows, columns | Collections, documents, fields |
| **Schema** | Fixed (strict) | Flexible (dynamic) |
| **Query Language** | SQL | JSON-like queries |
| **Relationships** | JOINs + Foreign Keys | Nested/embedded documents |
| **Scalability** | Vertical (scale up) | Horizontal (scale out) |
| **ACID Compliance** | Full ACID | Eventual consistency (varies) |
| **Best For** | Banking, transactions | Real-time apps, social media |
| **Examples** | MySQL, PostgreSQL, Oracle | MongoDB, Redis, Cassandra |

### 📊 Popular Databases & Origins

| Database | Type | Created By | Notes |
|----------|------|-----------|-------|
| **MySQL** | RDBMS | Michael Widenius (daughter "Mai") | Managed by Oracle |
| **PostgreSQL** | RDBMS | Michael Stonebreaker | Evolved from "Ingres" |
| **MongoDB** | NoSQL | 10gen (now MongoDB Inc.) | Document-oriented, JSON-like BSON |
| **Redis** | NoSQL (Key-Value) | Salvatore Sanfilippo | In-memory, ultra-fast caching |

### ✅ When To Choose What

```
Choose RDBMS when:               Choose NoSQL when:
────────────────────             ──────────────────────
• Complex relationships          • Flexible/evolving schema
• Financial transactions         • High-speed reads/writes
• Strong consistency needed      • Big Data / IoT
• Reporting & analytics          • Real-time social feeds
• Structured, known data         • Horizontal scaling needed
```

---

## 🎯 INTERVIEW QUICK REFERENCE

### Top 10 Must-Know Concepts

| # | Concept | One-Line Answer |
|---|---------|-----------------|
| 1 | What is Node.js? | JavaScript runtime built on Chrome V8 engine for server-side code |
| 2 | What is V8? | Google's C++ engine that compiles JS to machine code using JIT |
| 3 | What is libuv? | C library handling async I/O, event loop, and thread pool |
| 4 | What is the Event Loop? | Mechanism that processes async callbacks in phases (Timers→Poll→Check) |
| 5 | CJS vs ESM? | CJS = `require` (sync), ESM = `import` (async, strict mode) |
| 6 | Blocking vs Non-Blocking? | Blocking waits for op to finish; Non-blocking continues immediately |
| 7 | What is a Socket? | Temporary open connection endpoint between client and server |
| 8 | What is TCP/IP? | Protocol suite for reliable packet-based internet communication |
| 9 | What is DNS? | Translates domain names to IP addresses |
| 10 | RDBMS vs NoSQL? | RDBMS = fixed schema + SQL; NoSQL = flexible schema + horizontal scale |

---

### ⚡ Common Interview Questions

**Q: Why is Node.js non-blocking?**
> Because libuv offloads I/O tasks to the OS/thread pool, allowing V8 to keep executing other code on the main thread without waiting.

**Q: Is Node.js single-threaded?**
> JavaScript execution is single-threaded (V8 main thread), but libuv's **thread pool** enables true parallel execution for heavy I/O tasks.

**Q: When would you use `readFileSync`?**
> Only at application startup for config loading — never inside request handlers as it blocks the entire event loop.

**Q: What happens if the Event Loop has nothing to do?**
> Node.js exits the process automatically (unless there are pending timers, I/O, or `server.listen()`).

**Q: What is `process.nextTick()`?**
> Schedules a callback to run at the end of the current operation, **before** the event loop continues to the next phase — highest priority in microtask queue.

---

*📚 Sources: Node.js Official Docs · GeeksforGeeks · MDN Web Docs · libuv Docs · V8 Engine Docs*
*🎓 Course: Namaste Node.js by Akshay Saini*
