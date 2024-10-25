import Link from 'next/link'
import { Mail } from 'lucide-react'
import MaxWidthWrapper from '../Max-width-wrapper'
import Image from 'next/image'

export default function Footer() {
  return (
    <MaxWidthWrapper>

    <footer className="bg-black text-gray-300 w-full p-12 rounded-xl shadow-xl mb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded p-1 mr-2">
              <Image src='/assets/svg/zommed logo.svg' alt='logo' width={20} height={20}/>
              </div>
              <span className="text-xl font-bold">ThumbForgeAi</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:support@imagefx.art" className="hover:text-white transition-colors">
                support@thumbeForgeAi.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/try-free" className="hover:text-white transition-colors">Try Free</Link></li>
              <li><Link href="/image-to-prompt" className="hover:text-white transition-colors">Image To Prompt</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/musicfx" className="hover:text-white transition-colors">Quillstash</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of services</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy;2024 ThumbForgeAi. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </MaxWidthWrapper>

  )
}