// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/MusicSquareRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareRemoveBold: MusicSquareRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareRemoveBoldSvg}></AntdIcon>;
};

MusicSquareRemoveBold.displayName = 'MusicSquareRemoveBold';
MusicSquareRemoveBold.inheritAttrs = false;
export default MusicSquareRemoveBold;