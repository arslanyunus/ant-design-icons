// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicBoldSvg from '@ant-design/icons-svg/lib/asn/MusicBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicBold: MusicBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicBoldSvg}></AntdIcon>;
};

MusicBold.displayName = 'MusicBold';
MusicBold.inheritAttrs = false;
export default MusicBold;