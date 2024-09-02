import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {
        languageOptions: { 
            globals: {
                ...globals.browser ,
                ...globals.node ,
            } ,
        } ,
        plugins : {
            "@eslint/js" : pluginJs ,
        } ,
        rules: {
            "semi": ["error", "always"], // Enforces semicolons at the end of statements
            "eqeqeq": ["error", "always"], // Requires the use of === and !==
            "indent": ["error", 4], // Enforces consistent indentation with 4 spaces
            "no-unused-vars": ["warn"], // Warns when variables are defined but not used
            "quotes": ["error", "double", { "allowTemplateLiterals": true }], // Enforces the use of double quotes
            "curly": ["error", "all"], // Requires curly braces for all control statements
            "no-multi-spaces": ["error"], // Disallows multiple spaces except for indentation
            "comma-dangle": ["error", "always-multiline"], // Enforces trailing commas in multiline object and array literals
            "arrow-parens": ["error", "always"], // Requires parentheses around arrow function arguments
            "no-var": "error", // Disallows the use of var and requires let or const instead
            "prefer-const": ["error"], // Prefers the use of const over let when variables are not reassigned
            "no-duplicate-imports": ["error"], // Disallows duplicate imports
            "no-redeclare": ["error"], // Disallows variable redeclaration
            "no-alert": "warn", // Warns when alert, confirm, and prompt are used
            "no-eval": "error", // Disallows the use of eval()
            "no-extend-native": "error", // Disallows extending native types
            "no-irregular-whitespace": "error", // Disallows irregular whitespace outside of strings and comments
            "object-curly-spacing": ["error", "always"], // Enforces consistent spacing inside braces
            "space-before-function-paren": ["error", "never"], // Disallows space before function parenthesis
        },
    },
    pluginJs.configs.recommended,
];
