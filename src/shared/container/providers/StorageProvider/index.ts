import { container } from 'tsyringe';

import { LocalStorageProvider } from './implementations/LocalSorageProvider';
import { IStorageProvider } from './IStorageProvider';

const diskStorage = {
  local: LocalStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  diskStorage[process.env.disk],
);
