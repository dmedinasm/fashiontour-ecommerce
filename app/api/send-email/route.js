import { EmailTemplate } from '../../_components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req) {
  const body = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [body.email],
      subject: 'Orders from Fashion Tour',
      react: EmailTemplate({ body })
    })

    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json({ error })
  }
}
