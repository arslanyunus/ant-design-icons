// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicnoteTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicnoteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicnoteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicnoteTwoTone: MusicnoteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicnoteTwoToneSvg}></AntdIcon>;
};

MusicnoteTwoTone.displayName = 'MusicnoteTwoTone';
MusicnoteTwoTone.inheritAttrs = false;
export default MusicnoteTwoTone;