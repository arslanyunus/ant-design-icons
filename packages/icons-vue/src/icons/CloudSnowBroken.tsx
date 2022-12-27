// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSnowBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudSnowBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSnowBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSnowBroken: CloudSnowBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSnowBrokenSvg}></AntdIcon>;
};

CloudSnowBroken.displayName = 'CloudSnowBroken';
CloudSnowBroken.inheritAttrs = false;
export default CloudSnowBroken;