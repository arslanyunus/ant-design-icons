// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalBrokenSvg from '@ant-design/icons-svg/lib/asn/MedalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalBroken: MedalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalBrokenSvg}></AntdIcon>;
};

MedalBroken.displayName = 'MedalBroken';
MedalBroken.inheritAttrs = false;
export default MedalBroken;