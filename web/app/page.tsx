'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleLinkPaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault()

    const pastedValue = event.clipboardData.getData('text')
    const matchYoutubeURL = pastedValue.match(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    )

    setInputValue(pastedValue)

    if (!matchYoutubeURL) return

    handleConvertion(pastedValue)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    handleConvertion(inputValue)
  }

  function handleConvertion(link: string) {
    setIsLoading(true)

    console.log({ link })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Youtube to MP3</h2>
      <p className="text-sm mb-4">
        Convert a YouTube link to MP3 in just a matter of seconds. With one click.
      </p>

      <form onSubmit={handleSubmit} className="flex">
        <Input
          disabled={isLoading}
          className="border rounded-l-md rounded-r-[0px]"
          placeholder="Paste your youtube URL"
          onPaste={handleLinkPaste}
          onChange={(ev) => setInputValue(ev.target.value)}
          value={inputValue}
        />

        <Button disabled={isLoading} className="rounded-r-lg rounded-l-[0px]">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Convert
        </Button>
      </form>

      <p className="text-muted-foreground text-sm mt-6">
        By using our service, you fully agree and accept our{' '}
        <Link href="/terms-of-service" className="text-emerald-500 font-medium dark:text-emerald-400">
          Terms of Service
        </Link>
        .
      </p>
    </div>
  )
}
