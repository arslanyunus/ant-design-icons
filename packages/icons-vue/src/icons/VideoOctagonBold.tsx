// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOctagonBoldSvg from '@ant-design/icons-svg/lib/asn/VideoOctagonBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOctagonBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOctagonBold: VideoOctagonBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOctagonBoldSvg}></AntdIcon>;
};

VideoOctagonBold.displayName = 'VideoOctagonBold';
VideoOctagonBold.inheritAttrs = false;
export default VideoOctagonBold;