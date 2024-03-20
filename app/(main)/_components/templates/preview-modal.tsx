"use client";

import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Eye, Monitor, Tablet } from "lucide-react";
import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PreviewModal = ({ url }: { url: string }) => {
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const devices = [
    { id: "desktop", icon: <Monitor className="w-4 h-4" />, width: "100%" },
    { id: "tablet", icon: <Tablet className="w-4 h-4" />, width: "768px" },
    { id: "mobile", icon: <BsPhone className="w-4 h-4" />, width: "420px" },
  ];

  return (
    <div>
      <Modal
        variant="full"
        openTrigger={
          <Button
            asChild
            className="px-4 h-14 shadow-xl shadow-brand/40 rounded-full w-full"
          >
            <div className="cursor-pointer">
              <span>
                <Eye className="w-4 h-4" />
              </span>
              <span className="ml-2">Live Demo</span>
            </div>
          </Button>
        }
      >
        {isDesktop && (
          <>
            <div className="flex-center-between max-w-7xl px-3 mx-auto p-4">
              <div className="opacity-0 pointer-events-none">Left Content</div>
              <Tabs defaultValue="desktop">
                <TabsList className="border ">
                  {devices.map((device) => (
                    <TabsTrigger
                      value={device.id}
                      onClick={() => setSelectedDevice(device.id)}
                      key={device.id}
                    >
                      {device.icon}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <Button
                asChild
                className="bg-transparent border border-brand text-brand hover:bg-transparent active:bg-transparent"
              >
                <a href={url} target="_blank" rel="noreferrer">
                  <span>
                    <Eye className="w-4 h-4" />
                  </span>
                  <span className="ml-2">Preview in New Window</span>
                </a>
              </Button>
            </div>
          </>
        )}
        {!isDesktop && (
          <div className="flex-center-center p-4">
            <Button
              asChild
              className="bg-transparent border border-brand text-brand hover:bg-transparent active:bg-transparent"
            >
              <a href={url} target="_blank" rel="noreferrer">
                <span>
                  <Eye className="w-4 h-4" />
                </span>
                <span className="ml-2">Preview in New Window</span>
              </a>
            </Button>
          </div>
        )}
        <div className="relative">
          <iframe
            className="min-h-screen pb-20 mx-auto bg-white dark:bg-gray-900 relative z-10 border-2"
            src={url}
            width={
              devices.find((device) => device.id === selectedDevice)?.width
            }
          />
          <div className="absolute inset-0 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:opacity-40" />
        </div>
      </Modal>
    </div>
  );
};

export default PreviewModal;
