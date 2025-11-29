function Card({ title, date, time, location, dressCode }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <p>Dress Code: {dressCode}</p>
    </div>
  );
}

export default Card;