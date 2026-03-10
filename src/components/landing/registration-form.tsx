"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Flame,
  ImageUp,
  Mail,
  Music2,
  School,
  Trash2,
  Users,
  X,
} from "lucide-react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface RegistrationFormProps {
  locale: Locale;
  formContent: ProgramContent["form"];
}

export function RegistrationForm({ locale, formContent }: RegistrationFormProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [proofFiles, setProofFiles] = useState<File[]>([]);
  const [proofError, setProofError] = useState<string | null>(null);

  const urgencyTitle = locale === "id" ? "Batch 2 dibuka" : "Batch 2 is now open";
  const urgencyDescription =
    locale === "id"
      ? "Tersisa 30 orang lagi. Prioritas untuk pendaftar tercepat."
      : "Only 30 spots left. Priority goes to the fastest applicants.";
  const urgencyBadge =
    locale === "id" ? "Rekrutmen Aktif" : "Active Recruitment";
  const remainingLabel = locale === "id" ? "Slot tersisa" : "spots left";
  const progressLabel =
    locale === "id" ? "Kuota batch hampir penuh" : "Batch quota is nearly full";
  const responseHint =
    locale === "id"
      ? "Tim akan menghubungi pendaftar terpilih via WhatsApp."
      : "The team will contact selected applicants via WhatsApp.";
  const registerLabel = t(formContent.submit, locale);
  const formTitle =
    locale === "id"
      ? "LIST FIELDS FORM PENDAFTARAN"
      : "REGISTRATION FORM FIELDS";
  const formSubtitle =
    locale === "id"
      ? "Pelatihan Content Creator - Duta Teladan Universitas STEKOM"
      : "Content Creator Training - Duta Teladan Universitas STEKOM";
  const submitLabel = locale === "id" ? "Kirim Pendaftaran" : "Submit Registration";
  const submitSuccess =
    locale === "id"
      ? "Form berhasil dikirim. Tim kami akan segera menghubungi kamu."
      : "Form submitted successfully. Our team will contact you soon.";
  const submitErrorFallback =
    locale === "id"
      ? "Terjadi kendala saat mengirim form. Coba lagi."
      : "There was a problem submitting the form. Please try again.";
  const submittingLabel =
    locale === "id" ? "Mengirim..." : "Submitting...";
  const formHint =
    locale === "id"
      ? "Pastikan data yang kamu isi valid dan dapat dihubungi."
      : "Make sure all information is valid and reachable.";
  const followProofHint =
    locale === "id"
      ? "Unggah screenshot bukti bahwa kamu sudah mengikuti 4 akun berikut: Universitas STEKOM (TikTok & Instagram) dan TopLoker.com (TikTok & Instagram)."
      : "Upload screenshots proving you follow 4 accounts: Universitas STEKOM (TikTok & Instagram) and TopLoker.com (TikTok & Instagram).";
  const followProofMultiHint =
    locale === "id"
      ? "Bisa upload beberapa file sekaligus. Jika salah upload, hapus file yang tidak sesuai."
      : "You can upload multiple files at once. If wrong, remove the incorrect file.";
  const followProofRequiredError =
    locale === "id"
      ? "Upload minimal 1 file bukti follow."
      : "Upload at least one follow proof file.";
  const followAccounts = [
    {
      name: "Universitas STEKOM",
      tiktok: "https://tiktok.com/@stekomuniversity",
      tiktokHandle: "@stekomuniversity",
      instagram: "https://instagram.com/universitasstekom",
      instagramHandle: "@universitasstekom",
    },
    {
      name: "TopLoker.com",
      tiktok: "https://tiktok.com/@toploker.com",
      tiktokHandle: "@toploker.com",
      instagram: "https://instagram.com/toplokercom",
      instagramHandle: "@toplokercom",
    },
  ];
  const selectedFilesLabel =
    locale === "id" ? "File terpilih" : "Selected files";
  const removeAllFilesLabel =
    locale === "id" ? "Hapus semua" : "Remove all";
  const removeSingleFileLabel =
    locale === "id" ? "Hapus file" : "Remove file";
  const motivationHintTitle =
    locale === "id" ? "Ceritakan secara singkat:" : "Briefly explain:";
  const motivationHints =
    locale === "id"
      ? [
          "alasan ingin belajar content creator",
          "tujuan mengikuti pelatihan",
          "manfaat yang ingin kamu dapatkan dari pelatihan ini",
        ]
      : [
          "your reason for learning content creation",
          "your goal in joining this training",
          "the benefits you expect from this program",
        ];
  const basicFields = [
    {
      id: "fullName",
      number: "1",
      label: locale === "id" ? "Nama Lengkap" : "Full Name",
      helper:
        locale === "id"
          ? "Tuliskan nama lengkap sesuai identitas."
          : "Write your full legal name.",
      placeholder:
        locale === "id"
          ? "Contoh: Budi Santoso"
          : "Example: John Doe",
      type: "text",
      icon: Users,
    },
    {
      id: "school",
      number: "2",
      label: locale === "id" ? "Asal Sekolah / Instansi" : "School / Institution",
      helper:
        locale === "id"
          ? "Contoh: SMKN 1 Surabaya."
          : "Example: Vocational High School 1 Surabaya.",
      placeholder:
        locale === "id"
          ? "Masukkan asal sekolah atau instansi"
          : "Enter your school or institution",
      type: "text",
      icon: School,
    },
    {
      id: "email",
      number: "3",
      label: locale === "id" ? "Email Aktif" : "Active Email",
      helper:
        locale === "id"
          ? "Gunakan email aktif untuk menerima informasi terkait pelatihan."
          : "Use an active email for training information updates.",
      placeholder:
        locale === "id"
          ? "nama@email.com"
          : "name@email.com",
      type: "email",
      icon: Mail,
    },
    {
      id: "whatsapp",
      number: "4",
      label: locale === "id" ? "Nomor WhatsApp" : "WhatsApp Number",
      helper:
        locale === "id"
          ? "Masukkan nomor WhatsApp aktif yang dapat dihubungi."
          : "Enter an active WhatsApp number that can be contacted.",
      placeholder:
        locale === "id"
          ? "Contoh: 08xxxxxxxxxx"
          : "Example: 08xxxxxxxxxx",
      type: "tel",
      icon: Users,
    },
    {
      id: "tiktok",
      number: "5",
      label: locale === "id" ? "Akun TikTok" : "TikTok Account",
      helper:
        locale === "id"
          ? "Tuliskan username atau link akun TikTok kamu."
          : "Write your TikTok username or account link.",
      placeholder:
        locale === "id"
          ? "@username / https://tiktok.com/..."
          : "@username / https://tiktok.com/...",
      type: "text",
      icon: Music2,
    },
    {
      id: "instagram",
      number: "6",
      label: locale === "id" ? "Akun Instagram" : "Instagram Account",
      helper:
        locale === "id"
          ? "Tuliskan username atau link akun Instagram kamu."
          : "Write your Instagram username or account link.",
      placeholder:
        locale === "id"
          ? "@username / https://instagram.com/..."
          : "@username / https://instagram.com/...",
      type: "text",
      icon: Users,
    },
  ] as const;

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
      setProofFiles([]);
      setProofError(null);
    }
  };

  const handleProofChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const incomingFiles = Array.from(event.target.files ?? []);
    if (incomingFiles.length === 0) {
      return;
    }

    setProofFiles((currentFiles) => {
      const fileMap = new Map(
        currentFiles.map((file) => [
          `${file.name}-${file.size}-${file.lastModified}`,
          file,
        ]),
      );

      incomingFiles.forEach((file) => {
        fileMap.set(`${file.name}-${file.size}-${file.lastModified}`, file);
      });

      return Array.from(fileMap.values());
    });

    setProofError(null);
    setSubmitError(null);
    setIsSubmitted(false);
    event.target.value = "";
  };

  const removeProofFile = (fileToRemove: File) => {
    setProofFiles((currentFiles) =>
      currentFiles.filter(
        (file) =>
          !(
            file.name === fileToRemove.name &&
            file.size === fileToRemove.size &&
            file.lastModified === fileToRemove.lastModified
          ),
      ),
    );
    setIsSubmitted(false);
  };

  const clearProofFiles = () => {
    setProofFiles([]);
    setProofError(null);
    setSubmitError(null);
    setIsSubmitted(false);
  };

  const formatFileSize = (sizeInBytes: number) => {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes} B`;
    }
    if (sizeInBytes < 1024 * 1024) {
      return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    }
    return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (proofFiles.length === 0) {
      setProofError(followProofRequiredError);
      setIsSubmitted(false);
      return;
    }

    setProofError(null);
    setSubmitError(null);
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      const form = event.currentTarget;
      const payload = new FormData(form);

      payload.delete("followProof");
      proofFiles.forEach((file) => {
        payload.append("followProof", file, file.name);
      });

      const response = await fetch("/api/register", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string; success?: boolean }
        | null;

      if (!response.ok) {
        throw new Error(result?.error || submitErrorFallback);
      }

      form.reset();
      setProofFiles([]);
      setIsSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error && error.message ? error.message : submitErrorFallback;
      setSubmitError(message);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-slate-300/30 sm:p-8 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-rose-700 dark:border-rose-400/35 dark:bg-rose-500/10 dark:text-rose-200">
            <Flame className="size-3.5 animate-pulse" />
            {urgencyTitle}
          </span>
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 dark:border-slate-600/70 dark:bg-slate-800/70 dark:text-slate-200">
            {urgencyBadge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 sm:text-2xl dark:text-slate-100">
          {t(formContent.title, locale)}
        </h3>
        <p className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
          {t(formContent.description, locale)}
        </p>
      </div>

      <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
        <div className="rounded-2xl border border-rose-200/80 bg-gradient-to-r from-rose-50 via-white to-rose-50 px-4 py-4 text-rose-900 sm:p-5 dark:border-rose-400/30 dark:bg-[linear-gradient(120deg,rgba(244,63,94,0.14),rgba(15,23,42,0.5),rgba(251,113,133,0.14))] dark:text-rose-100">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold sm:text-base">
                <Users className="size-4 shrink-0" />
                {urgencyDescription}
              </p>
            </div>

            <div className="w-full rounded-xl border border-rose-200 bg-white/90 px-3 py-2.5 text-center sm:w-auto sm:min-w-36 dark:border-rose-400/30 dark:bg-slate-900/65">
              <p className="text-2xl font-extrabold leading-none text-rose-700 dark:text-rose-200">
                30
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-rose-700/80 dark:text-rose-200/80">
                {remainingLabel}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-rose-700/80 dark:text-rose-200/80">
              <span>{progressLabel}</span>
              <span>70%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-rose-100 dark:bg-rose-200/20">
              <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
            </div>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button
              type="button"
              size="lg"
              className={cn(
                "group h-12 w-full rounded-full bg-slate-900 text-base font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
                "focus-visible:ring-offset-0",
              )}
            >
              <span className="inline-flex items-center gap-2">
                {registerLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </DialogTrigger>

          <DialogContent className="left-0 top-0 h-[100dvh] w-screen max-h-[100dvh] max-w-none translate-x-0 translate-y-0 overflow-hidden rounded-none border-0 bg-white p-0 shadow-2xl sm:left-1/2 sm:top-1/2 sm:h-auto sm:w-[calc(100%-1.5rem)] sm:max-h-[92vh] sm:max-w-4xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl sm:border sm:border-slate-200/80 dark:bg-slate-900 sm:dark:border-slate-700/80">
            <div className="h-[100dvh] overflow-y-auto sm:h-auto sm:max-h-[92vh]">
              <div className="border-b border-slate-200/70 bg-[linear-gradient(160deg,#f8fbff_0%,#f4f8ff_45%,#fff4f8_100%)] px-4 pb-4 pt-14 sm:px-7 sm:py-6 dark:border-slate-700/70 dark:bg-[linear-gradient(160deg,#15213a_0%,#1a2844_45%,#2b203d_100%)]">
                <DialogHeader className="gap-2">
                  <DialogTitle className="text-left text-base font-extrabold uppercase tracking-[0.08em] text-slate-900 dark:text-slate-100">
                    {formTitle}
                  </DialogTitle>
                  <DialogDescription className="text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {formSubtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/80 bg-white/90 px-3 py-2 text-center dark:border-slate-700/80 dark:bg-slate-900/70">
                    <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100">8</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 dark:text-slate-300">
                      {locale === "id" ? "Field Wajib" : "Required Fields"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/80 bg-white/90 px-3 py-2 text-center dark:border-slate-700/80 dark:bg-slate-900/70">
                    <p className="text-xl font-extrabold text-rose-700 dark:text-rose-300">Batch 2</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 dark:text-slate-300">
                      {locale === "id" ? "Gelombang Aktif" : "Active Wave"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/80 bg-white/90 px-3 py-2 text-center dark:border-slate-700/80 dark:bg-slate-900/70">
                    <p className="text-xl font-extrabold text-rose-700 dark:text-rose-300">30</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 dark:text-slate-300">
                      {remainingLabel}
                    </p>
                  </div>
                </div>
              </div>

              <form className="space-y-5 px-4 py-4 pb-6 sm:px-7 sm:py-6" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  {basicFields.map((field) => {
                    const Icon = field.icon;
                    return (
                      <div
                        key={field.id}
                        className="rounded-2xl border border-slate-200 bg-white p-3.5 transition-colors focus-within:border-primary/40 focus-within:bg-primary/5 dark:border-slate-700 dark:bg-slate-900/60 dark:focus-within:border-primary/40 dark:focus-within:bg-primary/10"
                      >
                        <Label
                          htmlFor={field.id}
                          className="text-sm font-semibold text-slate-900 dark:text-slate-100"
                        >
                          <span className="inline-flex size-5 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white dark:bg-slate-200 dark:text-slate-900">
                            {field.number}
                          </span>
                          <span>{field.label}</span>
                          <Icon className="ml-auto size-4 text-slate-500 dark:text-slate-400" />
                        </Label>
                        <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xs">
                          {field.helper}
                        </p>
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="mt-2 h-11 border-slate-200 bg-slate-50/70 text-sm dark:border-slate-600 dark:bg-slate-800/60"
                          required
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/50 p-4 dark:border-rose-400/40 dark:bg-rose-500/10">
                  <Label
                    htmlFor="followProof"
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100"
                  >
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-rose-600 text-[11px] font-bold text-white">
                      7
                    </span>
                    Bukti Follow Instagram & TikTok Universitas STEKOM + TopLoker.com
                    <ImageUp className="ml-auto size-4 text-rose-600 dark:text-rose-300" />
                  </Label>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xs">
                    {followProofHint}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xs">
                    {followProofMultiHint}
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {followAccounts.map((account) => (
                      <div
                        key={account.name}
                        className="flex h-full flex-col rounded-2xl border border-rose-100 bg-white/90 p-4 text-xs text-slate-700 shadow-sm dark:border-rose-400/30 dark:bg-slate-900/60 dark:text-slate-200"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {account.name}
                            </p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-rose-600/80 dark:text-rose-300/90">
                              Wajib Follow
                            </p>
                          </div>
                          <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200">
                            2 akun
                          </span>
                        </div>

                        <div className="mt-3 grid gap-2">
                          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900/70">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                              TikTok
                            </span>
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                              {account.tiktokHandle}
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900/70">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                              Instagram
                            </span>
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                              {account.instagramHandle}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          <Button
                            asChild
                            size="sm"
                            className="h-9 w-full rounded-full px-3 text-xs"
                          >
                            <a href={account.instagram} target="_blank" rel="noreferrer">
                              Instagram
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="h-9 w-full rounded-full bg-slate-950 px-3 text-xs text-white hover:bg-slate-900"
                          >
                            <a href={account.tiktok} target="_blank" rel="noreferrer">
                              TikTok
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Input
                    id="followProof"
                    name="followProof"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleProofChange}
                    className="mt-3 h-auto border-0 bg-transparent p-0 shadow-none file:mr-3 file:rounded-full file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800 dark:file:bg-primary dark:hover:file:bg-primary/90"
                  />

                  {proofFiles.length > 0 && (
                    <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/60">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {selectedFilesLabel} ({proofFiles.length})
                        </p>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={clearProofFiles}
                          className="h-8 px-2.5 text-xs text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:text-rose-300 dark:hover:bg-rose-900/30"
                        >
                          <Trash2 className="size-3.5" />
                          {removeAllFilesLabel}
                        </Button>
                      </div>

                      <ul className="space-y-2">
                        {proofFiles.map((file) => (
                          <li
                            key={`${file.name}-${file.size}-${file.lastModified}`}
                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 dark:border-slate-700 dark:bg-slate-800/70"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-medium text-slate-700 dark:text-slate-200">
                                {file.name}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-xs"
                              onClick={() => removeProofFile(file)}
                              className="text-slate-500 hover:bg-rose-50 hover:text-rose-700 dark:text-slate-300 dark:hover:bg-rose-900/30 dark:hover:text-rose-300"
                              aria-label={`${removeSingleFileLabel}: ${file.name}`}
                            >
                              <X className="size-3.5" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {proofError && (
                    <p className="mt-2 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-2 text-xs font-medium text-rose-700 dark:border-rose-500/40 dark:bg-rose-900/30 dark:text-rose-200">
                      {proofError}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/55">
                  <Label
                    htmlFor="motivation"
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100"
                  >
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white dark:bg-slate-200 dark:text-slate-900">
                      8
                    </span>
                    Motivasi Bergabung
                  </Label>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xs">
                    {locale === "id"
                      ? "Apa motivasimu bergabung dalam pelatihan Content Creator oleh Duta Teladan Universitas STEKOM?"
                      : "What is your motivation to join this content creator training by Duta Teladan Universitas STEKOM?"}
                  </p>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    rows={6}
                    placeholder={
                      locale === "id"
                        ? "Ceritakan motivasi kamu bergabung dalam pelatihan ini"
                        : "Tell us your motivation to join this training"
                    }
                    className="mt-3 min-h-32 border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-900/60"
                    required
                  />

                  <div className="mt-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[11px] text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 sm:text-xs">
                    <p className="font-semibold">{motivationHintTitle}</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4">
                      {motivationHints.map((hint) => (
                        <li key={hint}>{hint}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="sticky bottom-0 rounded-2xl border border-slate-200 bg-white/95 p-3 backdrop-blur sm:static sm:bg-white sm:p-4 dark:border-slate-700 dark:bg-slate-900/95 sm:dark:bg-slate-900/70">
                  {submitError && (
                    <p className="mb-3 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 dark:border-rose-500/40 dark:bg-rose-900/30 dark:text-rose-200">
                      {submitError}
                    </p>
                  )}

                  {isSubmitted && (
                    <p className="mb-3 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                      <CheckCircle2 className="size-4" />
                      {submitSuccess}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 sm:text-xs">{formHint}</p>
                    <Button
                      type="submit"
                      size="lg"
                      className="h-11 w-full rounded-full sm:w-auto sm:min-w-56"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? submittingLabel : submitLabel}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Clock3 className="size-3.5" />
          {responseHint}
        </p>
      </div>
    </div>
  );
}
