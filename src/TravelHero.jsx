// TravelHero.jsx
import "./TravelHero.css";
import planeImg from "./assets/mapvector.jpg";



// <-- replace with your image path

export default function TravelHero() {
  return (
    <section className="travel-hero">
      <div className="text-area">
        <h1>Where Do You<br />Want To Go</h1>
        <p>Let us get you there safely &amp; quickly.</p>
      </div>

      <div className="image-area">
        <img src={planeImg} alt="Travel Map" />
      </div>
    </section>
  );
}
