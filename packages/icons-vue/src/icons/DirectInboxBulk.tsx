// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectInboxBulkSvg from '@ant-design/icons-svg/lib/asn/DirectInboxBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectInboxBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectInboxBulk: DirectInboxBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectInboxBulkSvg}></AntdIcon>;
};

DirectInboxBulk.displayName = 'DirectInboxBulk';
DirectInboxBulk.inheritAttrs = false;
export default DirectInboxBulk;