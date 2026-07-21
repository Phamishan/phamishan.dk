import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function PhamiJamHome() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 py-16 text-center">
            <Image src="/assets/phamijam-logo.png" alt="PhamiJam logo" width={140} height={140} priority className="drop-shadow-lg" />

            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">PhamiJam</h1>
                <p className="text-lg max-w-xl mx-auto text-base-content/80">
                    PhamiJam is a free music player for desktop and mobile, built as an alternative to Spotify and similar streaming apps. Play your local music library, search and stream via YouTube Music, and share what you&apos;re listening to
                    with Discord Rich Presence.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <Link href="/phamijam/privacy" className="btn btn-outline btn-lg">
                    Privacy Policy
                </Link>
                <Link href="/phamijam/terms" className="btn btn-outline btn-lg">
                    Terms of Service
                </Link>
            </div>

            <div className="flex flex-col items-center gap-3 mt-8">
                <div className="flex gap-3">
                    <a href="https://github.com/Phamishan/PhamiJam-Desktop" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle" aria-label="PhamiJam Desktop on GitHub">
                        <FaGithub size={22} />
                    </a>
                    <a href="https://github.com/Phamishan/PhamiJam-Mobile" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle" aria-label="PhamiJam Mobile on GitHub">
                        <FaGithub size={22} />
                    </a>
                </div>
                <Link href="/" className="link link-hover text-sm text-base-content/60">
                    ← Back to phamishan.dk
                </Link>
            </div>
        </main>
    );
}
