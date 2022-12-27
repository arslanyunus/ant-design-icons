// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSunnyBulkSvg from '@ant-design/icons-svg/lib/asn/CloudSunnyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSunnyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSunnyBulk: CloudSunnyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSunnyBulkSvg}></AntdIcon>;
};

CloudSunnyBulk.displayName = 'CloudSunnyBulk';
CloudSunnyBulk.inheritAttrs = false;
export default CloudSunnyBulk;