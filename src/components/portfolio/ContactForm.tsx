import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { sendContactEmail } from "@/lib/contact.functions";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

const initialState: ContactFields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactFields>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sendEmail = useServerFn(sendContactEmail);

  const handleChange = (field: keyof ContactFields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFields;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      await sendEmail({ data: parsed.data });
      setSubmitted(true);
      setValues(initialState);
      toast.success("Message sent — I'll be in touch soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const charCount = values.message.length;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral">
          ↳ Send a message
        </p>
        <span className="font-mono text-[10px] uppercase tracking-widest text-cream/40">
          ~ 1 min
        </span>
      </div>

      <div className="grid gap-5">
        <Field
          label="Your name"
          htmlFor="cf-name"
          error={errors.name}
          index="01"
        >
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Jane Doe"
            disabled={submitting}
            className="w-full bg-transparent border-0 border-b border-white/15 focus:border-coral outline-none py-2.5 text-cream placeholder:text-cream/30 text-base transition-colors"
          />
        </Field>

        <Field
          label="Email address"
          htmlFor="cf-email"
          error={errors.email}
          index="02"
        >
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="jane@company.com"
            disabled={submitting}
            className="w-full bg-transparent border-0 border-b border-white/15 focus:border-coral outline-none py-2.5 text-cream placeholder:text-cream/30 text-base transition-colors"
          />
        </Field>

        <Field
          label="Your message"
          htmlFor="cf-message"
          error={errors.message}
          index="03"
          right={
            <span
              className={`font-mono text-[10px] tabular-nums ${
                charCount > 1000 ? "text-coral" : "text-cream/40"
              }`}
            >
              {charCount}/1000
            </span>
          }
        >
          <textarea
            id="cf-message"
            rows={4}
            value={values.message}
            onChange={handleChange("message")}
            placeholder="Tell me about your project, idea, or just say hi…"
            disabled={submitting}
            maxLength={1000}
            className="w-full bg-transparent border-0 border-b border-white/15 focus:border-coral outline-none py-2.5 text-cream placeholder:text-cream/30 text-base resize-none transition-colors"
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40">
          {submitted ? "✓ Message delivered" : "Replies usually within 24h"}
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-coral text-white px-6 py-3.5 text-sm font-medium hover:bg-cream hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-80">
            {submitting ? "Sending" : "Send"}
          </span>
          <span className="text-base">
            {submitting ? "Please wait…" : "Deliver message"}
          </span>
          <span
            className={`transition-transform ${
              submitting ? "" : "group-hover:translate-x-1"
            }`}
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  index,
  right,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  index: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label
          htmlFor={htmlFor}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/50 flex items-center gap-2"
        >
          <span className="text-coral/70">{index}</span>
          {label}
        </label>
        {right}
      </div>
      {children}
      {error ? (
        <p className="mt-1.5 font-mono text-[11px] text-coral">↳ {error}</p>
      ) : null}
    </div>
  );
}
