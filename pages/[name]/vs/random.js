import { getRandomName } from "../../../data";

export default function Random() {
  return null;
}

export async function getServerSideProps({ req }) {
  console.log(req);
  return {
    redirect: {
      permanent: false,
      destination: req.headers.referer + "/vs/" + getRandomName(),
    },
    props: {},
  };
}
