import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">

          <p className="eyebrow hero-eyebrow">
            Technology · Infrastructure · Cloud
          </p>

          <h1 className="hero-title">
            Infrastructure
            <br />
            for <em>what&apos;s next.</em>
          </h1>

          <p className="hero-description">
            HyperNod is a technology startup building
            modern cloud infrastructure and digital
            solutions for businesses ready to move
            forward.
          </p>

          <div className="hero-actions">
            <Link
              href="/solutions"
              className="btn btn-primary"
            >
              Explore what we build
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/about"
              className="btn btn-secondary"
            >
              About HyperNod
            </Link>
          </div>

          <p className="hero-note">
            Built from Nepal · Building for the world
          </p>
        </div>

        <div
          className="hero-visual"
          aria-hidden="true"
        >
          <div className="hero-visual-grid" />

          <div className="hero-node hero-node-one" />
          <div className="hero-node hero-node-two" />
          <div className="hero-node hero-node-three" />

          <p className="hero-visual-label">
            Cloud infrastructure, technology,
            and systems designed to help ambitious
            businesses build and scale.
          </p>
        </div>
      </div>
    </section>
  );
}