import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const links = {
    produto: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Preços", href: "#precos" },
      { label: "Demo", href: "#demo" },
      { label: "Casos de Sucesso", href: "#cases" },
    ],
    recursos: [
      { label: "Blog", href: "/blog" },
      { label: "Guias", href: "/guias" },
      { label: "Webinars", href: "/webinars" },
      { label: "Suporte", href: "/suporte" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Imprensa", href: "/imprensa" },
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
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Pare Verde</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              A primeira plataforma brasileira de sustentabilidade urbana que unifica dados de calor, vegetação e
              acessibilidade em um dashboard inteligente.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contato@pareverde.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
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
            <p className="text-gray-400 text-sm">© 2024 Pare Verde. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🇧🇷 Orgulhosamente brasileiro</span>
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
