// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HouseBrokenSvg from '@ant-design/icons-svg/lib/asn/HouseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HouseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HouseBroken: HouseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HouseBrokenSvg}></AntdIcon>;
};

HouseBroken.displayName = 'HouseBroken';
HouseBroken.inheritAttrs = false;
export default HouseBroken;