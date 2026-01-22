"use client";
import Button from "./components/Button";
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-linear-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        🎨 Button Component System
      </h1>
      <p className="text-gray-600 mb-12">
        Building a reusable button library with 8 variants
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        🔘 Button Variants
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="ghost">Ghost Button</Button>

          <Button variant="primary" disabled>
            Disabled Primary
          </Button>

          <Button variant="primary" fullWidth>
            Full Width Button
          </Button>
        </div>

        {/* Test interaction */}
        <div className="mt-8">
          <Button
            variant="primary"
            onClick={() => alert("🎉 Variants working!")}
          >
            ⚡ Test Click
          </Button>
        </div>
      </div>
    </main>
  );
}
