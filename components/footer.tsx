import { Satellite, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const links = {
    produto: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Preços", href: "#precos" },
      { label: "Teste Grátis", href: "#demo" },
      { label: "Como Funciona", href: "#solucao" },
    ],
    recursos: [
      { label: "Guia NDVI", href: "/guia-ndvi" },
      { label: "Tutoriais", href: "/tutoriais" },
      { label: "FAQ", href: "/faq" },
      { label: "Suporte", href: "/suporte" },
    ],
    empresa: [
      { label: "Sobre o Safra Fácil", href: "/sobre" },
      { label: "Dados NASA", href: "/dados-nasa" },
      { label: "Casos de Uso", href: "/casos" },
      { label: "Contato", href: "/contato" },
    ],
    legal: [
      { label: "Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos" },
      { label: "LGPD", href: "/lgpd" },
      { label: "Segurança", href: "/seguranca" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                <Satellite className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Safra Fácil</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              A primeira plataforma brasileira que transforma dados de satélite da NASA em mapas de saúde das culturas
              que qualquer produtor pode entender e usar.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>dev.matheustheodoro@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(44) 99952-2514</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Campo Mourão, PR, Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              {links.produto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {links.recursos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-4 mt-8">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Safra Fácil. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">🇧🇷 Orgulhosamente brasileiro</p>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
