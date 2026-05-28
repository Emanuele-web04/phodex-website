export type FaqItem = {
  question: string
  answer: string
}

/** Sourced from https://github.com/Emanuele-web04/remodex README */
export const REMODEX_FAQ: FaqItem[] = [
  {
    question: 'What is Remodex?',
    answer:
      'Remodex is a local-first open-source Mac bridge plus iOS app. Codex runs on your Mac; your iPhone pairs over a secure session and sends instructions through the bridge while responses stream back in real time.',
  },
  {
    question: 'What do I need before I start?',
    answer:
      'You need Node.js 18+, Codex CLI installed and logged in on your Mac, and the Remodex iOS app on your iPhone. Remodex does not manage OpenAI credentials; Codex must already work on the Mac.',
  },
  {
    question: 'How do I install and pair?',
    answer:
      'Run `npm i -g remodex@latest`, then `remodex up` on your Mac. Open the Remodex app on your iPhone, follow onboarding, and scan the QR from inside the app — not with the Camera app, or iOS may treat it as plain text.',
  },
  {
    question: 'Is it private and secure?',
    answer:
      'Yes. After pairing, app messages use an authenticated end-to-end encrypted channel with X25519, Ed25519, AES-256-GCM, and replay protection. Codex, git, and workspace actions still run on your Mac.',
  },
  {
    question: 'Can the relay read my prompts or code?',
    answer:
      'The transport can see connection metadata and handshake control messages, but not decrypted application payloads after the secure handshake succeeds. If you want the tightest trust model, run your own relay.',
  },
  {
    question: 'What happens if I close the terminal?',
    answer:
      'On macOS, Remodex can keep the bridge running in the background through launchd, so trusted reconnect keeps working. On other operating systems, the foreground bridge stops when the terminal stops.',
  },
  {
    question: 'Can I use git or terminal from my iPhone?',
    answer:
      'Yes. Git actions run locally on your Mac through the bridge, including status, commit, push, pull, branches, checkout, stash, and log. Remodex can also open a native SSH session from iPhone; key material stays in the iOS Keychain.',
  },
  {
    question: 'Can I self-host it?',
    answer:
      'Yes. The repo is self-host friendly. Point `REMODEX_RELAY` at your own relay, or use `./run-local-remodex.sh` from a source checkout. For iPhone self-hosting, Tailscale is the recommended private-network path.',
  },
  {
    question: 'Do phone threads appear in Codex.app?',
    answer:
      'The phone session is live, but Codex.app is not a real-time mirror. It reads session files from `~/.codex/sessions`, so it may lag unless you use the in-app handoff or enable the optional refresh workaround.',
  },
]
