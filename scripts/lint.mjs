import { runNpmScript } from "./common/runner.mjs";

async function main() {
    const args = process.argv.slice(2);
    const prefix = "--lint";
    const filter = (arg) => { return arg.startsWith(prefix); };
    const replace = (arg) => { return arg.replace(prefix, "-"); };
    const filtered = args.filter(filter).map(replace);

    try {
        if (filtered.includes("--skip")) {
            console.log("Skipping linter");
            process.exit(0);
        }
        await runNpmScript(filtered.includes("--nibble") ? "nibble:run" : "lint:run", filtered);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

main();
