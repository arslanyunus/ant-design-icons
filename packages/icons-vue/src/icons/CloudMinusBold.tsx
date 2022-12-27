// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudMinusBoldSvg from '@ant-design/icons-svg/lib/asn/CloudMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudMinusBold: CloudMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudMinusBoldSvg}></AntdIcon>;
};

CloudMinusBold.displayName = 'CloudMinusBold';
CloudMinusBold.inheritAttrs = false;
export default CloudMinusBold;