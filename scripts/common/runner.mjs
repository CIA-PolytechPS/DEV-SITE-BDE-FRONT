import { spawn } from "child_process";

export function runNpmScript(scriptName, args = []) {
    return new Promise((resolve, reject) => {
        const child = spawn("npm", ["run", scriptName, "--", ...args], { stdio: "inherit" });

        child.on("exit", (code) => {
            if (code === 0) resolve();
            else            reject(new Error(`Script "${scriptName}" failed with exit code ${code}`));
        });
    });
}
