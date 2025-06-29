import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <Switch
        id="dark-mode"
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
      />
      <Label htmlFor="dark-mode" className="ml-2">
        Dark Mode
      </Label>
    </>
  );
}

export default DarkModeToggle;
