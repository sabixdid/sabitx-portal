"use client";

import Link from "next/link";

export default function Home() {
  const modules = [
    {
      title: "Vault",
      desc: "Documents • Exhibits • Uploads • Case Files",
      href: "https://vault.sabitx.com",
      external: true,
    },
    {
      title: "Store",
      desc: "Order • Pay • Pickup • Stripe Integration",
      href: "https://store.sabitx.com",
      external: true,
    },
    {
      title: "Operator",
      desc: "Lights • Cameras • Automations • Dashboards",
      href: "https://operator.sabitx.com",
      external: true,
    },
    {
      title: "Systems",
      desc: "Infrastructure • Automations • Monitoring",
      href: "https://systems.sabitx.com",
      external: true,
    },
    {
      title: "Mesh",
      desc: "Knowledge • Library • SABITX Canon",
      href: "https://mesh.sabitx.com",
      external: true,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <header className="px-6 py-6 flex justify-between items-center border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="border border-zinc-700 rounded-lg px-3 py-1 text-xs tracking-wide">
            SABITX
          </div>
          <h1 className="text-lg font-semibold">Operating System</h1>
        </div>
      </header>

      <section className="px-6 mt-8">
        <h2 className="text-2xl font-semibold mb-2">Choose Your Channel</h2>
        <p className="text-sm text-zinc-400 mb-6">
          Unified access to the SABITX ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((mod) => {
            const Box = (
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500 transition cursor-pointer flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{mod.title}</h3>
                  <p className="text-xs text-zinc-400">{mod.desc}</p>
                </div>
                <div className="mt-4 text-xs text-zinc-500 flex items-center gap-1">
                  <span>Enter</span>
                  {mod.external && (
                    <span className="text-[9px] uppercase opacity-60">
                      External
                    </span>
                  )}
                </div>
              </div>
            );

            if (mod.external) {
              return (
                <a key={mod.title} href={mod.href} target="_blank">
                  {Box}
                </a>
              );
            }

            return (
              <Link key={mod.title} href={mod.href}>
                {Box}
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="mt-auto px-6 py-6 text-[10px] text-zinc-500 border-t border-zinc-900 flex justify-between">
        <span>SABITX Portal • sabitx.com</span>
        <span>Vault • Store • Operator • Systems • Mesh</span>
      </footer>
    </main>
  );
}
