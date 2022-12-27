// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFogOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudFogOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFogOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFogOutline: CloudFogOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFogOutlineSvg}></AntdIcon>;
};

CloudFogOutline.displayName = 'CloudFogOutline';
CloudFogOutline.inheritAttrs = false;
export default CloudFogOutline;