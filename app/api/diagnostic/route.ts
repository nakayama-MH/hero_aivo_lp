import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, position } = body

    const transporter = nodemailer.createTransport({
      host: 'smtp.hetemail.jp',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'nakayama@meta-heroes.io',
        pass: 'Aoimomusi1276',
      },
    })

    const mailOptions = {
      from: '"HERO AIVO 診断フォーム" <nakayama@meta-heroes.io>',
      to: 'nakayama@meta-heroes.io, maemura@meta-heroes.io',
      subject: `【無料診断】新しいリード獲得: ${company} ${name}様`,
      text: `
HERO AIVO 無料診断フォームから新しい申し込みがありました。

【会社名】
${company}

【役職】
${position || '未入力'}

【お名前】
${name}

【メールアドレス】
${email}

【電話番号】
${phone}

---
このメールはシステムから自動送信されています。
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}
