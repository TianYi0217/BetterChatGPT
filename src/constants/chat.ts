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
  'claude-3-5-sonnet-20240620',
  'o1-preview',
  'o1-mini',
  'gpt-4-turbo',
  'claude-3-opus-20240229',
  'gpt-4',
  'gpt-4-all',
  'claude-3-sonnet-20240229',
  'gpt-4o',
  'gpt-4o-mini',
  'deepseek-chat',
];

export const defaultModel = 'claude-3-5-sonnet-20240620';

export const modelMaxToken = {
  'gpt-4-turbo': 131072,
  'claude-3-opus-20240229': 204800,
  'gpt-4': 8192,
  'gpt-4-all': 131072,
  'claude-3-sonnet-20240229': 204800,
  'gpt-4o': 131072, // 假设值，请根据实际情况调整
  'gpt-4o-mini': 131072, // 假设值，请根据实际情况调整
  'o1-mini': 131072, // 假设值，请根据实际情况调整
  'o1-preview': 131072, // 假设值，请根据实际情况调整
  'claude-3-5-sonnet-20240620': 204800, // 假设值，请根据实际情况调整
  'deepseek-chat': 32000, // 假设值，请根据实际情况调整
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
  'claude-3-sonnet-20240229': {
    prompt: { price: 0.01, unit: 1000 },
    completion: { price: 0.03, unit: 1000 },
  },
  'gpt-4o': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'gpt-4o-mini': {
    prompt: { price: 0.00015, unit: 1000 },
    completion: { price: 0.0006, unit: 1000 },
  },
  'o1-mini': {
    prompt: { price: 0.004, unit: 1000 },
    completion: { price: 0.016, unit: 1000 },
  },
  'o1-preview': {
    prompt: { price: 0.019, unit: 1000 },
    completion: { price: 0.076, unit: 1000 },
  },
  'claude-3-5-sonnet-20240620': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'deepseek-chat': {
    prompt: { price: 0.0004, unit: 1000 },
    completion: { price: 0.0008, unit: 1000 },
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
