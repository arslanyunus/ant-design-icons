// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DangerBulkSvg from '@ant-design/icons-svg/lib/asn/DangerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DangerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DangerBulk: DangerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DangerBulkSvg}></AntdIcon>;
};

DangerBulk.displayName = 'DangerBulk';
DangerBulk.inheritAttrs = false;
export default DangerBulk;