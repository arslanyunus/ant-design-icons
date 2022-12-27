// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusUpBulkSvg from '@ant-design/icons-svg/lib/asn/StatusUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusUpBulk: StatusUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusUpBulkSvg}></AntdIcon>;
};

StatusUpBulk.displayName = 'StatusUpBulk';
StatusUpBulk.inheritAttrs = false;
export default StatusUpBulk;