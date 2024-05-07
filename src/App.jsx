/* eslint-disable react/no-unescaped-entities */
import "./sass/style.scss";
import OffTopic from "./components/offtopic/OffTopic";

function App() {
  return (
    <>
      <h1>An Agency Homepage</h1>
      Apply for access Data tailored to your needs. Learn more
      <div className="">
        1 Actionable insights Optimize your products, improve customer
        satisfaction and stay ahead of the competition with our product data
        analytics.
      </div>
      <div>
        2 Data-driven decisions Make data-driven decisions with our product data
        analytics. Our AI-generated reports help you unlock insights hidden in
        your product data.
      </div>
      <div>
        3 Always affordable Always affordable pricing that scales with your
        business. Get top-quality product data analytics services without hidden
        costs or unexpected fees.
      </div>
      <div>
        Be the first to test Hi, I'm Louis Graham, the founder of the company.
        Book a demo call with me to become a beta tester for our app and
        kickstart your company. Apply for access below and I’ll be in touch to
        schedule a call.
      </div>
      Apply for access
      <OffTopic/>
    </>
  );
}

export default App;
