// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareSearchBoldSvg from '@ant-design/icons-svg/lib/asn/MusicSquareSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareSearchBold: MusicSquareSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareSearchBoldSvg}></AntdIcon>;
};

MusicSquareSearchBold.displayName = 'MusicSquareSearchBold';
MusicSquareSearchBold.inheritAttrs = false;
export default MusicSquareSearchBold;