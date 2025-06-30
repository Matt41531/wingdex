import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type Theme = 'system' | 'light' | 'dark' |undefined;
const Toaster = ({ ...props }) => {
  const { theme } = useTheme();
  const currentTheme:Theme = (theme as Theme) || "system";

  return (
    <Sonner
      theme={currentTheme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)" as string,
          "--normal-text": "var(--popover-foreground)" as string,
          "--normal-border": "var(--border)" as string,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
