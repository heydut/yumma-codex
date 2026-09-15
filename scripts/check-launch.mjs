import { contactEmail, origin } from '../.build/server/entry-server.js';
const issues = [];
if (new URL(origin).hostname.endsWith('.example')) issues.push('Replace the reserved example domain with the actual HTTPS origin.');
if (contactEmail.endsWith('.example')) issues.push('Replace the demo email with a monitored inbox.');
if (issues.length) {
  process.stderr.write(`Launch configuration incomplete:\n${issues.map(issue => `- ${issue}`).join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write('Production origin and email are configured. Verify DNS, certificate and inbox delivery separately.\n');
}
