// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudPlusBoldSvg from '@ant-design/icons-svg/lib/asn/CloudPlusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudPlusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudPlusBold: CloudPlusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudPlusBoldSvg}></AntdIcon>;
};

CloudPlusBold.displayName = 'CloudPlusBold';
CloudPlusBold.inheritAttrs = false;
export default CloudPlusBold;