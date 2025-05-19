"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckIcon,
  StarIcon,
  SparklesIcon,
  BookOpenIcon,
  HeartIcon,
  BrainIcon,
  ZapIcon,
  UserIcon,
  QuoteIcon,
  GiftIcon,
  ArrowRightIcon,
  LightbulbIcon,
  ShieldIcon,
} from "lucide-react"
import TarotDeck from "@/components/tarot-deck"
import WhatsAppButton from "@/components/whatsapp-button"

const HOTMART_LINK = "https://pay.hotmart.com/N99568823B"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1F33] text-white overflow-hidden">
      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Hero Section - Mantida como está */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-[#0A1F33] via-[#1A2C4D] to-[#2D1A63]"></div>
        </div>

        <div className="container relative z-10 px-4 py-16 mx-auto md:py-24">
          <div className="flex flex-col items-center lg:flex-row lg:items-center">
            <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
              <Image
                src="/images/hero-arcanos.jpg"
                width={600}
                height={600}
                alt="Os 22 Arcanos Maiores"
                className="rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                priority
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 text-sm font-medium rounded-full bg-[#0A1F33] text-[#FFD700]">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Guia Definitivo do Tarot
              </div>

              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                Desperte o Poder dos <span className="text-[#FFD700]">Arcanos Maiores</span>
              </h1>

              <p className="mb-8 text-lg text-gray-200 md:text-xl">
                Transforme suas leituras de Tarot e eleve sua conexão espiritual com o guia definitivo sobre os 22
                Arcanos Maiores com Márcio Conexão Holístico!
              </p>

              <Button
                size="lg"
                className="px-8 py-6 text-lg font-bold transition-all bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1F33]"
                onClick={() => window.open(HOTMART_LINK, "_blank")}
              >
                QUERO O MEU EBOOK AGORA
              </Button>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-[#FFD700]" />
                  <StarIcon className="w-5 h-5 text-[#FFD700]" />
                  <StarIcon className="w-5 h-5 text-[#FFD700]" />
                  <StarIcon className="w-5 h-5 text-[#FFD700]" />
                  <StarIcon className="w-5 h-5 text-[#FFD700]" />
                </div>
                <p className="text-sm text-gray-300">Mais de 500 leitores satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Rápidos - Melhorada */}
      <section className="py-16 bg-gradient-to-r from-[#1A2C4D] to-[#2D1A63] relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute w-40 h-40 rounded-full bg-[#FFD700]/30 blur-3xl -top-10 -left-10"></div>
          <div className="absolute w-60 h-60 rounded-full bg-[#FFD700]/20 blur-3xl bottom-10 right-10"></div>
          <div className="absolute w-20 h-20 rounded-full bg-[#FFD700]/40 blur-2xl top-1/2 left-1/3"></div>
        </div>

        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            Transforme sua <span className="text-[#FFD700]">Conexão Espiritual</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <HeartIcon className="w-6 h-6" />,
                title: "Amor",
                description: "Descubra como os arcanos revelam caminhos para relacionamentos plenos",
              },
              {
                icon: <ZapIcon className="w-6 h-6" />,
                title: "Saúde",
                description: "Identifique sinais importantes sobre bem-estar e equilíbrio energético",
              },
              {
                icon: <StarIcon className="w-6 h-6" />,
                title: "Trabalho",
                description: "Encontre orientação para decisões profissionais e prosperidade",
              },
              {
                icon: <BrainIcon className="w-6 h-6" />,
                title: "Espiritualidade",
                description: "Aprofunde sua conexão com o universo e seu propósito de vida",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 transition-all rounded-lg bg-[#0A1F33]/60 hover:bg-[#0A1F33] border border-[#FFD700]/10 hover:border-[#FFD700]/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 text-[#FFD700] group-hover:from-[#FFD700]/30 group-hover:to-[#FFD700]/20">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-[#FFD700]">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Interativa de Tarot - Melhorada */}
      <section className="py-20 bg-[#0A1F33] relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <style jsx global>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/10 text-[#FFD700]">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Experiência Interativa
            </div>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              <span className="text-[#FFD700]">Descubra</span> o Poder do Tarot
            </h2>

            <p className="text-xl text-gray-300">
              Escolha uma carta do baralho abaixo e descubra seu significado. Esta é apenas uma amostra do conhecimento
              profundo que você encontrará no eBook.
            </p>
          </div>

          <TarotDeck />

          <div className="max-w-2xl p-8 mx-auto mt-16 text-center rounded-lg bg-gradient-to-br from-[#1A2C4D] to-[#2D1A63] border border-[#FFD700]/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <h3 className="mb-4 text-2xl font-bold text-[#FFD700]">Vá Além da Superfície</h3>
            <p className="text-lg text-gray-200">
              No eBook "A Jornada dos 22 Arcanos Maiores", você encontrará interpretações muito mais profundas e
              detalhadas para cada carta, incluindo aplicações práticas para amor, trabalho, saúde e espiritualidade.
            </p>
            <Button
              className="px-8 py-3 mt-6 text-lg font-medium transition-all bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1F33] shadow-[0_0_15px_rgba(255,215,0,0.3)]"
              onClick={() => window.open(HOTMART_LINK, "_blank")}
            >
              QUERO APRENDER MAIS
            </Button>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Encontrar - Melhorada */}
      <section className="py-20 bg-gradient-to-b from-[#0A1F33] to-[#1A2C4D] relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="absolute">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle
                id="pattern-circle"
                cx="25"
                cy="25"
                r="12"
                fill="none"
                stroke="#FFD700"
                strokeWidth="0.5"
              ></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/10 text-[#FFD700]">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Conteúdo Exclusivo
            </div>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              O Que Você Vai <span className="text-[#FFD700]">Encontrar</span> Neste eBook
            </h2>

            <p className="text-xl text-gray-300">
              Um guia completo que vai muito além dos significados tradicionais do Tarot
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Interpretações Profundas",
                description: "Dos Arcanos Maiores nas dimensões do passado, presente e futuro.",
                icon: "✨",
              },
              {
                title: "Aplicações Práticas",
                description: "Nos campos de relacionamentos, trabalho, saúde e espiritualidade.",
                icon: "🔮",
              },
              {
                title: "Dicas Exclusivas",
                description: "Para leituras mais assertivas e precisas em diversos contextos.",
                icon: "💫",
              },
              {
                title: "Numerologia dos Arcanos",
                description: "Para leituras ainda mais precisas e profundas.",
                icon: "🔢",
              },
              {
                title: "Carta do Dia",
                description: "Aprenda a tirar a Carta do Dia para orientar seu caminho pessoal.",
                icon: "📅",
              },
              {
                title: "Técnicas de Energização",
                description: "Sintonizações, orações especiais e rituais de fortalecimento energético.",
                icon: "✋",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 transition-all rounded-lg bg-gradient-to-br from-[#1A2C4D] to-[#2A3C5D] hover:from-[#2A3C5D] hover:to-[#3A4C6D] border border-[#FFD700]/10 hover:border-[#FFD700]/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl rounded-full bg-[#0A1F33] border border-[#FFD700]/20 group-hover:border-[#FFD700]/40">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#FFD700] group-hover:text-white">{item.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas Exclusivas - Melhorada */}
      <section className="py-20 bg-[#0A1F33] relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute w-full h-full bg-[url('/images/constellation-bg.png')] bg-repeat opacity-30"></div>
        </div>

        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full mb-10 md:w-1/2 md:mb-0 md:pr-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent rounded-lg transform -rotate-3"></div>
                <Image
                  src="/images/tarot-cards.jpg"
                  width={600}
                  height={400}
                  alt="Cartas de Tarot"
                  className="relative z-10 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD700]/30 to-[#FFD700]/10 blur-xl"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/10 text-[#FFD700]">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Conhecimento Avançado
              </div>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Dicas <span className="text-[#FFD700]">Exclusivas</span> Para Leituras Mais Assertivas
              </h2>

              <ul className="space-y-6">
                {[
                  "Como identificar problemas de saúde nas cartas",
                  "Quais cartas sinalizam gravidez",
                  "Indicações de ganhos em jogos e sorte",
                  "Sinais de traição nas tiragens",
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 mt-1 mr-4 rounded-full bg-gradient-to-br from-[#FFD700]/30 to-[#FFD700]/10 group-hover:from-[#FFD700]/50 group-hover:to-[#FFD700]/30 transition-all duration-300">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="px-8 py-3 mt-8 text-lg font-medium transition-all bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1F33] shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                onClick={() => window.open(HOTMART_LINK, "_blank")}
              >
                QUERO ESTAS DICAS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Bônus Especial */}
<section className="py-20 bg-gradient-to-b from-[#1A2C4D] to-[#2D1A63] relative overflow-hidden">
  {/* Elementos decorativos */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
    <div className="absolute w-full h-full">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${2 + Math.random() * 5}s infinite ${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  </div>

  <div className="container px-4 mx-auto">
    <div className="relative">
      {/* SELO MOBILE - centralizado no topo */}
      <div className="md:hidden flex justify-center absolute -top-12 left-0 w-full z-30">
        <div className="relative w-24 h-24 rotate-12 animate-pulse flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[#FFD700] rounded-full"></div>
          <div className="absolute inset-1 bg-[#0A1F33] rounded-full"></div>
          <div className="relative z-10 text-center leading-tight">
            <p className="text-[#FFD700] font-bold text-[10px]">BÔNUS</p>
            <p className="text-[#FFD700] font-bold text-[10px]">EXCLUSIVO</p>
          </div>
        </div>
      </div>

      {/* SELO DESKTOP - topo direito */}
      <div className="hidden md:flex absolute -top-10 -right-10 z-30 w-40 h-40 items-center justify-center rotate-12 animate-pulse">
        <div className="absolute inset-0 bg-[#FFD700] rounded-full"></div>
        <div className="absolute inset-1 bg-[#0A1F33] rounded-full"></div>
        <div className="relative text-center leading-tight">
          <p className="text-[#FFD700] font-bold text-sm">BÔNUS</p>
          <p className="text-[#FFD700] font-bold text-sm">EXCLUSIVO</p>
        </div>
      </div>

      <div className="p-6 md:p-10 rounded-xl bg-gradient-to-br from-[#0A1F33]/90 to-[#1A2C4D]/90 border border-[#FFD700]/30 shadow-[0_10px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(255,215,0,0.3)]">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* BLOCO DA IMAGEM */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent rounded-lg"></div>
              <Image
                src="/images/marcio.jpg"
                width={600}
                height={600}
                alt="Consulta de Tarot com Márcio"
                className="relative z-10 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] border-2 border-[#FFD700]/20"
              />
            </div>
          </div>

          {/* BLOCO DE TEXTO */}
          <div className="w-full lg:w-1/2 relative">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/20 text-[#FFD700]">
              <GiftIcon className="w-4 h-4 mr-2" />
              Oferta por Tempo Limitado
            </div>

            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              <span className="text-[#FFD700]">Você sente que precisa</span> de respostas?
            </h2>

            <p className="mb-6 text-xl text-gray-200">
              O Tarot pode te ajudar a enxergar o que você ainda não vê.
            </p>

            <div className="p-6 mb-8 rounded-lg bg-[#0A1F33]/80 border border-[#FFD700]/20">
              <h3 className="mb-4 text-2xl font-semibold text-[#FFD700] flex items-center">
                <LightbulbIcon className="w-6 h-6 mr-2" /> Bônus Imperdível!
              </h3>
              <p className="mb-4 text-lg text-white">
                Ao adquirir o eBook <span className="font-semibold">hoje</span>, você receberá{" "}
                <span className="text-[#FFD700] font-bold">GRATUITAMENTE</span> uma consulta personalizada de Tarot com Márcio!
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Consulta individual focada na sua questão mais urgente",
                  "Orientação clara e direta para seu momento atual",
                  "Resposta enviada por áudio diretamente no seu WhatsApp",
                  "Valor normal: R$97,00 - HOJE: GRÁTIS!",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 mt-1 mr-2 text-[#FFD700]" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center p-3 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30">
                <ShieldIcon className="w-6 h-6 mr-3 text-[#FFD700]" />
                <p className="text-sm text-gray-200">
                  Este bônus tem <span className="font-bold">vagas limitadas</span> e pode ser removido a qualquer momento.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full py-6 text-lg font-bold transition-all bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1F33] shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
              onClick={() => window.open(HOTMART_LINK, "_blank")}
            >
              QUERO O EBOOK + CONSULTA GRÁTIS
            </Button>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>



      {/* NOVA SEÇÃO: Sobre o Autor */}
      <section className="py-20 bg-[#0A1F33] relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-40 h-40 rounded-full bg-[#FFD700]/10 blur-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/10 text-[#FFD700]">
              <UserIcon className="w-4 h-4 mr-2" />
              Conheça o Autor
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="text-[#FFD700]">Márcio</span> Conexão Holística
            </h2>
          </div>

          <div className="flex flex-col items-center md:flex-row md:items-start gap-10 max-w-4xl mx-auto">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-72 h-72 mb-4 overflow-hidden rounded-full border-4 border-[#FFD700]/30 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                <Image src="/images/profile-image.png" alt="Márcio Conexão Holística" fill className="object-cover" />
              </div>

              <div className="flex space-x-3 mt-4">
                {/* Twitter */}
                <a href="https://facebook.com/marcioconexaoholistico" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700] hover:text-[#FFA500] hover:bg-[#FFD700]/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </Button>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/marcioconexaoholistico" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700] hover:text-[#FFA500] hover:bg-[#FFD700]/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </Button>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/marcioconexaoholistico" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700] hover:text-[#FFA500] hover:bg-[#FFD700]/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="p-6 rounded-lg bg-[#0A1F33]/60 border border-[#FFD700]/20 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <h3 className="mb-4 text-2xl font-semibold text-[#FFD700]">Especialista em Tarot e Espiritualidade</h3>

                <p className="mb-4 text-gray-200">
                  Márcio é um renomado tarólogo e terapeuta holístico, com mais de 10 anos de experiência no atendimento
                  e no ensino de práticas como Reiki, Reflexologia Podal e Harmonização de Ambientes através do Feng
                  Shui. Sua atuação se destaca especialmente nas leituras de Tarot voltadas para o autoconhecimento e a
                  transformação pessoal, oferecendo direcionamento consciente para aqueles que buscam mais clareza em
                  suas jornadas.
                </p>

                <p className="mb-4 text-gray-200">
                  Sua abordagem única integra a sabedoria tradicional dos Arcanos com técnicas contemporâneas de
                  desenvolvimento espiritual, resultando em um método profundo, acessível e eficaz para quem deseja
                  reconectar-se com a sua essência e despertar o seu potencial interior.
                </p>

                <p className="mb-4 text-gray-200">
                  Ao longo de sua trajetória, Márcio já auxiliou milhares de pessoas por meio de cursos, atendimentos e
                  mentorias, proporcionando orientação, propósito e expansão de consciência através do Tarot como
                  ferramenta terapêutica e espiritual.
                </p>

                <div className="flex mt-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-[#FFD700]/10 text-[#FFD700]">
                    <SparklesIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white">Missão</h4>
                    <p className="text-gray-300">
                      Levar conhecimento espiritual de forma acessível e acolhedora, transformando a vida daqueles que
                      buscam sentido e propósito em sua caminhada, e contribuindo para que cada pessoa encontre mais
                      luz, equilíbrio e significado em sua jornada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Feedbacks Reais */}
      <section className="py-20 bg-gradient-to-b from-[#1A2C4D] to-[#2D1A63] relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <svg className="absolute w-full h-full">
            <pattern id="star-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M50 0 L52 47 L98 50 L52 53 L50 100 L48 53 L2 50 L48 47 Z"
                fill="none"
                stroke="#FFD700"
                strokeWidth="0.2"
                transform="scale(0.3)"
              />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#star-pattern)" />
          </svg>
        </div>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/10 text-[#FFD700]">
              <QuoteIcon className="w-4 h-4 mr-2" />
              Depoimentos
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              O Que Nossos <span className="text-[#FFD700]">Leitores Dizem</span>
            </h2>
            <p className="text-xl text-gray-300">
              Histórias reais de pessoas que transformaram sua prática do Tarot com este eBook
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ana Claudia",
                location: "São Paulo, SP",
                text: "Este eBook mudou completamente minha forma de interpretar as cartas. O nível de profundidade das interpretações é impressionante. Consegui identificar situações na vida dos meus consulentes que antes passavam despercebidas.",
                rating: 5,
              },
              {
                name: "Carlos Eduardo",
                location: "Rio de Janeiro, RJ",
                text: "Como terapeuta holístico, sempre busquei integrar o Tarot ao meu trabalho. Com as técnicas deste livro, principalmente as de energização do baralho, meus atendimentos ficaram muito mais assertivos e transformadores.",
                rating: 5,
              },
              {
                name: "Fernanda Martins",
                location: "Belo Horizonte, MG",
                text: "Estou no início da minha jornada com o Tarot e este guia tem sido meu companheiro diário. A explicação sobre a numerologia dos Arcanos e a prática da Carta do Dia transformaram minha conexão com as cartas.",
                rating: 5,
              },
              {
                name: "Pedro Henrique",
                location: "Curitiba, PR",
                text: "Já pratiquei Tarot por anos, mas nunca tinha visto uma abordagem tão completa sobre como identificar questões de saúde nas cartas. As dicas exclusivas valeram cada centavo investido neste material.",
                rating: 5,
              },
              {
                name: "Juliana Costa",
                location: "Salvador, BA",
                text: "Comecei a atender profissionalmente após estudar este eBook. A confiança que ganhei com o conhecimento adquirido me permitiu transformar o Tarot em uma fonte de renda extra que hoje já supera meu trabalho principal.",
                rating: 4,
              },
              {
                name: "Marcelo Santos",
                location: "Brasília, DF",
                text: "As técnicas de energização do baralho e sintonização elevaram minhas leituras a outro nível. Sinto que minha intuição está muito mais aguçada e conectada com as mensagens que os Arcanos têm a transmitir.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 transition-all rounded-lg bg-gradient-to-br from-[#1A2C4D]/70 to-[#2A3C5D]/70 hover:from-[#1A2C4D] hover:to-[#2A3C5D] border border-[#FFD700]/10 hover:border-[#FFD700]/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group"
              >
                <div className="mb-6">
                  <QuoteIcon className="w-10 h-10 text-[#FFD700]/30 group-hover:text-[#FFD700]/50 transition-colors duration-300" />
                </div>
                <p className="mb-6 text-gray-200 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-[#FFD700] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-[#FFD700]" />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-gray-600" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              className="px-8 py-3 text-lg font-medium transition-all bg-[#FFD700]/80 hover:bg-[#FFD700] text-[#0A1F33] shadow-[0_0_15px_rgba(255,215,0,0.3)]"
              onClick={() => window.open(HOTMART_LINK, "_blank")}
            >
              QUERO OS MESMOS RESULTADOS
            </Button>
          </div>
        </div>
      </section>

      {/* Para Quem é Este eBook - Melhorada */}
      <section className="py-20 bg-[#0A1F33] relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-40 h-40 rounded-full bg-[#FFD700]/10 blur-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-[#FFD700]/10 text-[#FFD700]">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Público-Alvo
            </div>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Para Quem é <span className="text-[#FFD700]">Este eBook</span>?
            </h2>

            <p className="text-xl text-gray-300">Descubra se este guia transformador é para você</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Estudantes e Praticantes de Tarot",
                description:
                  "Iniciantes ou intermediários que desejam aprofundar seu conhecimento sobre os Arcanos Maiores e desenvolver leituras mais precisas.",
                icon: "📚",
              },
              {
                title: "Terapeutas Holísticos",
                description:
                  "Reikianos, espiritualistas e profissionais que atuam com terapias alternativas e buscam ferramentas complementares para seus atendimentos.",
                icon: "🧘‍♀️",
              },
              {
                title: "Buscadores Espirituais",
                description:
                  "Pessoas interessadas em autotransformação, numerologia, energia, bem-estar e práticas de cura natural.",
                icon: "✨",
              },
              {
                title: "Futuros Tarólogos Profissionais",
                description:
                  "Quem deseja usar o Tarot como fonte de renda extra, oferecendo atendimentos terapêuticos e transformadores.",
                icon: "💼",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-[#3A2580]/80 to-[#4A30A0]/80 hover:from-[#3A2580] hover:to-[#4A30A0] border border-[#FFD700]/10 hover:border-[#FFD700]/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 group-hover:bg-[#FFD700]/20">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700]">{item.title}</h3>
                </div>
                <p className="text-lg text-gray-300 group-hover:text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus e Garantia - Melhorada */}
      <section className="py-20 bg-gradient-to-b from-[#1A2C4D] to-[#2D1A63] relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFD700]/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-[#FFD700]/5 to-transparent"></div>
        </div>

        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 text-center rounded-lg bg-gradient-to-br from-[#1A2C4D] to-[#2A3C5D] border border-[#FFD700]/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 group flex flex-col h-full justify-between">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 group-hover:from-[#FFD700]/30 group-hover:to-[#FFD700]/10">
                <SparklesIcon className="w-10 h-10 text-[#FFD700]" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white group-hover:text-[#FFD700]">
                🎁 Bônus Imperdível para Você! 🎁
              </h3>
              <div className="p-4 mb-6 rounded-lg bg-[#0A1F33]/50">
                <p className="mb-4 text-xl text-gray-200">
                  Ao adquirir o eBook, você ganha uma{" "}
                  <span className="text-[#FFD700] font-semibold">Leitura Exclusiva de Tarot</span> para qualquer área da
                  sua vida, amor, carreira, espiritualidade, decisões importantes e muito mais!
                </p>
                <p className="text-gray-300">
                  ✨ Vou enviar um áudio personalizado diretamente no seu WhatsApp, trazendo orientações claras e
                  profundas para o seu momento atual.
                </p>
                <p className="text-gray-300">
                  Aproveite essa oportunidade de receber uma mensagem especial que pode transformar sua jornada!
                </p>
                <p className="text-gray-300">Garanta já seu eBook e viva essa experiência única!</p>
              </div>
              <Button
                className="w-full py-3 text-lg font-medium transition-all bg-[#FFD700]/80 hover:bg-[#FFD700] text-[#0A1F33]"
                onClick={() => window.open(HOTMART_LINK, "_blank")}
              >
                QUERO GARANTIR MEU BÔNUS
              </Button>
            </div>

            <div className="p-8 text-center rounded-lg bg-gradient-to-br from-[#1A2C4D] to-[#2A3C5D] border border-[#FFD700]/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 group flex flex-col h-full justify-between">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 group-hover:from-[#FFD700]/30 group-hover:to-[#FFD700]/10">
                <CheckIcon className="w-10 h-10 text-[#FFD700]" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white group-hover:text-[#FFD700]">Garantia Total</h3>
              <div className="p-4 mb-6 rounded-lg bg-[#0A1F33]/50">
                <p className="mb-4 text-xl text-gray-200">
                  Satisfação garantida ou seu dinheiro de volta em{" "}
                  <span className="text-[#FFD700] font-semibold">7 dias</span>.
                </p>
                <p className="text-gray-300">
                  Se você não ficar completamente satisfeito com o conteúdo do eBook, devolvemos 100% do seu
                  investimento, sem perguntas.
                </p>
              </div>
              <Button
                className="w-full py-3 text-lg font-medium transition-all bg-[#FFD700]/80 hover:bg-[#FFD700] text-[#0A1F33]"
                onClick={() => window.open(HOTMART_LINK, "_blank")}
              >
                COMPRA SEGURA E GARANTIDA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Melhorada */}
      <section className="py-20 text-center bg-[#0A1F33] relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animation: `twinkle ${2 + Math.random() * 5}s infinite ${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl p-6 sm:p-10 mx-auto rounded-lg bg-gradient-to-br from-[#2D1A63] to-[#1A2C4D] border border-[#FFD700]/20 shadow-[0_10px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(255,215,0,0.2)]">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FFD700]/30 to-[#FFD700]/10">
              <SparklesIcon className="w-10 h-10 text-[#FFD700]" />
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl font-bold md:text-5xl">
              🌟 Inicie Agora Sua <span className="text-[#FFD700]">Jornada de Poder</span>, Sabedoria e Luz!
            </h2>

            <p className="mb-8 text-xl text-gray-200">
              Não adie a transformação que o Tarot pode trazer para a sua vida. Adquira já o seu eBook "Desperte o Poder
              dos Arcanos Maiores" com Márcio Conexão Holístico!
            </p>

            <Button
              size="lg"
              className="px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold transition-all bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#2D1A63] shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] max-w-full break-words"
              onClick={() => window.open(HOTMART_LINK, "_blank")}
            >
              QUERO DESPERTAR MEU PODER
            </Button>

            <p className="mt-6 text-lg text-gray-300">
              🔮 Clique no botão acima e desperte todo o seu potencial espiritual! 🔮
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-[#FFD700]" />
                <StarIcon className="w-5 h-5 text-[#FFD700]" />
                <StarIcon className="w-5 h-5 text-[#FFD700]" />
                <StarIcon className="w-5 h-5 text-[#FFD700]" />
                <StarIcon className="w-5 h-5 text-[#FFD700]" />
              </div>
              <p className="text-gray-300">Mais de 500 leitores satisfeitos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Melhorada */}
      <footer className="py-8 text-center bg-[#0A1F33] border-t border-[#FFD700]/10">
        <div className="container px-4 mx-auto">
          <p className="text-sm text-gray-400 mb-2">
            © {new Date().getFullYear()} Márcio Conexão Holístico. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Desenvolvido por{" "}
            <a
              href="https://www.devpro.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] font-medium hover:underline hover:text-[#FFD700]/80 transition-colors"
            >
              DevPro
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
