// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudRemoveOutline: CloudRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudRemoveOutlineSvg}></AntdIcon>;
};

CloudRemoveOutline.displayName = 'CloudRemoveOutline';
CloudRemoveOutline.inheritAttrs = false;
export default CloudRemoveOutline;