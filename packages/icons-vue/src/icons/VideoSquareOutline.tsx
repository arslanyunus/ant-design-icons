// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSquareOutline: VideoSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSquareOutlineSvg}></AntdIcon>;
};

VideoSquareOutline.displayName = 'VideoSquareOutline';
VideoSquareOutline.inheritAttrs = false;
export default VideoSquareOutline;