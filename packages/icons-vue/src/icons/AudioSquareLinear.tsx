// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioSquareLinearSvg from '@ant-design/icons-svg/lib/asn/AudioSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioSquareLinear: AudioSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioSquareLinearSvg}></AntdIcon>;
};

AudioSquareLinear.displayName = 'AudioSquareLinear';
AudioSquareLinear.inheritAttrs = false;
export default AudioSquareLinear;