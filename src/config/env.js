import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(dirname(fileURLToPath(import.meta.url)), '../../.env') })

export default dotenv