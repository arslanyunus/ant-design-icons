// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSquareTwoTone: VideoSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSquareTwoToneSvg}></AntdIcon>;
};

VideoSquareTwoTone.displayName = 'VideoSquareTwoTone';
VideoSquareTwoTone.inheritAttrs = false;
export default VideoSquareTwoTone;