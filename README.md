# Value Family Hospital inpatient feedback

This Next.js app is the inpatient feedback UI. It shares the Supabase database with the outpatient app in `../feedback`, while each UI can be hosted independently. The admin panel lives in that app.

## Run

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` using the same Supabase project as the outpatient app. Then run:

```sh
npm install
npm run dev
```

The form writes submissions with `source: inpatient` and stores its four ratings in `inpatient_answers`. The shared schema change is documented in `../feedback/database/inpatient-responses.sql`. The public Supabase key is used only for inserting feedback; the existing admin app handles authenticated reads.
