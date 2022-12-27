// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareSearchLinearSvg from '@ant-design/icons-svg/lib/asn/MusicSquareSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareSearchLinear: MusicSquareSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareSearchLinearSvg}></AntdIcon>;
};

MusicSquareSearchLinear.displayName = 'MusicSquareSearchLinear';
MusicSquareSearchLinear.inheritAttrs = false;
export default MusicSquareSearchLinear;