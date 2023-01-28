import { IFormTyre, IContactForm } from "../types/form";

export const sendTyreForm = async (data: IFormTyre) => fetch('/api/tyre', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}).then(res => {
    if (!res.ok) throw new Error("Failed to send message")
    return res.json()
})

export const sendContactForm = async (data: IContactForm) => fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}).then(res => {
    if (!res.ok) throw new Error("Failed to send message")
    return res.json()
})