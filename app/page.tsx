import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTNWn59VvF4H4sZ11pHLTBHc72icpiZfBhT1Ze5NzR2sQ/thor-1.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'NESTech',
  description: 'A frame telling the story of NESTech',
  openGraph: {
    title: 'NESTech',
    description: 'A frame telling the story of NESTech',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTNWn59VvF4H4sZ11pHLTBHc72icpiZfBhT1Ze5NzR2sQ/thor-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>NESTech</h1>
    </>
  );
}
