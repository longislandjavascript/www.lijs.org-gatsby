import {
  FaSlack,
  FaMeetup,
  FaGithub,
  FaRegEnvelope,
  FaQuestionCircle,
  FaUsers,
  FaTwitch,
  FaScroll,
  FaDesktop,
  FaCalendarDay,
  FaHistory,
} from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { DDDIcon } from "../components/ddd-icon";

export const links = [
  ["Next Event", "/", FaCalendarDay],
  ["Watch Now", "/watch", FaDesktop],
  ["Past Events", "/past-events", FaHistory],
  ["About Us", "/about", FaUsers],
  ["Contact Us", "/contact", FaRegEnvelope],
  ["FAQ", "/faq", FaQuestionCircle],
  ["Code of Conduct", "/code-of-conduct", FaScroll],

  ["Meetup", "https://www.meetup.com/long-island-javascript-group/", FaMeetup],
  [
    "Slack",
    "https://lijs-group.slack.com/join/shared_invite/zt-dy33kew4-bdy01_BOG8E7hh6NQTNaUA#/",
    FaSlack,
  ],

  ["GitHub", "https://github.com/lijs-meetup", FaGithub],
  ["Twitch", "https://www.twitch.tv/longislandjavascript", FaTwitch],
  ["Developer Deep Dives", "https://www.developerdeepdives.com", DDDIcon],
] as const;
