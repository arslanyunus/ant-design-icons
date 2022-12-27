// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOctagonOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoOctagonOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOctagonOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOctagonOutline: VideoOctagonOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOctagonOutlineSvg}></AntdIcon>;
};

VideoOctagonOutline.displayName = 'VideoOctagonOutline';
VideoOctagonOutline.inheritAttrs = false;
export default VideoOctagonOutline;