import { Button } from "@/components/ui/button"
import { Leaf, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navItems = [
    { label: "Solução", href: "#solucao" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Cases", href: "#cases" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-green-800">Pare Verde</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700" asChild>
            <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
              Acessar Plataforma
            </a>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 bg-green-600 hover:bg-green-700" asChild>
                  <a href="https://pareverde.vercel.app" target="_blank" rel="noopener noreferrer">
                    Acessar Plataforma
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
