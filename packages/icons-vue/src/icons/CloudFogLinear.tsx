// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFogLinearSvg from '@ant-design/icons-svg/lib/asn/CloudFogLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFogLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFogLinear: CloudFogLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFogLinearSvg}></AntdIcon>;
};

CloudFogLinear.displayName = 'CloudFogLinear';
CloudFogLinear.inheritAttrs = false;
export default CloudFogLinear;