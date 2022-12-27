// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallSlashBulkSvg from '@ant-design/icons-svg/lib/asn/CallSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallSlashBulk: CallSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallSlashBulkSvg}></AntdIcon>;
};

CallSlashBulk.displayName = 'CallSlashBulk';
CallSlashBulk.inheritAttrs = false;
export default CallSlashBulk;