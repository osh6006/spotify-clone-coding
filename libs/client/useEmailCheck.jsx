import { useState } from "react";

export default function useEmailCheck(url) {
  const [state, setState] = useState({
    emailData: undefined,
    emailError: undefined,
  });
  function mutation(data) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json().catch(() => {}))
      .then(emailData => setState(prev => ({ ...prev, emailData })))
      .catch(emailError => setState(prev => ({ ...prev, emailError })));
  }
  return [mutation, { ...state }];
}
