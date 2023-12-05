import React from 'react'

const TERMS_LIST = [
  {
    title: 'Service Usage',
    description:
      'This service is provided to convert YouTube videos into MP3 audio files. By entering a YouTube URL into our platform, you confirm that you have permission to convert and download the content of that video.',
  },
  {
    title: 'Responsible Use',
    description:
      'It is not permitted to use this service to convert copyrighted content or \
      private videos without proper authorization.',
  },
  {
    title: 'Intellectual Property',
    description:
      'All content converted using our service is the responsibility of the user. \
      We are not liable for any misuse or illegal use of the downloaded content.',
  },
  {
    title: 'Privacy and Security',
    description:
      'We respect your privacy. We do not store provided URLs or converted audio files \
      on our servers. However, to enhance our services, we may collect anonymous data \
      about site usage through cookies or analytics tools.',
  },
  {
    title: 'Service Availability',
    description:
      'We will make every effort to ensure the service is available, but we do not \
      guarantee continuous or uninterrupted availability.',
  },
  {
    title: 'Changes to Terms',
    description:
      'We reserve the right to modify or update these Terms of Service at any time. \
      We recommend periodically reviewing this page to stay informed about any changes.',
  },
]

const TermsOfService = () => {
  return (
    <div className="text-left text-sm leading-loose">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-3">
        Welcome to <strong>Yoump</strong>! Your stylish youtube to mp3 converter. By using our site, you agree
        to the following terms and conditions:
      </p>

      <ul>
        {TERMS_LIST.map((term) => (
          <li key={term.title} className='mb-2'>
            <strong className='text-emerald-600 font-medium dark:text-emerald-500'>{term.title}</strong>: {term.description}
          </li>
        ))}
      </ul>

      <strong className='block mt-4 font-medium'>
        By using our service, you fully agree and accept these terms.
      </strong>
    </div>
  )
}

export default TermsOfService
