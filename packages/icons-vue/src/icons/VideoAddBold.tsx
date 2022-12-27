// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoAddBoldSvg from '@ant-design/icons-svg/lib/asn/VideoAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoAddBold: VideoAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddBoldSvg}></AntdIcon>;
};

VideoAddBold.displayName = 'VideoAddBold';
VideoAddBold.inheritAttrs = false;
export default VideoAddBold;