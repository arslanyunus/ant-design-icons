// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileProgrammingBrokenSvg from '@ant-design/icons-svg/lib/asn/MobileProgrammingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileProgrammingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileProgrammingBroken: MobileProgrammingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileProgrammingBrokenSvg}></AntdIcon>;
};

MobileProgrammingBroken.displayName = 'MobileProgrammingBroken';
MobileProgrammingBroken.inheritAttrs = false;
export default MobileProgrammingBroken;