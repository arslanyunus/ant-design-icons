// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoAddOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoAddOutline: VideoAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddOutlineSvg}></AntdIcon>;
};

VideoAddOutline.displayName = 'VideoAddOutline';
VideoAddOutline.inheritAttrs = false;
export default VideoAddOutline;