import Link from "next/link";
import React from "react";

const PDPA: React.FC = () => {
    return (
        <div className="bg-black text-gray-300 min-h-screen pt-36 pb-12 px-6">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl font-bold text-white">Data Protection Notice</h1>
                <p className="text-gray-400 text-sm">Release time: 2021-01-18</p>
                <p className="text-gray-400 text-sm">
                    Bostex Technologies International Pte Ltd
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto mt-12 space-y-10">
                {/* Section: Introduction */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Introduction</h2>
                    <p className="mt-4">
                        This Data Protection Notice (“Notice”) sets out the basis which Bostex
                        Technologies International Pte Ltd(“Bostex”) may collect, use, disclose or
                        otherwise process personal data in accordance with the Personal Data Protection Act
                        (“PDPA”). This notice applies to personal data in our possession or under our
                        control, including:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>
                            Personal data in the possession of organisations which we have engaged to
                            collect, use, disclose or process personal data for our purposes.
                        </li>
                        <li>
                            Personal data from our websites (regardless of where you visit them from).
                        </li>
                    </ul>
                    <p className="mt-4">
                        It is important that you read this privacy notice together with any other privacy
                        policy we may provide on specific occasions when we are collecting or processing
                        personal data about you so that you are fully aware of how and why Bostex is using
                        your data.
                    </p>
                    <p className="mt-4">
                        Where we share your data with our related parties, customer, supplier/service
                        provider, we do so on a need-to-know basis and on terms whereby such data is to be
                        kept secure and confidential.
                    </p>
                </section>

                {/* Section: Contact Details */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Contact Details</h2>
                    <p className="mt-4">
                        Bostex’s Data Protection Officer (DPO) may be contacted if you have any
                        questions in relation to this privacy notice or exercising your legal rights. The
                        DPO may be contacted at:
                    </p>
                    <div className="mt-4 space-y-2">
                        <p><strong>Martina Troppmair</strong></p>
                        <p>bostextechintl@dp-serviceportal.com</p>
                        <p>4 Battery Road #25-01 Bank of China Building Singapore 049908</p>
                    </div>
                    <p className="mt-4">
                        Please visit the following link to reach out to us for any query:
                    </p>
                    <Link
    href="https://www.resguard-solutions.com/portal/dpo/dashboard/0187f8c52476880e15209879e15085a1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white underline break-all overflow-hidden whitespace-normal"
>
    https://www.resguard-solutions.com/portal/dpo/dashboard/0187f8c52476880e15209879e15085a1
</Link>
                    <p className="mt-4">
                        You also have the right to make a complaint at any time to the Personal Data
                        Protection Commission in Singapore (
                        <Link
                            href="https://www.pdpc.gov.sg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline"
                        >
                            www.pdpc.gov.sg
                        </Link>
                        ). We would appreciate the chance to deal with your concerns before you approach
                        any information commissioner authority, so please contact us in the first instance.
                    </p>
                </section>

                {/* Section: Definition of Personal Data */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Definition of Personal Data</h2>
                    <p className="mt-4">
                        “Personal data” means data/any information, whether true or not, about an
                        individual who can be identified:
                    </p>
                    <ul className="list-decimal list-inside mt-4 space-y-2">
                        <li>From that data.</li>
                        <li>
                            From that data and other information to which we have or are likely to have
                            access.
                        </li>
                    </ul>
                </section>

                {/* Section: Types of Personal Data Collected */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Types of Personal Data Collected</h2>
                    <p className="mt-4">
                        Depending on the nature of your interaction with us, Bostex may collect, use,
                        store and transfer various types of personal data about you including:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Identity data (e.g., name, title, passport/driving licence information).</li>
                        <li>Contact data (e.g., postal address, email address, telephone numbers).</li>
                        <li>Professional/employment data (e.g., employment history, qualifications).</li>
                        <li>Financial data (e.g., bank account details, credit history).</li>
                        <li>Family relationships data (e.g., marital status, spouse/partner identity).</li>
                        <li>Technical data (e.g., IP address, browser type, device data).</li>
                        <li>
                            Marketing and communications data (e.g., preferences in receiving marketing).
                        </li>
                    </ul>
                </section>

                {/* Section: Collection, Use, and Disclosure of Personal Data */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Collection, Use, and Disclosure of Personal Data</h2>
                    <p className="mt-4">
                        We generally do not collect your personal data unless:
                    </p>
                    <ol className="list-decimal list-inside mt-4 space-y-2">
                        <li>
                            It is provided to us voluntarily by you directly or via a third party who has been duly authorised by you to disclose your personal data to us (your “authorised representative”) after:
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>
                                    You (or your authorised representative) have been notified of the
                                    purposes for which the data is collected.
                                </li>
                                <li>
                                    You (or your authorised representative) have provided written consent.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Collection and use of personal data without consent is permitted or required by
                            the PDPA or other laws.
                        </li>
                    </ol>
                    <p className="mt-4">
                        We may collect and use your personal data for any or all of the following purposes:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Perform a contract we are about to enter into or have entered into with you.</li>
                        <li>Facilitate compliance with laws, customs, and regulations applicable to us.</li>
                        <li>Respond to requests, enquiries, or complaints received from you.</li>
                        <li>Establish, exercise, or defend legal proceedings and/or legal rights.</li>
                        <li>Compile statistics related to the use of our websites.</li>
                        <li>Send you marketing material.</li>
                        <li>Display targeted advertisements about products and services.</li>
                        <li>Review and process recruitment applications.</li>
                        <li>
                            Perform administrative, operational, and human resources processes for work-related purposes.
                        </li>
                    </ul>
                    <p className="mt-4">
                        Bostex does not generally rely on consent as a legal basis for processing your
                        personal data other than in relation to sending marketing communications to you via
                        email. You have the right to withdraw consent to marketing at any time by contacting
                        us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Accuracy of Personal Data</h2>
                    <p className="mt-4">
                        7. We generally rely on personal data provided by you (or your authorised
                        representative). In order to ensure that your personal data is current, complete and
                        accurate, please update us if there are changes to your personal data by informing our
                        Data Protection Officer in writing or via email at the contact details provided below.
                    </p>
                </section>

                {/* Section: Change of Purpose */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Change of Purpose</h2>
                    <p className="mt-4">
                        8. We will only use your personal data for the purposes for which we collected it,
                        unless we reasonably consider that we need to use it for another reason and that reason
                        is compatible with the original purpose. If we need to use your personal data for an
                        unrelated purpose, we will notify you and we will explain the legal basis which allows us
                        to do so.
                    </p>
                    <p className="mt-4">
                        Please note that we may process your personal data without your knowledge or consent, in
                        compliance with the above purposes, where this is required or permitted by law.
                    </p>
                </section>

                {/* Section: Sharing Personal Data */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Sharing Personal Data</h2>
                    <p className="mt-4">
                        9. Bostex may share your personal data with the parties set out below for the purposes
                        listed above.
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>
                            <strong>Internal:</strong> Other companies in the Bostex Group.
                        </li>
                        <li>
                            <strong>External:</strong> The following third parties:
                            <ul className="list-disc list-inside mt-2 space-y-2 pl-6">
                                <li>Service providers acting as processors who provide IT and system administration services.</li>
                                <li>
                                    Professional advisers acting as processors or joint controllers including lawyers, bankers,
                                    investment advisers, auditors, brokers, insurers and accountants who provide legal, banking,
                                    advisory, audit, insurance and accounting services.
                                </li>
                                <li>
                                    Tax authorities, regulators and other authorities acting as processors or joint controllers who
                                    require reporting or processing or information for tax, regulatory or legal compliance.
                                </li>
                                <li>Fraud prevention agencies acting as joint controllers.</li>
                                <li>
                                    Courts or other competent judicial or governmental body to comply with legal obligations such as
                                    combating money laundering and terrorist financing where such parties would be acting as joint
                                    controllers.
                                </li>
                                <li>
                                    Organisations and individuals if you have applied for a role with Bostex, in order for us to obtain
                                    references, confirmation of details, work-related application for courses/pass/approval etc.
                                    documents required including pass for on-site support at customer site.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Section: Data Security */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Data Security</h2>
                    <p className="mt-4">
                        10. To safeguard your personal data, Bostex has introduced security measures to protect
                        your personal data from being accidentally lost, used or accessed in an unauthorised way,
                        altered or disclosed. In addition, we limit access to your personal data to those who have
                        a business need to know. They will only process your personal data on our instructions and
                        they are subject to a duty of confidentiality.
                    </p>
                    <p className="mt-4">
                        Bostex has put in place procedures to deal with any suspected personal data breach and we
                        will notify you and any applicable regulator of a breach where we are legally required to
                        do so.
                    </p>
                    <p className="mt-4">
                        We generally do not transfer your personal data to countries outside of Singapore. However,
                        if we do so, we will obtain your consent for the transfer to be made and will take steps to
                        ensure that your personal data continues to receive a standard of protection that is at
                        least comparable to that provided under the PDPA.
                    </p>
                </section>

                {/* Section: Data Retention */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
                    <p className="mt-4">
                        11. Bostex will only retain your personal data for as long as necessary to fulfil the
                        purposes we collected it for, including for the purposes of satisfying any legal,
                        regulatory, tax, accounting, or reporting requirements.
                    </p>
                    <p className="mt-4">
                        To determine the appropriate retention period for personal data, we consider the amount,
                        nature and sensitivity of the personal data, the potential risk of harm from unauthorised
                        use or disclosure of your personal data, the purposes for which we process your personal
                        data and whether we can achieve those purposes through other means, and the applicable
                        legal requirements.
                    </p>
                </section>

                {/* Section: Your Legal Rights */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Your Legal Rights</h2>
                    <p className="mt-4">
                        12. Under certain circumstances, you have rights under data protection laws in relation to
                        your personal data we process, you have the right to:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Request access your personal data;</li>
                        <li>Request correction of your personal data;</li>
                        <li>Request restriction of the use of your personal data;</li>
                        <li>Request your personal data is erased; and</li>
                        <li>Object to processing of your personal data.</li>
                    </ul>
                    <p className="mt-4">
                        Where we have relied on consent or our legitimate interests to process your personal data,
                        you have the right to withdraw consent at any time. If you choose to do so, we may not be
                        able to provide our services to you.
                    </p>
                    <p className="mt-4">
                        If you wish to exercise any of the rights set out above please contact the DPO.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Withdrawing Your Consent</h2>
                    <p className="mt-4">
                        13. The consent that you provide for the collection, use and disclosure of your
                        personal data will remain valid until such time it is being withdrawn by you in writing.
                        You may withdraw consent and request us to stop collecting, using and/or disclosing
                        your personal data for any or all of the purposes listed above by submitting your request
                        in writing or via email to our Data Protection Officer at the contact details provided
                        below.
                    </p>
                    <p className="mt-4">
                        Upon receipt of your written request to withdraw your consent, we may require
                        reasonable time (depending on the complexity of the request and its impact on our
                        relationship with you) for your request to be processed and for us to notify you of the
                        consequences of us acceding to the same, including any legal consequences which may
                        affect your rights and liabilities to us. In general, we shall seek to process your request
                        within thirty (30) business days of receiving it.
                    </p>
                    <p className="mt-4">
                        Whilst we respect your decision to withdraw your consent, please note that depending
                        on the nature and scope of your request, we may not be in a position to continue
                        providing our goods or services to you and we shall, in such circumstances, notify you
                        before completing the processing of your request. Should you decide to cancel your
                        withdrawal of consent, please inform us in writing in the manner described in clause 7
                        above.
                    </p>
                    <p className="mt-4">
                        Please note that withdrawing consent does not affect our right to continue to collect,
                        use and disclose personal data where such collection, use and disclosure without consent
                        is permitted or required under applicable laws.
                    </p>
                </section>

                {/* Section: Access to and Correction of Personal Data */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Access to and Correction of Personal Data</h2>
                    <p className="mt-4">
                        14. If you wish to make (a) an access request for access to a copy of the personal data
                        which we hold about you or information about the ways in which we use or disclose your
                        personal data, or (b) a correction request to correct or update any of your personal data
                        which we hold about you, you may submit your request in writing or via email to our Data
                        Protection Officer at the contact details provided below.
                    </p>
                    <p className="mt-4">
                        Please note that a reasonable fee may be charged for an access request. If so, we will
                        inform you of the fee before processing your request.
                    </p>
                    <p className="mt-4">
                        We will respond to your request as soon as reasonably possible. In general, our response
                        will be within thirty (30) business days. Should we not be able to respond to your request
                        within thirty (30) days after receiving your request, we will inform you in writing within
                        thirty (30) days of the time by which we will be able to respond to your request. If we are
                        unable to provide you with any personal data or to make a correction requested by you, we
                        shall generally inform you of the reasons why we are unable to do so (except where we are
                        not required to do so under the PDPA).
                    </p>
                </section>

                {/* Section: Specific Information */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Specific Information</h2>

                    {/* Subsection: Website */}
                    {/* <h3 className="text-xl font-semibold text-white mt-8">Website</h3> */}
                    <p className="mt-4">
                        15. Every time a user visits our website, technical information of the user is collected
                        for the contributions to the subject of information security. Information (also referred to
                        as server log files) is automatically collected by us or the webspace provider.
                    </p>
                    <p className="mt-4">
                        Among other information this includes: website name, file, date, data volume, web browser
                        and web browser version, operating system, the domain name of your Internet provider, the
                        referrer URL (the page from which you accessed our offer) and the IP address.
                    </p>
                    <p className="mt-4">
                        Without this information, it would not be technically possible to deliver and display the
                        website content. In this respect, collecting data is absolutely necessary. Furthermore, we
                        use this information for statistical purposes. They help us to optimise our services and
                        technology. We also reserve the right to check the log files in case of suspected illegal
                        use of our services.
                    </p>
                    <p className="mt-4">
                        Bostex Technologies International Pte Ltd does not track its customers over time and
                        across third-party websites to provide targeted advertising and therefore does not respond
                        to Do Not Track (DNT) signals.
                    </p>

                    {/* Subsection: Cookies */}
                    {/* <h3 className="text-xl font-semibold text-white mt-8">Cookies</h3> */}
                    <p className="mt-4">
                        16. Our website uses cookies. Cookies are text files that are stored on your computer by
                        the server. They contain information about the browser, the IP address, the operating system
                        and the Internet connection. We will not pass on this data to third parties or link it to
                        personal data without your consent.
                    </p>
                    <p className="mt-4">
                        Cookies have two main purposes. They help us make it easier for you to navigate through
                        our services and they also enable the website to be displayed correctly. They are not used
                        to spread viruses or to open programs.
                    </p>

                    {/* Subsection: Integrating Third-Party Services and Content */}
                    {/* <h3 className="text-xl font-semibold text-white mt-8">Integrating Third-Party Services and Content</h3> */}
                    <p className="mt-4">
                        17. Our range includes content, services and services from other suppliers. For example,
                        this might be videos, graphics or images from other websites. In order for this data to be
                        retrieved and displayed in the user’s browser, transmitting the IP address is absolutely
                        necessary. The providers (hereinafter referred to as “third-party providers”) detect the IP
                        address of the respective user.
                    </p>

                    {/* Subsection: Contact Form */}
                    {/* <h3 className="text-xl font-semibold text-white mt-8">Contact Form</h3> */}
                    <p className="mt-4">
                        18. If you contact us via the online contact form or by email, we will save the information
                        you provide, your IP address and the time it was sent. This allows us to answer your request
                        and ask possible follow-up questions.
                    </p>

                    {/* Subsection: Google Analytics */}
                    {/* <h3 className="text-xl font-semibold text-white mt-8">Google Analytics</h3> */}
                    <p className="mt-4">
                        19. Our website or email service provider may use the standard analysis tool “Google
                        Analytics” of Google Inc. (short: “Google”). Google Analytics uses cookies (text files that
                        are stored on the computer). The generated information about the use of the website is
                        transmitted to an American server of Google and stored for further processing.
                    </p>
                    <p className="mt-4">
                        The data collected by Google Analytics is evaluated to generate reports on user activity
                        and to optimize your user experience. In order to contradict the storage of the cookies,
                        please make the appropriate setting in your browser. Please note that you can only use other
                        areas of this website to a limited extent.
                    </p>
                </section>

                {/* Section: Changes to the Privacy Notice */}
                <section>
                    <h2 className="text-2xl font-semibold text-white">Changes to the Privacy Notice</h2>
                    <p className="mt-4">
                        20. This Privacy Policy is last updated on 7/12/2022.
                    </p>
                    <p className="mt-4">
                        We may make changes to this privacy notice from time to time without notice, in which case
                        the date of the notice will be updated.
                    </p>
                    <p className="mt-4">
                        It is important that the personal data we hold about you is accurate and current. Please
                        keep us informed if your personal data changes during your relationship with us.
                    </p>
                    <p className="mt-4">
                        As part of our efforts to ensure that we properly manage, protect and process your personal
                        data, we will be reviewing our policies, procedures and processes from time to time.
                    </p>
                    <p className="mt-4">
                        We reserve the right to amend the terms of this Personal Data Protection Policy at our
                        discretion. Any amended Policy will be posted on our Website. No individual notice will be
                        sent to you.
                    </p>
                </section>

                <div className="max-w-4xl mx-auto mt-16 bg-gray-800 text-gray-300 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-white">Data Protection Officer</h3>
                    <p className="mt-4">
                        <strong>Martina Troppmair</strong>
                    </p>
                    <p className="mt-2">bostextechintl@dp-serviceportal.com</p>
                    <p className="mt-2">4 Battery Road #25-01 Bank of China Building, Singapore 049908</p>
                    <p className="mt-6">
                        Please visit the following link to reach out to us for any query:
                    </p>
                    <Link
                        href="https://www.resguard-solutions.com/portal/dpo/dashboard/0187f8c52476880e15209879e15085a1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-blue-400 transition-colors duration-200"
                    >
                        DPO Service Portal
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PDPA;





