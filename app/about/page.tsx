"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Loading from "../loading";
import { usePages } from "@/lib/hooks/usePages";

export default function AboutPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [positions, setPositions] = useState<{ x: string; y: string }[]>([]);

    const { pages, loading, error } = usePages();

    const aboutPage = pages.find(page => page.title === "About");

    // Education data
    const educationData = [
        {
            id: 1,
            title: "Open University of Sri Lanka",
            description: "Bachelor of Software Engineering (Hons)",
            year: "2023 - Present",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHEhITERIWFRMVGRYVFxgWFxYSFxUVGxkXGRgaGxcYHCggGBsoHRgXITEhJikrLi4uGR81ODMsOSgtLisBCgoKDg0OGxAQGzUmHyUtLS0wLS4vNS81Ly4wLS0tNTArLS8vLS4tNS81LSstLy0tLS0tLS0tLS0tLy0tLS0rK//AABEIAQMAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADwQAAICAQIDBgMGAwgCAwAAAAECAAMRBCEFEjEGEyJBUWEycYEUI0JSkaEHFTNDYnKCorGyweLwwsPR/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIGAf/EACsRAAICAgAFAwMEAwAAAAAAAAABAgMEEQUSITFBEyJRMmHBI3GBkUKhsf/aAAwDAQACEQMRAD8A7LEROzkREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARE0xrw15oA3FZsJ8sZCgf6s/SBo3Ila472kt4a7Imn7xyyhQLApKnq2GG4HoD+k1a+1T6dsXcpGWyAjVucIThQzYbJxv02O8rSy6oy5WyRUza2kW+JUU7U2uxwtXKGK8vjOCMAhrASF6jcpibtPa6iyssA5s3AqUczuQcYQjwtn5zqGTXN6TPkq5R7osMREnOBERAEREAREQBERAEREAREQBERAEREAREQD7K9Tep4k65HN3GCPPOamA+eDmWCc07Q8j8Xz3g8HdGxPGSuEH3vovxVjPpn1kV9npx5tbJKo8zaJftXWdXc1NyLZSQGA73lKYXO6hfDk/izneVnkeiwB0NdZDKwybO7BB35Qx5yCRkD823STXCaKNW9isga5MCwsSzFmyNzk52Vd/l6SQ4boqaQXrrC9QG3JIBxnJPnieQyeJJXSlyv9maNcNQ0aWq4aNS3OttpfABb7Oin6NzKQPaeuGG7g91P3jMlrLWwesLgDPL4lZsDcgdOo6zPfxtAzJSrX2L1WvG3zc+EH2mzp9aNXULApGTylT1VubkIPuDOK+JZEZxfppJtL+z5Ktcr2y1xET25liIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCV3VLoeFat9Rfqaq7XRfBbbUgUfDzgN4gWAA642285I8b43TwNOe5sZ+FRu7n+6vn5ZPQeZE5/x3tHdx8NTyLTU6kGvAsudD15s7IN/b2JkF18K17iemidnbt8m/wBoe2Og09gWm2olKyA1ZSyo8+cL4G/CVBPoG887bXAOMcMr09Pe6jTmxUUPzPnxgeIhWJ8Oc49pUNF2cSkDlrVfn4j+2B+5mLjPCb6O7NHdEOyoeasZXPQ9dxMWOZju9ySW38/Y0ngvkS2yx8b7WaW6y5NPqFq5kVFsOBWbN8MCPhAG2SPT0kbwrtRpmKJ3q1Vi6lsWchNgXBsbwkgBiM79fbM82cAyACUJ8/Bygn2CmR9XDDwWwX1KK3TOWUB1x58y8ueX6GRwvxrLHL5af9HTxWodDtVNq3qGRgysMhlIYEeoI2InuUfgXb1H5V1SogbZbazzVN8xvyD6n3xLurBwCCCDuCNwR856KFkZraMedcoPTPsRE7OBERAEREAREQBERAEREAREQBERAEhe1HaFeBIMDnus2rr/ADH1J8lH79BJPX6tNBW9thwiKWY+w/78vrOS/bjxvVFrTiyxS/Ln+nRkhU+uevsT5yrl5Howb8lnFo9WXXseq9NZxJ2utsJtfHNZhcjH4ax0AHTOMDy6lpm4FwFeDWv4mYX4PM27c65JBPmCMkZ9J74heynua8g4BZhsQD0AHrt18pvcIU2KKrHyj/0bDvyWA5Ckn3G2fcTydl9tibk+kvBuTjGuO4+DRAt1ZYcxQB2TlQAHbbBbruMHym/o9O3IVclimorUE9eU8pXJ8/i6z5q9TzG3u1JdkHOBgLVqayB43JAUMMfQT5ZxMl2YdyAz02YNjsQU6jwVkb4H6RGi2a9q6FaWU5LoaOppsssdxYy5sdFwdsLkAcvT8JMy6J3NLlzzHnNdeRuxwBjby5s/QGK9Y6mvFav3a3tipw7Na/wnkYK2AC3QSQpsQKO58fd/c0g5Ba0jNtjA7qBnzHr6z7bXOCW0dLKektEFV2Wq4epSvIJ+LJLKx9WTp1z0wZudn+0FnZpxXZk6YkBlJLGoH8afmT2/7+LT1NB0BaxH8QyHYjIf8wP19OmNpn4sc6Y3svKVr7zB8sjdT6g9JYx8u6uafNtPp/JPbTCyHU6rTaL1DKQVYAgjcEHcH9J7nPf4ZceFuNOWzW4NlBPUD8VZ99icezeWJ0Keqrmpx2edsg4S0IiJ2cCIiAIiIAiIgCIiAIiIAiIgFJ/iXrfDTpwcB2NtnvWnl9WOf8sqfDuA16dzqrbGS9t+bm5VrBAxXg7EAYGDJLtZYNZxKwZ2Raqv/sP/ACaYOLeN6kI8i+/T0HzPWeb4lkTd3pxel+Dfwql6SJaygWhWu8BHw6iocyAdfGN8D1zt7iR/ELe5NgLKtePvuRgUtfAZTU+c1bYLt5DlxkkT0tv8orexUvrABPNSA9ZOPxJ067ZxKZ/EDWHRpXp1wC3MXxgA4bL4A6ZsLfQD0lfAx+eW/BBYnz8uyP472us1jFNOOVFzjC9AM7qvkPc5J8zMnZ7svqOP94zXOAAGBDE8xZeZD/hIzPHA+Gro0N12UCjn5ipVgR07t90tU9DWcE5nUf4eAavTCzu1rVubkUb4rJ8IyfmcegOJpZeTHFpc14PrfKuhx646vgr45y2C4xvYCUIDHB6AHbO24lt4B2k/nWVZzXeF5e8B35SdwzHdqzsM/EvUHEy9pGT7ZZprkUFwDW2eRbF3Pdu25UF8sSu7bCUniND8FuWxQRhsjKd0rHzArJ5gmNt/WT+26KbXdH3SkjsejpTUBT3eXXZaF6UkbZtY9Wz5n6Z6zX4l3NjBNTYjknHdjJrU+QOOp8stj5TV4bqjeK+QMyXLuosFSllUMhsfqRyHlONz3cw8YrVFK5rB/LX4hkHONuvSedto9O7TZ3j9ZNNmK7Sjg1ivQOTDCwAbKHGMgegI6j2adb0141KK6/CwDD5EZH+85nxMd7WpYYPhJHpzeEj/AFftLl2H1H2jR1ZO6Fk/Rjj/AElR9Jt8HulODUmVuJVpNSRPRETaMsREQBERAEREAREQBERAEREA4p27vt0msvakZs+01ADrzA1dPkdpY9Np7Ncq99paiepDWE8rexC7frNftXSNPxGwkde5uH1+7J/Y/pMHGxzdySfDkqRvgkjIP7H9Z5TiPW7kXR7fU9Bjxcqlp+ESHFNMNNV8NdY5qweXUOdu8XI7vGG+U5f2+Zjq15vyL/ybOx98zpIr7+l6lamouCoPJ3thyPwquMHON/KVftJo1uv0uosTCc4Fob8IYn4v8NnMD9PWTcKnqLT7kGuSxpkXxwD+X4QAfeKX5e7HkfiFW3p13l27L8cWvQ6bkOwRVOPIqMEfPI/2ma52sXkRML6EgLt7dP2mTh+lTTIVblOTzYVVTfGPwjf5mVs3KpurcJprTLUamurW0Ub+IGt+367ShP6gC9OuS4K9PYZmj275S7EBd235RVuceZHj9/EJ0W2kVszoqlzvkBUbPuR1lZ7WUvrKmWxc2OUWrJDNzlh0IOQAM5l3Ey65uNcF2WjmVLS5mbfZCwLpdKbCgHNXvYMqPDfuZbDqg/8ASu0vp4R/5SC4VojQtSVvYgpXnL1KrlQV5KwyHJKkB26fiE1OMst4OWSw/mChDk7DI8jn5SlnQjZdrZDRXzzb2Y+2S6rFZDIa+8rLhQVPxjB3O658pfv4cvz6az0F1mP2lT15+z1KrHOORd/7uCT/AKZa/wCGlJTRK5/tHsf6Big/4y/waTkta6LZxxFKMdFqiIm+Y4iIgCIiAIiIAiIgCIiAIiIBRP4m6Xuzp7wNstQ59AwypP1DAe5HrILT8S0+rTkudQykBlJwwYennv5Y67TpnGOHLxamyl+jgjI6qfwsPcHecXq4f9g1qtcALaM1Weh28Fg9t+voR6GYvE8WM/e/9Gtg3e3kLppbF0i5A+z1n2+/sPsOo/c/KRnFtKiDBXCW8zNXg2mlceKyw+attzehAI3E8cXFmVtXxBFIKj4gMgkqPM+R9pn4PcNUHZv6K4a1vO1h8FQPmvqB7D1mHRN1/qIsXY+lzbIrSo+i8Nli93gd1YTzFh+FTj+oMDZ18uozPH8zPnn/AN+cmdZo1Jsy3Jy1tdcgC2VtY26JyMMAgDcrg79ZGngTcvM1VOR3AYI2oqAa0jbAcjbIzLVjov8Ac+jOsfLda1JHijiCufvH7tfUjzzjHoPmZ9r0bu4axQ9rBhTUGKgjBzhm3CkfFYcZGy+s2tNwnu7EH3VWXuq561NlqWIDyEPcWAB36AeUktClbVrkEd8eSxuYs9eqr2VuZsnBxtv+X1nStroj+mttkeRe7X07HjR6pdOnM4Jyc2OF5L6LD8QcL1QeWNgANj1mLiV1df31ypao8QuRQSB5FlHUe4mrrNRY1hQr99spIBCsB0fmxjlx9eonzUVjR6c1AgkhxvsMtkkkeSjJPsBKXLua33b+fBYrpjFcxE6jiv8AO9tOCwLCpCduexsA7flAIGf7x9J2XhWhHDKaqV3FaKgPrgYzOe/wx4Arst+D3OnzVTn8b/jsPyyfqT+UTpk9VhY8aoe0yM27nloRES6UhERAEREAREQBERAEREAREQD4xCgk7Abn5Tm/a3k419/SjBkyFuPLyWoPJl6hNzhyMbnyMdsu0j6i46dga6RzAgMCbeVuVjYBuleeg/F546Ta4VxLOB7TB4pxJ1NRhHa8mri4U+T1Cs8L4t3AIYN4NioBLptkjHVlxvtuPcbze4Vx6rjtnLVk1UkMxI5eZ9+UAegwT88Te4vwBLR3i+FRuGUhWp89ubw2J18DEcuTykZkDRw+6nOprq71DlGvoHxkHBD1dWIPng/4pRhTTkwdlX1f8f7Fr1v8ZGza9tBtLoxDuWLDxArnC9N8BQokhXqDZQ9jAjn1FJGRjKq1YGx6bgzR0nHluzhlyNiM8pB88g7A+2ZqdpOJX31qmnqLHmRyxsrAwrBsbtvuJWVNkpqLjomnySjpElxa9q77UCMwdxYnKCd+UA4PQbg/rMnDtO7Leto5VtK4XIJDAbtt0Pw/oJgXjhdQXr5G8wbEIB/yk5/SaY4pZxU8mnV7GO2KQT+rkeD64+c+woum+VR19w5Vxj1Y0fa5dWWq5Wa2vKsQAK9jguWOyg9f/wBmKpX40/KM8hOGZdi2N+SvPQeZY9Op3AE9JwUaO5NJqSlbsq2Lp0blXDEgM9vVzlSMLknHxby101JwxOVcE4xnAUY8gqjZVHoP3O8sZTpwvpj734/JCpyt9q7ExwDii6MpprK0pGMU8hJRgMeDJAIcfLfrLJOScb4iGBVhzc34fX3z5b+friW3+H3GbeI1tXcec1hSHOQwBLDkfbdhjZvMe4ydbhmZO2CVi6lHNw/S9yLdERNYzhERAEREAREQBERAEREAREQCo9oOwtfFr++W01k/EMc3i/MviGD7HIPpuZE8Z7MvwLx0FrKBjI3ays+v99P3Hy6dEn2Vr8Sq6LUkWacu2ppp9Pg5jRrhrQAR3lVfKzKuCbnJ+5qG+Mlhk58hvNvs5rrabLKjZXTcvK3coBy4YcxDV52I6ZUgnfI2kpxfsocW90tdtVrGx6XHIefIOUdRsQRkZxj1kVotF/Ii5GmNSOe8bvBlhYeVcC4E+HAJ3J/6mZDDlRXKFaal4ZLbarZ83j4JfXut4LazSaexFGTYSF5VHU5sXp/mmjZwDh7gP9hs5WwVKXYUg9COW7GJXwL0fn5Wde87yzuNQlpuUnKgVW4VR0yPTGJ8q1OtqBTl1CnNhHJVS9NaeIotZBJcDwDcb5J8pOlb6WnOLl90cdU+iaRZdLwzR0H7rhoLdQbnVtvXdnP7Ta1XEX0qhSyaevBY9zWGCIDuxZhhQPM8uR7SucU7+5j3SvzN3Dc5etERVUC5M7N3jZYYxy5AO009NRbRX3LWmtuVhbchGp+0K7EhUDbowzgjlI6+gM5jGx/VZ0+IrQlt+H/Ju8Q4xpQlmCpBKra1rsL2zzchqzks2R4fLIxtNZrrdU/cBea/PIVG2Tthz+VCCDn5iS/B+zzKebT6bu+gFuqLO6KBgBFbxgddvCN+stfBuCLw1nsZjZdYFDuQF8K5KqqjooyfU+pkSwIXNe1pLy+7Jq8l0be9v4IjT9hKGrXvSzXZ5msU4ycY5QCCOQZ2Hrv1k9wbhNXBq+7pGBnJJ3Zj6kzeibEKoQ+lFKds5/UxERJCMREQBERAEREAREQBERAEREAREQBBGesRAI27gGluOTp68+oUIf1XGZiPZnSn+zP0ewf/ACkvE49OHwdKcl5IodnNKP7FT8yzf7mSGm0qaUYrRUHoqhf9plifVCK7I+OTfdiIidHwREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//Z",
        },
        {
            id: 2,
            title: "St. Mary's College, Kegalle",
            description: "Secondary Education",
            more: ["GCE Advanced Level - Physical Science (2018 - 2020)",
                "GCE Ordinary Level (2012 - 2017)"
            ],
            year: "2012 - 2020",
            image: "data:image/jpeg;base64,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"
        },
    ];

    if (loading)
        return (
            <Loading />
        );

    if (error)
        return (
            <div className="text-red-500 py-10 text-center font-medium">{error}</div>
        );

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30, scale: 1, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* Header */}
            <section className="mb-4">
                <div>
                    <h2 className="text-2xl font-bold py-3">
                        {aboutPage ? aboutPage.heading : null}
                    </h2>
                    <p className="text-gray-400">
                        {aboutPage ? aboutPage.subHeading : null}
                    </p>
                </div>


                <hr className="w-full border-t border-dashed border-gray-700 my-6" />

                {/* Description */}
                    <div>
                    {aboutPage.description.split("\n").map((line: string, idx: number, arr: string[]) => (
                        <p
                        key={idx}
                        className={`leading-relaxed text-gray-300 ${idx !== arr.length - 1 ? "mt-4" : ""}`}
                        >
                            {line}
                        </p>
                    ))}
                </div>
            </section>

            <hr className="w-full border-t border-dashed border-gray-700 my-6" />

            {/* Education Section */}
            <section>
                <div>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-white" />
                        <h3 className="text-lg font-bold py-3">Education</h3>
                    </div>
                    <p className="text-gray-400 mb-8">Educational Journey.</p>
                </div>

                <div>
                    {educationData.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="relative w-full rounded-xl bg-gray-900 p-4 my-4 flex gap-4 items-start overflow-hidden"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                const newPos = [...positions];
                                newPos[index] = { x: `${x}%`, y: `${y}%` };
                                setPositions(newPos);
                            }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            style={
                                positions[index]
                                    ? {
                                        ["--x" as any]: positions[index].x,
                                        ["--y" as any]: positions[index].y,
                                    }
                                    : {}
                            }
                        >
                            {/* Hover glow */}
                            {hoverIndex === index && (
                                <div
                                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        background: `radial-gradient(circle 540px at var(--x) var(--y), rgba(27,2,163,0.3), transparent 80%)`,
                                    }}
                                />
                            )}

                            <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                                <Image
                                    src={edu.image}
                                    alt="education"
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <div className="flex-1 relative z-10">
                                <h3 className="text-md">{edu.title}</h3>
                                <p className="text-gray-400 mt-1">{edu.description}</p>

                                {/* Accordion: Only show "More" if there is extra info */}
                                {edu.more && (
                                    <>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: openIndex === index ? "auto" : 0,
                                                opacity: openIndex === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="list-none list-inside text-gray-400 space-y-1 pl-4 text-sm">
                                                {edu.more.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        {/* Clickable "More"/"Less" text */}
                                        <span
                                            className="text-shadow-blue-200 text-sm mt-1 inline-block cursor-pointer select-none"
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                        >
                                            {openIndex === index ? "Less <" : "> More"}
                                        </span>
                                    </>
                                )}

                                <span className="text-sm text-gray-500 block mt-1">
                                    {edu.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}
