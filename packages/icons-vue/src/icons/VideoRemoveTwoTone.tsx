// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoRemoveTwoTone: VideoRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoRemoveTwoToneSvg}></AntdIcon>;
};

VideoRemoveTwoTone.displayName = 'VideoRemoveTwoTone';
VideoRemoveTwoTone.inheritAttrs = false;
export default VideoRemoveTwoTone;