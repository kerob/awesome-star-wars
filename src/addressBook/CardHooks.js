import React, { useState, useEffect } from "react";

const Card = () => {
  const [initials, setInitials] = useState("LK");
  const [name, setName] = useState("Lasha Krikheli");
  const [phone, setphone] = useState("555-1234-5678");
  const [email, setemail] = useState("email@him.com");
  const [favorite, setfavorite] = useState(false);

  useEffect(() => {
    console.log(`Value has changed to: ${favorite}`);
    //Useful area to implement local storage saves, make API calls, have DOM interactions etc.
  });

  const activeClass = favorite ? "active" : "";

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>
        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => {
            setfavorite(!favorite);
          }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : "n/a"}
          </li>
          <li>
            <span>Email</span>
            {email ? email : "n/a"}
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Card;
