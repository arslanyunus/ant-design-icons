// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFogBoldSvg from '@ant-design/icons-svg/lib/asn/CloudFogBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFogBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFogBold: CloudFogBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFogBoldSvg}></AntdIcon>;
};

CloudFogBold.displayName = 'CloudFogBold';
CloudFogBold.inheritAttrs = false;
export default CloudFogBold;