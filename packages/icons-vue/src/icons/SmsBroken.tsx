// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsBrokenSvg from '@ant-design/icons-svg/lib/asn/SmsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsBroken: SmsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsBrokenSvg}></AntdIcon>;
};

SmsBroken.displayName = 'SmsBroken';
SmsBroken.inheritAttrs = false;
export default SmsBroken;