// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxNotifBulkSvg from '@ant-design/icons-svg/lib/asn/DirectboxNotifBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxNotifBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxNotifBulk: DirectboxNotifBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxNotifBulkSvg}></AntdIcon>;
};

DirectboxNotifBulk.displayName = 'DirectboxNotifBulk';
DirectboxNotifBulk.inheritAttrs = false;
export default DirectboxNotifBulk;