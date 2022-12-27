// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudPlusOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudPlusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudPlusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudPlusOutline: CloudPlusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudPlusOutlineSvg}></AntdIcon>;
};

CloudPlusOutline.displayName = 'CloudPlusOutline';
CloudPlusOutline.inheritAttrs = false;
export default CloudPlusOutline;