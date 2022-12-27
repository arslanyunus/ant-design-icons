// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCircleOutline: VideoCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCircleOutlineSvg}></AntdIcon>;
};

VideoCircleOutline.displayName = 'VideoCircleOutline';
VideoCircleOutline.inheritAttrs = false;
export default VideoCircleOutline;