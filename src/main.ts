import { logger } from '@papi/backend';

export async function activate() {
  logger.info('snake.bible is activating!');
}

export async function deactivate() {
  logger.info('snake.bible is deactivating!');
  return true;
}
