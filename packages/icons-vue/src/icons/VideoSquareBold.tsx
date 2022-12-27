// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoSquareBoldSvg from '@ant-design/icons-svg/lib/asn/VideoSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoSquareBold: VideoSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoSquareBoldSvg}></AntdIcon>;
};

VideoSquareBold.displayName = 'VideoSquareBold';
VideoSquareBold.inheritAttrs = false;
export default VideoSquareBold;