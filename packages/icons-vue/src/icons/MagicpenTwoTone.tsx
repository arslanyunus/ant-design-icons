// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/MagicpenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicpenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicpenTwoTone: MagicpenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicpenTwoToneSvg}></AntdIcon>;
};

MagicpenTwoTone.displayName = 'MagicpenTwoTone';
MagicpenTwoTone.inheritAttrs = false;
export default MagicpenTwoTone;