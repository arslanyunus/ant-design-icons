// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSnowBoldSvg from '@ant-design/icons-svg/lib/asn/CloudSnowBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSnowBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSnowBold: CloudSnowBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSnowBoldSvg}></AntdIcon>;
};

CloudSnowBold.displayName = 'CloudSnowBold';
CloudSnowBold.inheritAttrs = false;
export default CloudSnowBold;