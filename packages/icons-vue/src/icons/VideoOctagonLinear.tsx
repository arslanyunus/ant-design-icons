// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOctagonLinearSvg from '@ant-design/icons-svg/lib/asn/VideoOctagonLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOctagonLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOctagonLinear: VideoOctagonLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOctagonLinearSvg}></AntdIcon>;
};

VideoOctagonLinear.displayName = 'VideoOctagonLinear';
VideoOctagonLinear.inheritAttrs = false;
export default VideoOctagonLinear;