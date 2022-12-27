// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoPlayOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoPlayOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoPlayOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoPlayOutline: VideoPlayOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoPlayOutlineSvg}></AntdIcon>;
};

VideoPlayOutline.displayName = 'VideoPlayOutline';
VideoPlayOutline.inheritAttrs = false;
export default VideoPlayOutline;