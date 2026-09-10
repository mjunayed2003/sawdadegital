import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

export default function AppleIcon() {
  const icoPath = path.join(process.cwd(), 'public', 'favicon.ico');
  const buffer = fs.readFileSync(icoPath);
  return new Response(buffer, {
    headers: {
      'Content-Type': 'image/x-icon',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
