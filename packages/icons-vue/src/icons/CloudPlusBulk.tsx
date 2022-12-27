// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudPlusBulkSvg from '@ant-design/icons-svg/lib/asn/CloudPlusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudPlusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudPlusBulk: CloudPlusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudPlusBulkSvg}></AntdIcon>;
};

CloudPlusBulk.displayName = 'CloudPlusBulk';
CloudPlusBulk.inheritAttrs = false;
export default CloudPlusBulk;