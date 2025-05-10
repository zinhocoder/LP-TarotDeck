"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon, SparklesIcon } from "lucide-react"
import { motion } from "framer-motion"

type TarotCard = {
  id: string
  name: string
  image: string
  meaning: {
    upright: string
    reversed: string
  }
}

const tarotCards: TarotCard[] = [
  {
    id: "moon",
    name: "A Lua",
    image: "/images/cards/moon.jpg",
    meaning: {
      upright: "Intuição, subconsciente, sonhos, ilusões, mistério, criatividade",
      reversed: "Confusão, medo, mal-entendidos, desalinhamento",
    },
  },
  {
    id: "devil",
    name: "O Diabo",
    image: "/images/cards/devil.jpg",
    meaning: {
      upright: "Materialismo, vícios, obsessão, dependências, sexualidade, limitações autoinfligidas",
      reversed: "Libertação, independência, desapego, recuperação do poder pessoal",
    },
  },
  {
    id: "chariot",
    name: "O Carro",
    image: "/images/cards/chariot.jpg",
    meaning: {
      upright: "Controle, força de vontade, vitória, determinação, autoconfiança",
      reversed: "Falta de controle, agressividade, obstáculos, falta de direção",
    },
  },
  {
    id: "empress",
    name: "A Imperatriz",
    image: "/images/cards/empress.jpg",
    meaning: {
      upright: "Feminilidade, beleza, natureza, nutrição, abundância, fertilidade",
      reversed: "Bloqueio criativo, dependência, excesso, negligência, vazios",
    },
  },
  {
    id: "high-priestess",
    name: "A Sacerdotisa",
    image: "/images/cards/high-priestess.jpg",
    meaning: {
      upright: "Intuição, sabedoria inconsciente, mistério, espiritualidade, conhecimento superior",
      reversed: "Segredos, informações não reveladas, desconexão da intuição, superficialidade",
    },
  },
  {
    id: "tower",
    name: "A Torre",
    image: "/images/cards/tower.jpg",
    meaning: {
      upright: "Mudança súbita, caos, revelação, despertar, libertação",
      reversed: "Resistência à mudança, evitar o desastre, medo da mudança",
    },
  },
  {
    id: "death",
    name: "A Morte",
    image: "/images/cards/death.jpg",
    meaning: {
      upright: "Transformação, fins e começos, transição, mudança, renovação",
      reversed: "Resistência à mudança, estagnação, decadência, apego ao passado",
    },
  },
  {
    id: "wheel-of-fortune",
    name: "A Roda da Fortuna",
    image: "/images/cards/wheel-of-fortune.jpg",
    meaning: {
      upright: "Boa sorte, karma, ciclos de vida, destino, ponto de virada",
      reversed: "Má sorte, resistência à mudança, quebra de ciclos",
    },
  },
  {
    id: "hermit",
    name: "O Eremita",
    image: "/images/cards/hermit.jpg",
    meaning: {
      upright: "Introspecção, busca interior, solidão, orientação espiritual, contemplação",
      reversed: "Isolamento, solidão, reclusão, rejeição de ajuda externa",
    },
  },
  {
    id: "temperance",
    name: "A Temperança",
    image: "/images/cards/temperance.jpg",
    meaning: {
      upright: "Equilíbrio, moderação, paciência, propósito, significado",
      reversed: "Desequilíbrio, excesso, falta de visão de longo prazo, impaciência",
    },
  },
  {
    id: "hanged-man",
    name: "O Enforcado",
    image: "/images/cards/hanged-man.jpg",
    meaning: {
      upright: "Pausa, rendição, deixar ir, perspectiva diferente, sacrifício",
      reversed: "Resistência, atrasos, indecisão, estagnação",
    },
  },
  {
    id: "judgement",
    name: "O Julgamento",
    image: "/images/cards/judgement.jpg",
    meaning: {
      upright: "Renovação, despertar, renascimento, chamado, absolvição",
      reversed: "Dúvidas, negação, recusa em aprender com o passado",
    },
  },
  {
    id: "hierophant",
    name: "O Hierofante",
    image: "/images/cards/hierophant.jpg",
    meaning: {
      upright: "Tradição, conformidade, moralidade, ética, espiritualidade organizada",
      reversed: "Desafiar convenções, não convencional, inovação",
    },
  },
  {
    id: "fool",
    name: "O Louco",
    image: "/images/cards/fool.jpg",
    meaning: {
      upright: "Novos começos, inocência, espontaneidade, espírito livre, potencial",
      reversed: "Temeridade, risco, descuido, imprudência",
    },
  },
  {
    id: "sun",
    name: "O Sol",
    image: "/images/cards/sun.jpg",
    meaning: {
      upright: "Sucesso, radiância, alegria, entusiasmo, vitalidade",
      reversed: "Excesso de otimismo, bloqueio criativo, decepção",
    },
  },
  {
    id: "magician",
    name: "O Mago",
    image: "/images/cards/magician.jpg",
    meaning: {
      upright: "Manifestação, criatividade, inspiração, habilidade, poder pessoal",
      reversed: "Manipulação, ilusão, habilidades não utilizadas, engano",
    },
  },
  {
    id: "emperor",
    name: "O Imperador",
    image: "/images/cards/emperor.jpg",
    meaning: {
      upright: "Autoridade, estrutura, controle, liderança, estabilidade",
      reversed: "Dominação, rigidez, inflexibilidade, tirania",
    },
  },
  {
    id: "star",
    name: "A Estrela",
    image: "/images/cards/star.jpg",
    meaning: {
      upright: "Esperança, fé, propósito, renovação, espiritualidade",
      reversed: "Falta de fé, desespero, desânimo, desilusão",
    },
  },
  {
    id: "lovers",
    name: "Os Enamorados",
    image: "/images/cards/lovers.jpg",
    meaning: {
      upright: "Amor, harmonia, união, escolhas, valores alinhados",
      reversed: "Desalinhamento, desequilíbrio, valores desalinhados, conflito",
    },
  },
  {
    id: "world",
    name: "O Mundo",
    image: "/images/cards/world.jpg",
    meaning: {
      upright: "Conclusão, realização, viagem, integração, totalidade",
      reversed: "Incompletude, falta de conclusão, atrasos",
    },
  },
]

