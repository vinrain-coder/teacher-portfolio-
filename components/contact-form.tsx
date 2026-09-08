"use client";

import { useActionState, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagicButton from "./ui/magic-button";
import { IoMdSend } from "react-icons/io";
import { CheckCircle2, AlertCircle } from "lucide-react";

import { sendContactEmail } from "@/app/actions";

const initialState = {
  success: false,
  error: "",
} as const;

type FormState = {
  success: boolean;
  error?: string;
};

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    (_prevState: FormState, formData: FormData) =>
      sendContactEmail(formData) as Promise<FormState>,
    initialState,
  );
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative rounded-2xl border border-border p-8 md:p-10 bg-card">
        <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-50 blur-sm -z-10" />

        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Talk
            </span>
          </h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            Have a question or want to connect? Fill out the form below and
            I&apos;ll get back to you.
          </p>
        </div>

        <form action={formAction} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isPending}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed ${
                  focusedField === "name"
                    ? "border-primary shadow-[0_0_15px_rgba(13,148,136,0.15)]"
                    : "border-border hover:border-muted-foreground/50"
                }`}
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isPending}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed ${
                  focusedField === "email"
                    ? "border-primary shadow-[0_0_15px_rgba(13,148,136,0.15)]"
                    : "border-border hover:border-muted-foreground/50"
                }`}
                placeholder="yourname@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-foreground"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              disabled={isPending}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed ${
                focusedField === "subject"
                  ? "border-primary shadow-[0_0_15px_rgba(13,148,136,0.15)]"
                  : "border-border hover:border-muted-foreground/50"
              }`}
              placeholder="What is this about?"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={isPending}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                focusedField === "message"
                  ? "border-primary shadow-[0_0_15px_rgba(13,148,136,0.15)]"
                  : "border-border hover:border-muted-foreground/50"
              }`}
              placeholder="Tell me what's on your mind..."
            />
          </div>

          <AnimatePresence mode="wait">
            {state.success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary"
              >
                <CheckCircle2 className="text-lg shrink-0" />
                <p className="text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : state.error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive"
              >
                <AlertCircle className="text-lg shrink-0" />
                <p className="text-sm">{state.error}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="pt-2">
            <MagicButton
              title={isPending ? "Sending..." : "Send Message"}
              icon={<IoMdSend />}
              position="right"
              otherClasses="!rounded-full !w-full md:w-auto"
              type="submit"
              disabled={isPending}
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
