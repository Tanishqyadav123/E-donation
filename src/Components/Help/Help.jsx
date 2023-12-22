import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./Help.css";
import { AiFillHeart } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import AmtButton from "./AmtButton";
let Total = 0;
function Help() {
  const [amount, setAmount] = useState("");
  const [sumAmount, setSumAmount] = useState("");
  const [time, setTime] = useState("");
  const handleClick = (e) => {
    //  setAmount()
    setSumAmount((prev) => +prev + Number(e.target.value));
  };

  const donateNow = () => {
    if (sumAmount === ""){
       alert("Please Fill the Amount...")
    }
   else {
    alert(
      `Thank you for donating ${sumAmount} ${
        time == "Once" ? "for Once" : "on Monthly basis"
      }`
    );
   }
    setSumAmount("");
  };

  const handleTime = (e) => {
     setTime(e.target.value)
  };

  return (
    <div className="Help">
      <div className="Help-section">
        <Navbar />
        <div className="help-heading">
          <h1>Help Us...</h1>
        </div>
      </div>

      <div className="help-content">
        <div className="sidebox">
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ width: "30vw", height: "60vh" }}
          >
            <Card.Section>
              <Image
                src="https://themewagon.github.io/welfare/images/image_2.jpg"
                height={240}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="lg" mb="sm">
              <Text fw={500}>You Can Make A Difference Right Now</Text>
              <Badge color="pink" variant="light">
               help!!!
              </Badge>
            </Group>

            <Text size="md" c="dimmed">
             We responds to 300 humanitarian emergencies in 90 countries every year.Your gift of support will enable us to reach children whereever and whenever they need help most. 
            </Text>

          </Card>
        </div>
        <div className="payment-form">
          {/* Payment form starts here :- */}
          <div className="heading-payment">
            <RiSecurePaymentLine
              style={{
                color: "darkgreen",
                marginTop: "3vh",
                fontSize: "1.7rem",
              }}
            />{" "}
            <h3> Secure Donation</h3>
          </div>

          <div className="payment-buttons">
            <button
              className="btn btn-primary "
              value="Once"
              onClick={handleTime}
            >
              Give Once
            </button>
            <button
             className="btn"
              value="Monthly"
              style={{
                backgroundColor: "white",
                color: "black",
                boxShadow:
                  "rgba(50, 50, 93, 0.55) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            onClick={handleTime} 
            >
             
              <AiFillHeart style={{ color: "red" }} />
              Monthly
            </button>
          </div>
          <div className="amount-button">
            <div className="firstAmt">
              <button
                className="btn btn-success  "
                value="700"
                onClick={handleClick}
              >
                $700
              </button>
              <button
                className="btn btn-success  "
                value="500"
                onClick={handleClick}
              >
                $500
              </button>
              <button
                className="btn btn-success  "
                value="400"
                onClick={handleClick}
              >
                $400
              </button>
            </div>
            <div className="secondAmt">
              <button
                className="btn btn-success  "
                value="300"
                onClick={handleClick}
              >
                $300
              </button>
              <button
                className="btn btn-success  "
                value="200"
                onClick={handleClick}
              >
                $200
              </button>
              <button
                className="btn btn-success  "
                value="100"
                onClick={handleClick}
              >
                $100
              </button>
            </div>

            <div className="customDonations">
              <input
                type="number"
                name="custom"
                id="custom"
                placeholder="Custom Amount in $"
                value={sumAmount}
                readOnly
                onChange={() => setAmount(e.target.value)}
              />
            </div>
          </div>

          <span className="tagline">
            Designate to Children who need your help
          </span>
          <Button className="my-3" onClick={donateNow}>
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Help;
