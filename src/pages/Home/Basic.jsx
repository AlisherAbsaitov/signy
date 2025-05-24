import Comfort from "./Comfort";
import Documents from "./Documents";
import Facilities from "./Facilities";
import Friends from "./Friends";
import Hero from "./Hero";
import Interesting from "./Interesting";
import Live from "./Live";
import Packages from "./Packages";
import Question from "./Question";

// Umar: home page'ni qilib bo'ldim
export default function Home() {
  return (
    <>
      <Hero />
      <Facilities />
      <Comfort />
      <Packages />
      <Documents />
      <Friends />
      <Interesting />
      <Live />
      <Question />
    </>
  )
}
