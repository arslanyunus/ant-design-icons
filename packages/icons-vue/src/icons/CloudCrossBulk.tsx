// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudCrossBulkSvg from '@ant-design/icons-svg/lib/asn/CloudCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudCrossBulk: CloudCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudCrossBulkSvg}></AntdIcon>;
};

CloudCrossBulk.displayName = 'CloudCrossBulk';
CloudCrossBulk.inheritAttrs = false;
export default CloudCrossBulk;