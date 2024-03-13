'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
        <Badge variant="destructive">BETA</Badge>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/automation"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/automation'
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Automation
        </Link>
        <Link
          href="/vrf"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/vrf' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          VRF
        </Link>
        <Link
          href="/ccip"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/ccip' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          CCIP
        </Link>
      </nav>
    </div>
  )
}
