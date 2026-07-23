const field = (id) => document.getElementById(id);
const value = (id) => field(id).value.trim();

function firstName(fullName) {
  return fullName ? fullName.split(/\s+/)[0] : "there";
}

function subjectLine() {
  const override = value("subjectOverride");
  if (override) return override;

  const type = field("emailType").value;
  const business = value("businessName");
  const category = value("businessType");
  const city = value("leadCity");

  if (type === "followUp") return business ? `Quick follow-up for ${business}` : "Quick follow-up";
  if (type === "hyperShort") return business ? `Quick question about ${business}` : "Quick question";
  if (business && city) return `${business} in ${city} - quick idea`;
  if (category && city) return `Idea for ${category} in ${city}`;
  return "Quick idea for your team";
}

function opening() {
  const customHook = value("openingHook");
  if (customHook) return customHook;

  const type = field("emailType").value;
  const tone = field("tone").value;
  const notes = value("leadNotes");

  if (type === "followUp") return "I wanted to briefly follow up on my earlier note and see whether this is relevant for your team.";
  if (type === "hyperShort") return "I'll keep this short - I had an idea that could save your team time and create more qualified conversations.";
  if (notes) return `I reached out because my research suggests this may be timely for your team: ${notes}`;
  if (tone === "direct") return "I help teams create more qualified sales conversations by reducing the manual work behind prospect research and outreach.";
  if (tone === "casual") return "I had a quick idea that could make prospecting and outreach a little easier for your team.";
  return "I work with businesses like yours to improve the front end of the revenue funnel without adding more manual research.";
}

function buildEmail() {
  const sender = value("yourName") || "Your Name";
  const company = value("yourCompany") || "Your Company";
  const role = value("yourRole");
  const solution = value("solutionType");
  const benefit = value("keyBenefit");
  const proof = value("proofPoint");
  const business = value("businessName");
  const category = value("businessType");
  const city = value("leadCity");
  const country = value("leadCountry");
  const cta = field("cta").value;

  const paragraphs = [
    `Subject: ${subjectLine()}`,
    `Hi ${firstName(value("contactName"))},`,
    opening(),
    role ? `I'm ${sender}, ${role} at ${company}.` : `I'm ${sender} from ${company}.`
  ];

  if (solution && benefit) paragraphs.push(`We focus on ${solution}, helping teams achieve ${benefit}.`);
  else if (solution) paragraphs.push(`We focus on ${solution}.`);

  if (proof) paragraphs.push(`For context, ${proof}.`);

  const context = [category, city, country].filter(Boolean).join(" · ");
  if (context) paragraphs.push(`I thought this might be relevant${business ? ` for ${business}` : ""} given your market: ${context}.`);

  paragraphs.push(cta, `Best,\n${sender}\n${company}`);
  return paragraphs.join("\n\n");
}

function updateEmail() {
  field("emailOutput").value = buildEmail();
  field("copyStatus").textContent = "";
}

document.querySelectorAll("input, select, textarea:not(#emailOutput)").forEach((element) => {
  element.addEventListener("input", updateEmail);
  element.addEventListener("change", updateEmail);
});

field("copyButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(field("emailOutput").value);
    field("copyStatus").textContent = "Copied to clipboard.";
  } catch {
    field("emailOutput").select();
    field("copyStatus").textContent = "Selected - press Command+C to copy.";
  }
});

field("clearButton").addEventListener("click", () => {
  document.querySelectorAll("input, textarea:not(#emailOutput)").forEach((element) => {
    element.value = "";
  });
  field("emailType").value = "coldIntro";
  field("tone").value = "consultative";
  field("cta").selectedIndex = 0;
  updateEmail();
});

updateEmail();
