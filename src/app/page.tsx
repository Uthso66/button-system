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
      <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
        🔥 All 8 Variants
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mb-8">
        <Button variant="outline">Outline</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="link">Link Style</Button>
      </div>

      {/* Icons & Loading Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        ✨ Icons & Loading States
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        <Button variant="primary" icon="📧">
          With Icon
        </Button>

        <Button variant="success" icon="✅">
          Success Task
        </Button>

        <div className="mt-6">
          <Button variant="primary" loading={true} fullWidth>
            Processing Payment...
          </Button>
        </div>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl max-w-2xl">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          🎮 Interactive Demo
        </h3>
        <div className="space-y-4">
          <Button
            variant="success"
            icon="🎉"
            onClick={() => alert("You clicked the success button!")}
          >
            Click for Success
          </Button>

          <Button
            variant="destructive"
            icon="🗑️"
            onClick={() => {
              if (confirm("Are you sure?")) {
                alert("Item deleted!");
              }
            }}
          >
            Delete Item
          </Button>
        </div>
      </div>
    </main>
  );
}
