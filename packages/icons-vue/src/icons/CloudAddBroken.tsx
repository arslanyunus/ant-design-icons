// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudAddBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudAddBroken: CloudAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudAddBrokenSvg}></AntdIcon>;
};

CloudAddBroken.displayName = 'CloudAddBroken';
CloudAddBroken.inheritAttrs = false;
export default CloudAddBroken;