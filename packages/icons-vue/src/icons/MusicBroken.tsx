// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicBroken: MusicBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicBrokenSvg}></AntdIcon>;
};

MusicBroken.displayName = 'MusicBroken';
MusicBroken.inheritAttrs = false;
export default MusicBroken;