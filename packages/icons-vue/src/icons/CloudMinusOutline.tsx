// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudMinusOutline: CloudMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudMinusOutlineSvg}></AntdIcon>;
};

CloudMinusOutline.displayName = 'CloudMinusOutline';
CloudMinusOutline.inheritAttrs = false;
export default CloudMinusOutline;