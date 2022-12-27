// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFogBulkSvg from '@ant-design/icons-svg/lib/asn/CloudFogBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFogBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFogBulk: CloudFogBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFogBulkSvg}></AntdIcon>;
};

CloudFogBulk.displayName = 'CloudFogBulk';
CloudFogBulk.inheritAttrs = false;
export default CloudFogBulk;