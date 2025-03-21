import React from "react";
import "./accountCard.scss";

const AccountCard = ({ price, title, state }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${price}</p>
        <p className="account-amount-description">{state}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default AccountCard;
