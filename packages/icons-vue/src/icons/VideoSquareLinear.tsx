// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSquareLinearSvg from '@ant-design/icons-svg/lib/asn/VideoSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSquareLinear: VideoSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSquareLinearSvg}></AntdIcon>;
};

VideoSquareLinear.displayName = 'VideoSquareLinear';
VideoSquareLinear.inheritAttrs = false;
export default VideoSquareLinear;