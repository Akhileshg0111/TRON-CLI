#  TRON CLI

<div align="center">



**A Modern AI-Powered Terminal Interface**


</div>

---

## 📖 Overview

TRON CLI is a next-generation terminal emulator that combines the power of traditional command-line interfaces with cutting-edge AI assistance. Execute commands in plain English, get intelligent error explanations, and enjoy a beautiful, customizable interface with multi-tab support and theme customization.

### ✨ Key Highlights

- 🤖 **Natural Language Processing** - Type commands in plain English, AI translates them for you
- 🧠 **Intelligent Error Analysis** - AI-powered explanations for command failures
- 🎨 **6 Beautiful Themes** - Default, Dracula, Nord, Monokai, Gruvbox, and Matrix
- 📑 **Multi-Tab Support** - Manage multiple terminal sessions seamlessly
- ⚡ **Cross-Platform** - Works on Windows, macOS, and Linux
- 🛡️ **Safety First** - Dangerous command detection with confirmation prompts
- 🎯 **Smart Suggestions** - Context-aware command completions

---

## 🎯 Features

### 🗣️ Natural Language Processing

Transform natural language into terminal commands effortlessly:

```
"list all files and folders" → ls -la (Unix) / Get-ChildItem (Windows)
"show my ip address" → ifconfig (Unix) / ipconfig (Windows)
"create folder test" → mkdir test
"find files named config" → find . -name "*config*"
```

### 🧠 AI-Powered Error Analysis

Get instant, actionable explanations when commands fail:
- **Problem**: Clear identification of what went wrong
- **Cause**: Why the error occurred
- **Solution**: Specific steps to resolve the issue

### 🎨 Theme Customization

Choose from 6 professionally designed themes:

| Theme | Description |
|-------|-------------|
| **Default** | Modern dark theme with blue accents |
| **Dracula** | Popular theme with purple highlights |
| **Nord** | Arctic-inspired color palette |
| **Monokai** | Classic editor theme |
| **Gruvbox** | Retro groove colors |
| **Matrix** | Classic green-on-black hacker style |

### 🔒 Security Features

- **Dangerous Command Detection**: Warns before executing potentially harmful commands
- **Interactive Command Handling**: Automatically launches interactive programs in external terminals
- **Command Confirmation**: Review AI-translated commands before execution

### ⚡ Performance & Usability

- **Multi-Tab Interface**: Work with multiple terminal sessions
- **Command History**: Quick access to previously executed commands
- **Smart Autocomplete**: Context-aware command suggestions
- **Keyboard Shortcuts**: Efficient navigation and control

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Gemini API Key** - [Get one here](https://ai.google.dev/)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tron-cli.git
   cd tron-cli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Open `index.html` and replace the API key:
   ```javascript
   const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
   ```

4. **Run the application**
   ```bash
   npm start
   ```

### Building from Source

Create a distributable package:

```bash
# For Windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

---

## 💻 Usage

### Basic Commands

| Action | Command |
|--------|---------|
| Clear terminal | `clear` |
| View command history | `history` |
| Change directory | `cd <path>` |
| Toggle NLP mode | Click "NLP: OFF" button or `Ctrl+Shift+N` |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+T` | New tab |
| `Ctrl+W` | Close current tab |
| `Ctrl+Tab` | Switch to next tab |
| `↑` / `↓` | Navigate command history |
| `Esc` | Close suggestions |
| `Enter` | Execute command |

### NLP Mode

**Enabled (NLP: ON)**
- Type commands in natural language
- AI automatically translates to shell commands
- Perfect for beginners or quick operations

**Disabled (NLP: OFF)**
- Direct terminal command input
- Traditional CLI experience
- Faster for power users

### Examples

#### With NLP Mode ON:
```
You: show all hidden files in current directory
AI: ls -la
Output: [Directory listing with hidden files]
```

#### With NLP Mode OFF:
```
You: ls -la
Output: [Directory listing with hidden files]
```

---

## 🛠️ Technology Stack

- **[Electron](https://www.electronjs.org/)** - Cross-platform desktop framework
- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[Gemini AI](https://ai.google.dev/)** - Natural language processing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

---

## 📁 Project Structure

```
tron-cli/
├── index.html          # Main application UI
├── handler.js          # Interactive command handler
├── main.js            # Electron main process
├── package.json       # Project dependencies
├── assets/           # Application assets
│   └── icon.png      # App icon
└── README.md         # This file
```

---

## 🔧 Configuration

### Customizing Themes

Edit the `themes` object in `index.html`:

```javascript
const themes = {
  customTheme: {
    bg: 'linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%)',
    primary: '#yourprimary',
    secondary: '#yoursecondary',
    text: '#yourtext',
    error: '#yourerror',
    success: '#yoursuccess',
    warning: '#yourwarning',
    header: '#yourheader',
    border: '#yourborder'
  }
};
```

### Adding Custom Commands

Extend the `intelligentPatterns` array:

```javascript
const intelligentPatterns = [
  {
    patterns: [/your-pattern/i],
    suggestion: 'your command',
    message: 'Your helpful message'
  }
];
```

---

## ⚠️ Known Limitations

- Some interactive commands (vim, nano, top) open in external terminal
- Large command outputs may impact performance
- API rate limits apply based on your Gemini API plan

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Test thoroughly on multiple platforms
- Update documentation for new features
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<div align="center">

**Developed By Akhilesh**
<br>
Share this Repo to someone who is missing out the new modern CLI

</div>
