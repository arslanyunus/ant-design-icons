// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSlashLinearSvg from '@ant-design/icons-svg/lib/asn/VideoSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSlashLinear: VideoSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSlashLinearSvg}></AntdIcon>;
};

VideoSlashLinear.displayName = 'VideoSlashLinear';
VideoSlashLinear.inheritAttrs = false;
export default VideoSlashLinear;