import { GITHUB_URL, LINKEDIN_URL } from "@/constants";

import { FormDataType } from "@/@types";
import nodemailer from "nodemailer";

const config = {
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_ID,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
  },
};

export const transporter = nodemailer.createTransport(config);

// contact form html template

export const contactFormHtmlEmailTemplate = ({
  email,
  message,
  name,
}: FormDataType) => {
  return `
  <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mail from vidhanshu for contacting him...</title>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

            * {
                padding: 0;
                margin: 0;

                text-decoration: none;
                font-family: Inter, Roboto, Ubuntu, sans-serif;
                font-size: 16px;
            }

            .root {
                max-width: 750px;
                color: black;
            }
            .root div {
                padding: 10px 0;
            }

            .root div.quote {
                padding-left: 15px;
                padding: 10px 15px;
                border-left: 2px solid grey;
                margin-left: 5px;
                color: grey;
            }

            a,
            a:hover,
            a:active,
            a:visited,
            a:focus {
                font-weight: 600;
                color: black;
                text-decoration: underline;
            }

            img {
              margin: 0 auto;
              dispaly: block;
            }
        </style>
    </head>
    <body>
        <div class="root">
            <img src="https://vidhanshu.vercel.app/_next/image?url=%2Fassets%2Fheader-light.png&w=384&q=75" width="100" height="100"/>

            <div>
                <p>Hi <a href="mailto:${email}">${name}</a>!</p>
            </div>

            <div>
                <p>
                    Thanks for contacting me! I am glad that you got to this
                    point. I look forward to communicating with you and will
                    respond very soon. Till then, you can also connect with me
                    on
                    <a href="${LINKEDIN_URL}">LinkedIn</a>
                    for more robust communication.
                </p>
            </div>

            <div>
                <p>Regards,</p>
                <p>
                    <a href="${GITHUB_URL}">Vidhanshu Borade</a>
                </p>
                <p>Developer</p>
            </div>

            <div></div>

            <div class="quote">
                <p>Your Message -</p>
                <p>${message.replaceAll("\\n", "<br />")}</p>
            </div>
        </div>
    </body>
</html>
    `;
};

// newsletter html template
type newBlogPublishedHtmlEmailTemplateType = {
  title: string;
  description: string;
  link: string;
  image?: string;
};
export const newBlogPublishedHtmlEmailTemplate = ({
  description,
  title,
  link,
  image,
}: newBlogPublishedHtmlEmailTemplateType) => {
  return `
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>mail from vidhanshu for subscribing to his newsletter...</title>
    
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
                * {
                    padding: 0;
                    margin: 0;
    
                    text-decoration: none;
                    font-family: Inter, Roboto, Ubuntu, sans-serif;
                    font-size: 16px;
                }
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f1f1f1;
                  padding: 20px;
                }
            
                .container {
                  max-width: 500px;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
            
                .container h2 {
                  text-align: center;
                  margin-bottom: 20px;
                }
            
                .container p {
                  margin-bottom: 10px;
                }
            
                .container .cta-button {
                  display: block;
                  text-align: center;
                  margin-top: 20px;
                }
            
                .container .cta-button a {
                  display: inline-block;
                  background-color: #4CAF50;
                  color: #fff;
                  padding: 10px 20px;
                  text-decoration: none;
                  border-radius: 3px;
                }
            
                .container .cta-button a:hover {
                  background-color: #45a049;
                }

                .img-container {
                  margin-bottom: 20px;
                }
            </style>
            </head>
            <body>
                <div class="container">
                  <center class="img-container">
                    ${
                      image
                        ? "<img src='" + image + "' width='200' height='150'/>"
                        : ""
                    }
                  </center>

                  <h2>New Blog Published</h2>
                  <p>We are excited to announce that a new blog has been published on our website. Stay updated with the latest content and insights.</p>
                  <p><b>Title:</b> ${title}</p>
                  <p><b>Summary:</b> ${description}</p>
                  <div class="cta-button">
                    <a href="${link}">Read Now</a>
                  </div>
                </div>
            </body>
    </html>
`;
};
