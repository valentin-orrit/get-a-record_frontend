import type { Artist } from "../types/types.ts"

interface ArtistCardProps {
    data: Artist
}

export default function ArtistCard({ data }: ArtistCardProps) {
    return (
        <div className="artist-card">
            <div className="artist-card-text">
                <p>{data.name}</p>
                <p>{data.mbid}</p>
                <p>{data.bio}</p>
            </div>
            <div className="artist-card-tags">
                {data.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
        </div>
    )
}
