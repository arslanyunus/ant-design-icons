// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOctagonTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoOctagonTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOctagonTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOctagonTwoTone: VideoOctagonTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOctagonTwoToneSvg}></AntdIcon>;
};

VideoOctagonTwoTone.displayName = 'VideoOctagonTwoTone';
VideoOctagonTwoTone.inheritAttrs = false;
export default VideoOctagonTwoTone;