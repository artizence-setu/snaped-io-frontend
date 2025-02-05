"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Avatar {
  _id: string
  type: string
  video_cover: string
  base_video: string
  lang: string[]
}

interface AvatarSelectionProps {
  selectedAvatar: string
  setSelectedAvatar: (avatarId: string) => void
}

const AVATARS_PER_PAGE = 8

export default function AvatarSelection({ selectedAvatar, setSelectedAvatar }: AvatarSelectionProps) {
  const [avatars, setAvatars] = useState<Avatar[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [visibleAvatars, setVisibleAvatars] = useState<Avatar[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch("/api/avatars")
        const data = await response.json()
        setAvatars(data.avatars)
        setVisibleAvatars(data.avatars.slice(0, AVATARS_PER_PAGE))
      } catch (error) {
        console.error("Error fetching avatars:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvatars()
  }, [])

  const loadMoreAvatars = () => {
    const nextPage = page + 1
    const startIndex = (nextPage - 1) * AVATARS_PER_PAGE
    const endIndex = startIndex + AVATARS_PER_PAGE
    setVisibleAvatars([...visibleAvatars, ...avatars.slice(startIndex, endIndex)])
    setPage(nextPage)
  }

  if (isLoading) {
    return <div className="text-center">Loading avatars...</div>
  }

  return (
    <div className="space-y-4">
      <h1>Select Avatar</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleAvatars.map((avatar) => (
          <Card
            key={avatar._id}
            className={`cursor-pointer transition-all ${selectedAvatar === avatar._id ? "ring-2 ring-primary opacity-65" : ""}`}
            onClick={() => setSelectedAvatar(avatar._id)}
          >
            <CardContent className="p-2">
              <div className="relative aspect-video mb-2">
                <Image
                  src={avatar.video_cover || "/placeholder.svg"}
                  alt={`Avatar ${avatar._id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-center text-sm font-medium truncate">Avatar {avatar._id.slice(-4)}</p>
              <p className="text-center text-xs text-muted-foreground">{avatar.lang.join(", ")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {visibleAvatars.length < avatars.length && (
        <div className="text-center">
          <Button onClick={loadMoreAvatars} variant="outline">
            Show More
          </Button>
        </div>
      )}
    </div>
  )
}

