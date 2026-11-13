import axios from "axios";

const base = axios.create({
    baseURL: 'https://uoohusjgoqnewibevudd.supabase.co',
    headers: {
        'apikey': 'sb_publishable_G6KrU-0cn9GWD4lsWlYMSw_JsxXjXqK',
        "Content-Type": 'application/json'
    }
});

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
})

export default api