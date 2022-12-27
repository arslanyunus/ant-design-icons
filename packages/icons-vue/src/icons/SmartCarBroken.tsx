// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartCarBrokenSvg from '@ant-design/icons-svg/lib/asn/SmartCarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartCarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartCarBroken: SmartCarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartCarBrokenSvg}></AntdIcon>;
};

SmartCarBroken.displayName = 'SmartCarBroken';
SmartCarBroken.inheritAttrs = false;
export default SmartCarBroken;