module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-param-reassign": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/semi": [
            "error",
            "never"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "camelcase": "off",
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "error",
        "curly": "off",
        "default-case": "off",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": false
            },
            {
                "optionalDependencies": false
            }
        ],
        "import/no-unassigned-import": "off",
        "import/order": "error",
        "jsdoc/no-types": "error",
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "off",
        "no-console": "off",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-syntax": [
            "error",
            "ForInStatement"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "off",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "off",
        "prefer-object-spread": "error",
        "prefer-template": "off",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "always"
        ],
        "spaced-comment": [
            "off",
            "never"
        ],
        "unicorn/filename-case": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "yoda": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "array-bracket-spacing": [
                        true,
                        "never"
                    ],
                    "block-spacing": [
                        true,
                        "always"
                    ],
                    "brace-style": [
                        true,
                        "1tbs",
                        {
                            "allowSingleLine": true
                        }
                    ],
                    "encoding": true,
                    "import-spacing": true,
                    "jsdoc-format": [
                        true,
                        "check-multiline-start"
                    ],
                    "no-accessor-recursion": true,
                    "no-delete-expression": true,
                    "no-document-domain": true,
                    "no-document-write": true,
                    "no-empty-character-class": true,
                    "no-empty-line-after-opening-brace": true,
                    "no-ex-assign": true,
                    "no-extra-boolean-cast": true,
                    "no-extra-semi": true,
                    "no-function-constructor-with-string-args": true,
                    "no-http-string": true,
                    "no-inner-declarations": true,
                    "no-inner-html": true,
                    "no-jquery-raw-elements": true,
                    "no-multi-spaces": true,
                    "no-reference-import": true,
                    "no-return-undefined": true,
                    "no-single-line-block-comment": true,
                    "no-string-based-set-immediate": true,
                    "no-string-based-set-interval": true,
                    "no-string-based-set-timeout": true,
                    "no-typeof-undefined": true,
                    "no-unexpected-multiline": true,
                    "no-unnecessary-bind": true,
                    "no-unnecessary-override": true,
                    "no-unused": [
                        true,
                        "unused-function-expression-name",
                        "unused-class-expression-name",
                        "unused-catch-binding"
                    ],
                    "no-useless-files": true,
                    "no-with-statement": true,
                    "number-literal-format": true,
                    "object-curly-spacing": [
                        true,
                        "never"
                    ],
                    "prefer-const-enum": true,
                    "prefer-method-signature": true,
                    "prefer-while": true,
                    "react-anchor-blank-noopener": true,
                    "react-iframe-missing-sandbox": true,
                    "react-no-dangerous-html": true,
                    "react-this-binding-issue": true,
                    "react-unused-props-and-state": true,
                    "space-in-parens": [
                        true,
                        "never"
                    ],
                    "strict-type-predicates": true,
                    "switch-final-break": true,
                    "ter-arrow-spacing": [
                        true,
                        {
                            "before": true,
                            "after": true
                        }
                    ],
                    "ter-computed-property-spacing": [
                        true,
                        "never"
                    ],
                    "ter-func-call-spacing": [
                        true,
                        "never"
                    ],
                    "ter-indent": [
                        true,
                        2,
                        {
                            "MemberExpression": 1
                        }
                    ],
                    "ter-no-proto": true,
                    "ter-no-script-url": true,
                    "ter-no-self-compare": true,
                    "use-named-parameter": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-rest-spread",
                        "check-type",
                        "check-typecast",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
