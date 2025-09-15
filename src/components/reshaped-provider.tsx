import { Reshaped } from 'reshaped'
import { type ReactNode } from 'react'

interface ReshapedProviderProps {
  children: ReactNode
}

export function ReshapedProvider({ children }: ReshapedProviderProps) {
  return (
    <Reshaped
      theme="reshaped"
    >
      {children}
    </Reshaped>
  )
}
