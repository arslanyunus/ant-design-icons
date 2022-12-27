// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareAddBoldSvg from '@ant-design/icons-svg/lib/asn/MusicSquareAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareAddBold: MusicSquareAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareAddBoldSvg}></AntdIcon>;
};

MusicSquareAddBold.displayName = 'MusicSquareAddBold';
MusicSquareAddBold.inheritAttrs = false;
export default MusicSquareAddBold;