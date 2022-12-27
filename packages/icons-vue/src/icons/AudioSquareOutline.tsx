// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/AudioSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioSquareOutline: AudioSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioSquareOutlineSvg}></AntdIcon>;
};

AudioSquareOutline.displayName = 'AudioSquareOutline';
AudioSquareOutline.inheritAttrs = false;
export default AudioSquareOutline;