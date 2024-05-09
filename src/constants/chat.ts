import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `Carefully heed the user's instructions.`;

  export const modelOptions: ModelOptions[] = [
    'gpt-4-turbo',
    'claude-3-opus-20240229',
    'gpt-4',
    'gpt-4-all',
    'mj-chat',
    'stable-diffusion',
    'suno-v3',
    'glm-4',
    'gpt-4-turbo-preview',
    'claude-3-sonnet-20240229',
    'claude-3-haiku-20240307',
    'gemini-pro',
    'gpt-4-32k',
    'net-gpt-4',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-16k',
  ];
  


export const defaultModel = 'gpt-4-turbo';

export const modelMaxToken = {
  'gpt-4-turbo': 131072,
  'claude-3-opus-20240229': 204800,
  'gpt-4': 8192,
  'gpt-4-all': 131072,
  'mj-chat': 4096,
  'stable-diffusion': 4096,
  'suno-v3': 4096,
  'glm-4': 131072,
  'gpt-4-turbo-preview': 131072,
  'claude-3-sonnet-20240229': 204800,
  'claude-3-haiku-20240307': 204800,
  'gemini-pro': 8192,
  'gpt-4-32k': 8192,
  'net-gpt-4': 8192,
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-16k': 16384,
};


export const modelCost = {
  'gpt-4-turbo': {
    prompt: { price: 0.01, unit: 1000 },
    completion: { price: 0.03, unit: 1000 },
  },
  'claude-3-opus-20240229': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-all': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'mj-chat': {
    prompt: { price: 0.25, unit: 1000 },
    completion: { price: 0.25, unit: 1000 },
  },
  'stable-diffusion': {
    prompt: { price: 0.01, unit: 1000 },
    completion: { price: 0.01, unit: 1000 },
  },
  'suno-v3': {
    prompt: { price: 0.3, unit: 1000 },
    completion: { price: 0.3, unit: 1000 },
  },
  'glm-4': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-turbo-preview': {
    prompt: { price: 0.01, unit: 1000 },
    completion: { price: 0.03, unit: 1000 },
  },
  'claude-3-sonnet-20240229': {
    prompt: { price: 0.01, unit: 1000 },
    completion: { price: 0.03, unit: 1000 },
  },
  'claude-3-haiku-20240307': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.01, unit: 1000 },
  },
  'gemini-pro': {
    prompt: { price: 0.1, unit: 1000 },
    completion: { price: 0.1, unit: 1000 },
  },
  'gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'net-gpt-4': {
    prompt: { price: 0.1, unit: 1000 },
    completion: { price: 0.1, unit: 1000 },
  },
  'gpt-3.5-turbo': {
    prompt: { price: 0.0007, unit: 1000 },
    completion: { price: 0.001, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
};


export const defaultUserMaxToken = 8192;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : '新对话',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
