// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudCrossBroken: CloudCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudCrossBrokenSvg}></AntdIcon>;
};

CloudCrossBroken.displayName = 'CloudCrossBroken';
CloudCrossBroken.inheritAttrs = false;
export default CloudCrossBroken;