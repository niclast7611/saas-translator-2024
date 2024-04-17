"use client";

import { useEffect } from "react";

function SubscriptionProvider() {
  useEffect(() => {
    // Fetch the user's subscriptions from the server
    // and store them in the context
  }, []);

  return <div>SubscriptionProvider</div>;
}

export default SubscriptionProvider;
