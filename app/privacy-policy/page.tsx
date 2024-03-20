/* eslint-disable react/no-unescaped-entities */
import GoBack from "@/components/goback";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-3 privacy">
      <h1 className="text-3xl md:text-5xl font-bold text-center pb-4 border-b border-b-border">
        Privacy Policy
      </h1>
      <GoBack />
      <section className="mb-8 mt-10">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          Wabtech is committed to providing high-quality website templates and
          web services for users. This privacy policy outlines how we collect,
          use, and safeguard user information on our platform.
        </p>
        <p>
          <span className="font-semibold">Importance of User Privacy:</span> We
          understand the importance of user privacy and are dedicated to
          ensuring the confidentiality and security of the information collected
          on Wabtech. This privacy policy aims to transparently communicate our
          data practices.
        </p>
        <p>
          <span className="font-semibold">Non-Personalization Statement:</span>{" "}
          Wabtech wants to clarify that we do not offer personalization services
          based on user data. Our focus is on delivering quality website
          templates and web solutions, and we do not engage in personalized
          content delivery or marketing based on individual user preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consent</h2>
        <p>
          <span className="font-semibold">Implicit Consent:</span> By using
          Wabtech, users acknowledge that they have read and agreed to the terms
          outlined in this privacy policy. It is important for users to review
          this policy regularly, as it may be updated to reflect changes in our
          data practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions and Concerns</h2>
        <p>
          <span className="font-semibold">Contact Information:</span> Users are
          encouraged to reach out to Wabtech for any questions, concerns, or
          clarifications regarding their privacy on our platform. Contact
          information for privacy-related inquiries is provided at the end of
          this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Effective Date</h2>
        <p>
          <span className="font-semibold">Effective Date:</span> This privacy
          policy is effective as of 23rd Mar, 2024. Any updates to the policy
          will be reflected in the latest version, and users are advised to
          review it periodically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Information Collected</h2>
        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">Account Information:</span> When
            users create an account on Wabtech, we collect necessary
            information, including their email address, username, and password
            (for those using email and password authentication).
          </li>
          <li>
            <span className="font-semibold">Third-Party Authentication:</span>{" "}
            Users have the option to log in or register using their Google or
            GitHub accounts. Wabtech will collect basic user information
            provided by these third-party authentication services such as email,
            name and profile image ONLY.
          </li>
          <li>
            <span className="font-semibold">Billing Information:</span> We DO
            NOT store any billing information in our databases. This is because
            we rely on external third Party payment gateways i.e. PayPal and all
            payment data is handled securely by these gateways.
          </li>
          <li>
            <span className="font-semibold">Communication Data:</span> Wabtech
            may collect information provided by users when they contact us,
            including email addresses and any additional details shared during
            communication.
          </li>

          <li>
            <span className="font-semibold">
              Cookies and Tracking Technologies:
            </span>{" "}
            Wabtech DOES NOT store any user information using cookies and since
            we don't offer any personalization, no tracking is used.
          </li>
          <li>
            <span className="font-semibold">
              Device and Browser Information:
            </span>{" "}
            Information about users' devices, browsers, and operating systems is
            NOT collected in any way by Wabtech.
          </li>
          <li>
            <span className="font-semibold">IP Addresses: </span>
            NO IP addresses are collected or stored by Wabtech.
          </li>
          <li>
            <span className="font-semibold">
              User Preferences and Settings:
            </span>{" "}
            Wabtech may store user preferences and settings related to the
            customization of their account. This includes changing profile
            photo, passwords, etc.
          </li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Registration</h2>
        <p>
          When users choose to create an account on Wabtech, we collect specific
          information. The details gathered during the registration process
          include:
        </p>
        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">Email Address:</span>
            <p>
              <span className="font-semibold">Purpose:</span> The user's email
              address serves as a unique identifier for their Wabtech account.
            </p>
            <p>
              <span className="font-semibold">Usage:</span> We use the email
              address for account verification, communication, and to provide
              important updates related to their account and template purchases.
            </p>
          </li>
          <li>
            <span className="font-semibold">Username:</span>
            <p>
              <span className="font-semibold">Purpose:</span> The chosen
              username is used as a display name on the Wabtech platform.
            </p>
            <p>
              <span className="font-semibold">Usage:</span> We may use it as a
              display name on the Wabtech platform.
            </p>
          </li>
          <li>
            <span className="font-semibold">Password:</span>
            <p>
              <span className="font-semibold">Purpose:</span> The user's chosen
              password is a critical element for securing their Wabtech account.
            </p>
            <p>
              <span className="font-semibold">Usage:</span> Passwords are
              securely stored and used for account authentication, ensuring that
              only the account owner can access their personalized features.
            </p>
          </li>
          <li>
            <span className="font-semibold">Optional Profile Information:</span>
            <p>
              <span className="font-semibold">Purpose:</span> Users have the
              option to provide additional profile information, such as a
              profile picture.
            </p>
          </li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Payment Processing</h2>
        <p>
          Wabtech utilizes trusted external payment processors, namely PayPal,
          to handle all payment transactions. As a result, Wabtech does not
          directly handle or store any sensitive payment information. Here's an
          overview of the payment-related information:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">PayPal Transactions:</span>
            <p>
              <span className="font-semibold">Processor:</span> Wabtech
              leverages PayPal as a secure external payment processor.
            </p>
            <p>
              <span className="font-semibold">Information Collected:</span>{" "}
              During the payment process, PayPal collects and processes payment
              details, such as credit card information or PayPal account
              details.
            </p>
            <p>
              <span className="font-semibold">Security:</span> The security of
              payment information is managed by PayPal, ensuring
              industry-standard encryption and compliance with Payment Card
              Industry Data Security Standard (PCI DSS) requirements.
            </p>
            <p>
              <span className="font-semibold">Note:</span> Wabtech does not have
              access to or store users' financial details provided during PayPal
              transactions.
            </p>
          </li>

          <li>
            <p>
              <span className="font-semibold">Limited Access:</span> Wabtech
              does not have access to users' full payment details, as this
              information is securely processed by external payment processors.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
        <p>
          At Wabtech, we may utilize third-party services to enhance the user
          experience, improve site functionality, and provide additional
          features. This section outlines our approach to third-party services:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">Overview:</span>
            <p>
              <span className="font-semibold">Purpose:</span> Third-party
              services may be integrated to offer specific functionalities, such
              as analytics, payment processing, or authentication.
            </p>
          </li>
          <li>
            <span className="font-semibold">
              Types of Third-Party Services:
            </span>
            <p>
              <span className="font-semibold">Payment Processors:</span> Wabtech
              employs external payment processors, such as PayPal, for secure
              and efficient payment transactions.
            </p>
            <p>
              <span className="font-semibold">Authentication Providers:</span>{" "}
              Users can log in using third-party authentication services like
              Google or GitHub.
            </p>
          </li>
          <li>
            <span className="font-semibold">Information Sharing:</span>
            <p>
              <span className="font-semibold">Limited Data Sharing:</span>{" "}
              Wabtech may share limited user information with third-party
              services only when necessary to facilitate the intended
              functionality (e.g., payment processing).
            </p>
          </li>
          <li>
            <span className="font-semibold">Privacy Standards:</span>
            <p>
              <span className="font-semibold">Compliance:</span> Third-party
              services utilized by Wabtech adhere to industry-standard privacy
              and security practices.
            </p>
            <p>
              <span className="font-semibold">Data Encryption:</span> All data
              shared with third-party services is transmitted securely through
              encrypted channels.
            </p>
          </li>

          <li>
            <span className="font-semibold">User Control:</span>
            <p>
              <span className="font-semibold">Account Settings:</span> Users
              have control over the use of third-party authentication services
              through their account settings.
            </p>
            <p>
              <span className="font-semibold">Payment Information:</span> Users
              can manage and review their payment information directly with the
              external payment processors.
            </p>
          </li>
          <li>
            <span className="font-semibold">Updates:</span>
            <p>
              <span className="font-semibold">Policy Revisions:</span> Any
              changes to the integration of third-party services will be
              reflected in updates to the Privacy Policy.
            </p>
          </li>
          <li>
            <span className="font-semibold">Compliance:</span>
            <p>
              <span className="font-semibold">Legal Requirements:</span> Wabtech
              commits to complying with legal requirements concerning the use of
              third-party services, ensuring user data protection.
            </p>
          </li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
        <p>
          At Wabtech, we are committed to transparently communicating how user
          data is utilized. This section outlines the purposes for which user
          data may be used:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">Support Services:</span>
            <p>
              <span className="font-semibold">Purpose:</span> User data may be
              utilized to provide efficient and personalized support services.
            </p>
            <p>
              <span className="font-semibold">Scope:</span> This includes
              addressing user queries, resolving issues, and offering assistance
              related to Wabtech's products and services.
            </p>
          </li>
          <li>
            <span className="font-semibold">Service Improvement:</span>
            <p>
              <span className="font-semibold">Feedback Analysis:</span> User
              feedback and interactions may be analyzed to enhance and improve
              the overall user experience.
            </p>
            <p>
              <span className="font-semibold">Feature Development:</span>{" "}
              Collected data may contribute to the development of new features,
              improvements, and optimizations.
            </p>
          </li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
        <p>
          At Wabtech, our commitment to user privacy extends to how user data is
          handled and shared. This section outlines Wabtech' approach to data
          sharing:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">No Third-Party Sharing:</span>
            <p>
              <span className="font-semibold">Commitment:</span> Wabtech does
              not share user data with third-party entities for marketing,
              advertising, or any other commercial purposes.
            </p>
            <p>
              <span className="font-semibold">Data Confidentiality:</span> User
              data is treated with utmost confidentiality and is not sold,
              rented, or otherwise shared for financial gain.
            </p>
          </li>
          <li>
            <span className="font-semibold">External Payment Processors:</span>
            <p>
              <span className="font-semibold">Limited Data Sharing:</span> When
              processing payments through external payment processors like
              PayPal, Wabtech does not have direct access to sensitive payment
              information.
            </p>
            <p>
              <span className="font-semibold">Secure Transactions:</span>{" "}
              Payment details are securely handled by these external processors,
              adhering to their privacy and security standards.
            </p>
          </li>
          <li>
            <span className="font-semibold">
              User Consent and Transparency:
            </span>
            <p>
              <span className="font-semibold">Informed Consent:</span> Wabtech
              values user consent and informs users about the specific instances
              where data sharing may occur.
            </p>
            <p>
              <span className="font-semibold">Clear Communication:</span> Users
              are provided with clear and transparent information about the
              purposes and recipients of their data.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Rights</h2>
        <p>
          At Wabtech, we believe in empowering users with control over their
          personal information. Users have certain rights regarding the
          management and control of their accounts. This section outlines the
          key user rights provided by Wabtech:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">Profile Editing:</span>
            <p>
              <span className="font-semibold">
                User-Controlled Information:
              </span>{" "}
              Users have the right to edit and update their profile details at
              any time.
            </p>
            <p>
              <span className="font-semibold">
                Access to Personal Information:
              </span>{" "}
              The platform provides easy-to-use interfaces for users to modify
              personal information, including names, and other profile-related
              data.
            </p>
          </li>
          <li>
            <span className="font-semibold">Password Management:</span>
            <p>
              <span className="font-semibold">Password Change:</span> Users can
              change their account passwords at their discretion.
            </p>
            <p>
              <span className="font-semibold">Security and Privacy:</span>{" "}
              Enabling users to update passwords ensures ongoing security and
              privacy protection.
            </p>
          </li>
          <li>
            <span className="font-semibold">Account Deletion:</span>
            <p>
              <span className="font-semibold">User-Account Deletion:</span>{" "}
              Users have the right to delete their accounts.
            </p>
          </li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
        <p>
          At Wabtech, we are committed to maintaining the highest standards of
          privacy and transparency. This section outlines our approach to making
          changes to our Privacy Policy and how we communicate these changes to
          our users:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <span className="font-semibold">Notification of Changes:</span>
            <p>
              <span className="font-semibold">Advance Notice:</span> Users will
              be notified in advance of any material changes to the Privacy
              Policy.
            </p>
            <p>
              <span className="font-semibold">Communication Channels:</span>{" "}
              Notifications will be delivered through various communication
              channels, including email, platform announcements, and website
              banners.
            </p>
          </li>
          <li>
            <span className="font-semibold">Review of Changes:</span>
            <p>
              <span className="font-semibold">Access to Revised Policy:</span>{" "}
              Users will have access to the revised Privacy Policy to review the
              modifications.
            </p>
            <p>
              <span className="font-semibold">Summary of Changes:</span> Wabtech
              will provide a summary of key changes to assist users in
              understanding the updates.
            </p>
          </li>

          <li>
            <span className="font-semibold">Regulatory Compliance:</span>
            <p>
              <span className="font-semibold">Compliance Updates:</span> Changes
              to the Privacy Policy will adhere to applicable data protection
              and privacy regulations.
            </p>
            <p>
              <span className="font-semibold">Alignment with Standards:</span>{" "}
              Wabtech ensures that policy updates align with evolving legal
              standards and industry best practices.
            </p>
          </li>
          <li>
            <span className="font-semibold">Feedback Mechanism:</span>
            <p>
              <span className="font-semibold">User Feedback:</span> Wabtech
              welcomes user feedback on Privacy Policy changes.
            </p>
            <p>
              <span className="font-semibold">Contact and Support:</span> Users
              can reach out to Wabtech through designated support channels to
              provide input or seek clarification.
            </p>
          </li>
          <li>
            <span className="font-semibold">Effective Date:</span>
            <p>
              <span className="font-semibold">Clear Effective Date:</span> The
              effective date of the updated Privacy Policy will be clearly
              indicated.
            </p>
            <p>
              <span className="font-semibold">Implementation Timing:</span>{" "}
              Changes will be implemented and become effective on the specified
              date.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          For any inquiries, concerns, or communication related to privacy
          matters, users can contact Wabtech through the following channels:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">Email:</span>
            <p>
              <span className="font-semibold">Email Address:</span>{" "}
              wabtech.tech@gmail.com
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> Users can use this
              email address to reach out for privacy-related queries, data
              protection concerns, or any general inquiries.
            </p>
          </li>
          <li>
            <span className="font-semibold">Contact Form:</span>
            <p>
              <span className="font-semibold">Website Contact Form:</span>{" "}
              Available on the Wabtech website, the contact form is designed for
              user convenience and can be accessed{" "}
              <Link href="/contact" className="text-brand underline">
                here
              </Link>
            </p>
          </li>

          <li>
            <span className="font-semibold">Response Time:</span>
            <p>
              <span className="font-semibold">Timely Responses:</span> Wabtech
              is committed to responding to user inquiries promptly and
              efficiently.
            </p>
            <p>
              <span className="font-semibold">Support Hours:</span> Users will
              be informed of the typical response time and the support hours of
              operation.
            </p>
          </li>
          <li>
            <span className="font-semibold">Additional Support:</span>
            <p>
              <span className="font-semibold">FAQs:</span> Wabtech maintains an
              FAQ section on its website to provide additional information and
              answers to common questions.
            </p>
          </li>
        </ul>

        <p>
          Wabtech values user feedback and is dedicated to ensuring a seamless
          and reliable communication channel for privacy-related matters. Users
          are encouraged to use the provided contact information for any
          questions or concerns they may have.
        </p>

        <p className="font-bold">
          Note: Please check the Wabtech website for the most up-to-date contact
          information and support options.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
        <p>
          <span className="font-semibold">Effective Date:</span> 23rd March,
          2024
        </p>

        <p>
          <span className="font-semibold">Policy Updates:</span> Wabtech
          reserves the right to modify or update this Privacy Policy
          periodically.
        </p>

        <p>
          <span className="font-semibold">Notification:</span> Users will be
          informed of any changes to the Privacy Policy through the website or
          other communication channels.
        </p>

        <p>
          <span className="font-semibold">Review:</span> Users are encouraged to
          review the Privacy Policy regularly to stay informed about how their
          data is handled.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
