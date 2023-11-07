'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDialogStore } from '@/stores/dialog'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

export type RootLayoutProps = {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const dialog = useDialogStore((state) => state)

  return (
    <html lang="pt-BR">
      <body>
        {children}

        <Dialog open={dialog.open} onOpenChange={dialog.closeDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              {dialog.title && <DialogTitle>{dialog.title}</DialogTitle>}

              {dialog.description && (
                <DialogDescription>{dialog.description}</DialogDescription>
              )}
            </DialogHeader>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </body>
    </html>
  )
}
