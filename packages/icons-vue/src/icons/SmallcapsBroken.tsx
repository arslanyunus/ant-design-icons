// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmallcapsBrokenSvg from '@ant-design/icons-svg/lib/asn/SmallcapsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmallcapsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmallcapsBroken: SmallcapsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallcapsBrokenSvg}></AntdIcon>;
};

SmallcapsBroken.displayName = 'SmallcapsBroken';
SmallcapsBroken.inheritAttrs = false;
export default SmallcapsBroken;