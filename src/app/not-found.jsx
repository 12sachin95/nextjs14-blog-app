import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        Sorry, the page your are looking for does not exist. Please go back to
        {"  "}
        <Link href="/" style={{ textDecoration: "underline" }}>
          homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
