import { ImageResponse } from 'next/og';
import { personalInfo } from '../lib/site-data';
import { siteUrl } from '../lib/site-config';

export const runtime = 'edge';

// Image metadata
export const alt = 'Amit Kumar - React Native Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '100px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
          <div style={{ color: '#7C3AED', fontSize: 32, marginBottom: 20, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {personalInfo.location}
          </div>
          <div style={{ color: 'white', fontSize: 80, fontWeight: 800, marginBottom: 30, lineHeight: 1.1 }}>
            Hi, I'm Amit.
          </div>
          <div style={{ color: '#E4E4E7', fontSize: 40, fontWeight: 500, lineHeight: 1.4, marginBottom: 40 }}>
            React Native Developer building production apps used by 240K+ users.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
             <div style={{ background: '#18181B', color: '#A1A1AA', padding: '12px 24px', borderRadius: '100px', fontSize: 24, border: '1px solid #27272A' }}>React Native</div>
             <div style={{ background: '#18181B', color: '#A1A1AA', padding: '12px 24px', borderRadius: '100px', fontSize: 24, border: '1px solid #27272A' }}>Next.js</div>
             <div style={{ background: '#18181B', color: '#A1A1AA', padding: '12px 24px', borderRadius: '100px', fontSize: 24, border: '1px solid #27272A' }}>Firebase</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', width: '320px', height: '320px', borderRadius: '160px', overflow: 'hidden', border: '4px solid #27272A' }}>
          <img 
            src={`${siteUrl}/assets/profile.png`}
            width="320"
            height="320"
            style={{ objectFit: 'cover' }}
            alt="Profile"
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
