// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDrizzleBulkSvg from '@ant-design/icons-svg/lib/asn/CloudDrizzleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDrizzleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDrizzleBulk: CloudDrizzleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDrizzleBulkSvg}></AntdIcon>;
};

CloudDrizzleBulk.displayName = 'CloudDrizzleBulk';
CloudDrizzleBulk.inheritAttrs = false;
export default CloudDrizzleBulk;