import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MaterialPurchase } from "../material-purchase/material-purchase.component";
import { Navbar } from "../ui";

export const DashBoard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");

      // If no token is present, redirect to the login page
      if (!token) {
        router.push("/");
      } else {
        setIsAuthenticated(true); // Allow access if the token exists
      }
    }
  }, [router]);

  // Render nothing or a loading spinner while checking authentication
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="">
      <Navbar />
      <MaterialPurchase />
    </div>
  );
};
