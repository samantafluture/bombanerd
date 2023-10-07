const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const userEmail = req.body.email;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'YOUR_GMAIL_ADDRESS',
            pass: 'YOUR_GMAIL_PASSWORD'
        }
    });

    let mailOptions = {
        from: 'YOUR_GMAIL_ADDRESS',
        to: 'bombanerdbr@gmail.com',
        subject: 'Interesse no Lançamento do Site',
        text: `Gostaria de ser notificado sobre o lançamento do site. Meu email é: ${userEmail}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ status: 'success' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 'error' });
    }
};
