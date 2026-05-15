/**
 * @answerable/cli — the `answerable` command. Wraps the audit engine
 * for terminal and CI use.
 *
 * The default export is `createProgram()`, which returns a configured
 * commander instance. The `bin.ts` entrypoint invokes
 * `program.parseAsync(process.argv)`; tests call commands directly
 * (e.g. `runAuditCommand`, `runExplainCommand`) without going through
 * commander.
 */

import { Command } from 'commander';
import { registerAuditCommand } from './commands/audit.js';
import { registerExplainCommand } from './commands/explain.js';

export const VERSION = '0.0.0';

/**
 * Build the configured commander program. Separated from the bin
 * entry so tests can introspect the registered commands without
 * triggering process.exit.
 */
export function createProgram(): Command {
  const program = new Command();
  program
    .name('answerable')
    .description('The drop-in SEO toolkit that makes any site answerable by AI search engines.')
    .version(VERSION);
  registerAuditCommand(program);
  registerExplainCommand(program);
  return program;
}

export {
  registerAuditCommand,
  runAuditCommand,
  type AuditCommandDeps,
  type AuditCommandOptions,
  type AuditCommandResult,
} from './commands/audit.js';

export {
  registerExplainCommand,
  runExplainCommand,
  type ExplainCommandOptions,
  type ExplainCommandResult,
} from './commands/explain.js';
