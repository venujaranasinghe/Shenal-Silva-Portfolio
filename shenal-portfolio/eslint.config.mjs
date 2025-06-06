import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Custom rules override
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [">", "}"], // Only forbid these characters (you can customize)
        },
      ],
    },
  },
];

export default eslintConfig;