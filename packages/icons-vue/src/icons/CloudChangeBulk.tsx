// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudChangeBulkSvg from '@ant-design/icons-svg/lib/asn/CloudChangeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudChangeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudChangeBulk: CloudChangeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudChangeBulkSvg}></AntdIcon>;
};

CloudChangeBulk.displayName = 'CloudChangeBulk';
CloudChangeBulk.inheritAttrs = false;
export default CloudChangeBulk;