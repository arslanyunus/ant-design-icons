// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicSquareRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareRemoveTwoTone: MusicSquareRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareRemoveTwoToneSvg}></AntdIcon>;
};

MusicSquareRemoveTwoTone.displayName = 'MusicSquareRemoveTwoTone';
MusicSquareRemoveTwoTone.inheritAttrs = false;
export default MusicSquareRemoveTwoTone;