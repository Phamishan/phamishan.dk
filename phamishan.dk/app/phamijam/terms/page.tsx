import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | PhamiJam",
    description: "Terms of Service for the PhamiJam music player apps.",
};

export default function PhamiJamTermsOfService() {
    return (
        <main className="min-h-screen flex flex-col items-center gap-8 px-6 py-16">
            <div className="w-full max-w-3xl flex flex-col gap-1">
                <Link href="/phamijam" className="link link-hover text-sm text-base-content/60 mb-4 self-start">
                    ← Back to PhamiJam
                </Link>
                <h1 className="text-4xl font-bold">Terms of Service</h1>
                <p className="text-sm text-base-content/60">Last updated: July 21, 2026</p>
            </div>

            <div className="card card-border border-neutral-content bg-base-200 w-full max-w-3xl">
                <div className="card-body flex flex-col gap-6">
                    <p>
                        These Terms of Service (&quot;Terms&quot;) govern your use of PhamiJam (&quot;the App&quot;), developed by Phamishan Packiaseelan. By downloading, installing, or using the App, you agree to these Terms. If you do not
                        agree, please do not use the App.
                    </p>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">1. Description of Service</h2>
                        <p>
                            PhamiJam is a free, independently developed music player for desktop and mobile that lets you play music from local files on your device and search and stream tracks via YouTube Music, organize playlists, and
                            optionally share what you&apos;re playing through Discord Rich Presence.
                        </p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">2. Accounts</h2>
                        <p>Some features, such as syncing playlists across devices, require signing in with a Google account. You are responsible for keeping your account credentials secure.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">3. Acceptable Use</h2>
                        <p>You agree not to use the App to infringe on copyright or other intellectual property rights, and not to attempt to disrupt, reverse engineer for malicious purposes, or abuse the App or the third-party services it relies on.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">4. Content &amp; Third-Party Services</h2>
                        <p>
                            Local audio files you play through the App remain your own and are never uploaded to our servers. Music streamed via YouTube Music is subject to YouTube&apos;s own Terms of Service, and is not hosted or owned by
                            us. We are not responsible for the availability or content of third-party services the App integrates with.
                        </p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">5. No Warranty</h2>
                        <p>
                            The App is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express or implied. As an independent, non-commercial project, we do not guarantee the App will be
                            uninterrupted, error-free, or available at all times.
                        </p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">7. Termination</h2>
                        <p>We may suspend or discontinue the App, or your access to it, at any time, including if we believe you have violated these Terms.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">8. Changes to These Terms</h2>
                        <p>We may update these Terms from time to time. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">9. Governing Law</h2>
                        <p>These Terms are governed by the laws of Denmark, without regard to conflict of law principles.</p>
                    </section>

                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">10. Contact</h2>
                        <p>
                            Questions about these Terms can be sent to{" "}
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
