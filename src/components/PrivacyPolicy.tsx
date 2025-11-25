import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface PrivacyPolicyProps {
  onNavigate?: (destination: PageKey) => void
}

const privacySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          Harvard Business Services, Inc. (&quot;Harvard&quot; or &quot;we&quot; or &quot;us&quot;) and its staff&apos;s
          respect for your privacy and commitment to protecting your personally-identifiable information (&quot;PII&quot;)
          are fundamental to our business culture and ethos. We manifest that respect through strict adherence to these
          Privacy Policies governing our collection, use, storage, and transmission of PII, whether provided to us by
          customers, prospective customers, or others who appropriately entrust us with PII, such as those subscribing to
          receive our blog posts, articles, or other updates.
        </p>
        <p>
          The definition of PII varies by state and across national borders, and even among federal and state regulatory
          agencies. Generally, it refers to information that identifies, relates to, describes, is reasonably capable of
          being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or
          household. It can include your name, Social Security number, driver’s license number, email address, records of
          products purchased, internet browsing history, and bank account or credit card information, among other things.
          This Privacy Policy describes the PII we collect and how we collect, use, and maintain it.
        </p>
        <p>
          We do not furnish your information to marketers, advertisers, solicitors, spammers, or others for them to
          advertise or promote their products or services to you. We do disclose your information to third parties for
          cross-context behavioral advertising, which may constitute a &quot;sale&quot; or &quot;sharing&quot; of that
          information within the meaning of applicable privacy laws. For information on how to opt out of such
          &quot;selling&quot; or &quot;sharing,&quot; see Choices About How We Use and Disclose Your Information.
        </p>
        <p>
          We strongly encourage you to read these Privacy Policies carefully. If you have any questions regarding the terms
          or application of this Privacy Policy, contact us via telephone at 800-345-2677 or via email to
          privacy@delawareinc.com. Also, you should read and be aware of the Terms of Use, which generally governs your use
          of and access to our website, www.delawareinc.com (the &quot;Website&quot;).
        </p>
      </>
    )
  },
  {
    id: 'consent',
    title: 'Consent to These Privacy Policies Required',
    content: (
      <>
        <p>
          If you do not consent to the terms of this Privacy Policy, you must not access or use the Website or transmit any
          PII to us. Acknowledgement and acceptance of this Privacy Policy and agreement to its terms (so long as they
          comply with applicable law) is an express condition of using the Website, employing any of our services, or
          receiving publications or other materials (articles, updates, etc.).
        </p>
      </>
    )
  },
  {
    id: 'amendment',
    title: 'Amendment of These Privacy Policies',
    content: (
      <>
        <p>
          Our commitment to the privacy of your PII does not change, but the regulations governing the collection and use
          of PII frequently do. The U.S. federal government, state governments, and non-U.S. jurisdictions are actively
          adopting and/or considering additional new privacy laws and regulations. Further, as we add new services and
          features, the ways we may accept or gather information may expand. For this and other reasons, we may amend this
          Privacy Policy from time to time.
        </p>
        <p className="font-semibold">Website Users.</p>
        <p>
          Upon an amendment, Website visitors that allow for tracking of their acceptance of such will receive a pop-up upon
          landing on the Website showing an amendment has been made and their acceptance is required for continued valid
          access. Such visitors must affirmatively acknowledge and agree to the amended version. A link will be provided
          prominently next to the button evidencing affirmative acknowledgement and acceptance leading to the updated Privacy
          Policy and a redline showing the changes made to the last version.
        </p>
        <p className="font-semibold">Customers’ Online Accounts.</p>
        <p>
          A notice that this Privacy Policy has been amended will be included on the landing page of our customers’
          password-protected accounts. Acknowledgement and acceptance of such an amended Privacy Policy will be required for
          continued use of our services.
        </p>
      </>
    )
  },
  {
    id: 'sources',
    title: 'Sources of Information We Collect',
    content: (
      <>
        <p>
          This Privacy Policy applies to the full range of ways we collect PII, which include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Your use of the Website, such as through &quot;cookies&quot; or other automatic electronic data mechanisms,
            discussed below.
          </li>
          <li>
            Your interactions with our advertising on third-party websites and services, if those applications or
            advertising include links to the Website, and
          </li>
          <li>
            Your submission of information to us through the Website, such as:
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Through our &quot;chat&quot; function, which allows Website users to virtually communicate with a live
                Harvard representative during business hours,
              </li>
              <li>
                Through your use of our &quot;chatbot,&quot; which addresses inquiries posed by Website visitors after
                business hours, when our chat feature is unavailable,
              </li>
              <li>
                When you provide contact information in signing up to receive our weekly blog, periodic webinars, podcasts,
                surveys, etc.,
              </li>
              <li>
                When you submit information to obtain a username and password-protected account through the Website, or
                otherwise, and forms through our Website requesting information we need to provide the services upon which
                we and you have agreed,
              </li>
              <li>
                When you submit information through your account with Harvard, accessible through the Website using a
                designated username and password, whether in ordering services; providing or updating payment, contact, or
                other information; or otherwise.
              </li>
            </ul>
          </li>
          <li>Through emails, texts, or other messages you send to us or that you exchange with Harvard representatives.</li>
          <li>In telephone calls or other off-line communications with our staff.</li>
        </ul>
        <p>
          Note that this Privacy Policy does not apply to any other information or the collection, retention, use, storage,
          or transmission of information by any third party, including through any application or content (including
          advertising) that may link to or be accessible on the Website (such as advertisements outside of our direct
          control).
        </p>
      </>
    )
  },
  {
    id: 'information-collection',
    title: 'Information We Collect About You and How We Collect It',
    content: (
      <>
        <p>We collect several types of PII:</p>
        <h3 className="text-2xl font-semibold text-black mt-6">Information You Provide to Us</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            Personal information, such as name, postal address, email address or telephone number, when you correspond with
            us by email or the Website’s &quot;chat&quot; function (chatting with a representative or our after-hours
            &quot;chatbot&quot;), call us to make a purchase or request service, or participate in an online survey.
          </li>
          <li>
            The social security number or tax identification number of a person serving as the &quot;Responsible Party&quot;
            for the application if you authorize us to obtain an employment identification number for your new Delaware
            company.
          </li>
          <li>
            Information you provide to us in connection with any filings made pursuant to the Corporate Transparency Act,
            including information on your company’s beneficial owners (the &quot;CTA&quot;).
          </li>
          <li>
            Information that you provide by filling in any forms on our Website whether in purchasing services or products,
            or otherwise.
          </li>
          <li>
            Details of transactions you carry out through our Website, over the phone, or by email and of the fulfillment of
            your orders.
          </li>
          <li>
            You may be required to provide financial information before placing an order through our Website or by phone or
            email, although all payment information (e.g., bank account numbers, credit card numbers, etc.) is destroyed in
            a secure manner and not maintained in hard copy or on our servers immediately after each payment is processed.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-black mt-6">
          Information We Collect Through Automatic Data Collection Technology
        </h3>
        <p className="mt-4">
          When you browse the Website, you can do so anonymously. Generally, we do not collect personal information when you
          merely browse, not even your email address. We do not collect PII using automatic data collection tools (discussed
          below), but we may tie this information to personal information about you that we collect from other sources or
          that you provide to us. Your browser, however, automatically tells us the type of computer and operating system
          you are using.
        </p>
        <p>The automatic data collection tools we may employ include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Cookies (or browser cookies).</span> A cookie is a small file placed on the
            hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on
            your browser. However, if you select this setting you may be unable to access certain parts of our Website.
            Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when
            you direct your browser to our Website. Cookies help us understand which parts of our websites are the most
            popular, where our visitors are going and how long they spend there. We use cookies to study traffic patterns on
            our site so we can make the site even better.
          </li>
          <li>
            <span className="font-semibold">Flash Cookies.</span> Certain features of our Website may use local stored
            objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and
            on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For
            information about managing your privacy and security settings for Flash cookies, see Choices About How We Use
            and Disclose Your Information.
          </li>
          <li>
            <span className="font-semibold">Web Beacons.</span> Pages of the Website may contain small electronic files
            known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the
            Company, for example, to count users who have visited those pages and for other related website statistics (for
            example, recording the popularity of certain website content and verifying system and server integrity).
          </li>
          <li>
            <span className="font-semibold">Action Tags.</span> An action tag is a small piece of code that tracks the pages
            viewed or the messages opened, the date and time when someone visited our Website, the website from which the
            visitor came, the type of browser used, and the domain name and address of the user's Internet Service Provider.
            Action tags allow us to better understand how users and visitors use the Website or browse through our pages, so
            that we can improve access to and navigation through the Website, add or modify pages, according to our user's
            patterns. Action tags cannot be removed or deleted by our users, because they are part of the programming of a
            webpage.
          </li>
          <li>
            <span className="font-semibold">Log Files.</span> Log file information is automatically reported by your browser
            each time you access a web page. When you use the Website, our servers automatically record certain information
            that your web browser sends out whenever you visit any website. These server logs may include information such
            as your web request, IP address, browser type, referring/exit pages, operating system, date/time stamp, the files
            viewed on our site (e.g., HTML pages, graphics, etc.) and URLs, number of clicks, domain names, landing pages,
            pages viewed, and other similar information.
          </li>
          <li>
            <span className="font-semibold">Behavioral Targeting.</span> We partner with a third party to either display
            advertising on our Website or to manage our advertising on other sites. Our third-party partner may use cookies
            or similar technologies on other websites in order to provide you advertising based upon your browsing activities
            and interests. If you wish to opt out of interest-based advertising, whether you are in the U.S., the European
            Union, or elsewhere, send an email to privacy@delawareinc.com. Please note you will continue to see generic ads
            on the Website which are not in the Company’s control.
          </li>
        </ul>
        <p>
          Harvard does not track or recognize Do Not Track signals. We honor the Global Privacy Control opt-out signal. For
          information about GPC, please visit: https://globalprivacycontrol.org/
        </p>
        <p>
          The information we collect automatically is used primarily as statistical data and does not include PII. It helps
          us improve our Website and deliver a better and more personalized service, including by enabling us to estimate
          audience size and usage patterns. However, we may store information about your preferences, allowing us to
          customize our Website according to your individual interests, speed up your searches, and recognize you when you
          return to our Website, although you may opt out of such use as discussed below.
        </p>
      </>
    )
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>
          As noted above and throughout these Privacy Policies, we do not furnish your information to third parties for
          their use on their own behalf. We use information that we collect about you or that you provide to us, including
          PII, to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To present our Website and its contents to you in a more efficient manner customized to your past use (unless opted out).</li>
          <li>
            If you register on the Website, affirmatively elect to receive certain information, or otherwise provide your
            information for such purpose, we will use that contact information to provide you with information about, for
            example, our products or services or to notify you about certain changes to our business.
          </li>
          <li>
            To fulfill any other purpose for which you provide information at the time (including PII), including in
            connection with products we may offer in conjunction with third-party service providers, who will not make use of
            this information except on our behalf to provide such services or provide for the use of relevant products.
          </li>
          <li>
            To provide you with ongoing registered agent services, including to provide you with notices about your business
            entity, key deadlines and required actions, including franchise tax reminders, franchise tax materials, notices
            of various sorts from the State of Delaware and any other relevant states, invoices and payment reminders for
            invoices, service of process, as well as other communications related to our role as formation agent/incorporator
            and/or registered agent. Upon receipt, and at least quarterly thereafter, we will compare the personal
            information you have provided against the U.S. Department of the Treasury’s lists of designated persons
            maintained by the Office of Foreign Asset Control (&quot;OFAC&quot;) to ensure we comply with applicable law and
            trade restrictions. These comparisons are required by Delaware law governing registered agents.
          </li>
          <li>To make filings on your behalf as part of agreed-upon services, including making any filing under the CTA.</li>
          <li>
            To our service providers with a need to know such information and who are bound by contractual obligations to
            keep such information confidential and use it only for the purposes for which we disclose it to them.
          </li>
          <li>
            To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution,
            or other sale or transfer of some or all of the Company’s assets, whether as a going concern or as part of
            bankruptcy, liquidation, or similar proceeding, in which personal information held by the Company about our
            Website users is among the assets transferred, provided that such buyer or successor shall be under a strict
            confidentiality and non-use obligation prior to the close of transaction, beginning no later than the time the
            Company shares access to any PII.
          </li>
          <li>
            To allow you to participate in interactive features on our Website, such as webinars allowing for Q&amp;A
            sessions and other recordings, podcasts we may offer, or periodic surveys we may send seeking a rating of our
            services or seeking to gauge client interest products and services under consideration (unless you opt out).
          </li>
        </ul>
        <p>We may also disclose your PII:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            To comply with any U.S. or non-U.S. court order, subpoena, or other directive, or any U.S. or non-U.S. law,
            regulation, or rule, including those of a relevant recognized self-regulatory organization (e.g., the Financial
            Industry Regulatory Authority, Inc.).
          </li>
          <li>At your direction and with your consent.</li>
          <li>In our discretion, to comply with any law enforcement, governmental, or regulatory request.</li>
          <li>
            To enforce or apply our Terms of Use and other agreements, including for billing and collection purposes and to
            enforce our rights under contracts with you.
          </li>
          <li>
            If we believe that disclosure is necessary or appropriate to protect the rights, property, or safety of the
            Company, our customers, or others.
          </li>
          <li>For other purposes explained at the time of collection or otherwise as set out in this Privacy Policy.</li>
        </ul>
      </>
    )
  },
  {
    id: 'choices',
    title: 'Choices About How We Use and Disclose Your Information',
    content: (
      <>
        <p>
          We strive to provide you with choices regarding the information you provide to us. We have created mechanisms to
          help you control your information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Tracking Technologies and Advertising.</span> You can set your browser to refuse
            all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash
            cookie settings, visit the Flash player settings page on Adobe&apos;s website. If you disable or refuse cookies,
            please note that some parts of this site may then be inaccessible or not function properly.
          </li>
          <li>
            <span className="font-semibold">Promotional Offers from the Company.</span> If you do not wish to receive emails
            from the Company describing our products or services (whether offered by us alone or in conjunction with another
            provider), you can opt-out when we collect your data or by sending us an email stating your request to
            privacy@delawareinc.com. This opt-out does not apply to emails documenting or providing information about a
            product or service or our emails or calls related directly to our registered agent services (e.g., franchise tax
            reminders, invoices for payment, transmitting service of process, etc.).
          </li>
          <li>
            <span className="font-semibold">Weekly Blog, Podcasts, Webinars, and Surveys.</span> You can opt out of receiving
            our weekly blog update or notices of webinars or podcasts by checking the relevant box on the form on which you
            sign up to receive our services, or simply follow the instructions in the email to unsubscribe from all or part
            of such communications. Similarly, you can opt out of periodic surveys we may send to you gauging client interest
            in certain contemplated services or for other reasons.
          </li>
          <li>
            <span className="font-semibold">Testimonials.</span> We display testimonials of satisfied customers on the
            Website in addition to other endorsements. With your consent, we may post your testimonial along with your name
            (or anonymously). If you wish to update or delete your testimonial, contact us at privacy@delawareinc.com.
          </li>
        </ul>
        <p>
          We do not control third parties&apos; collection or use of your information to serve interest-based advertising.
          However, these third parties may provide you with ways to choose not to have your information collected or used in
          this way. You can opt out of receiving targeted ads from members of the Network Advertising Initiative on the NAI&apos;s website (www.networkadvertising.org).
        </p>
        <p>
          <span className="font-semibold">California-Specific Notice.</span> California residents may have additional
          personal information rights and choices. Please see Your California Privacy Rights for more information. Your
          rights under the California Consumer Privacy Act are described in brief here.
        </p>
        <p>
          <span className="font-semibold">Nevada-Specific Disclosure.</span> We do not currently sell data triggering
          Nevada’s Chapter 603A; therefore, the opt-out available to residents under that statute is inapplicable.
        </p>
        <p>
          <span className="font-semibold">Other State Privacy Rights.</span> Many US states provide (now or in the future)
          their state residents with rights to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm whether we process their personal information.</li>
          <li>Access and delete certain personal information.</li>
          <li>Correct inaccuracies in their personal information, taking into account the information&apos;s nature processing purpose (excluding Iowa and Utah).</li>
          <li>Data portability.</li>
          <li>Opt-out of personal data processing for targeted advertising (excluding Iowa); sales; or profiling in furtherance of decisions that produce legal or similarly significant effects (excluding Iowa and Utah).</li>
          <li>Either limit (opt-out of) or require consent to process sensitive personal data.</li>
        </ul>
        <p>
          The exact scope of these rights may vary by state. To exercise any of these rights please email us at
          privacy@delawareinc.com.
        </p>
      </>
    )
  },
  {
    id: 'accessing',
    title: 'Accessing and Correcting Your Information',
    content: (
      <>
        <p>
          You can review and change your personal information by logging into the Website, visiting your account profile
          page, and changing any information. You may also send us an email at privacy@delawareinc.com to correct or delete
          any personal information that you have provided to us. We cannot delete the entirety of your personal information
          without deleting your account. We may not accommodate a request to change information if we believe the change
          would violate any law or legal requirement or cause the information to be incorrect.
        </p>
        <p>
          As a registered agent, we must by statute maintain accurate contact information for our clients. If you are a
          registered agent client of the Company, you have the affirmative duty to access your account and update the contact
          person information page with accurate, updated information as needed. We will also rely entirely upon the accuracy
          and completeness of the information we receive from you in making filings on your behalf, including those under
          the CTA.
        </p>
      </>
    )
  },
  {
    id: 'security',
    title: 'How We Protect Your Personal Information',
    content: (
      <>
        <p>
          We do not give or sell your name, email address, physical address, or any other PII to any third party for their
          marketing purposes, and will reveal such information only as otherwise described in this Privacy Policy. We take
          strong measures to secure your data against improper outside disclosure, whether over the internet or in hard copy
          form.
        </p>
        <p>
          We use commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and
          security of your personal information, once we receive it. For example, we continuously and regularly back up your
          data to help prevent data loss and aid in data recovery. Access to our records is protected by biometric fingerprint
          scanners and monitored by personnel on site. Access to your data is monitored by a 16-camera infrared system,
          backed up by independent propane power supplies, generators and a state of the art, digitally-controlled power
          management system. Your records are stored in secure facilities with 24-hour surveillance and, in case of a regional
          disaster, we can start servicing your requests within 48 hours at our location of choice. To learn more about how
          we protect your information, please contact us by email at privacy@delawareinc.com.
        </p>
        <p>
          Harvard uses industry-standard Secure Sockets Layer (SSL) encryption on all web pages where PII is required. To
          place online orders with us, you must use an SSL-enabled browser. This protects the confidentiality of your
          personal and credit card information while it is transmitted over the internet.
        </p>
        <p>
          We urge you to take every precaution to protect your personal data when you are on the Internet. Change your
          passwords often, use a combination of letters and numbers and make sure you use a secure browser.
          Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best
          to protect your PII, we cannot guarantee the security of your PII transmitted to or via the Website. Any
          transmission of personal information is at your own risk. We are not responsible for illegal or unauthorized
          circumvention of any privacy settings or security measures contained on the Website or that we otherwise employ.
        </p>
      </>
    )
  },
  {
    id: 'gdpr',
    title: 'General Data Protection Regulation (GDPR)',
    content: (
      <>
        <p>
          The GDPR is an EU Regulation to improve the protection of the personal data of EU citizens and increase the
          obligations of organizations who collect or process personal data. These new regulations took effect on the 25th of
          May 2018.
        </p>
        <p>
          We function as both a controller and processor of our clients’ PII. As a controller of data, we store personal
          information such as customer names, email addresses, physical addresses, IP addresses, phone numbers and avatars.
          We use databases through GDPR compliant service providers (MSSQL) to store sensitive customer data. We may employ
          sub-processors with which we may partner to provide you with certain services, to which we transmit data for storage
          or processing beyond our immediate control. We have entered into agreements with such sub-processors to protect your
          private information and other data and to ensure such parties comply with necessary privacy laws and regulations in
          the U.S. and, if applicable and to a very limited extent, outside the U.S. You will receive notification and
          disclosure regarding any transfer to a sub-processor that assists in providing you with services either as part of
          the applicable Services Agreement or otherwise.
        </p>
        <p>
          The Company is also a processor of customer data. We use customer data to compile legal documents, certificates,
          and other filings as part of our core business formation and registered agent services. If you wish to
          delete/remove/deactivate your profile or account, remove your testimonial from our site, or opt out of sharing
          basic information we may transmit to provide you services or maintain our servers and systems, please email us at
          privacy@delawareinc.com. We will respond to your request within 30 days. Such deletion may result in our inability
          to continue to provide you with services, and may result in your inability to access the Website under our policies.
        </p>
        <p>
          For more information about your rights under the GDPR, see the GDPR supplement (the &quot;GDPR Supplement&quot;),
          available here.
        </p>
      </>
    )
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: (
      <>
        <p>
          Except as otherwise permitted or required by applicable law or regulation, the Company retains personal data for as
          long as necessary to fulfill the purposes the Company collected it for, as required to satisfy any legal,
          accounting, or reporting obligations, or as necessary to resolve disputes.
        </p>
        <p>
          The Company does not retain payment information (e.g., credit card numbers, checking account numbers, etc.) after
          the payment is processed; such information is securely destroyed immediately after payment processing is complete.
        </p>
        <p>
          Generally, the Company maintains electronic client records of details regarding our formation and registered agent
          services indefinitely. Other information is retained only for so long as there is a reason to retain it (e.g., blog
          and podcast info, questions put to our chatbot, or questions posed to or information collected by our sales and
          filing staff that do not result in a contract for services). When we have no ongoing legitimate business need to
          process your PII, we may either delete it or anonymize it, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will securely store your personal information and
          isolate it from any further processing until deletion is possible.
        </p>
        <p>
          We use reputable, nationally-known data storage companies to assist in our long-term retention of electronic and
          hard copy records.
        </p>
      </>
    )
  },
  {
    id: 'unsolicited',
    title: 'Unsolicited Information Not Included Within These Policies',
    content: (
      <>
        <p>
          This Privacy Policy does not apply to any unsolicited information you provide to the Company through the Website
          or through any other means. &quot;Unsolicited Information&quot; includes, but is not limited to, information posted
          to any public areas of the Website, such as blog post comments, any ideas for new products or modifications to
          existing products, and other unsolicited submissions.
        </p>
      </>
    )
  },
  {
    id: 'social-media',
    title: 'Social Media Widgets',
    content: (
      <>
        <p>
          Our Website includes social media features, such as the Facebook and Twitter button. These features may collect
          your IP address, which page you are visiting on the Website, and may set a cookie to enable the feature to function
          properly. Social media features and widgets are either hosted by a third party or hosted directly on our Website.
          Your interactions with these features and any information collected by such features are governed by the privacy
          policy of the company providing it (e.g., Facebook, Twitter, etc.). You may have a direct contractual relationship
          with some of these social media companies, or they may provide services to us. This means that sometimes these third
          parties have access to more of your personal information than we do.
        </p>
        <p>
          Please also see our Cookie Policy and current list of cookies for more information and to review or manage your
          cookie preferences.
        </p>
      </>
    )
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          The Company exercises all efforts to safeguard the security and confidentiality of your PII; however, transmissions
          protected by industry-standard technology and administered by humans cannot be guaranteed to be secure. To the
          extent permitted by applicable law, the Company will not be liable for unauthorized disclosure of PII that occurs
          through no fault of the Company including, but not limited to, errors in transmission, access to your account by
          anyone using your user ID and password, or your failure to comply with reasonable security practices.
        </p>
        <p>
          You may contact us at privacy@delawareinc.com or 800-345-2677 and we will provide you with reasonable access to
          the personal information we maintain about you. We may limit or deny access to personal information where providing
          such access is unreasonably burdensome or expensive, or as we otherwise deem appropriate.
        </p>
        <p>
          In addition, please note that (i) we may not be able to edit or delete your personal information stored with our
          third-party service providers, and (ii) we may be required (by law or otherwise) to keep this information and not
          delete it (or to keep this information for a certain time, in which case we will comply with your deletion request
          only after we have fulfilled such requirements).
        </p>
      </>
    )
  },
  {
    id: 'location',
    title: 'Location and Data Processing',
    content: (
      <>
        <p>
          We are a United States business and the Website is operated in the United States. Your personal information will
          be stored and processed on servers in the United States and other countries, and those countries may not provide
          the same level of data protection as the laws in your country. We will treat your personal information in
          accordance with applicable law and these Privacy Policies.
        </p>
      </>
    )
  },
  {
    id: 'minors',
    title: 'Minors Under the Age of 18',
    content: (
      <>
        <p>
          Our Website is not intended for children under 18 years of age. No one under the age of 18 may provide any
          information to or on the Website. We do not knowingly collect personal information from children under 18. If you
          are under 18, do not use or provide any information on this Website or through any of its features, register on the
          Website, make any purchases through the Website, use any of the interactive or public comment features of this
          Website (primarily through the blog), or provide any information about yourself to us. If we learn we have collected
          or received personal information from a child under 18 without verification of parental consent, we will delete
          that information promptly.
        </p>
        <p>
          If you believe we might have any information from or about a child under 18, please contact us at
          privacy@delawareinc.com.
        </p>
      </>
    )
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
      <>
        <p>
          If you have any questions regarding the terms or application of this Privacy Policy, you should contact us via
          telephone at 800-345-2677 or via email at privacy@delawareinc.com.
        </p>
      </>
    )
  }
]

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative left-1/2 w-screen -translate-x-1/2 h-[302px] overflow-hidden bg-[url('/Footer%20Pages/bsckground_tc_pp.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.5),_rgba(0,0,0,0.5))]" />
          <div className="absolute inset-0 bg-[linear-gradient(178.09deg,_rgba(72,159,232,0)_23.19%,_#489FE8_91.93%)]" />
          <div className="relative max-w-[1440px] h-full mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Legal</p>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl">
              Review the policies below to understand how we collect, use, and safeguard your information.
            </p>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F2F2F2] py-16 sm:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <p className="text-sm text-gray-500 font-medium mb-2">Last Updated: May 24, 2025</p>
            </div>

            <div className="space-y-16">
              {privacySections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-black leading-relaxed text-xl">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy

