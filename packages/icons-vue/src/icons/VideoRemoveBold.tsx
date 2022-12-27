// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/VideoRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoRemoveBold: VideoRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoRemoveBoldSvg}></AntdIcon>;
};

VideoRemoveBold.displayName = 'VideoRemoveBold';
VideoRemoveBold.inheritAttrs = false;
export default VideoRemoveBold;