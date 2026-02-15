import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react' //importar o plugin de forma explícita.
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  // Arquivos e pastas que o ESLint deve ignorar
  { ignores: ['dist', 'build', 'node_modules'] },

  // Configurações recomendadas de JavaScript e TypeScript
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      react: reactPlugin //registrar o plugin com o prefixo "react".
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // Aqui dentro é onde vamos "traduzir" o que o professor fizer
      ...reactHooks.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  eslintPluginPrettierRecommended
)
