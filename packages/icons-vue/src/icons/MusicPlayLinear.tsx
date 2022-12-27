// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlayLinearSvg from '@ant-design/icons-svg/lib/asn/MusicPlayLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlayLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlayLinear: MusicPlayLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlayLinearSvg}></AntdIcon>;
};

MusicPlayLinear.displayName = 'MusicPlayLinear';
MusicPlayLinear.inheritAttrs = false;
export default MusicPlayLinear;