export default function TarotDeck() {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null)
  const [isReversed, setIsReversed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([])
  const [showMeaning, setShowMeaning] = useState(false)
  const [selectedCardDetails, setSelectedCardDetails] = useState<{ card: TarotCard; isReversed: boolean } | null>(null)

  useEffect(() => {
    // Inicializa as cartas embaralhadas
    setShuffledCards([...tarotCards])
  }, [])

  const shuffleCards = () => {
    setIsShuffling(true)
    setShowMeaning(false)
    setSelectedCardDetails(null)
    setIsOpen(false)

    // Embaralha as cartas
    const newShuffledCards = [...tarotCards]
    for (let i = newShuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newShuffledCards[i], newShuffledCards[j]] = [newShuffledCards[j], newShuffledCards[i]]
    }

    setTimeout(() => {
      setShuffledCards(newShuffledCards)
      setIsShuffling(false)

      // Seleciona automaticamente uma carta aleatória após embaralhar
      const randomIndex = Math.floor(Math.random() * newShuffledCards.length)
      const randomCard = newShuffledCards[randomIndex]
      const reversed = Math.random() < 0.2
      setIsReversed(reversed)
      setSelectedCard(randomCard)
      setSelectedCardDetails({ card: randomCard, isReversed: reversed })
      setShowMeaning(true)

      // Abre o modal automaticamente após embaralhar
      setTimeout(() => {
        setIsOpen(true)
      }, 300)
    }, 1000)
  }

  const handleCardClick = (card: TarotCard) => {
    // Randomly determine if card is reversed (20% chance)
    const reversed = Math.random() < 0.2
    setIsReversed(reversed)
    setSelectedCard(card)

    // Mostrar significado da carta após a seleção
    setSelectedCardDetails({ card, isReversed: reversed })
    setShowMeaning(true)

    // Abrir o modal com o significado
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => setSelectedCard(null), 300)
  }

  const handleNextCard = () => {
    if (!selectedCard) return

    const currentIndex = tarotCards.findIndex((card) => card.id === selectedCard.id)
    const nextIndex = (currentIndex + 1) % tarotCards.length
    const reversed = Math.random() < 0.2

    setIsReversed(reversed)
    setSelectedCard(tarotCards[nextIndex])
    setSelectedCardDetails({ card: tarotCards[nextIndex], isReversed: reversed })
  }

  const handlePrevCard = () => {
    if (!selectedCard) return

    const currentIndex = tarotCards.findIndex((card) => card.id === selectedCard.id)
    const prevIndex = (currentIndex - 1 + tarotCards.length) % tarotCards.length
    const reversed = Math.random() < 0.2

    setIsReversed(reversed)
    setSelectedCard(tarotCards[prevIndex])
    setSelectedCardDetails({ card: tarotCards[prevIndex], isReversed: reversed })
  }

  return (
    <div className="w-full flex flex-col items-center">
      <style jsx global>{`
        .card-container {
          perspective: 1000px;
        }
        
        .card {
          transition: all 0.5s ease;
          transform-style: preserve-3d;
        }
        
        .card:hover {
          transform: translateY(-30px) rotateY(10deg);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
          z-index: 10 !important;
        }
        
        .shuffle-animation {
          animation: shuffle 1s ease-in-out;
        }
        
        @keyframes shuffle {
          0% { transform: translateX(0) rotate(0); }
          25% { transform: translateX(-50px) rotate(-5deg); }
          75% { transform: translateX(50px) rotate(5deg); }
          100% { transform: translateX(0) rotate(0); }
        }
      `}</style>

      <div className="flex flex-col items-center mb-8">
        <Button
          onClick={shuffleCards}
          disabled={isShuffling}
          className="px-6 py-2 mb-4 text-lg font-medium transition-all bg-[#FFD700]/80 hover:bg-[#FFD700] text-[#0A1F33] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        >
          <SparklesIcon className="w-5 h-5 mr-2" />
          {isShuffling ? "Embaralhando..." : "Embaralhar Cartas"}
        </Button>
      </div>

      {/* Container centralizado para as cartas */}
      <div className="w-full max-w-3xl mx-auto flex justify-center items-center">
        <div
          className={`relative h-[350px] w-full flex items-center justify-center ${isShuffling ? "shuffle-animation" : ""}`}
        >
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 card-container w-[300px] h-[300px] flex items-center justify-center">
            {shuffledCards.map((card, index) => (
              <div
                key={card.id}
                id={`tarot-card-${index}`}
                className="absolute cursor-pointer card"
                style={{
                  transform: `rotate(${(index - shuffledCards.length / 2 + 0.5) * 5}deg)`,
                  transformOrigin: "bottom center",
                  zIndex: index,
                  left: "50%",
                  marginLeft: "-70px", // Metade da largura da carta
                  bottom: "0",
                }}
                onClick={() => handleCardClick(card)}
              >
                <div className="relative w-[140px] h-[240px]">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.name}
                    fill
                    sizes="140px"
                    className="rounded-md shadow-lg border-2 border-[#FFD700]/30 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exibição do significado da carta selecionada */}
      {showMeaning && selectedCardDetails && (
        <motion.div
          className="mt-8 p-6 rounded-lg bg-gradient-to-br from-[#1A2C4D] to-[#0A1F33] border border-[#FFD700]/30 shadow-[0_0_20px_rgba(255,215,0,0.3)] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-[120px] h-[200px] flex-shrink-0">
              <Image
                src={selectedCardDetails.card.image || "/placeholder.svg"}
                alt={selectedCardDetails.card.name}
                fill
                sizes="120px"
                className={`rounded-md shadow-[0_0_15px_rgba(255,215,0,0.4)] ${selectedCardDetails.isReversed ? "rotate-180" : ""}`}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-bold text-[#FFD700]">
                {selectedCardDetails.card.name} {selectedCardDetails.isReversed ? "(Invertida)" : ""}
              </h3>
              <p className="text-white">
                {selectedCardDetails.isReversed
                  ? selectedCardDetails.card.meaning.reversed
                  : selectedCardDetails.card.meaning.upright}
              </p>
              <Button
                variant="outline"
                onClick={() => setIsOpen(true)}
                className="mt-4 border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10"
              >
                Ver em Tela Cheia
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-b from-[#1A2C4D] to-[#0A1F33] border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white">
              <span className="text-[#FFD700]">{selectedCard?.name}</span>
            </DialogTitle>
            <DialogDescription className="text-center text-gray-300">
              {isReversed ? "(Invertida)" : "(Normal)"}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 py-4">
            <motion.div
              className="relative w-[150px] h-[260px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {selectedCard && (
                <Image
                  src={selectedCard.image || "/placeholder.svg"}
                  alt={selectedCard.name}
                  fill
                  sizes="150px"
                  className={`rounded-md shadow-[0_0_20px_rgba(255,215,0,0.5)] ${isReversed ? "rotate-180" : ""}`}
                  style={{ objectFit: "contain" }}
                />
              )}
            </motion.div>

            <motion.div
              className="p-6 mt-4 rounded-md bg-[#0A1F33]/80 border border-[#FFD700]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="mb-2 text-lg font-semibold text-[#FFD700]">Significado:</h3>
              <p className="text-white">
                {selectedCard && (isReversed ? selectedCard.meaning.reversed : selectedCard.meaning.upright)}
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevCard}
              className="border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              onClick={handleClose}
              className="border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10"
            >
              Fechar
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNextCard}
              className="border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
