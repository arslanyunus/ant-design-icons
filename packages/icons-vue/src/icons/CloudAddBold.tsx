// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudAddBoldSvg from '@ant-design/icons-svg/lib/asn/CloudAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudAddBold: CloudAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudAddBoldSvg}></AntdIcon>;
};

CloudAddBold.displayName = 'CloudAddBold';
CloudAddBold.inheritAttrs = false;
export default CloudAddBold;