import React from "react";
import AccountCard from "../../components/accountCard/AccountCard";
import "./user.scss";

const accountData = [
  {
    title: "Argent Bank Checking (x8349)",
    price: "2,082.79",
    state: "Available Balance",
  },
  {
    title: "Argent Bank Checking (x8349)",
    price: "2,082.79",
    state: "Available Balance",
  },
  {
    title: "Argent Bank Checking (x8349)",
    price: "2,082.79",
    state: "Available Balance",
  },
];

export default function User() {
  return (
    <div className="main userMain bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <h2 class="sr-only">Accounts</h2>
      <section className="">
        <h2 className="sr-only">yoo</h2>
        {accountData.map((account, index) => (
          <AccountCard key={index} {...account} />
        ))}
      </section>
    </div>
  );
}
