import { useEffect, createRef } from "react";

interface Props {
  handleClickOutside: () => void;
}

interface ResultProps {
  nodeRef: React.RefObject<HTMLDivElement>;
}

const useClickOutside = ({ handleClickOutside }: Props): ResultProps => {
  const nodeRef = createRef<HTMLDivElement>();

  useEffect(() => {
    function handleMouseClick(this: Document, event: MouseEvent): void {
      if (!nodeRef.current?.contains(event.target as Node)) {
        handleClickOutside();
      }
    }
    document.addEventListener("mousedown", handleMouseClick);

    return () => {
      document.removeEventListener("mousedown", handleMouseClick);
    };
  }, [nodeRef, handleClickOutside]);

  return { nodeRef };
};

export default useClickOutside;
