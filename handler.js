const { spawn } = require('child_process');

const interactiveCommands = [
    'top', 'htop', 'vim', 'vi', 'nano', 'emacs', 'less', 'more',
    'man', 'watch', 'tail -f', 'ssh', 'telnet', 'ftp', 'python',
    'python3', 'node', 'irb', 'mysql', 'psql', 'mongo', 'redis-cli'
];

function isInteractiveCommand(command) {
    const cmd = command.trim().toLowerCase();
    
    for (const interactive of interactiveCommands) {
        if (cmd === interactive || cmd.startsWith(interactive + ' ')) {
            return true;
        }
    }
    
    if (cmd.includes('tail') && cmd.includes('-f')) {
        return true;
    }
    
    if (cmd.match(/watch\s+/)) {
        return true;
    }
    
    return false;
}

function openInExternalTerminal(command) {
    const platform = os.platform();
    
    try {
        if (platform === 'darwin') {
            spawn('osascript', [
                '-e',
                `tell app "Terminal" to do script "cd '${currentDirectory}' && ${command}"`
            ], { detached: true });
            
        } else if (platform === 'win32') {
            const powershellCmd = `Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '${currentDirectory}'; ${command}"`;
            spawn('powershell.exe', ['-Command', powershellCmd], { 
                detached: true,
                shell: true 
            });
            
        } else {
            const terminals = [
                'x-terminal-emulator',
                'gnome-terminal',
                'xterm',
                'konsole',
                'xfce4-terminal',
                'mate-terminal'
            ];
            
            let launched = false;
            for (const term of terminals) {
                try {
                    if (term === 'gnome-terminal') {
                        spawn(term, ['--', 'bash', '-c', `cd '${currentDirectory}' && ${command}; exec bash`], { 
                            detached: true 
                        });
                    } else {
                        spawn(term, ['-e', `bash -c "cd '${currentDirectory}' && ${command}; exec bash"`], { 
                            detached: true 
                        });
                    }
                    launched = true;
                    break;
                } catch (e) {
                    continue;
                }
            }
            
            if (!launched) {
                throw new Error('No terminal emulator found');
            }
        }
        
        return true;
    } catch (error) {
        console.error('Failed to open external terminal:', error);
        return false;
    }
}

const originalExecuteSafeCommand = executeSafeCommand;

executeSafeCommand = async function(command) {
    if (isInteractiveCommand(command)) {
        addOutput('Interactive command detected - Opening in system terminal...', 'warning', true);
        
        const opened = openInExternalTerminal(command);
        
        if (opened) {
            addOutput('Command launched in external terminal successfully', 'success', true);
        } else {
            addOutput('Failed to open external terminal. Command requires interactive terminal.', 'error', true);
        }
        
        return;
    }
    
    return originalExecuteSafeCommand(command);
};
