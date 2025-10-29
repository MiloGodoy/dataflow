"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/Sheet"


export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    window.location.href = loginUrl
  }

  const loginUrl =
    "https://cliente.pid.code100.com.py/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dsigner%26state%3D3jQMUoZvBiwI4RWCQBWE09UhEff7TPCPs6pLgCOX;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fdataflow.code100.com.py%26scope%3Dopenid%2520profile%2520cpf%2520signer-api%26nonce%3D3jQMUoZvBiwI4RWCQBWE09UhEff7TPCPs6pLgCOX%26culture%3Des"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img src='/dataflow-logo.svg' alt="DataFlow Logo" className="h-35 w-35"/>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-[#17A2B8] text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white bg-transparent"
            onClick={() => window.open("https://dataflow.code100.com.py/validate", "_blank")}
          >
            Validar Documento
          </Button>

          <Button
            className="bg-[#17A2B8] hover:bg-[#138496] text-white"
            onClick={handleClick}
          >
            LOGIN
          </Button>

          <div className="pl-10">
            <Button
              variant="outline"
              className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://wa.me/595992460600?text=Hola,%20me%20gustaría%20obtener%20más%20información",
                  "_blank",
                )
              }
            >
              <MessageCircle className="h-5 w-5" />
              <span>Comunicate con nosotros</span>
            </Button>
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menú</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              <Button
                variant="outline"
                className="border-[#17A2B8] text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white bg-transparent w-full justify-start"
                onClick={() => {
                  window.open("https://dataflow.code100.com.py/validate", "_blank")
                  setIsOpen(false)
                }}
              >
                Validar Documento
              </Button>

              <Button
                variant="outline"
                className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent w-full justify-start gap-2"
                onClick={() => {
                  window.open(
                    "https://wa.me/595992460600?text=Hola,%20me%20gustaría%20obtener%20más%20información",
                    "_blank",
                  )
                  setIsOpen(false)
                }}
              >
                <MessageCircle className="h-5 w-5" />
                Comunicate con nosotros
              </Button>

              <Button
                className="bg-[#17A2B8] hover:bg-[#138496] text-white w-full"
                onClick={() => {
                  handleClick()
                  setIsOpen(false)
                }}
              >
                LOGIN
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
