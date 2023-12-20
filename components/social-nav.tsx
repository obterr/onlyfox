import { SOCIAL_LINKS } from "../utils/links.ts";
import {
  DiscordIcon,
  RedditIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons.tsx";

export default function SocialNavbar() {
  return (
    <nav className="flex flex-col text-fuchsia-200">
      <a
        className="hover:text-fuchsia-300"
        href={SOCIAL_LINKS.Twitch}
      >
        <TwitchIcon />
      </a>
      <a
        className="hover:text-fuchsia-300"
        href={SOCIAL_LINKS.Twitter}
      >
        <TwitterIcon />
      </a>
      {SOCIAL_LINKS.Youtube.map((link, i) => (
        <a key={i} className="hover:text-fuchsia-300" href={link}>
          <YoutubeIcon />
        </a>
      ))}
      <a className="hover:text-fuchsia-300" href={SOCIAL_LINKS.Reddit}>
        <RedditIcon />
      </a>
      <a className="hover:text-fuchsia-300" href={SOCIAL_LINKS.Discord}>
        <DiscordIcon />
      </a>
    </nav>
  );
}
