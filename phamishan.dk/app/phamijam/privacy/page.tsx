import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | PhamiJam",
    description: "Privacy Policy for the PhamiJam music player apps.",
};

export default function PhamiJamPrivacyPolicy() {
    return (
        <main className="min-h-screen flex flex-col items-center gap-8 px-6 py-16">
            <div className="w-full max-w-3xl flex flex-col gap-1">
                <Link href="/phamijam" className="link link-hover text-sm text-base-content/60 mb-4 self-start">
                    ← Back to PhamiJam
                </Link>
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <p className="text-sm text-base-content/60">Last updated: July 21, 2026</p>
            </div>

            <div className="card card-border border-neutral-content bg-base-200 w-full max-w-3xl">
                <div className="card-body flex flex-col gap-6">
                    <p>
                        This Privacy Policy explains how PhamiJam (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;), available for desktop and mobile, collects, uses, and protects information when you use it. PhamiJam is developed by
                        Phamishan Packiaseelan as an independent, non-commercial project.
                    </p>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li>
                                <span className="font-semibold">Account information:</span> if you sign in with Google, we receive your name, email address, and profile picture through Google Sign-In and Firebase Authentication.
                            </li>
                            <li>
                                <span className="font-semibold">App data:</span> playlists, liked songs, and library metadata you create in the App are stored in our database (Cloud Firestore) so they sync across your sessions.
                            </li>
                            <li>
                                <span className="font-semibold">Local files:</span> if you use the local files feature, the App reads audio files and metadata directly from your device to build your library. These files are not uploaded to
                                our servers.
                            </li>
                            <li>
                                <span className="font-semibold">Search &amp; playback data:</span> song searches and streaming requests are sent to YouTube Music to find and play tracks.
                            </li>
                            <li>
                                <span className="font-semibold">Discord Rich Presence:</span> if you connect Discord, the title of the track you are currently playing is shared to your Discord status. This is only active while Discord is
                                running and connected.
                            </li>
                        </ul>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
                        <p>We use the information above solely to operate the App&apos;s features: signing you in, syncing your playlists and library across devices, playing the music you request, and showing your Discord status if enabled.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">3. Third-Party Services</h2>
                        <p>The App relies on the following third-party services, each governed by their own privacy policy:</p>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li>Google / Firebase (authentication and data storage)</li>
                            <li>YouTube Music (search and audio streaming)</li>
                            <li>Discord (Rich Presence integration)</li>
                        </ul>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">4. Data Storage &amp; Security</h2>
                        <p>Account and library data is stored using Google Firebase infrastructure. We take reasonable measures to protect this data but cannot guarantee absolute security, as is the case with any online service.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">5. Data Retention &amp; Deletion</h2>
                        <p>
                            Your account data is kept for as long as you use the App. You can request deletion of your account and associated data at any time by contacting us at the email address below, and we will action the request within
                            a reasonable time.
                        </p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">6. Children&apos;s Privacy</h2>
                        <p>PhamiJam is not directed at children under 13, and we do not knowingly collect personal information from children under that age.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">8. Contact</h2>
                        <p>
                            If you have questions about this Privacy Policy or wish to request data deletion, contact us at{" "}
                            <a href="mailto:phamishan@phamishan.dk" className="link">
                                phamishan@phamishan.dk
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
