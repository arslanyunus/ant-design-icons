// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudCrossBoldSvg from '@ant-design/icons-svg/lib/asn/CloudCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudCrossBold: CloudCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudCrossBoldSvg}></AntdIcon>;
};

CloudCrossBold.displayName = 'CloudCrossBold';
CloudCrossBold.inheritAttrs = false;
export default CloudCrossBold;