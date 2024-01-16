import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import Link from "next/link";
import { SEO_PAGE_PRIVACY_POLICY } from "@/projectSettings/seo";
import { SITE_NAME } from "@/projectSettings/website";
import Cta from "@/components/cta/cta";

const PagePrivacyPolicy = () => {
  return (
    <BaseLayout seo={SEO_PAGE_PRIVACY_POLICY}>
      <PageTitle title="Privacy Policy" subTitle={SITE_NAME} />

      <SectionLayout>
        <TextLayout>
          <p>
            This privacy policy has been compiled to better serve those who are concerned with how their 'Personally
            Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information
            security, is information that can be used on its own or with other information to identify, contact, or
            locate a single person, or to identify an individual in context. Please read our privacy policy carefully to
            get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable
            Information in accordance with our website.
          </p>

          <p>
            <strong>
              What personal information do we collect from the people that visit our blog, website or app?
            </strong>
          </p>

          <p>
            When ordering or registering on our site, as appropriate, you may be asked to enter your email address or
            other details to help you with your experience.
          </p>

          <p>
            <strong>When do we collect information?</strong>
          </p>

          <p>
            We collect information from you when you register on our site, place an order, subscribe to a newsletter,
            Use Live Chat, Open a Support Ticket or enter information on our site.
          </p>

          <p>
            <strong>How do we use your information? </strong>
          </p>
          <p>
            {" "}
            We may use the information we collect from you when you register, make a purchase, sign up for our
            newsletter, respond to a survey or marketing communication, surf the website, or use certain other site
            features in the following ways:
          </p>
          <p>
            <strong>•</strong> To personalize your experience and to allow us to deliver the type of content and product
            offerings in which you are most interested.
          </p>
          <p>
            <strong>•</strong> To improve our website in order to better serve you.
          </p>
          <p>
            <strong>•</strong> To allow us to better service you in responding to your customer service requests.
          </p>
          <p>
            <strong>•</strong> To administer a contest, promotion, survey or other site feature.
          </p>
          <p>
            <strong>•</strong> To quickly process your transactions.
          </p>
          <p>
            <strong>•</strong> To follow up with them after correspondence (live chat, email or phone inquiries)
          </p>

          <p>
            <strong>How do we protect your information?</strong>
          </p>
          <p>
            Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your
            visit to our site as safe as possible.
          </p>
          <p>We use regular Malware Scanning.</p>
          <p>
            Your personal information is contained behind secured networks and is only accessible by a limited number of
            persons who have special access rights to such systems, and are required to keep the information
            confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer
            (SSL) technology.
          </p>
          <p>
            We implement a variety of security measures when a user places an order enters, submits, or accesses their
            information to maintain the safety of your personal information.
          </p>
          <p>
            All transactions are processed through a gateway provider and are not stored or processed on our servers.
          </p>

          <p>
            <strong>Do we use 'cookies'?</strong>
          </p>
          <p>
            Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive
            through your Web browser (if you allow) that enables the site's or service provider's systems to recognize
            your browser and capture and remember certain information. For instance, we use cookies to help us remember
            and process the items in your shopping cart. They are also used to help us understand your preferences based
            on previous or current site activity, which enables us to provide you with improved services. We also use
            cookies to help us compile aggregate data about site traffic and site interaction so that we can offer
            better site experiences and tools in the future.
          </p>
          <p>
            <strong>We use cookies to:</strong>
          </p>
          <p>
            <strong>•</strong> Help remember and process the items in the shopping cart.
          </p>
          <p>
            <strong>•</strong> Understand and save user's preferences for future visits.
          </p>
          <p>
            <strong>•</strong> Compile aggregate data about site traffic and site interactions in order to offer better
            site experiences and tools in the future. We may also use trusted third-party services that track this
            information on our behalf.
          </p>
          <p>
            You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn
            off all cookies. You do this through your browser settings. Since browser is a little different, look at
            your browser's Help Menu to learn the correct way to modify your cookies.
          </p>
          <p>
            <strong>If users disable cookies in their browser:</strong>
          </p>
          <p>If you turn cookies off it will turn off some of the features of the site.</p>

          <p>
            <strong>Third-party disclosure</strong>
          </p>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
            unless we provide users with advance notice. This does not include website hosting partners and other
            parties who assist us in operating our website, conducting our business, or serving our users, so long as
            those parties agree to keep this information confidential. We may also release information when it's release
            is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights,
            property or safety. However, non-personally identifiable visitor information may be provided to other
            parties for marketing, advertising, or other uses.
          </p>

          <p>
            <strong>Third-party links</strong>
          </p>
          <p>We do not include or offer third-party products or services on our website.</p>

          <p>
            <strong>Google</strong>
          </p>
          <p>
            Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place
            to provide a positive experience for users.
          </p>
          <p>We use Google AdSense Advertising on our website.</p>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie
            enables it to serve ads to our users based on previous visits to our site and other sites on the Internet.
            Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy
            policy.
          </p>
          <p>
            <strong>We have implemented the following:</strong>
          </p>
          <p>
            <strong>•</strong> Remarketing with Google AdSense
          </p>
          <p>
            We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics
            cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together
            to compile data regarding user interactions with ad impressions and other ad service functions as they
            relate to our website.
          </p>
          <p>
            <strong>Opting out:</strong>Users can set preferences for how Google advertises to you using the Google Ad
            Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or
            by using the Google Analytics Opt Out Browser add on.
          </p>

          <p>
            <strong>California Online Privacy Protection Act</strong>
          </p>
          <p>
            CalOPPA is the first state law in the nation to require commercial websites and online services to post a
            privacy policy. The law's reach stretches well beyond California to require any person or company in the
            United States (and conceivably the world) that operates websites collecting Personally Identifiable
            Information from California consumers to post a conspicuous privacy policy on its website stating exactly
            the information being collected and those inpiduals or companies with whom it is being shared. - See more{" "}
            <Link
              href={"http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf"}
              rel="nofollow"
              target="_blank"
            >
              Here
            </Link>
          </p>
          <p>
            <strong>According to CalOPPA, we agree to the following:</strong>
          </p>
          <p>Users can visit our site anonymously.</p>
          <p>
            Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first
            significant page after entering our website.
          </p>
          <p>
            Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.
          </p>
          <p>You will be notified of any Privacy Policy changes:</p>
          <p>
            <strong>•</strong> On our Privacy Policy Page
          </p>
          <p>Can change your personal information:</p>
          <p>
            <strong>•</strong> By logging in to your account
          </p>
          <p>
            <strong>How does our site handle Do Not Track signals?</strong>
          </p>
          <p>
            We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT)
            browser mechanism is in place.
          </p>
          <p>
            <strong>Does our site allow third-party behavioral tracking?</strong>
          </p>
          <p>It's also important to note that we do not allow third-party behavioral tracking</p>

          <p>
            <strong>COPPA (Children Online Privacy Protection Act)</strong>
          </p>
          <p>
            When it comes to the collection of personal information from children under the age of 13 years old, the
            Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission,
            United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of
            websites and online services must do to protect children's privacy and safety online.
          </p>
          <p>We do not specifically market to children under the age of 13 years old.</p>
          <p>Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?</p>

          <p>
            <strong>Fair Information Practices</strong>
          </p>
          <p>
            The Fair Information Practices Principles form the backbone of privacy law in the United States and the
            concepts they include have played a significant role in the development of data protection laws around the
            globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical
            to comply with the various privacy laws that protect personal information.
          </p>
          <p>
            <strong>
              In order to be in line with Fair Information Practices we will take the following responsive action,
              should a data breach occur:
            </strong>
          </p>
          <p>We will notify you via email</p>
          <p>
            <strong>•</strong> Within 7 business days
          </p>
          <p>
            We also agree to the Inpidual Redress Principle which requires that inpiduals have the right to legally
            pursue enforceable rights against data collectors and processors who fail to adhere to the law. This
            principle requires not only that inpiduals have enforceable rights against data users, but also that
            inpiduals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by
            data processors.
          </p>
          <p>
            <strong>CAN SPAM Act</strong>
          </p>
          <p>
            The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial
            messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough
            penalties for violations.
          </p>
          <p>
            <strong>We collect your email address in order to:</strong>
          </p>
          <p>
            <strong>•</strong> Send information, respond to inquiries, and/or other requests or questions
          </p>
          <p>
            <strong>•</strong> Process orders and to send information and updates pertaining to orders.
          </p>
          <p>
            <strong>•</strong> Send you additional information related to your product and/or service
          </p>
          <p>
            <strong>To be in accordance with CANSPAM, we agree to the following:</strong>
          </p>
          <p>
            <strong>•</strong> Not use false or misleading subjects or email addresses.
          </p>
          <p>
            <strong>•</strong> Identify the message as an advertisement in some reasonable way.
          </p>
          <p>
            <strong>•</strong> Include the physical address of our business or site headquarters.
          </p>
          <p>
            <strong>•</strong> Monitor third-party email marketing services for compliance, if one is used.
          </p>
          <p>
            <strong>•</strong> Honor opt-out/unsubscribe requests quickly.
          </p>
          <p>
            <strong>•</strong> Allow users to unsubscribe by using the link at the bottom of each email.
          </p>
          <p>
            <strong>
              If at any time you would like to unsubscribe from receiving future emails, you can email us at
            </strong>
          </p>
          <p>
            <strong>•</strong> Follow the instructions at the bottom of each email and we will promptly remove you from{" "}
            <strong>ALL</strong> correspondence.
          </p>
        </TextLayout>
      </SectionLayout>
      <Cta inverted />
    </BaseLayout>
  );
};

export default PagePrivacyPolicy;
