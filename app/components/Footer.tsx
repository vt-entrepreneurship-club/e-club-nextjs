import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-primary py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold text-base-100">Follow Us:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/eclub.vt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaInstagram className="text-4xl text-base-100" />
            </a>
            <a
              href="https://www.linkedin.com/company/vteclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaLinkedin className="text-4xl text-base-100" />
            </a>
          </div>
        </div>
        <div className="mt-10"></div>
        <div>
          <a
            href="https://discord.gg/sDdmV877xE"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-purple-500 p-4 font-semibold text-white transition duration-300 hover:bg-purple-600"
          >
            <FaDiscord className="mr-2 inline-block text-xl" />
            Join Our Discord
          </a>
        </div>
        <div className="mb-10"></div>
      </div>
    </div>
  );
}
