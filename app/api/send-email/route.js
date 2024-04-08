import { EmailTemplate } from '../../_components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST () {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['dmedinasm@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' })
    })

    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json({ error })
  }
}
