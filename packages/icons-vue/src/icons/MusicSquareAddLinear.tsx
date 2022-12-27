// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareAddLinearSvg from '@ant-design/icons-svg/lib/asn/MusicSquareAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareAddLinear: MusicSquareAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareAddLinearSvg}></AntdIcon>;
};

MusicSquareAddLinear.displayName = 'MusicSquareAddLinear';
MusicSquareAddLinear.inheritAttrs = false;
export default MusicSquareAddLinear;