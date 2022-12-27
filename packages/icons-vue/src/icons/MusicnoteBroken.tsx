// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicnoteBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicnoteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicnoteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicnoteBroken: MusicnoteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicnoteBrokenSvg}></AntdIcon>;
};

MusicnoteBroken.displayName = 'MusicnoteBroken';
MusicnoteBroken.inheritAttrs = false;
export default MusicnoteBroken;