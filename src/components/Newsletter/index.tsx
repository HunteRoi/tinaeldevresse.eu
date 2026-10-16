import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Newsletter({ url }: { url: string }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<Status>('idle');

    const submit = async () => {
        if (!isEmail(email)) {
            setStatus('error');
            return;
        }

        const params = new URL(url).searchParams;
        const body = new URLSearchParams({ EMAIL: email });
        // Honeypot field expected by Mailchimp embedded forms
        body.append(`b_${params.get('u')}_${params.get('id')}`, '');

        setStatus('sending');
        try {
            // Mailchimp sends no CORS headers: the response is opaque, success can't be verified
            await fetch(url, { method: 'POST', mode: 'no-cors', body });
            setEmail('');
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3>
                <Translate
                    id='newsletter.title'
                    description='The newsletter title'
                >
                    Stay up to date, subscribe to my newsletter!
                </Translate>
            </h3>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type='email'
                    placeholder={translate({
                        id: 'newsletter.placeholder',
                        message: 'Enter your email address',
                        description: 'The placeholder within the input'
                    })}
                    onKeyDown={(event) =>
                        event.key === 'Enter' ? submit() : null
                    }
                    required
                    autoComplete='email'
                />
                <a
                    className={styles.submit + ' ' + 'tooltip'}
                    rel='noopener'
                    onClick={submit}
                    type='submit'
                >
                    <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='far'
                        data-icon='paper-plane'
                        className='svg-inline--fa fa-paper-plane fa-w-16'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                    >
                        <path
                            fill='currentColor'
                            d='M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z'
                        ></path>
                    </svg>
                    <span className='tooltipText'>Submit!</span>
                </a>
            </div>

            {status === 'sending' && (
                <div className={`${styles.status} ${styles.sending}`}>
                    <Translate
                        id='newsletter.sending'
                        description='The text stating the email is being registered in the newsletter list'
                    >
                        Sending...
                    </Translate>
                </div>
            )}
            {status === 'error' && (
                <div className={`${styles.status} ${styles.error}`}>
                    <Translate
                        id='newsletter.error'
                        description='The text stating the subscription failed'
                    >
                        Please enter a valid email address and try again.
                    </Translate>
                </div>
            )}
            {status === 'success' && (
                <div className={`${styles.status} ${styles.success}`}>
                    <Translate
                        id='newsletter.success'
                        description='The text stating the subscription succeeded'
                    >
                        Thanks for subscribing! You will receive an email
                        when a new post is published.
                    </Translate>
                </div>
            )}
        </div>
    );
}
