// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusBulkSvg from '@ant-design/icons-svg/lib/asn/StatusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusBulk: StatusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusBulkSvg}></AntdIcon>;
};

StatusBulk.displayName = 'StatusBulk';
StatusBulk.inheritAttrs = false;
export default StatusBulk;