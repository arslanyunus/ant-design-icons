// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicnoteBoldSvg from '@ant-design/icons-svg/lib/asn/MusicnoteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicnoteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicnoteBold: MusicnoteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicnoteBoldSvg}></AntdIcon>;
};

MusicnoteBold.displayName = 'MusicnoteBold';
MusicnoteBold.inheritAttrs = false;
export default MusicnoteBold;