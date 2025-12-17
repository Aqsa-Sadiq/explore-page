// TravelHero.jsx
import "./TravelHero.css";
import mapVector from '../../assets/mapvector.jpg';






export default function TravelHero() {
  return (
    <section className="travel-hero">
      <div className="text-area">
        <h1>Where Do You<br />Want To Go</h1>
        <p>Let us get you there safely &amp; quickly.</p>
      </div>

      <div className="image-area">
        <img src={mapVector} alt="Travel Map" />
      </div>
    </section>
  );
}
