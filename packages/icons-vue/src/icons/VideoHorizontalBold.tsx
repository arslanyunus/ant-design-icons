// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoHorizontalBoldSvg from '@ant-design/icons-svg/lib/asn/VideoHorizontalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoHorizontalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoHorizontalBold: VideoHorizontalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoHorizontalBoldSvg}></AntdIcon>;
};

VideoHorizontalBold.displayName = 'VideoHorizontalBold';
VideoHorizontalBold.inheritAttrs = false;
export default VideoHorizontalBold;