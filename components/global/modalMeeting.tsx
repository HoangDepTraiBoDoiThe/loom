import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  title: string;
  description?: string;
  buttonIcon?: string;
  buttonText?: string;
  image?: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  handleClick?: () => void;
};

const ModalMeeting = (props: Props) => {
  const {
    title,
    description,
    buttonIcon,
    buttonText,
    image,
    className,
    isOpen,
    handleClick,
    onClose,
  } = props;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-1 border-0 flex flex-col gap-6 border-none px-6 py-9 text-white max-w-[520px]">
        <div className="flex flex-col gap-6">
          {image && (
            <Image
              className="flex justify-center"
              src={image}
              width={72}
              height={72}
              alt="image"
            />
          )}
          <h1
            className={cn(
              "text-3xl text-center font-bold leading-[42px]",
              className
            )}
          >
            {title}
          </h1>
          <Button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonText || "Schedule meeting"}
            {buttonIcon && (
              <div className="flex justify-center">
                <Image
                  src={buttonIcon}
                  width={13}
                  height={13}
                  alt="button-icon"
                  className="flex justify-center"
                />
              </div>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalMeeting;
