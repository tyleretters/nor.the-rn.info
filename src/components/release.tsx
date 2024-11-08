import { Release as ReleaseType } from "@tyleretters/discography"

export default function Release({ release }: { release: ReleaseType }) {
  return (
    <li
      className="font-mono"
      id={release.id}
    >
      {/* <img className="release-cover" src={release.cover_url} alt={release.title} /> */}

      <ul>
        <li>[{release.id}] {release.title}</li>
        <li></li>
        <li>{release.project}</li>
        <li>{release.released}</li>
        <li>{release.type}</li>
        <li>{release.format}</li>
        <li>{release.role}</li>
        <li>{release.label}</li>
        <li>{release.mp3}</li>
        <li>{release.mp3_url}</li>
        <li>{release.wav}</li>
        <li>{release.wav_url}</li>
        {/* <li>{release.tracks}</li> */}
        {/* <li>{release.streams}</li> */}
        <li>{release.monospaceNotes}</li>
        {/* <li>{release.notes}</li> */}
        {/* <li>{release.credits}</li> */}
        {/* <li>{release.release_slug}</li> */}
        {/* <li>{release.project_slug}</li> */}
        {/* <li>{release.cover_url}</li> */}
      </ul>

      {release.tracks.map((track, index) => {
         return (
          <div key={index}>
            [{track.number}] [{track.id}] [{track.length}] [{track.title}]
          </div>
         )
      })}

    </li>
  )
}




















