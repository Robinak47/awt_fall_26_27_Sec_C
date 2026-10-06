import type { IMusicPlayer } from "./IMusicPlayer";

export class MusicPlayer implements IMusicPlayer {
  play(): void {
    console.log("music is Playing");
  }

  pause(): void {
    console.log("Music Paused");
  }

  next(): void {
    console.log("Next music");
  }

  prev(): void {
    console.log("Prev music");
  }
}
