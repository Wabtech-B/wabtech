"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import toast from "react-hot-toast";

type Data = {
  templateId: string;
  name: string;
  price: string;
  image: string;
};

interface PPButtonsProps {
  item: Data;
}

const PPButtons = ({ item }: PPButtonsProps) => {
  const currentUser = useCurrentUser();
  const createOrder = async () => {
    try {
      // Order is created on the server and the order id is returned
      const response = await fetch("/api/paypal/create-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: {
            name: item.name,
            price: item.price,
          },
        }),
      });
      const order = await response.json();
      return order.id;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onApprove = async (data: { orderID: string }, actions: any) => {
    try {
      // Order is captured on the server and the response is returned to the browser
      const response = await fetch("/api/paypal/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      });

      const orderDetails = await response.json();

      if (orderDetails.status === "COMPLETED") {
        toast.success("Thank you, your payment was successful!");
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/templates/purchases`,
          {
            userId: currentUser?.id!,
            templateId: item.templateId,
            status: "SUCCESS",
          }
        );

        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/templates/user-templates`,
          {
            userId: currentUser?.id!,
            templateId: item.templateId,
          }
        );

        window.location.assign("/dashboard");
        await axios.post("/api/emails/order", {
          orderId: orderDetails.id,
          email: currentUser?.email,
          templateName: item.name,
          templatePrice: item.price,
          templateImage: item.image,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <PayPalButtons
        createOrder={() => createOrder()}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </>
  );
};

export default PPButtons;
