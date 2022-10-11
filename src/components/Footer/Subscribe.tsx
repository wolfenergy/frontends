import { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "@/components/Button/Button";
// import { IntrinsicAttributes } from '@types/react-mailchimp-subscribe'

const url =
  "https://gmail.us14.list-manage.com/subscribe/post?u=3b1d822eb27b2fa64d82d430b&id=0b4603244e";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const medias = [
    {
      name: "Twitter",
      imgSrc: "/imgs/footer/twitter.png",
      href: "https://twitter.com/Scroll_ZKP",
    },
    {
      name: "Discord",
      imgSrc: "/imgs/footer/discord.png",
      href: "https://discord.gg/s84eJSdFhn",
    },
    {
      name: "Github",
      imgSrc: "/imgs/footer/github.png",
      href: "https://github.com/scroll-tech",
    },
  ];

  const renderMedias = () =>
    medias.map((media) => (
      <a
        className="flex mr-[36px] items-center text-body-title"
        href={media.href}
        key={media.name}
      >
        <img src={media.imgSrc} className="w-[20px] mr-[8px]" />
        {media.name}
      </a>
    ));
  return (
    <>
      <div className="md:(min-w-416px) relative">
        <p className="text-md mb-[14px] font-display">Follow</p>
        <div className="flex  my-[20px]">{renderMedias()}</div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }: any) => (
            <div>
              <div className="flex flex-col mb-[20px] items-center rounded overflow-hidden md:flex-row">
                <input
                  className="w-full flex-shrink-0 rounded border h-[50px] text-base outline-none mb-[12px] pl-[24px] placeholder:text-charcoal-50  md:w-[254px] md:rounded-none md:border-transparent md:mb-0"
                  type="email"
                  placeholder="Enter email address"
                  onChange={(event: any) => setEmail(event.target.value)}
                />
                <Button
                  fullWidth
                  rounded={false}
                  onClick={() => subscribe({ EMAIL: email })}
                >
                  Subscribe to Newsletter
                </Button>
              </div>

              {status === "error" && (
                <div className="text-[18px] leading-21px text-red  max-w-[400px] font-medium absolute">
                  {message}
                </div>
              )}
              {status === "success" && (
                <div className="text-base text-body-title  leading-[21px] max-w-[400px] font-medium absolute">
                  Thank you for subscribing!
                </div>
              )}
            </div>
          )}
        />
      </div>
    </>
  );
};

export default Subscribe;
