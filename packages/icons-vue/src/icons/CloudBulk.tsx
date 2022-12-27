// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudBulkSvg from '@ant-design/icons-svg/lib/asn/CloudBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudBulk: CloudBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudBulkSvg}></AntdIcon>;
};

CloudBulk.displayName = 'CloudBulk';
CloudBulk.inheritAttrs = false;
export default CloudBulk;