function Form() {
  return (
    <div className="form">
      <h2>RSVP</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Number of Guests:</label>
        <input type="number" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;