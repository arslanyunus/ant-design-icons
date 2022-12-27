// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareLinearSvg from '@ant-design/icons-svg/lib/asn/MusicSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareLinear: MusicSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareLinearSvg}></AntdIcon>;
};

MusicSquareLinear.displayName = 'MusicSquareLinear';
MusicSquareLinear.inheritAttrs = false;
export default MusicSquareLinear;