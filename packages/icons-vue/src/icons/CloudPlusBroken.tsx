// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudPlusBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudPlusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudPlusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudPlusBroken: CloudPlusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudPlusBrokenSvg}></AntdIcon>;
};

CloudPlusBroken.displayName = 'CloudPlusBroken';
CloudPlusBroken.inheritAttrs = false;
export default CloudPlusBroken;