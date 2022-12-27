// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLightningOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudLightningOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLightningOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLightningOutline: CloudLightningOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLightningOutlineSvg}></AntdIcon>;
};

CloudLightningOutline.displayName = 'CloudLightningOutline';
CloudLightningOutline.inheritAttrs = false;
export default CloudLightningOutline;