import "./Header.css";

export default function Header({ handleFilter }) {
  return (
    <div className="header">
      <h1>Big Horny Beasts</h1>
      <form>
        <select className="select" name="hornFilter" onChange={handleFilter}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </div>
  );
}
