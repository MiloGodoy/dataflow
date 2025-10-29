"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileSearch, User } from "lucide-react"

export function Header() {
  const loginUrl =
    "https://cliente.pid.code100.com.py/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dsigner%26state%3D3jQMUoZvBiwI4RWCQBWE09UhEff7TPCPs6pLgCOX;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fdataflow.code100.com.py%26scope%3Dopenid%2520profile%2520cpf%2520signer-api%26nonce%3D3jQMUoZvBiwI4RWCQBWE09UhEff7TPCPs6pLgCOX%26culture%3Des"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img src='/dataflow-logo.svg' alt="DataFlow Logo" className="h-35 w-35"/>
        </Link>

        {/* Desktop navigation */}
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
            onClick={() => window.open(loginUrl, "_blank")}
          >
            LOGIN
          </Button>

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

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white"
            onClick={() => window.open("https://dataflow.code100.com.py/validate", "_blank")}
          >
            <FileSearch className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white"
            onClick={() => window.open(loginUrl, "_blank")}
          >
            <User className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-[#25D366] hover:bg-[#25D366] hover:text-white"
            onClick={() =>
              window.open(
                "https://wa.me/595992460600?text=Hola,%20me%20gustaría%20obtener%20más%20información",
                "_blank",
              )
            }
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
