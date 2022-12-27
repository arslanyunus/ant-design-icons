// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/VideoRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoRemoveLinear: VideoRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoRemoveLinearSvg}></AntdIcon>;
};

VideoRemoveLinear.displayName = 'VideoRemoveLinear';
VideoRemoveLinear.inheritAttrs = false;
export default VideoRemoveLinear;