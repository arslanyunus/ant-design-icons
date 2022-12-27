// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoVerticalOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoVerticalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoVerticalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoVerticalOutline: VideoVerticalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoVerticalOutlineSvg}></AntdIcon>;
};

VideoVerticalOutline.displayName = 'VideoVerticalOutline';
VideoVerticalOutline.inheritAttrs = false;
export default VideoVerticalOutline;