// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSnowBulkSvg from '@ant-design/icons-svg/lib/asn/CloudSnowBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSnowBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSnowBulk: CloudSnowBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSnowBulkSvg}></AntdIcon>;
};

CloudSnowBulk.displayName = 'CloudSnowBulk';
CloudSnowBulk.inheritAttrs = false;
export default CloudSnowBulk;