export default function Footer() {

  return (
    <footer className="w-full bg-black mt-20">
      <div className="mx-auto px-4 max-w-screen-xl flex justify-between">
        <h1 className="text-white sm:text-2xl text-sm py-24">
          I'm always up for adventure and international opportunities.
          <br />
          Feel free to say hello via{" "}
          <a
            className="text-white font-bold underline"
            href="https://mail.google.com/mail/?view=cm&to=cocokcocok33@gmail.com"
            type="email"
          >
            email
          </a>
          <div className="flex mt-5">
            <a
              href="https://github.com/jocerdikiawann"
              className="text-white mr-10"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/nur-kholid-fathurohman-0a5396182/"
              className="text-white mr-10"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/kholiddd.f/"
              className="text-white mr-10"
            >
              Instagram
            </a>
          </div>
        </h1>
      </div>
    </footer>
  );
}
