---
date: '2023-10-30'
title: 'Shell 2 notes'
---

need to implement foreground processes, jobs, and process groups
To deal with zombie processes, the shell should call waitpid on each child

waitpid waits for child processes.
	if pid is <-1: any child process with the same process group
	-1 : any child process
	0: any child process who has the same process group
	> 0 child process equal to pid

waitpid WNOHANG: return immediately if no child has exited (returns 0)
waitpid WUNTRACED: .. and if child has been stopped (return 0)
waitpid WCONTINUED: ... and if a child has been continued (return 0)

- Shell should check background jobs right before displaying prompt.
- report status only when right before displaying prompt

# examine all children who’ve terminated or stopped
```
int wret, wstatus;
while ((wret = waitpid(-1, &wstatus, WNOHANG|WUNTRACED)) > 0){
// examine all children who’ve terminated or stopped
if (WIFEXITED(wstatus)) {
// terminated normally
...
}
if (WIFSIGNALED(wstatus)) {
// terminated by a signal
...
}
if (WIFSTOPPED(wstatus)) {
// stopped
...
}
}
```
INIT
LOGIN 1   LOGIN 2
CMD CMD CMD CMD CMD

Init process calls waitpid on children like logins
login calls waitpid on children like cmds...

The children always get inherited by the init process
Process process set up for signal handler. Also set up inside.


