import React from "react";
import "./accountCard.scss";

const AccountCard = ({ price, title, state }) => {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{title}</h3>
        <p class="account-amount">${price}</p>
        <p class="account-amount-description">{state}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default AccountCard;
