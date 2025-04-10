import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from "../Style/Badge"; // Assicurati che il percorso sia corretto


export default {
  title: "Design System/Badge", // Titolo della story: mostra il componente Badge
  component: Badge, // Associa il componente Badge per far funzionare i controlli autodocs
  parameters: {
    layout: "centered", // Imposta il layout centrato per una visualizzazione migliore
  },
  args: {
    text: "Badge", // Testo predefinito per il badge
  },
  argTypes: {
    text: { control: "text" }, // Controllo per modificare il testo
    variant: {
      control: { type: "select" },
      options: ["Default", "invertito", "positivo"],
    },
  },
} as Meta<BadgeProps>;

// Story che mostra tutti i badge contemporaneamente, utilizzando gli args per modificare il testo
export const AllBadges: Story<BadgeProps> = (args) => {
  // Array dei colori preimpostati per i badge
  const badgeColors = [
    { name: "Primary", background: "black", text: "#fff" },
    { name: "Danger", background: "red", text: "#fff" },
    { name: "Warning", background: "#ffc107", text: "#fff" },
    { name: "Info", background: "#64b5f6", text: "#fff" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {badgeColors.map((badge, index) => (
        <Badge
          key={index}
          text={args.text}
          backgroundColor={badge.background}
          textColor={badge.text}
        />
      ))}
    </div>
  );
};

AllBadges.args = {
  text: "Badge",
};

// Story per visualizzare un singolo badge con varianti selezionabili tramite controlli Storybook
export const BadgeVariants: Story<BadgeProps> = (args) => {
  // Mapping dei vari stili in base alla variante scelta
  const variantMap: Record<string, { background: string; text: string }> = {
    Default: { background: "#0070f3", text: "#fff" },
    invertito: { background: "#fff", text: "#0070f3" },
    positivo: { background: "#28a745", text: "#fff" },
  };

  // Se la variante non è riconosciuta, usa il default
  const { background, text } = variantMap[args.variant as keyof typeof variantMap] || variantMap.Default;

  return (
    <Badge
      text={args.text}
      backgroundColor={background}
      textColor={text}
    />
  );
};

BadgeVariants.args = {
  text: "Badge",
  variant: "Default",
};


