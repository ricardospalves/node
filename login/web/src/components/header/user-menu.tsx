import { LogOutIcon, User2Icon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getUserById } from '@/services/api/getUserById.service'
import { getInitialLettersName } from '@/utils/get-initial-letters-name'
import Link from 'next/link'
import { getUserId } from '@/utils/get-user-id'

export const UserMenu = async () => {
  const userId = getUserId()

  if (!userId) {
    return null
  }

  const response = await getUserById(userId)
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

      <DropdownMenuContent align="end">
        <DropdownMenuItem className="p-0">
          <Link href="/perfil" className="flex items-center p-2 w-full">
            <User2Icon className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-0">
          <Link href="/sair" className="flex items-center p-2 w-full">
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
