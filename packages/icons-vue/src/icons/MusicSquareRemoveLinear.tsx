// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/MusicSquareRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareRemoveLinear: MusicSquareRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareRemoveLinearSvg}></AntdIcon>;
};

MusicSquareRemoveLinear.displayName = 'MusicSquareRemoveLinear';
MusicSquareRemoveLinear.inheritAttrs = false;
export default MusicSquareRemoveLinear;