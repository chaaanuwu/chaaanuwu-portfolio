// components/CertificatesAdminPage.tsx
"use client";

import { File, ImageDown, Pencil, PlusCircle, Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { addCertificate } from "@/lib/actions/addCertificate";
import Image from "next/image";
import { UploadButton } from "@/lib/actions/uploadThing";
import Link from "next/link";
import Modal from "@/components/admin/Modal";
import { redirect } from "next/navigation";

interface UploadCertificatesProps {
  session: { username: string } | null;
}

export default function CertificatesAdminPage({ session }: UploadCertificatesProps) {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);

  // if(!session) {
  //   redirect("/admin/login");
  // };

  // Fetch certificates from API
  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("/api/certificates");
        const data = await res.json();
        setCertificates(
          data.map((c: any) => ({
            ...c,
            issueDate: new Date(c.issueDate).toLocaleDateString(),
          }))
        );
      } catch (err) {
        console.error("Error fetching certificates:", err);
      }
    }
    fetchCertificates();
  }, []);

  const handleUpload = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    if (file) formData.set("file", file);
    if (imageUrl) formData.set("imageUrl", imageUrl); // ✅ pass uploaded image URL

    setUploading(true);
    try {
      const res = await addCertificate(formData);
      if (res.success) {
        alert("Certificate uploaded ✅");
        setCertificates((prev) => [
          ...prev,
          {
            name: formData.get("title"),
            issuer: formData.get("issuer"),
            issueDate: new Date(formData.get("issuedDate")?.toString()!).toLocaleDateString(),
            credentialUrl: res.url,
          },
        ]);
        setFile(null);
        setImageUrl(null); // reset preview after upload
        setIsModalOpen(false);
      }
    } catch (err: any) {
      alert("Upload failed ❌: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="flex-1 ml-32 px-4 sm:px-6 lg:px-8 py-8 bg-[var(--color-background)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] tracking-tight">Certificates</h1>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-bold hover:from-[var(--color-primary-hover)] transition"
            >
              <div className="flex items-center gap-2">
                <PlusCircle />
                {uploading ? "Uploading..." : "Add New Certificate"}
              </div>
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Certificate">
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpload(e.currentTarget);
                }}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Certificate Title"
                  required
                  className="px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <input
                  type="text"
                  name="issuer"
                  placeholder="Issuer"
                  className="px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <input
                  type="date"
                  name="issuedDate"
                  className="px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <input
                  type="text"
                  name="orderNo"
                  placeholder="Order No"
                  className="px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <div>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt="PDF Preview"
                      className="w-full mb-4 rounded-md max-h-48 object-cover"
                      width={300}
                      height={100}
                    />
                  )}
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res[0].ufsUrl) {
                        const uploadedUrl = res[0].ufsUrl;
                        setImageUrl(uploadedUrl);
                        console.log("Uploaded Image URL:", uploadedUrl);
                      }
                    }}
                    onUploadError={(error: Error) => {
                      console.error("Upload failed:", error);
                    }}
                  />
                </div>
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="text-sm text-gray-400"
                />
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-6 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </form>
            </Modal>
          </div>
        </div>

        <div className="bg-[var(--card-color)] rounded-2xl neumorphic-shadow-inset p-2 @container">
          <div className="overflow-x-auto">
            {certificates.length > 0 ? (
              <>
                <div>
                  <p className="px-6 py-4 text-sm text-[var(--color-text-muted)]">Total Certificates: {certificates.length}</p>
                </div>
                <table className="w-full text-left text-white">
                  <thead>
                    <tr>
                      <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">ID</th>
                      <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Title</th>
                      <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Issuer</th>
                      <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Issue Date</th>
                      <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Actions</th>
                      <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)]">
                    {certificates.map((cert, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">{i + 1}</td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">{cert.name}</td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">{cert.issuer}</td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">{cert.issueDate}</td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center gap-6">
                            <button
                              className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
                            // onClick={() => setIsModalOpen(true)}
                            >
                              <span className="material-symbols-outlined text-base"><Pencil /></span>
                            </button>
                            {/* {isEditing && <EditCertificate cert={cert.id} onClose={() => setIsEditing(false)} />} */}
                            <button className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors">
                              <span className="material-symbols-outlined text-base"><Trash /></span>
                            </button>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-2 text-blue-400">
                          <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">{cert.credentialUrl && <File />}</Link>
                          {cert.imageUrl && (
                            <Link href={cert.imageUrl} target="_blank" rel="noopener noreferrer">
                              <ImageDown />
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div className="px-6 py-6 text-center text-gray-400">No certificates uploaded yet</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}