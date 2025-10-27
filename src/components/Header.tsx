'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img src='/dataflow-logo.svg' alt="DataFlow Logo" className="h-40 w-40"/>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-[#17A2B8] text-[#17A2B8] hover:bg-[#17A2B8] hover:text-white bg-transparent"
            onClick={() => window.open("https://dataflow.code100.com.py/validate", "_blank")}
          >
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            Validar Documento
          </Button>
          <Button 
            className="bg-[#17A2B8] hover:bg-[#138496] text-white"
            onClick={() => window.open("https://cliente.pid.code100.com.py/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dsigner%26state%3D3jQMUoZvBiwI4RWCQBWE09UhEff7TPCPs6pLgCOX;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fdataflow.code100.com.py%26scope%3Dopenid%2520profile%2520cpf%2520signer-api%26nonce%3D3jQMUoZvBiwI4RWCQBWE09UhEff7TPCPs6pLgCOX%26culture%3Des", "_blank")}
          >LOGIN</Button>
        </div>
      </div>
    </header>
  )
}
