import { ArrowCircleUpIcon } from "@heroicons/react/outline";

function Footer(props) {
  return (
    <footer className="flex items-center justify-between px-5 h-20 bg-white flex-shrink-0 mt-auto">
      <span className="text-gray-700 text-opacity-50">
        Copyright © Smartinspection {new Date().getFullYear()}
      </span>
      <a
        href="!#"
        onClick={props.onScrollTop}
        className="text-cyan-500 hover:text-cyan-700"
      >
      <ArrowCircleUpIcon className="w-8 h-8 "/>
      </a>
    </footer>
  );
}

export default Footer;
