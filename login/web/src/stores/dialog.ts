'use client'

import { create } from 'zustand'

type OpenDialogOptions = {
  title?: string
  description?: string
}

type DialogState = {
  open: boolean
  title: string | undefined
  description: string | undefined
  openDialog: (options?: OpenDialogOptions) => void
  closeDialog: () => void
}

export const useDialogStore = create<DialogState>((set) => ({
  open: false,
  title: undefined,
  description: undefined,
  openDialog: (options?: OpenDialogOptions) => {
    return set({
      open: true,
      title: options?.title,
      description: options?.description,
    })
  },
  closeDialog: () => {
    return set({
      open: false,
      title: '',
      description: '',
    })
  },
}))
