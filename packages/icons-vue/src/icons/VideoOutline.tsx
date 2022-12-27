// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoOutline: VideoOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoOutlineSvg}></AntdIcon>;
};

VideoOutline.displayName = 'VideoOutline';
VideoOutline.inheritAttrs = false;
export default VideoOutline;