// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudBroken: CloudBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudBrokenSvg}></AntdIcon>;
};

CloudBroken.displayName = 'CloudBroken';
CloudBroken.inheritAttrs = false;
export default CloudBroken;