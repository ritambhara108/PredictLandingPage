import type { LegalSection } from "@/lib/legal/content";
import { LegalRichText } from "@/components/legal/legal-rich-text";
import { cn } from "@/lib/utils";

export function LegalSectionBody({ section }: { section: LegalSection }) {
  const table = section.table;
  const textClass = "text-[15px] leading-[1.7] text-muted sm:text-[16px]";

  return (
    <div className="space-y-3.5">
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 64)} className={cn(textClass, "text-body")}>
          <LegalRichText text={paragraph} />
        </p>
      ))}
      {section.bullets?.length ? (
        <ul
          className={cn(
            "list-disc space-y-2.5 pl-5 marker:text-primary",
            textClass,
            "text-body",
          )}
        >
          {section.bullets.map((bullet) => (
            <li key={bullet.slice(0, 64)}>
              <LegalRichText text={bullet} />
            </li>
          ))}
        </ul>
      ) : null}
      {table ? (
        <div className="overflow-hidden rounded-2xl border border-hairline/60 bg-surface-soft p-[2px] dark:border-hairline/30">
          <div className="overflow-x-auto rounded-[14px] bg-canvas">
            <table className="w-full min-w-[28rem] table-fixed border-collapse text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr className="border-b border-hairline bg-surface-soft/80">
                  {table.headers.map((header, headerIndex) => (
                    <th
                      key={header}
                      className={cn(
                        "box-border px-3 py-2.5 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase sm:px-4",
                        table.headers.length === 2 &&
                          headerIndex === 0 &&
                          "w-[34%]",
                        table.headers.length === 3 &&
                          headerIndex === 0 &&
                          "w-[28%]",
                      )}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr
                    key={`${row[0]}-${rowIndex}`}
                    className="border-b border-dashed border-hairline last:border-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={cn(
                          "box-border px-3 py-2.5 align-top whitespace-normal wrap-break-word text-muted sm:px-4",
                          cellIndex === 0 &&
                            "font-semibold tracking-[-0.01em] text-ink",
                        )}
                      >
                        <LegalRichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}
