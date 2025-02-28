export const msalConfig = {
  auth: {
    clientId: "IHRE_CLIENT_ID",
    authority: "https://login.microsoftonline.com/IHRE_TENANT_ID",
    redirectUri: "http://localhost:5173"
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
  }
};

export const loginRequest = {
  scopes: ["User.Read", "Chat.Read"]
};
