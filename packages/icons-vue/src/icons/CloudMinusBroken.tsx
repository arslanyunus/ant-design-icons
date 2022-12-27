// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudMinusBroken: CloudMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudMinusBrokenSvg}></AntdIcon>;
};

CloudMinusBroken.displayName = 'CloudMinusBroken';
CloudMinusBroken.inheritAttrs = false;
export default CloudMinusBroken;