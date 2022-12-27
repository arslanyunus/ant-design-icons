// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicSquareAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareAddTwoTone: MusicSquareAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareAddTwoToneSvg}></AntdIcon>;
};

MusicSquareAddTwoTone.displayName = 'MusicSquareAddTwoTone';
MusicSquareAddTwoTone.inheritAttrs = false;
export default MusicSquareAddTwoTone;