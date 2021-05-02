import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Pricing Plan",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: 50,
      msg1: "5GB Storage Space",
      msg2: "20GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "100 Email Account",
      msg5: "10 Free Domain Names",
    },
    {
      id: 2,
      heading: "Standard",
      price: 80,
      msg1: "5GB Storage Space",
      msg2: "20GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "100 Email Account",
      msg5: "10 Free Domain Names",
    },
    {
      id: 3,
      heading: "Premium",
      price: 160,
      msg1: "5GB Storage Space",
      msg2: "20GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "100 Email Account",
      msg5: "10 Free Domain Names",
    },
  ]);
  return (
    <div id="blogId" className="prices">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">My Blog</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">Blog Header</div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eligendi et asperiores quaerat, consequatur dignissimos fugiat doloremque vero adipisci assumenda.</p>
                </div>
                
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
