import type { Artist } from "../../types/types.ts"
import styles from "./ArtistCard.module.scss"

interface ArtistCardProps {
    data: Artist
}

export default function ArtistCard({ data }: ArtistCardProps) {
    return (
        <div className={styles.artistCard}>
            <div>
                <p>{data.name}</p>
                <p>{data.mbid}</p>
                <p
                    dangerouslySetInnerHTML={{ __html: data.bio }}
                    className={styles.artistCardBio}
                />
            </div>
            <div>
                {data.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
        </div>
    )
}
