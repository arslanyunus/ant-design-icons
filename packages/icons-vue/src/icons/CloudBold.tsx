// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudBoldSvg from '@ant-design/icons-svg/lib/asn/CloudBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudBold: CloudBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudBoldSvg}></AntdIcon>;
};

CloudBold.displayName = 'CloudBold';
CloudBold.inheritAttrs = false;
export default CloudBold;