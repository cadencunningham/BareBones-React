module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    plugins: ["import",],
    parserOptions:{
        ecmaVersion:2019,
        sourceType: "module",
        ecmaFeatures: {
            jsx:true
        },
        "overrides":[
            {
                "files":["*/**/*.{js,ts,tsx}"],
                "excludedFiles": "*.test.tsx",
                "rules": {}
            }
        ]
    },
    rules:{ // 0 is off, 1 is a warning, 2 is an error
        "@typescript-eslint/no-unused-vars":0,
        "@typescript-eslint/explicit-function-return-type":0,
        "@typescript-eslint/explicit-module-boundary-types":0,
        "@typescript-eslint/ban-types":0,
        "@typescript-eslint/ban-ts-comment":0,
        "@typescript-eslint/camelcase":0,
        "@typescript-eslint/indent":0,
        "@typescript-eslint/consistent-type-definitions":2,
        "@typescript-eslint/prefer-for-of":1,
        "@typescript-eslint/type-annotation-spacing":2,
        "@typescript-eslint/no-var-requires":1,
        "@typescript-eslint/prefer-optional-chain":1,
        "@typescript-eslint/no-explicit-any":1,
        "no-duplicate-imports":2,
        "getter-return":2,
        "max-len":[2, {"code":120,"tabWidth":6}],
        "no-eval":2,
        "no-extra-bind":2,
        "no-unneeded-ternary":2,
        "prefer-object-spread":1,
        "no-var":2,
        "prefer-const":1,
    },
    settings:{
        react:{
            version:"detect"
        }
    }
}