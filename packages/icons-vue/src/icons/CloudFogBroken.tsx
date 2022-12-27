// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFogBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudFogBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFogBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFogBroken: CloudFogBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFogBrokenSvg}></AntdIcon>;
};

CloudFogBroken.displayName = 'CloudFogBroken';
CloudFogBroken.inheritAttrs = false;
export default CloudFogBroken;