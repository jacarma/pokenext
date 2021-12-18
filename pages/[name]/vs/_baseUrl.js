const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : "https://pokenext-navy.vercel.app/";

export default function () {
  return null;
}
