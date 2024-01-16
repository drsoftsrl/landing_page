import SectionTitle from "@/components/common/sectionTitle";
import SectionLayout from "@/components/layouts/sectionLayout";
import ContainerLayout from "@/components/layouts/containerLayout";
import { useState } from "react";
import { toast } from "react-toastify";
import { SUPPORT_URL } from "@/utils/constants";
import { RequestHandler } from "@/utils/functions";

export default function Support({ title, description }) {
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = () => {
    const notifierOptions = {
      position: toast.POSITION.BOTTOM_CENTER
    };

    RequestHandler(SUPPORT_URL, {
      method: "POST",
      body: JSON.stringify({ email, message })
    })
      .then(({ data, error }) => {
        if (error) {
          toast.error(error, notifierOptions);
          return;
        }

        toast.success("Message sent!", notifierOptions);
      })
      .catch((e) => {
        toast.error("Sending the message failed. Please try again!", notifierOptions);
      });
  };

  return (
    <SectionLayout extraClass="bg-gradient2 text-neutral-content">
      <SectionTitle title={title} subtitle={description} />

      <ContainerLayout>
        <form>
          <div className="flex justify-center items-center flex-col gap-10">
            <input
              className="input input-bordered input-primary w-full max-w-2xl text-base-content"
              type="email"
              name="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="textarea textarea-primary textarea-2xl w-full max-w-2xl text-base-content"
              name="text"
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
            />

            <button disabled={!email || !message} className="btn btn-secondary" onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </form>
      </ContainerLayout>
    </SectionLayout>
  );
}
