export const allowedOrigins: string | RegExp | (string | RegExp)[] = [
    "localhost:3000"
];

export const allowedMethods: string[] = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
];

export const allowedHeaders: string[] = [
    "Content-Type",
    "Content-Length",
    "Content-Transfer-Encoding",
    "Authorization"
]