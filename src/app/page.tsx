import WovenHero from "@/components/WovenHero";

// The homepage: the woven-light animation fills the whole viewport as a fixed
// background, with the persistent (transparent) masthead and footer floating on
// top of it. Pinned behind the content with a negative z-index.
export default function Home() {
  return (
    <div className="fixed inset-0 -z-10">
      <WovenHero />
    </div>
  );
}
