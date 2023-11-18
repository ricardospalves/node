import { LogOutIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getUserById } from '@/services/api/getUserById.service'
import { cookies } from 'next/headers'
import { decode } from 'jsonwebtoken'
import { getInitialLettersName } from '@/utils/get-initial-letters-name'
import Link from 'next/link'

type JwtPayload = {
  id: string
}

export const UserMenu = async () => {
  const tokenCookie = cookies().get('token')!
  const jwtToken = decode(tokenCookie.value) as JwtPayload
  const response = await getUserById(jwtToken.id)
  const { name } = response.data

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="shrink-0" asChild>
        <button
          type="button"
          className="block w-11 h-11 p-0.5 rounded-full transition-colors hover:bg-muted-foreground focus-visible:bg-muted-foreground"
        >
          <Avatar>
            <AvatarFallback>{getInitialLettersName(name)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem className="p-0">
          <Link href="/sair" className="flex items-center p-1 w-full">
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
