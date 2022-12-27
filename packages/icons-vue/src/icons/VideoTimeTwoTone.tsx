// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTimeTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoTimeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTimeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTimeTwoTone: VideoTimeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTimeTwoToneSvg}></AntdIcon>;
};

VideoTimeTwoTone.displayName = 'VideoTimeTwoTone';
VideoTimeTwoTone.inheritAttrs = false;
export default VideoTimeTwoTone;