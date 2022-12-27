// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOctagonBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoOctagonBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOctagonBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOctagonBroken: VideoOctagonBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOctagonBrokenSvg}></AntdIcon>;
};

VideoOctagonBroken.displayName = 'VideoOctagonBroken';
VideoOctagonBroken.inheritAttrs = false;
export default VideoOctagonBroken;