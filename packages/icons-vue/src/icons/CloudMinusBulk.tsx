// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudMinusBulkSvg from '@ant-design/icons-svg/lib/asn/CloudMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudMinusBulk: CloudMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudMinusBulkSvg}></AntdIcon>;
};

CloudMinusBulk.displayName = 'CloudMinusBulk';
CloudMinusBulk.inheritAttrs = false;
export default CloudMinusBulk;