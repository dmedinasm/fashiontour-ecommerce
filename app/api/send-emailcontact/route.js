import { EmailContact } from '../../_components/EmailContact'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req) {
  const body = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['dmedinasm@gmail.com'],
      subject: `message from ${body.name}`,
      react: EmailContact({ body })
    })

    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json({ error })
  }
}
