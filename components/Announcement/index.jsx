import React, { useState } from "react";
import { AnnouncementIcon, ExternalLinkIcon, CloseIcon } from "../icons";

const AnnouncementButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setHasUnread(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExternalLink = () => {
    window.open("https://treecharts.netlify.app/", "_blank");
  };

  return (
    <>
      {/* Floating Announcement Button */}
      {!isModalOpen && (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 mb-16 md:mb-0">
          <button
            onClick={handleButtonClick}
            className="relative bg-[#007BE5] hover:bg-[#0066CC] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <AnnouncementIcon givenClass="h-8 w-8" />

            {/* Unread indicator */}
            {hasUnread && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse">
                <div className="w-full h-full bg-primary rounded-full animate-ping"></div>
              </div>
            )}
          </button>
        </div>
      )}

      {/* Modal/Banner */}
      {isModalOpen && (
        <div className="fixed inset-0 z-60 flex items-end md:items-center md:justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full md:w-auto md:max-w-md mb-20 md:mb-0 rounded-sm">
            {/* Mobile: Full width banner above bottom toolbar */}
            <div className="md:hidden w-full bg-[#007BE5] text-white p-4 border-t-4 border-primary mx-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-xs font-extrabold mb-1 smallercase">
                    📢 new npm package is now live!
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={handleExternalLink}
                      className="text-xl font-bold hover:underline flex items-center gap-1 blowbrush mt-1"
                    >
                      TreeCharts&nbsp;
                      <ExternalLinkIcon givenClass="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-200 opacity-90 -mt-2">
                    Highly customizable tree visualization library
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="ml-2 p-1 hover:bg-[#0066CC] rounded"
                >
                  <CloseIcon givenClass="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Desktop: Small banner popup */}
            <div className="hidden rounded-sm md:block bg-[#007BE5] text-white p-4 shadow-xl border-l-4 border-primary mx-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">
                    New npm package is now live!
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={handleExternalLink}
                      className="text-lg font-bold hover:underline flex items-center gap-1 hover:text-gray-100 transition-colors"
                    >
                      TreeCharts
                      <ExternalLinkIcon givenClass="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm opacity-90">
                    Highly customizable tree visualization library
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="ml-3 p-1 hover:bg-[#0066CC] rounded transition-colors"
                >
                  <CloseIcon givenClass="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementButton;
