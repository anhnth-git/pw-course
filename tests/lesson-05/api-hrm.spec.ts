import { test, expect } from '@playwright/test';

test("@api Test api gửi mail ", async ({ request }) => {

    const emails = ["anhnth@etc.vn", "linhpy@etc.vn", "epay_hrm01@epayjsc.com", "epay_hrm02@epayjsc.com"];

    for (let i = 0; i < emails.length; i++) {
        const body = {
            "employee_email": emails[i]
        };

        let apiUrl = `https://hrm.etc.vn/api/v1/2fa-generate-qr-code-employee`;
        if (emails[i].includes("epayjsc.com")) {
            apiUrl = `https://hrm.epayservices.com.vn/api/v1/2fa-generate-qr-code-employee`;

        }

        // Gọi API gửi authen HRM
        const response = await request.post(apiUrl, {
            data: body
        });

        // Lấy ra status code -> assert status code = 200
        const statusCode = response.status();
        expect(statusCode).toEqual(200);
    }
});

