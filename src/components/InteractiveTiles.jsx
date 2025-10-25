import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function InteractiveTiles() {
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (title, content) => {
    setModalContent({ title, content });
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const cards = [
    {
      title: "Speak to Our Experts",
      description:
        "Direct access to our specialists for technical guidance, troubleshooting, or operational advice.",
      icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600" />,
      action: () =>
        handleOpenModal(
          "Speak to Our Experts",
          "Please fill in the contact form or initiate a live chat session with our technical team."
        ),
    },
    {
      title: "Request an Onsite Visit",
      description:
        "Schedule an engineer for hands-on support, preventive maintenance, or system optimization.",
      icon: <MapPinIcon className="h-10 w-10 text-green-600" />,
      action: () =>
        handleOpenModal(
          "Request an Onsite Visit",
          "Fill out the booking form to schedule an engineer visit to your site."
        ),
    },
    {
      title: "Drop Us a Message",
      description:
        "Send inquiries via online form or email for prompt, personalized responses.",
      icon: <EnvelopeIcon className="h-10 w-10 text-yellow-600" />,
      action: () =>
        handleOpenModal(
          "Drop Us a Message",
          "Submit your inquiry through our online form or email. We'll get back to you promptly."
        ),
    },
    {
      title: "Explore Our Global Presence",
      description:
        "See where our engineers and support teams are stationed worldwide for rapid, local support.",
      icon: <GlobeAltIcon className="h-10 w-10 text-purple-600" />,
      action: () => {
        window.open("https://yourcompany.com/global-map", "_blank");
      },
    },
  ];

  return (
    <>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={card.action}
            className="group cursor-pointer rounded-xl bg-white shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{modalContent.title}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700">{modalContent.content}</p>
            {/* Add your form component here if needed */}
            <div className="mt-4 text-right">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
