import * as fs from "fs";

const archive = './db/data.json';

const saveDb = (data) => {
  fs.writeFileSync(archive, JSON.stringify(data));
}

const readDb = () => {
  if (!fs.existsSync(archive)) {
    return null;
  }
  const info = fs.readFileSync(archive, { encoding: 'utf-8' });
  const data = JSON.parse(info);
  return data;
}

export { saveDb, readDb };
