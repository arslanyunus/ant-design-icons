// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunBrokenSvg from '@ant-design/icons-svg/lib/asn/SunBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunBroken: SunBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunBrokenSvg}></AntdIcon>;
};

SunBroken.displayName = 'SunBroken';
SunBroken.inheritAttrs = false;
export default SunBroken;