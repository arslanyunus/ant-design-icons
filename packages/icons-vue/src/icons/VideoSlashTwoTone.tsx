// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSlashTwoTone: VideoSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSlashTwoToneSvg}></AntdIcon>;
};

VideoSlashTwoTone.displayName = 'VideoSlashTwoTone';
VideoSlashTwoTone.inheritAttrs = false;
export default VideoSlashTwoTone;