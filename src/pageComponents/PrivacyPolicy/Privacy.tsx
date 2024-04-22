const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto mt-[-45px] text-[#1e1e1e] mb-20 bg-white drop-shadow-md rounded-[8px] p-8">
      <div className="mb-8">
        Our School {`("we," "us," "our")`} is committed to protecting the
        privacy and security of personal information collected from students,
        parents/guardians, and visitors to our website.
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <div className="text-xl mb-2 font-semibold">
            {" "}
            Information We Collect:
          </div>
          <div className="ml-6">
            <li>
              We may collect personal information, such as name, address,
              contact details, date of birth, and academic records, to
              facilitate the enrollment process and provide educational
              services.
            </li>
            <li>
              We may also collect non-personal information, such as IP address,
              browser type, and operating system, to improve the performance and
              security of our website.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">Use of Information:</div>
          <div className="ml-6">
            Personal information collected by the School will be used for
            educational and administrative purposes only, including but not
            limited to:
            <li>Enrollment and registration processes.</li>
            <li>Communication with students, parents/guardians, and staff.</li>
            <li>Academic assessment and reporting.</li>
            <li>Providing access to educational resources and services.</li>
            <li>
              We do not sell, trade, or rent personal information to third
              parties.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">Data Security:</div>
          <div className="ml-6">
            <li>
              We employ industry-standard security measures to protect personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </li>
            <li>
              Access to personal information is restricted to authorized
              personnel who require such information to perform their duties.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">
            Cookies and Tracking Technologies:
          </div>
          <div className="ml-6">
            <li>
              Our website may use cookies and similar tracking technologies to
              enhance user experience and analyze website usage.
            </li>
            <li>
              Cookies may be used to store user preferences, track user
              interactions, and provide personalized content.
            </li>
            <li>
              Users may disable cookies in their web browser settings, but this
              may affect the functionality of our website.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">Third-Party Links:</div>
          <div className="ml-6">
            <li>
              Our website may contain links to third-party websites or services
              that are not operated or controlled by the School.
            </li>
            <li>
              We are not responsible for the privacy practices or content of
              third-party websites. Users are encouraged to review the privacy
              policies of those websites before providing any personal
              information.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">
            {"Children's Privacy:"}
          </div>
          <div className="ml-6">
            <li>
              We comply with the {` Children's`} Online Privacy Protection Act
              (COPPA) and do not knowingly collect personal information from
              children under the age of 13 without verifiable parental consent.
            </li>
            <li>
              Parents/guardians may review, request changes to, or delete
              personal information collected from their children by contacting
              the School.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">
            Changes to Privacy Policy:
          </div>
          <div className="ml-6">
            <li>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              on our website.
            </li>
            <li>
              Users are encouraged to review this Privacy Policy periodically
              for changes.
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl mb-2 font-semibold">Contact Us:</div>
          <div className="ml-6">
            <li>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
              {
                <a
                  href="tel:9800000000"
                  style={{
                    color: "var(--accent-color)",
                  }}
                  className="font-semibold"
                >
                  9800000000
                </a>
              }{" "}
              or{" "}
              {
                <a
                  href="mailto:abc@gmail.com"
                  style={{
                    color: "var(--accent-color)",
                  }}
                  className="font-semibold"
                >
                  abc@gmail.com
                </a>
              }
            </li>
            <li>
              Users are encouraged to review this Privacy Policy periodically
              for changes.
            </li>
          </div>
        </div>
        <div>
          By using our website or enrolling in School, you acknowledge that you
          have read, understood, and agree to the terms of this Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Privacy;
