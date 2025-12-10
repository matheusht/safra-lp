import Link from "next/link"
import { 
  TriangleAlert, 
  Wind, 
  ShieldCheck, 
  X, 
  Satellite, 
  Phone, 
  Plane, 
  Brain, 
  Check, 
  CheckCircle,
  FileText,
  MapPin,
  Star,
  Wifi,
  Lock,
  MessageCircle
} from "lucide-react"

export default function AdvertorialPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans leading-relaxed">
      {/* Navbar */}
      <nav className="border-b border-gray-100 py-4 sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-green-700 text-white font-bold text-xl px-3 py-1 rounded select-none flex items-center gap-2">
              <Plane className="h-5 w-5 fill-current" /> Safra Fácil
            </div>
          </div>
          <Link href="https://wa.me/5544999522514" target="_blank" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 md:px-6 rounded-full text-sm transition-colors shadow-lg shadow-green-600/20">
            Começar Agora
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        
        {/* HEADLINE BLOCK */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-bold tracking-wide uppercase text-sm mb-3 animate-pulse flex items-center justify-center gap-2">
            <TriangleAlert className="h-4 w-4" /> Alerta para Pilotos Profissionais
          </p>
          
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            O Erro Que Está Custando Milhares aos <span className="highlight-green bg-gradient-to-r from-green-100 to-green-100 bg-[length:100%_40%] bg-bottom bg-no-repeat">Pilotos de Drone no Brasil</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 font-medium italic mb-8">
            E por que confiar no Windy, DJI e grupos de WhatsApp para tomar decisões de voo é como jogar na loteria com seu equipamento de R$100 mil
          </p>
        </div>

        {/* ADVERTORIAL BODY */}
        <article className="prose prose-lg prose-green mx-auto text-gray-700">
          
          {/* SECTION: THE STORY */}
          <div className="mb-10">
            <p className="font-bold text-gray-900">Maringá, PR — 6h30 da manhã, terça-feira.</p>
            <p>João estava pronto para pulverizar 80 hectares de soja. Acordou cedo, carregou as baterias, calibrou os bicos, misturou o defensivo. O fazendeiro já tinha ligado duas vezes perguntando se ele ia voar hoje.</p>
            <p>Ele abriu o Windy no celular. Vento: 12 km/h. "Tranquilo", pensou.</p>
            <p>Abriu o UAV Forecast. KP Index: 3. "Dentro do aceitável."</p>
            <p>Entrou no grupo de WhatsApp dos pilotos da região. "Alguém voando hoje? Como tá o vento aí?"</p>
            <p>Silêncio. Ninguém respondeu ainda.</p>
            <p>João olhou para o céu. Parecia calmo. Ele tinha que decidir. O fazendeiro estava esperando. As parcelas do drone estavam vencendo. Ele precisava fechar esses hectares.</p>
            <p className="font-bold">Ele decidiu voar.</p>
            <p>Aos 100 metros de altitude, o Agras T30 começou a oscilar. O vento que o Windy mostrava no solo não era o mesmo vento lá em cima. As rajadas batiam de lado. A deriva começou.</p>
            <p>A pulverização que deveria cair na soja do fazendeiro começou a viajar para o cafezal do vizinho.</p>
            <p>Três dias depois, o vizinho apareceu na fazenda. As plantas de café estavam queimadas. Dano estimado: R$40 mil.</p>
            <p>"Quem vai me pagar isso?" ele exigiu.</p>
            <p>O fazendeiro apontou para João.</p>
            <p>João não tinha como provar que as condições estavam seguras quando ele voou. Não tinha como provar que o vento mudou de repente. Não tinha como mostrar que ele tomou todas as precauções.</p>
            <p>Ele só tinha as previsões genéricas do Windy — que nunca batem com o tempo real no cerrado — e algumas mensagens de WhatsApp que ninguém respondeu.</p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
              <p className="font-bold text-red-800 m-0">João pagou os R$40 mil do próprio bolso. E perdeu os dois clientes.</p>
            </div>
          </div>

          {/* SECTION: THE DIAGNOSIS */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Por Que Isso Continua Acontecendo com Pilotos Profissionais?</h2>
          <p>Se você é piloto de drone agrícola no Brasil, você já viveu alguma versão dessa história. Talvez você ainda não tenha enfrentado um prejuízo tão grande, mas você sente a ansiedade toda vez que precisa tomar a decisão de voar ou não.</p>
          <p>Porque você sabe a verdade:</p>
          <p><strong>Os aplicativos que você usa para verificar as condições de voo não foram feitos para pulverização agrícola no interior do Brasil.</strong></p>
          
          <p>Deixa eu explicar o problema real:</p>
          <p>O Windy mostra vento no solo. Você voa a 100 metros.</p>
          <p>O Windy, UAV Forecast, Climatempo — todos esses apps mostram previsões de vento ao nível do solo ou em camadas muito amplas da atmosfera.</p>
          <p>Mas você não pulveriza no solo. Você pulveriza entre 50 e 150 metros de altura.</p>
          <p>E nessa altitude, existe um fenômeno que a maioria dos pilotos não percebe até ser tarde demais:</p>
          <p className="font-bold text-lg">Microclimas de altitude.</p>
          <p>O vento ao nível do solo pode estar a 10 km/h. Mas a 100 metros? Pode estar batendo 25 km/h em rajadas laterais que você não vê, não sente, e seu app genérico não prevê.</p>

          {/* VISUAL 1: RISK GAUGE */}
          <div className="my-10 bg-gray-900 rounded-xl p-6 shadow-xl w-full max-w-md mx-auto border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Wind className="h-24 w-24 text-white" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6 text-center">Monitor de Risco de Altitude</h4>
            <div className="flex items-end justify-center gap-6 h-32">
              {/* Ground */}
              <div className="w-1/3 flex flex-col items-center">
                <div className="text-xs text-green-400 mb-1 font-bold">SOLO (0m)</div>
                <div className="w-full bg-green-500/20 border border-green-500 rounded-t-lg h-12 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">10 km/h</span>
                </div>
                <div className="mt-2 text-[10px] text-gray-500 text-center">O que você vê</div>
              </div>
              {/* Altitude */}
              <div className="w-1/3 flex flex-col items-center relative">
                <div className="absolute -top-6 bg-red-600 text-white text-[9px] px-2 py-0.5 rounded animate-bounce font-bold">PERIGO</div>
                <div className="text-xs text-red-400 mb-1 font-bold">100m</div>
                <div className="w-full bg-red-600/20 border border-red-500 rounded-t-lg h-full flex items-start justify-center pt-2 animate-pulse">
                  <span className="text-xl font-bold text-white">25 km/h</span>
                </div>
                <div className="mt-2 text-[10px] text-gray-500 text-center">A Realidade</div>
              </div>
            </div>
          </div>

          <p>Isso é o que chamamos de &quot;Risco de Altitude Invisível&quot; — a causa número 1 de deriva, oscilação de drone, e acidentes evitáveis.</p>
          <p>E o pior: quando você causa deriva ou tem um incidente, você não tem nenhuma prova de que as condições estavam diferentes do que os apps mostravam.</p>
          <p>O fazendeiro olha pro Windy dele. Vê que estava &quot;12 km/h, sol, tranquilo.&quot;</p>
          <p>E ele fala: &quot;Então foi erro seu, piloto.&quot;</p>

          {/* COMPARISON TABLE */}
          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center leading-tight">O Que Seu App de Clima &quot;Grátis&quot; Esconde de Você?</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left text-gray-600 min-w-[600px]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 font-bold w-[20%]">Recurso</th>
                    <th className="px-4 py-3 font-bold text-red-600 w-[40%] bg-red-50/10">Apps Comuns <br/><span className="text-[10px] text-gray-400 font-normal normal-case">(Windy, ClimaTempo, etc.)</span></th>
                    <th className="px-4 py-3 font-bold text-green-700 bg-green-50 w-[40%] border-t-4 border-green-500">Safra Fácil <br/><span className="text-[10px] text-green-600 font-normal normal-case">(Piloto PRO)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900">Vento na Altura do Voo</td>
                    <td className="px-4 py-4 bg-red-50/5"><span className="font-bold text-red-600">❌ Cego.</span> Mostra apenas vento no chão (0-10m).</td>
                    <td className="px-4 py-4 bg-green-50/30"><span className="font-bold text-green-600">✅ Visão Raio-X.</span> Monitora vento real a 50m, 100m e 120m.</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900">Prova Jurídica</td>
                    <td className="px-4 py-4 bg-red-50/5"><span className="font-bold text-red-600">❌ Nenhuma.</span> É a sua palavra contra a do fazendeiro.</td>
                    <td className="px-4 py-4 bg-green-50/30"><span className="font-bold text-green-600">✅ Relatório PDF.</span> Documento oficial com data, hora e mapa.</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900">Conexão no Campo</td>
                    <td className="px-4 py-4 bg-red-50/5"><span className="font-bold text-red-600">❌ Trava.</span> Precisa de 4G para carregar mapas.</td>
                    <td className="px-4 py-4 bg-green-50/30"><span className="font-bold text-green-600">✅ Modo Rural.</span> Funciona 100% offline (mapas salvos).</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900">Alerta de Risco (KP/Deriva)</td>
                    <td className="px-4 py-4 bg-red-50/5"><span className="font-bold text-red-600">❌ Não avisa.</span> Você descobre o erro quando o drone cai.</td>
                    <td className="px-4 py-4 bg-green-50/30"><span className="font-bold text-green-600">✅ Semáforo.</span> Avisa &quot;PARE&quot; antes de você decolar.</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900">Segurança do Piloto</td>
                    <td className="px-4 py-4 italic bg-red-50/5">&quot;A sorte protege&quot; <span className="text-xs text-gray-400 font-normal">(Amador)</span></td>
                    <td className="px-4 py-4 bg-green-50/30 font-bold text-green-700">&quot;A tecnologia garante&quot; <span className="text-xs text-green-600 font-normal">(Profissional)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION: FRAGMENTATION */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">A Armadilha da Fragmentação: Por Que Fazer Malabarismo com 5 Apps Não É &quot;Profissionalismo&quot;</h2>
          <p>Aqui está o que a maioria dos pilotos faz antes de cada voo:</p>
          <ul className="list-none pl-0 space-y-2">
            <li className="flex items-start"><X className="h-5 w-5 text-red-400 mt-1 mr-2" /> Abre o Windy pra ver vento e temperatura</li>
            <li className="flex items-start"><X className="h-5 w-5 text-red-400 mt-1 mr-2" /> Abre o UAV Forecast pra checar KP e condições de GPS</li>
            <li className="flex items-start"><X className="h-5 w-5 text-red-400 mt-1 mr-2" /> Abre o FlightRadar24 pra ver se tem aeronave na área</li>
            <li className="flex items-start"><X className="h-5 w-5 text-red-400 mt-1 mr-2" /> Abre o DJI Fly ou FlySafe pra verificar zonas de restrição</li>
            <li className="flex items-start"><X className="h-5 w-5 text-red-400 mt-1 mr-2" /> Entra no grupo de WhatsApp pra perguntar &quot;alguém voando hoje?&quot;</li>
            <li className="flex items-start"><X className="h-5 w-5 text-red-400 mt-1 mr-2" /> Olha pro céu e torce pra intuição estar certa</li>
          </ul>

          {/* VISUAL 2: FRAGMENTATION ICONS */}
          <div className="my-8 relative py-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm font-medium text-gray-400 uppercase tracking-widest">30 min/dia perdidos</span>
            </div>
            <div className="flex justify-center gap-4 mt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-center flex flex-col items-center"><Wind className="h-8 w-8 text-blue-400 mb-1" /><div className="text-[10px]">Vento</div></div>
              <div className="text-center flex flex-col items-center"><Satellite className="h-8 w-8 text-purple-400 mb-1" /><div className="text-[10px]">KP</div></div>
              <div className="text-center flex flex-col items-center"><MessageCircle className="h-8 w-8 text-green-500 mb-1" /><div className="text-[10px]">Grupos</div></div>
              <div className="text-center flex flex-col items-center"><Plane className="h-8 w-8 text-yellow-500 mb-1" /><div className="text-[10px]">Tráfego</div></div>
              <div className="text-center flex flex-col items-center"><Brain className="h-8 w-8 text-pink-400 mb-1" /><div className="text-[10px]">Intuição</div></div>
            </div>
          </div>

          <p>Você gasta 20-30 minutos todo dia fazendo isso.</p>
          <p>E no final, você ainda não tem certeza. Porque nenhum desses apps foi feito pra responder a pergunta que você realmente precisa saber:</p>
          <p className="font-bold italic">&quot;Está seguro pra EU pulverizar AQUI, AGORA, na altitude que EU vou voar?&quot;</p>
          <p>O Windy não sabe. Ele mostra dados gerais pra parapentes e pilotos recreativos.</p>
          <p>O UAV Forecast não sabe. Ele foi feito para hobby drones que voam a 30 metros filmando paisagem.</p>
          <p>O grupo de WhatsApp? Depende se alguém vai responder a tempo.</p>
          <p>E você fica ali, fragmentado, tentando juntar pedaços de informação de cinco fontes diferentes pra tomar uma decisão de R$100 mil.</p>
          <p>Não é à toa que você fica ansioso. Não é à toa que você sente aquela sensação de impotência quando o sinal some no meio do campo.</p>
          <p>Você está tomando decisões profissionais com ferramentas amadoras.</p>
          <p>E o mercado sabe disso.</p>

          {/* SECTION: PROFESSIONALISM */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">O Que Separa o Piloto Profissional do &quot;Despreparado&quot;?</h2>
          <p>Você já ouviu isso nos grupos, nas fazendas, nos cursos:</p>
          <p className="italic">&quot;Tem muita gente despreparada pulverizando por aí.&quot;</p>
          <p className="italic">&quot;Hoje quem tem crédito compra o drone parcelado e acha que está pronto.&quot;</p>
          <p className="italic">&quot;Pulverizaram a lavoura ao lado e matou a lavoura de café dele.&quot;</p>
          <p>Você odeia ser associado a esses amadores. Porque você não é amador.</p>
          <p>Você é piloto profissional. Você fez o curso. Você tem CAAR. Você investe em equipamento de ponta. Você leva segurança a sério.</p>
          <p>Mas aqui está a verdade dura:</p>
          <p>Se você está usando as mesmas ferramentas que o cara que comprou o drone parcelado semana passada, aos olhos do fazendeiro, vocês são iguais.</p>
          <p>O que separa o profissional do amador não é só habilidade de voo.</p>
          <p><strong>É prova documentada de que você opera com padrões diferentes.</strong></p>
          <p>É ter um sistema que:</p>
          <ul className="list-none pl-0 space-y-2">
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Mostra que você checou todas as condições antes de voar</li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Prova que você tomou a decisão certa baseado em dados específicos da sua operação</li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Gera relatórios que ninguém pode questionar</li>
          </ul>
          <p>Porque no fim das contas, quando algo dá errado (ou quando acusam que algo deu errado), não importa o que você &quot;sabia&quot; ou &quot;sentiu.&quot;</p>
          <p>Importa o que você pode provar.</p>
          <p>E se você está usando Windy + WhatsApp + intuição? Você não pode provar nada.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Por Que as Ferramentas &quot;Boas o Suficiente&quot; Estão Colocando Seu Negócio em Risco</h2>
          <p>Vamos ser diretos sobre o que está em jogo: Um único erro de decisão pode acabar com você.</p>
          <p>Não estamos falando de perder um dia de trabalho. Estamos falando de:</p>
          <ul className="list-disc pl-5">
            <li>Perda de equipamento: R$100-200 mil em drone destruído</li>
            <li>Responsabilidade civil: R$30-50 mil em danos a lavouras vizinhas</li>
            <li>Perda de reputação: Fazendeiros pararem de te chamar</li>
            <li>Perda de contratos futuros: Cooperativas te removerem da lista de aprovados</li>
          </ul>
          <p>E você sabe o pior?</p>
          <p className="font-bold">&quot;Se o drone cai, ninguém me paga o prejuízo.&quot;</p>
          <p>Você já falou isso. Todo piloto já falou isso.</p>
          <p>Porque é verdade. Você é o único responsável. Não tem seguro que cubra decisões &quot;questionáveis.&quot; Não tem fazendeiro que vai bancar seu erro.</p>
          <p>Então por que diabos você ainda está confiando em apps genéricos que não foram feitos pra sua realidade?</p>
          <p>Por que você ainda está adivinhando se pode voar, quando sua empresa inteira depende de acertar essa decisão todo santo dia?</p>
          <p>A resposta honesta? Porque até agora, não existia alternativa.</p>
          <p>Até agora.</p>

          {/* SECTION: SOLUTION INTRO */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl my-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full filter blur-[100px] opacity-20"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">Apresentando: Safra Fácil — A Única Plataforma Construída Especificamente Para Pilotos de Pulverização Agrícola no Brasil</h2>
            <p className="text-gray-300 relative z-10">Safra Fácil não é mais um app de clima genérico. Não é mais um &quot;gerenciador de fazenda&quot; que tenta fazer tudo e não faz nada bem.</p>
            <p className="text-gray-300 relative z-10">É a primeira e única plataforma projetada do zero para resolver o problema real dos pilotos de drone agrícola brasileiros:</p>
            <p className="font-bold text-green-400 text-lg relative z-10">Eliminar a adivinhação. Eliminar a fragmentação. Eliminar a vulnerabilidade.</p>
          </div>

          <p>Aqui está como funciona:</p>

          {/* FEATURE 1 */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">1. Dados de Vento Multi-Altitude — Veja O Que Está Acontecendo Onde Você Realmente Voa</h3>
          <p>Enquanto o Windy te mostra &quot;12 km/h no solo,&quot; o Safra Fácil te mostra:</p>
          <ul className="list-disc pl-5">
            <li>Vento a 50 metros (sua altitude de aproximação)</li>
            <li>Vento a 100 metros (sua altitude de pulverização)</li>
            <li>Vento a 150 metros (sua altitude máxima de operação)</li>
          </ul>
          <p>Você vê exatamente as camadas de vento invisíveis que causam deriva e oscilação. Não mais adivinhar. Não mais &quot;parece tranquilo.&quot; Não mais rezar que o vento não mude quando você subir. Você sabe. Com dados específicos da altitude que você vai operar.</p>

          {/* FEATURE 2 */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">2. Monitoramento KP Localizado — GPS Confiável ou Flyaway Esperando Pra Acontecer?</h3>
          <p>Você já teve aquele momento de pânico quando o drone começa a derivar porque o GPS perdeu precisão?</p>
          <p>O Safra Fácil monitora o índice KP geomagnético localizado e te alerta antes de você decolar se o GPS vai estar instável. Porque um drone de R$150 mil em flyaway não é &quot;azar.&quot; É falta de informação que você poderia ter tido.</p>

          {/* FEATURE 3 */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">3. Sistema de Semáforo Inteligente — Verde, Amarelo ou Vermelho. Sem Ambiguidade.</h3>
          <p>Baseado em todos os fatores (vento multi-altitude, KP, condições locais, histórico do campo), o Safra Fácil te dá uma resposta clara:</p>
          <ul className="list-none pl-0 mb-6">
            <li className="flex items-center gap-2 font-bold text-green-700"><span className="w-3 h-3 rounded-full bg-green-500"></span> 🟢 VERDE: Condições seguras. Voe com confiança.</li>
            <li className="flex items-center gap-2 font-bold text-yellow-600"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> 🟡 AMARELO: Condições marginais. Ajuste parâmetros ou adie.</li>
            <li className="flex items-center gap-2 font-bold text-red-600"><span className="w-3 h-3 rounded-full bg-red-600"></span> 🟠 VERMELHO: Condições perigosas. Não voe.</li>
          </ul>
          <p>Não mais ficar 30 minutos analisando cinco apps diferentes tentando &quot;interpretar&quot; se dá ou não dá. Uma olhada. Uma resposta. Uma decisão profissional.</p>

          {/* VISUAL 3: TRAFFIC LIGHT */}
          <div className="my-8 flex justify-center">
            <div className="bg-gray-800 p-6 rounded-2xl flex items-center gap-6 shadow-xl border border-gray-700">
              <div className="flex flex-col gap-3 bg-gray-900 p-3 rounded-full border border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-900/50 border border-red-900"></div>
                <div className="w-10 h-10 rounded-full bg-yellow-900/50 border border-yellow-900"></div>
                <div className="w-10 h-10 rounded-full bg-green-500 border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse flex items-center justify-center text-green-900 font-bold"><Check className="h-6 w-6" /></div>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Status Atual</div>
                <div className="text-2xl font-bold text-green-400">SEGURO</div>
                <div className="text-sm text-gray-500">Vento 100m: 11 km/h</div>
              </div>
            </div>
          </div>

          {/* FEATURE 4 */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">4. &quot;Prova de Voo Seguro&quot; com Um Clique — O Seu Escudo Contra Responsabilidade</h3>
          <p>Aqui está a funcionalidade que muda tudo: Quando você clica em &quot;Iniciar Operação&quot; no Safra Fácil, o sistema tira um snapshot imutável de todas as condições naquele momento:</p>
          <ul className="list-disc pl-5">
            <li>Vento em cada altitude</li>
            <li>KP Index</li>
            <li>Temperatura e umidade</li>
            <li>Hora exata</li>
            <li>Localização GPS do campo</li>
            <li>Status do semáforo (verde/amarelo/vermelho)</li>
          </ul>
          <p>Isso gera um registro hasheado e auditável — impossível de alterar depois — que prova exatamente quais eram as condições quando você decidiu voar. No final da operação, você gera um PDF profissional em 1 clique com todos esses dados.</p>
          <p>Esse PDF serve como:</p>
          <ul className="list-none pl-0 space-y-2">
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Prova pro fazendeiro de que você agiu com responsabilidade</li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Documentação pra seguradora (se você tiver)</li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Defesa legal se alguém te acusar de deriva</li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Evidência pra MAPA/ANAC em caso de fiscalização</li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-600 mt-1 mr-2" /> Diferencial competitivo pra ganhar contratos com cooperativas</li>
          </ul>

          {/* VISUAL 4: PDF MOCKUP */}
          <div className="my-12 flex justify-center perspective-1000 group">
            <div className="bg-white w-64 h-80 border border-gray-200 shadow-xl p-5 relative transform transition-transform duration-500 hover:rotate-2 hover:scale-105">
              <div className="border-b pb-2 mb-3 flex justify-between items-center">
                <div className="text-[10px] font-bold text-gray-500">RELATÓRIO DE VOO</div>
                <div className="text-[8px] text-gray-300">#AF-9920</div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 bg-gray-100 w-3/4"></div>
                <div className="h-1.5 bg-gray-100 w-full"></div>
                <div className="bg-green-50 p-2 rounded border border-green-100 mt-2">
                  <div className="text-[9px] font-bold text-green-800">Condições: VERDE</div>
                  <div className="text-[8px] text-green-600">Vento 100m: 11km/h</div>
                </div>
                <div className="h-24 bg-gray-50 rounded border border-gray-100 mt-2 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-200" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 border-2 border-green-600 text-green-600 text-[10px] font-black px-1 transform -rotate-12 opacity-80">
                AUDITADO
              </div>
            </div>
          </div>

          <p>&quot;Se eu mostrar relatório, ninguém questiona meu trabalho.&quot; Agora você tem esse relatório. Todo dia. Toda operação. Prova indiscutível.</p>

          {/* FEATURE 5 */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">5. Funciona Offline — Porque Você Não Pulveriza em Shopping Center</h3>
          <p>73% das fazendas brasileiras não têm internet boa. O Safra Fácil foi construído sabendo disso. Você faz cache dos mapas e dados meteorológicos quando tem sinal (na cidade, no hotel, na sede da fazenda). No campo, tudo funciona offline. Registra tudo localmente. Quando você voltar pra área com sinal, sincroniza automaticamente.</p>
          <p>Não mais &quot;a sensação de impotência quando o sinal some no meio do campo.&quot; Você opera. O app registra. Acabou.</p>

          {/* FEATURE 6 */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">6. Tudo em Um Lugar — Acabou o Malabarismo de Apps</h3>
          <p>Dentro do Safra Fácil você tem:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>✅ Dados meteorológicos multi-altitude</div>
            <div>✅ Notas e observações do piloto</div>
            <div>✅ Monitoramento KP em tempo real</div>
            <div>✅ Geração de relatórios PDF</div>
            <div>✅ Histórico de voos e operações</div>
            <div>✅ Exportação pra MAPA/ANAC</div>
            <div>✅ Registro de volume/hectare</div>
            <div>✅ Resumos prontos pra WhatsApp</div>
            <div>✅ Fotos georreferenciadas</div>
          </div>
          <p className="mt-4">Um app. Uma plataforma. Uma decisão. Você nunca mais precisa alternar entre Windy, UAV Forecast, DJI, WhatsApp, e rezar pra que a intuição feche o pacote.</p>

          {/* SECTION: OBJECTIONS */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Por Que Safra Fácil Funciona Quando Outras &quot;Soluções&quot; Falham</h2>
          <p>Vamos ser honestos sobre por que você nunca adotou um &quot;sistema de gestão&quot; antes:</p>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-bold text-lg mb-2">Objeção #1: &quot;É muito caro pro meu negócio.&quot;</h4>
              <p>Vamos fazer a conta real:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Custo do Safra Fácil: R$49-99/mês (menos que o tanque de gasolina da sua pickup)</li>
                <li>Custo de UM drone que cai: R$150.000</li>
                <li>Custo de UM processo por deriva: R$40.000</li>
                <li>Custo de perder UM contrato grande: R$15.000+</li>
              </ul>
              <p>Você precisa prevenir UMA catástrofe a cada 100-200 ANOS pra o Safra Fácil se pagar. Na prática? Se o app te faz evitar uma decisão ruim por ano, ele se pagou 500 vezes. Não é custo. É seguro operacional.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-bold text-lg mb-2">Objeção #2: &quot;Não tenho tempo pra aprender outra ferramenta.&quot;</h4>
              <p>Entendemos. Você já tem DJI, já tem Windy, já tem sua rotina. Por isso o Safra Fácil foi desenhado pra você gerar valor no primeiro uso.</p>
              <p>Baixa o app → Define sua localização → Sistema já mostra janela de pulverização de hoje → Você gera seu primeiro PDF de prova em 3 minutos.</p>
              <p>Não tem &quot;fase de implementação.&quot; Não tem curso de 40 horas. Instala. Usa. Pronto.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-bold text-lg mb-2">Objeção #3: &quot;E se não funcionar sem internet?&quot;</h4>
              <p>Já respondemos isso, mas vale repetir porque é crítico: Modo offline é nativo, não é &quot;recurso adicional.&quot; Você faz cache antes. Opera sem sinal. Sincroniza depois. Testado em Mato Grosso, Goiás, interior de SP — lugares onde o 4G é uma piada. Funciona. Ponto.</p>
            </div>
          </div>

          <p className="mt-6 font-bold">Objeção #4: &quot;Como sei que os dados são precisos? E se o app errar e eu cair mesmo assim?&quot;</p>
          <p>Ótima pergunta. Primeiro: O Safra Fácil usa fontes meteorológicas profissionais (não dados de hobby) com modelagem específica pra microclimatologia agrícola brasileira.</p>
          <p>Segundo: O sistema não te garante que nunca vai ter acidente. Nenhuma ferramenta pode garantir isso. O que o Safra Fácil garante é:</p>
          <ol className="list-decimal pl-5">
            <li>Você terá muito mais informação do que qualquer piloto usando Windy + intuição</li>
            <li>Você terá prova documentada de que tomou decisões baseadas em dados profissionais</li>
            <li>Você estará operando no padrão que cooperativas e seguradoras reconhecem como responsável</li>
          </ol>
          <p>Se algo der errado (vento extremo inesperado, falha mecânica, etc.), você tem o relatório provando que você não foi negligente. Isso muda tudo numa disputa legal ou comercial.</p>

          <p className="mt-6 font-bold">Objeção #5: &quot;Meus dados ficam seguros? Vocês vão vender minha lista de clientes?&quot;</p>
          <p>Seus dados são seus. Ponto final. O Safra Fácil não compartilha, não vende, não &quot;monetiza&quot; sua lista de fazendeiros. Os relatórios que você gera ficam armazenados de forma criptografada na nuvem (com backup, ao contrário do seu caderno de papel que pode pegar fogo). E você pode exportar tudo a qualquer momento em PDF ou Excel.</p>

          <p className="mt-6 font-bold">Objeção #6: &quot;O PDF é aceito por MAPA/ANAC/Seguradora?&quot;</p>
          <p>Os relatórios do Safra Fácil seguem os templates de documentação recomendados por MAPA pra registro de aplicação aérea. Eles incluem todos os campos obrigatórios. Isso significa que você pode usar os PDFs como comprovação de serviço, documentação de conformidade e evidência legal. Você estará na frente da curva, não correndo atrás.</p>

          {/* SECTION: DAY IN THE LIFE */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Como Safra Fácil Funciona na Prática: Um Dia na Vida do Piloto Profissional</h2>
          <div className="border-l-2 border-green-200 ml-4 space-y-8 pl-6 relative">
            {/* Timeline items */}
            <div className="relative">
              <span className="absolute -left-[31px] bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
              <h4 className="font-bold">5h30 da manhã</h4>
              <p className="text-sm">Você acorda. Toma café. Pega o celular. Abre o Safra Fácil. A tela inicial já mostra: 🟢 &quot;Janela de pulverização hoje: 06:00 - 09:30&quot;. Você vê que tá verde. Você já sabe que pode voar. Não abriu 5 apps. Não ficou na dúvida.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[31px] bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
              <h4 className="font-bold">6h15 — No campo</h4>
              <p className="text-sm">Você clica em &quot;Iniciar Operação.&quot; O app registra: Fazenda São José, 80ha, Talhão 3. Status: 🟢 VERDE. Você decola. Você pulveriza. Tranquilo.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[31px] bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
              <h4 className="font-bold">8h45 — Operação concluída</h4>
              <p className="text-sm">Você pousa. Clica em &quot;Finalizar Operação.&quot; O app pergunta: &quot;Gerar relatório?&quot; Você clica &quot;Sim.&quot; 10 segundos depois, você tem um PDF profissional. Você clica em &quot;Enviar por WhatsApp.&quot; O fazendeiro recebe. Ele vê que você é diferente.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safra Fácil Não É Só Um App. É O Seu Distintivo de Piloto Profissional.</h2>
          <p>Aqui está a verdade que ninguém fala: No mercado de pulverização, você não compete só com habilidade. Você compete com confiança.</p>
          <p>Fazendeiros contratam pilotos que eles confiam. Cooperativas aprovam pilotos que demonstram padrões. Seguradoras cobrem operações que têm documentação.</p>
          <p>E o piloto que chega com relatório profissional, dados de altitude, registro imutável? Esse cara não é visto como &quot;mais um piloto.&quot; Ele é visto como especialista.</p>
          <p>Quando o concorrente chega com &quot;confiei no Windy e deu certo,&quot; e você chega com &quot;aqui está o relatório completo da operação, todas as condições registradas, tudo dentro dos parâmetros de segurança&quot;... Não tem comparação.</p>
          <p>Você se separa dos &quot;despreparados.&quot;</p>

          {/* TESTIMONIALS */}
          <div className="bg-green-50 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-center mb-8">O Que Outros Pilotos Estão Dizendo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-sm italic mb-2">&quot;Antes eu perdia 40 minutos todo dia checando clima em três apps. Agora eu abro Safra Fácil, vejo o semáforo verde, e vou. Economizei horas e ganhei paz de espírito.&quot;</p>
                <p className="text-xs font-bold text-green-700">— Ricardo M., piloto em Goiás, 4 anos de experiência</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-sm italic mb-2">&quot;Tive uma acusação de deriva que eu sabia que não era minha. Mostrei o relatório do Safra Fácil provando que o vento tava dentro dos limites quando eu voei. O fazendeiro me defendeu. Caso encerrado.&quot;</p>
                <p className="text-xs font-bold text-green-700">— Carlos T., piloto em MS</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-sm italic mb-2">&quot;O PDF que o app gera impressiona. Cooperativa onde eu trabalho agora exige de todos os pilotos terceirizados. Quem não tem, não entra.&quot;</p>
                <p className="text-xs font-bold text-green-700">— Fernanda S., piloto em SP</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-sm italic mb-2">&quot;Eu era cético. Achei que era mais um app inútil. Testei de graça. No terceiro dia, o app me alertou de um KP alto que eu não tinha visto. Não voei. Dois pilotos da região tiveram flyaway naquele dia. Valeu cada centavo.&quot;</p>
                <p className="text-xs font-bold text-green-700">— André P., Paraná</p>
              </div>
            </div>
          </div>

          {/* PRICING */}
          <h2 className="text-2xl font-bold text-center mb-6">Quanto Custa Operar Como Profissional?</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {/* Basic */}
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <h3 className="font-bold text-lg">Básico</h3>
              <div className="text-gray-500 text-sm mb-4">Gratuito</div>
              <ul className="text-xs text-left space-y-2 mb-4">
                <li>Dashboard básico</li>
                <li>Semáforo verde/amarelo/vermelho</li>
                <li>Histórico de 7 dias</li>
              </ul>
              <Link href="https://wa.me/5544999522514" target="_blank" className="w-full py-2 bg-gray-100 rounded text-sm font-bold block text-center">Testar</Link>
            </div>
            {/* Pro */}
            <div className="border-2 border-green-500 rounded-lg p-4 text-center relative bg-green-50 transform scale-105 shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">RECOMENDADO</div>
              <h3 className="font-bold text-lg">Pro Piloto</h3>
              <div className="text-3xl font-black text-gray-900">R$49<span className="text-sm font-normal text-gray-500">/mês</span></div>
              <p className="text-[10px] text-gray-500 mb-4">Menos que um café/dia</p>
              <ul className="text-xs text-left space-y-2 mb-4">
                <li>✅ Dados multi-altitude ilimitados</li>
                <li>✅ Monitoramento KP real</li>
                <li>✅ PDFs ilimitados &quot;Prova de Voo&quot;</li>
                <li>✅ Modo Offline</li>
                <li>✅ Exportação MAPA/ANAC</li>
              </ul>
              <Link href="https://wa.me/5544999522514" target="_blank" className="w-full py-2 bg-green-600 text-white rounded text-sm font-bold block text-center">Escolher Pro</Link>
            </div>
            {/* Company */}
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <h3 className="font-bold text-lg">Empresa</h3>
              <div className="text-2xl font-bold text-gray-900">R$299<span className="text-sm font-normal text-gray-500">/mês</span></div>
              <ul className="text-xs text-left space-y-2 mb-4 mt-4">
                <li>Multi-piloto (até 10)</li>
                <li>Dashboard de frota</li>
                <li>Relatórios consolidados</li>
                <li>API de integração</li>
              </ul>
              <Link href="https://wa.me/5544999522514" target="_blank" className="w-full py-2 bg-gray-800 text-white rounded text-sm font-bold block text-center">Falar com Consultor</Link>
            </div>
          </div>

          {/* GUARANTEE */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-center mb-10">
            <ShieldCheck className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-2">Garantia de 30 Dias — Risco Zero</h3>
            <p className="text-sm text-gray-600 mb-4">Nós sabemos que você é cauteloso. Deve ser. Você opera equipamento de R$150 mil. Por isso oferecemos:</p>
            <p className="font-bold mb-4">Teste o Safra Fácil por 30 dias. Se você achar que não valeu, reembolsamos 100%. Sem perguntas.</p>
            <p className="text-sm text-gray-600">Você vai usar uma vez. Vai ver o semáforo. Vai sentir o alívio. E você vai perceber: &quot;Como eu operava sem isso antes?&quot;</p>
          </div>

          {/* CLOSING */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">A Decisão Que Separa Sua Carreira Nos Próximos 12 Meses</h2>
          <p>Vamos ser diretos. Você está num mercado que cresce 40% ao ano. A demanda é alta. Os fazendeiros querem precisão. Mas o mercado também está ficando saturado de pilotos despreparados.</p>
          <p>Esses pilotos vão causar acidentes. Vão queimar lavouras. Vão destruir a reputação da categoria. E quando isso acontecer, sabe quem vai sobreviver?</p>
          <p className="font-bold">Os pilotos que conseguem provar que operam diferente. Os pilotos que mostram relatórios. Os pilotos que têm dados.</p>
          <p>A pergunta é: Você quer ser um deles? Ou quer continuar competindo com amadores usando as mesmas ferramentas que eles?</p>

          {/* FINAL CTA */}
          <div className="text-center my-12">
            <h3 className="text-xl font-bold mb-6">Comece Agora — Teste Grátis Por 14 Dias</h3>
            <Link href="https://wa.me/5544999522514" target="_blank" className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 px-10 rounded-full shadow-xl transform transition hover:-translate-y-1 mb-4 w-full md:w-auto inline-block text-center">
              COMEÇAR TESTE GRÁTIS
            </Link>
            <p className="text-sm text-gray-500 mb-2">Sem cartão de crédito. Sem compromisso.</p>
            <Link href="https://wa.me/5544999522514" target="_blank" className="text-green-700 font-bold cursor-pointer hover:underline flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" /> Falar com Suporte (WhatsApp)
            </Link>
          </div>

          <div className="text-center italic text-gray-500 text-sm mb-12">
            &quot;Prefiro perder um dia do que arriscar a aplicação e perder cliente.&quot;<br />
            E se você não precisasse mais escolher?
          </div>

        </article>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-sm border-t-4 border-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-white font-bold text-xl mb-2 flex justify-center items-center gap-2">
            <Plane className="h-5 w-5" /> Safra Fácil
          </h3>
          <p className="mb-6">A plataforma de segurança operacional para pilotos de pulverização agrícola.<br />Construída por pilotos. Para pilotos. No Brasil.</p>
          <div className="flex justify-center gap-4 text-xs">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> Garantia de 30 dias</span>
            <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" /> Suporte em português</span>
            <span className="flex items-center gap-1"><Wifi className="h-3 w-3" /> Funciona offline</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-[0_-5px_10px_rgba(0,0,0,0.05)] flex items-center justify-between">
        <div className="text-sm font-bold text-gray-800">Teste Grátis 14 Dias</div>
        <Link href="https://wa.me/5544999522514" target="_blank" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">Começar</Link>
      </div>

    </div>
  )
}
